"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  id?: string;
};

/** Adds `is-in` once the element scrolls into view. CSS decides the animation. */
export default function Reveal({ as: Tag = "div", children, className = "", delay = 0, style, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} style={{ ...style, ["--d" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Wraps *word* in <em> (the italic accent word). */
function accent(line: string): ReactNode[] {
  return line.split(/\*(.+?)\*/g).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

/** Heading whose lines slide up from a mask, one after another. Mark the italic accent word with *asterisks*. */
export function SplitHeading({
  lines,
  as = "h2",
  className = "",
  id,
}: {
  lines: string[];
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  return (
    <Reveal as={as} className={`split ${className}`} id={id}>
      {lines.map((l, i) => (
        <span className="split-line" key={i}>
          <span className="split-inner" style={{ ["--i" as string]: i }}>
            {accent(l)}
          </span>
        </span>
      ))}
    </Reveal>
  );
}
