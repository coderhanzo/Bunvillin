import React from "react";
import { ImageOff } from "lucide-react";

export function MenuItemCard({ item }) {
  const tags = item.tags?.filter(Boolean) ?? [];

  return (
    <article className="menu-item-card">
      <div className={item.image ? "menu-item-image" : "menu-item-image is-empty"}>
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" />
        ) : (
          <div aria-hidden="true">
            <ImageOff size={28} />
          </div>
        )}
      </div>

      <div className="menu-item-body">
        <div className="menu-item-title-row">
          <h3>{item.name}</h3>
          <strong>{item.price || "Price soon"}</strong>
        </div>
        <p>{item.description}</p>

        {tags.length > 0 && (
          <ul className="menu-item-tags" aria-label={`${item.name} tags`}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
