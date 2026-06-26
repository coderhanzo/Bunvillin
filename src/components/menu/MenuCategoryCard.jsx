import React from "react";
export function MenuCategoryCard({ menu, onSelect }) {
  return (
    <article className="menu-category-card">
      <button
        className="menu-category-button"
        type="button"
        onClick={() => onSelect(menu.id)}
        aria-label={`View ${menu.title}`}
      >
        <span
          className="menu-category-cover"
          style={{
            backgroundImage: `url("${menu.coverImage}")`,
            backgroundPosition: menu.coverPosition ?? "center",
          }}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
