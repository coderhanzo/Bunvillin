import React, { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { ArrowLeft, Search, X } from "lucide-react";
import { MenuCategoryCard } from "../components/menu/MenuCategoryCard";
import { MenuSection } from "../components/menu/MenuSection";
import { MenuSectionNav } from "../components/menu/MenuSectionNav";
import { menus } from "../data/menuData";
import "../styles/menus.css";

const filterTags = ["Popular", "Spicy", "Vegetarian", "New", "Chef's Pick"];

function normalize(value) {
  return value.toLowerCase().trim();
}

export function MenusPage() {
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [navigationDirection, setNavigationDirection] = useState("initial");

  const activeMenu = menus.find((menu) => menu.id === activeMenuId);

  const visibleSections = useMemo(() => {
    if (!activeMenu) return [];

    const searchTerm = normalize(query);
    return activeMenu.sections.map((section) => {
      const items = section.items.filter((item) => {
        const tags = item.tags ?? [];
        const matchesQuery =
          !searchTerm ||
          normalize(`${item.name} ${item.description} ${tags.join(" ")}`).includes(searchTerm);
        const matchesTags =
          selectedTags.length === 0 || selectedTags.every((tag) => tags.includes(tag));

        return matchesQuery && matchesTags;
      });

      return { ...section, items };
    });
  }, [activeMenu, query, selectedTags]);

  const totalVisibleItems = visibleSections.reduce((count, section) => count + section.items.length, 0);

  const changeMenuView = (update) => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canUseViewTransition =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !prefersReducedMotion;

    if (canUseViewTransition) {
      document.startViewTransition(() => {
        flushSync(update);
      });
    } else {
      update();
    }

    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
  };

  const selectMenu = (menuId) => {
    const menu = menus.find((entry) => entry.id === menuId);

    changeMenuView(() => {
      setNavigationDirection("open");
      setActiveMenuId(menuId);
      setActiveSectionId(menu?.sections[0]?.id ?? null);
      setQuery("");
      setSelectedTags([]);
    });
  };

  const clearMenu = () => {
    changeMenuView(() => {
      setNavigationDirection("back");
      setActiveMenuId(null);
      setActiveSectionId(null);
      setQuery("");
      setSelectedTags([]);
    });
  };

  const toggleTag = (tag) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((value) => value !== tag) : [...current, tag],
    );
  };

  const scrollToSection = (sectionId) => {
    setActiveSectionId(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!activeMenu) {
    return (
      <section className={`menus-page menus-page-categories is-${navigationDirection}`}>
        <div className="menus-hero">
          <p className="section-kicker">Menu library</p>
          <h1>Choose Your Menu</h1>
          <p>
            Browse food, drinks, desserts, specials, and complete combos with
            clear photos and simple sections.
          </p>
        </div>

        <div className="menu-category-grid">
          {menus.map((menu) => (
            <MenuCategoryCard menu={menu} onSelect={selectMenu} key={menu.id} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`menus-page menu-browser is-${navigationDirection}`}>
      <div className="menu-browser-top">
        <button className="menu-browser-back" type="button" onClick={clearMenu}>
          <ArrowLeft size={18} aria-hidden="true" />
          All Menus
        </button>

        <div className="menu-browser-heading">
          <p className="section-kicker">Bunvillin menu</p>
          <h1>{activeMenu.title}</h1>
          <p>{activeMenu.description}</p>
        </div>
      </div>

      <div className="menu-browser-tools" aria-label="Menu search and filters">
        <label className="menu-search">
          <span>Search menu items</span>
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by dish, ingredient, or tag"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={17} aria-hidden="true" />
            </button>
          )}
        </label>

        <div className="menu-filter-chips" aria-label="Filter by tag">
          {filterTags.map((tag) => (
            <button
              className={selectedTags.includes(tag) ? "is-active" : ""}
              type="button"
              key={tag}
              onClick={() => toggleTag(tag)}
              aria-pressed={selectedTags.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <MenuSectionNav
        sections={activeMenu.sections}
        activeSectionId={activeSectionId ?? activeMenu.sections[0]?.id}
        onSectionClick={scrollToSection}
      />

      {totalVisibleItems > 0 ? (
        <div className="menu-browser-content">
          {visibleSections.map((section) => (
            <MenuSection section={section} items={section.items} key={section.id} />
          ))}
        </div>
      ) : (
        <div className="menu-empty-state" role="status">
          <h2>No dishes found</h2>
          <p>Try a different search term or remove one of the selected filters.</p>
          <button
            className="button button-primary"
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedTags([]);
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}
