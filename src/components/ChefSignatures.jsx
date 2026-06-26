import React from "react";
import { chefSignatures } from "../data";

export function ChefSignatures() {
  return (
    <section className="signatures-section" id="signatures">
      <div className="section-heading centered narrow" data-reveal>
        <p className="script">Discover</p>
        <h2>Chef Signature Dishes</h2>
        <p>
          Plates that carry the bunvillin point of view: flame, softness,
          bright garnish, and a finish that keeps the table talking.
        </p>
      </div>
      <div className="signature-grid" data-reveal>
        {chefSignatures.map((dish) => (
          <article className="signature-card" key={dish.name}>
            <img src={dish.img} alt={dish.name} />
            <div>
              <p className="script">{dish.tag}</p>
              <h3>{dish.name}</h3>
              <p>{dish.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
