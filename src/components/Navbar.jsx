import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="bunvillin home">bunvillin</a>
      <nav className={open ? "nav is-open" : "nav"} aria-label="Primary navigation">
        {/* <a href="/#top" onClick={close}>Home</a> */}
        <a href="/#menu" onClick={close}>Menu</a>
        <a href="/#events" onClick={close}>Events</a>
        <a href="/#reserve" onClick={close}>Book a Table</a>
      </nav>
      <button className="nav-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
