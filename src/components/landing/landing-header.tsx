"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon-sprite";

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`hdr${scrolled ? " scrolled" : ""}`} id="hdr">
      <div className="wrap hdr-in">
        <a href="#top" className="brand" aria-label="Savantia — accueil">
          <span className="brand-mark">
            <Icon id="i-spark" />
          </span>
          <span className="brand-name">Savantia</span>
        </a>
        <nav className="nav-desktop" aria-label="Navigation principale">
          <a href="#services">Services</a>
          <a href="#cas">Cas d&apos;usage</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="hdr-actions">
          <a href="#contact" className="btn btn-primary btn-sm hdr-cta">
            Demander un audit gratuit
          </a>
          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon id={menuOpen ? "i-x" : "i-menu"} />
          </button>
        </div>
      </div>
      {!menuOpen ? null : (
        <div className="mobile-menu" id="mobileMenu">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#cas" onClick={() => setMenuOpen(false)}>
            Cas d&apos;usage
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a
            href="#contact"
            className="btn btn-primary btn-block"
            onClick={() => setMenuOpen(false)}
          >
            Demander un audit gratuit
          </a>
        </div>
      )}
    </header>
  );
}
