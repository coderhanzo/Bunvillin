import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* <div className="footer-ornament" aria-hidden="true">b</div> */}
      <div className="footer-grid">
        <address className="footer-column footer-address">
          <span><MapPin size={16} /> 1223 ST Labadi<br />Tse Addo</span>
        </address>

        <div className="footer-column footer-brand">
          <a className="brand" href="/#top">bunvillin</a>
          <a className="button button-primary" href="/#reserve">Book Now</a>
          <p><strong>WE'RE OPEN:</strong><br />Monday - Sunday<br />12 pm - 11:30 pm</p>
        </div>

        <address className="footer-column footer-contact">
          <a href="tel:+233550141224"><Phone size={16} /> +233 55 014 1224</a>
          <a href="mailto:hello@bunvillin.com"><Mail size={16} /> hello@bunvillin.com</a>
        </address>
      </div>
      <p className="footer-note">
        Flame-finished buns and seasonal plates. Private tables available.
      </p>
    </footer>
  );
}
