"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/site";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "./Icons";
import { SplitHeading } from "./Reveal";

export default function Portfolio() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touch = useRef<number | null>(null);
  const p = projects[i];
  const total = projects.length;

  const go = useCallback(
    (d: 1 | -1) => {
      setDir(d);
      setI((v) => (v + d + total) % total);
    },
    [total]
  );

  useEffect(() => {
    const el = document.getElementById("portfolio-stage");
    const onKey = (e: KeyboardEvent) => {
      if (!el?.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section id="portfolio" className="section portfolio" aria-label="Portfolio">
      <div className="container">
        <header className="section-head section-head--center">
          <p className="eyebrow">Portfolio</p>
          <SplitHeading lines={["Impressions that", "*Endure*"]} className="display-l" />
        </header>

        <div
          id="portfolio-stage"
          className="pf"
          tabIndex={-1}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touch.current === null) return;
            const dx = e.changedTouches[0].clientX - touch.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touch.current = null;
          }}
        >
          <div className="pf__main" key={`m-${i}`} data-dir={dir}>
            {p.video ? (
              <video
                src={p.video}
                poster={p.main.src}
                autoPlay
                muted
                loop
                playsInline
                aria-label={p.main.alt}
              />
            ) : (
              <Image src={p.main.src} alt={p.main.alt} fill sizes="(max-width: 900px) 100vw, 55vw" quality={90} />
            )}
          </div>

          <div className="pf__info" aria-live="polite">
            <div className="pf__meta">
              <span>{p.place}</span>
              <span className="pf__count">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <div className="pf__text" key={`t-${i}`}>
              <p className="pf__cat">{p.category}</p>
              <h3 className="pf__title">{p.title}</h3>
              <p className="pf__desc">{p.text}</p>
              {p.feature && (
                <a href={p.feature.href} target="_blank" rel="noopener noreferrer" className="pf__feature">
                  <span className="pf__feature-dot" aria-hidden="true" />
                  {p.feature.label}
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>

            <div className="pf__bottom">
              <figure className="pf__side" key={`s-${i}`}>
                <div className="pf__side-img">
                  <Image src={p.side.src} alt={p.side.alt} fill sizes="(max-width: 900px) 40vw, 18vw" />
                </div>
                <figcaption>{p.palette}</figcaption>
              </figure>

              <div className="pf__nav">
                <button onClick={() => go(-1)} aria-label="Previous project" className="circle-btn">
                  <ArrowLeft size={18} />
                </button>
                <button onClick={() => go(1)} aria-label="Next project" className="circle-btn">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pf__thumbs" role="tablist" aria-label="Choose a project">
          {projects.map((pr, idx) => (
            <button
              key={pr.title}
              role="tab"
              aria-selected={idx === i}
              className={`pf__thumb ${idx === i ? "is-active" : ""}`}
              onClick={() => {
                setDir(idx > i ? 1 : -1);
                setI(idx);
              }}
            >
              <span className="pf__thumb-no">{String(idx + 1).padStart(2, "0")}</span>
              <span className="pf__thumb-title">{pr.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
