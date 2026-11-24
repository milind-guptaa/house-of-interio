"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/site";
import { Pause, Play } from "./Icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearTimeout(t);
  }, [i, paused]);

  const t = testimonials[i];

  return (
    <section className="section testimonials" aria-label="Client words">
      <div
        className="container testimonials__inner"
        ref={wrap}
        onFocus={() => setPaused(true)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="eyebrow eyebrow--light">Kind Words</p>
        <span className="testimonials__mark" aria-hidden="true">&ldquo;</span>
        <figure className="testimonials__fig" key={i} aria-live="polite">
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <span>{t.who}</span> · {t.where}
          </figcaption>
        </figure>

        <div className="testimonials__controls">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === i ? "is-active" : ""}`}
              aria-label={`Show testimonial ${idx + 1}`}
              aria-current={idx === i}
              onClick={() => setI(idx)}
            />
          ))}
          <button className="testimonials__pause" onClick={() => setPaused((p) => !p)} aria-label={paused ? "Resume rotation" : "Pause rotation"}>
            {paused ? <Play size={13} /> : <Pause size={13} />}
          </button>
        </div>
      </div>
    </section>
  );
}
