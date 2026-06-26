import React from "react";
import { socialIcons } from "../data";

export function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social Bar">
      {socialIcons.map((icon) => (
        <a key={icon.name} href={icon.href} target="_blank" rel="noreferrer noopener" aria-label={icon.name}>
          <img src={icon.src} alt="" width="39" height="39" />
        </a>
      ))}
    </aside>
  );
}
