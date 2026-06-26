import React from "react";
import { ArrowRight } from "lucide-react";
import { events, image } from "../data";

export function EventsDiscovery() {
  return (
    <section className="events-section" id="events">
      <div className="event-layout" data-reveal>
        <img src={image("photo-1528605248644-14dd04022da1", 1100, 900)} alt="Guests dining together at a restaurant table" />
        <article className="light-panel">
          <p className="script">Discover</p>
          <h2>Upcoming Events</h2>
          <p>
            Long tables, rotating specials, and nights designed around the oven,
            the grill, and whatever the market brought in.
          </p>
          <div className="event-list">
            {events.map((event) => (
              <div key={event.title}>
                <h3>{event.title}</h3>
                <p>{event.meta}</p>
                <span>{event.copy}</span>
              </div>
            ))}
          </div>
          <a className="button button-primary panel-action" href="#reserve">
            Book For An Event <ArrowRight size={17} />
          </a>
        </article>
      </div>
    </section>
  );
}
