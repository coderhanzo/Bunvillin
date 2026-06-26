import React from "react";
import { ArrowRight } from "lucide-react";
import { image } from "../data";

export function HeroCta() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-copy" data-reveal>
          <p className="hero-mark">bunvillin</p>
          <a className="button button-primary" href="#reserve">
            Book Now <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="cta-section" id="story">
        <div className="cta-layout" data-reveal>
          <figure className="cta-photo">
            <img src={image("photo-1514933651103-005eec06c04b", 1200, 1400)} alt="A warmly lit dining room prepared for evening service" />
          </figure>
          <article className="cta-copy">
            <p className="section-kicker">Your special occasion destination</p>
            <h2>Settle in for fire-finished plates, soft buns, and a slower kind of evening.</h2>
            <p>
              Bunvillin brings a small-room restaurant mood to generous comfort food:
              charred edges, bright herbs, house sauces, and tables made for lingering.
            </p>
            <div className="ornament" aria-hidden="true" />
            <a className="button button-ghost" href="#reserve">
              Reserve Tonight <ArrowRight size={17} />
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
