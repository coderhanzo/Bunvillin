import React from "react";
import { Phone } from "lucide-react";
import { image } from "../data";

export function ReservationBooking() {
  return (
    <section className="reservation-section" id="reserve">
      <div className="reservation-layout" data-reveal>
        <form className="booking-form">
          <div className="form-heading">
            <p className="section-kicker">Your details</p>
            <h2>Reserve A Table</h2>
          </div>
          <label>
            Name*
            <input type="text" name="name" placeholder="John" />
          </label>
          <label>
            Email Address*
            <input type="email" name="email" placeholder="email@gmail.com" />
          </label>
          <label className="wide-field">
            Mobile Number*
            <input type="tel" name="phone" placeholder="(00) 88923456789" />
          </label>
          <label>
            Date
            <input type="text" name="date" placeholder="DD - MM - YYYY" />
          </label>
          <label>
            Time*
            <select name="time" defaultValue="">
              <option value="" disabled>Select time</option>
              <option>17:00</option>
              <option>18:30</option>
              <option>20:00</option>
              <option>21:30</option>
            </select>
          </label>
          <label className="wide-field">
            Number of Person*
            <select name="guests" defaultValue="">
              <option value="" disabled>Select</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((guest) => (
                <option key={guest} value={guest}>{guest}</option>
              ))}
            </select>
          </label>
          <button className="button button-primary" type="submit">
            Make A Reservation
          </button>
        </form>
        <aside className="reservation-photo">
          <img src={image("photo-1528605248644-14dd04022da1", 1000, 1100)} alt="Guests sharing plates at a restaurant table" />
        </aside>
      </div>
    </section>
  );
}
