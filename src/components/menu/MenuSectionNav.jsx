import React from "react";

export function MenuSectionNav({ sections, activeSectionId, onSectionClick }) {
  return (
    <nav className="menu-section-nav" aria-label="Menu sections">
      <div className="menu-section-nav-scroll">
        {sections.map((section) => (
          <button
            className={section.id === activeSectionId ? "is-active" : ""}
            type="button"
            key={section.id}
            onClick={() => onSectionClick(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
