import React from "react";
import { MenuItemCard } from "./MenuItemCard";

export function MenuSection({ section, items }) {
  return (
    <section className="menu-browser-section" id={section.id} aria-labelledby={`${section.id}-heading`}>
      <div className="menu-browser-section-heading">
        <p>{section.description}</p>
        <h2 id={`${section.id}-heading`}>{section.title}</h2>
      </div>

      {items.length > 0 ? (
        <div className="menu-items-grid">
          {items.map((item) => (
            <MenuItemCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="menu-section-empty">No matching items in this section.</div>
      )}
    </section>
  );
}
