import React from "react";
import { ArrowRight } from "lucide-react";
import { frequentlyBoughtMenuItems, image } from "../data";

export function MenuSneakPeek() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-shell">
        <div className="menu-intro" data-reveal>
          <p className="section-kicker">Frequently bought</p>
          <h2>A Sneak Peek Of The Menu</h2>
          <p>
            The table favorites guests keep ordering: smoky buns, crisp greens,
            a honeyed finish, and one bright drink to pull it together.
          </p>
          <a className="button button-primary menu-action" href="/menu">
            Explore Menu <ArrowRight size={17} />
          </a>
        </div>

        <figure className="menu-feature" data-reveal>
          <img src={image("photo-1544025162-d76694265947", 1000, 1000)} alt="Roasted chicken and vegetables served on a blue plate" />
        </figure>

        <div className="dish-list" data-reveal>
          {frequentlyBoughtMenuItems.map((item) => (
            <article className="dish-row" key={item.name}>
              <img src={item.img} alt={item.name} />
              <div>
                <p>{item.type}</p>
                <h3>{item.name}</h3>
                <span>{item.copy}</span>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
