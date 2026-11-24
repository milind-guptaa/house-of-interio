type P = { size?: number; className?: string };

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowRight = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M4 12h15M14 6l6 6-6 6" /></svg>
);
export const ArrowLeft = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M20 12H5M10 6l-6 6 6 6" /></svg>
);
export const ArrowUpRight = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Phone = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const Mail = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>
);
export const Pin = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Instagram = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg>
);
export const WhatsApp = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1Z" />
    <path d="M9 8.5c0 3.5 2.6 6.5 6.4 6.5l.9-1.6-2-1-1 .9a4 4 0 0 1-2.4-2.4l.9-1-1-2Z" />
  </svg>
);
export const Menu = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M3 8h18M3 16h18" /></svg>
);
export const Close = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M5 5l14 14M19 5 5 19" /></svg>
);
export const Pause = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M9 6v12M15 6v12" /></svg>
);
export const Play = ({ size, className }: P) => (
  <svg {...base(size)} className={className}><path d="M8 5.5v13l10.5-6.5Z" /></svg>
);
