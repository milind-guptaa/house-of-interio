"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";
import { ArrowRight, Pause, Play } from "./Icons";

const DURATION = 6500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setPaused(true);
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % heroSlides.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused]);

  return (
    <section id="top" className={`hero ${ready ? "is-ready" : ""}`} aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        {heroSlides.map((s, idx) => (
          <div key={s.src} className={`hero__slide ${idx === i ? "is-active" : ""}`}>
            <Image src={s.src} alt="" fill priority={idx === 0} sizes="100vw" quality={88} />
          </div>
        ))}
        <div className="hero__veil" />
      </div>

      <div className="hero__content container">
        <p className="eyebrow hero__eyebrow">
          Interior Design Studio · Jaipur
        </p>

        <h1 className="hero__title">
          <span className="hero__line hero__line--1"><span>Heritage.</span></span>
          <span className="hero__line hero__line--2"><span><em>Harmony.</em></span></span>
          <span className="hero__line hero__line--3"><span>Home.</span></span>
        </h1>

        <div className="hero__aside">
          <p>
            House of Interio designs warm, soulful interiors that draw on Rajasthan&rsquo;s craft
            traditions and are made for the way you live today.
          </p>
          <a href="#contact" className="link-arrow link-arrow--light">
            Begin your project <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="hero__foot container">
        <div className="hero__counter" aria-hidden="true">
          <span>{String(i + 1).padStart(2, "0")}</span>
          <span className="hero__bar">
            <span key={`${i}-${paused}`} className={`hero__bar-fill ${paused ? "" : "is-running"}`} style={{ animationDuration: `${DURATION}ms` }} />
          </span>
          <span>{String(heroSlides.length).padStart(2, "0")}</span>
        </div>
        <button className="hero__pause" onClick={() => setPaused((p) => !p)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
        <a href="#intro" className="hero__scroll">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </a>
      </div>
    </section>
  );
}
