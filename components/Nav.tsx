"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Close, Instagram, Menu, Phone } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" aria-label="House of Interio home">
          <Image src="/brand/mark-light.png" alt="" width={745} height={395} className="nav__mark nav__mark--light" priority />
          <Image src="/brand/mark-color.png" alt="" width={745} height={395} className="nav__mark nav__mark--color" priority />
          <span className="nav__word">
            House of <em>Interio</em>
          </span>
        </a>

        <nav aria-label="Primary" className="nav__links">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href.slice(1) ? "is-active" : ""}>
              {n.label}
            </a>
          ))}
        </nav>

        <a href={site.phoneHref} className="nav__cta">
          <Phone size={15} /> <span>{site.phone}</span>
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ ["--i" as string]: i }}>
              <span className="mobile-menu__no">0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mobile-menu__insta">
            <Instagram size={18} /> {site.instagramHandle}
          </a>
        </div>
      </div>
    </header>
  );
}
