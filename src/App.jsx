import React, { useEffect } from "react";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
import { SocialRail } from "./components/SocialRail";

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export function App() {
  useReveal();

  const isMenuPage = window.location.pathname === "/menu";

  return (
    <>
      <Navbar />
      <SocialRail />
      <main id="top">
        {isMenuPage ? <MenuPage /> : <HomePage />}
      </main>
      <SiteFooter />
    </>
  );
}
