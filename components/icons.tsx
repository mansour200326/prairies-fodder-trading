import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/* ---- Stroke icon wrapper (line icons) ---- */
function Stroke({ children, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---- Solid icon wrapper (filled animal glyphs) ---- */
function Solid({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

/* ---- Header / UI ---- */
export const GlobeIcon = (p: IconProps) => (
  <Stroke strokeWidth={2} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
  </Stroke>
);

export const MenuIcon = (p: IconProps) => (
  <Stroke strokeWidth={2} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Stroke>
);

export const CloseIcon = (p: IconProps) => (
  <Stroke strokeWidth={2} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Stroke>
);

export const CheckIcon = (p: IconProps) => (
  <Stroke strokeWidth={2.4} {...p}>
    <path d="M5 13l4 4L19 7" />
  </Stroke>
);

/* ---- Forage product icons ---- */
export const ProductIcons = {
  alfalfa: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M12 2C8 6 7 9 9 14M12 2c4 4 5 7 3 12M9 14c-1 3-1 5 1 7M15 14c1 3 1 5-1 7M9 21h6" />
    </Stroke>
  ),
  rhodes: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M5 22V8M9 22V6M13 22V9M17 22V5M3 22h18M5 8C5 5 6 3 7 3M13 9c0-3 1-5 2-5" />
    </Stroke>
  ),
  timothy: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M12 2v20M8 5c0 3 1 5 4 6M16 5c0 3-1 5-4 6M7 11c0 3 1 5 5 6M17 11c0 3-1 5-5 6" />
    </Stroke>
  ),
  oatBarley: (p: IconProps) => (
    <Stroke {...p}>
      <circle cx="12" cy="6" r="2.4" />
      <path d="M12 8.5V20M9 12l3-2 3 2M8 16l4-2.5 4 2.5M7 20l5-3 5 3" />
    </Stroke>
  ),
  strawBran: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M4 22c2-8 4-14 8-20M20 22c-2-8-4-14-8-20M8 10l8 0M7 15l10 0M6 20l12 0" />
    </Stroke>
  ),
  compound: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M3 9l9-5 9 5-9 5-9-5zM3 9v6l9 5 9-5V9M12 14v6" />
    </Stroke>
  ),
} as const;

/* ---- Journey step icons ---- */
export const JourneyIcons = {
  source: (p: IconProps) => (
    <Stroke strokeWidth={1.7} {...p}>
      <path d="M12 22c4-6 8-9 8-14a8 8 0 10-16 0c0 5 4 8 8 14zM7 8c2 0 4 1 5 3M17 8c-2 0-4 1-5 3" />
    </Stroke>
  ),
  test: (p: IconProps) => (
    <Stroke strokeWidth={1.7} {...p}>
      <path d="M9 2h6M10 2v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V2M7 15h10" />
    </Stroke>
  ),
  compress: (p: IconProps) => (
    <Stroke strokeWidth={1.7} {...p}>
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8zM3 8l9 5 9-5M12 13v8" />
    </Stroke>
  ),
  store: (p: IconProps) => (
    <Stroke strokeWidth={1.7} {...p}>
      <path d="M3 7h18v12H3zM3 7l3-4h12l3 4M9 12h6" />
    </Stroke>
  ),
  deliver: (p: IconProps) => (
    <Stroke strokeWidth={1.7} {...p}>
      <path d="M1 16V6h13v10M14 9h4l3 3v4h-7M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Stroke>
  ),
} as const;

/* ---- Trust strip icons ---- */
export const TrustIcons = {
  quality: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M12 2l8 4v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </Stroke>
  ),
  traceability: (p: IconProps) => (
    <Stroke {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4-4M11 8v6M8 11h6" />
    </Stroke>
  ),
  storage: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M3 7h18v12H3zM3 7l3-4h12l3 4M9 12h6" />
    </Stroke>
  ),
  logistics: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M1 16V6h13v10M14 9h4l3 3v4h-7M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Stroke>
  ),
} as const;

/* ---- Contact icons ---- */
export const ContactIcons = {
  phone: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.8 2z" />
    </Stroke>
  ),
  email: (p: IconProps) => (
    <Stroke {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Stroke>
  ),
  location: (p: IconProps) => (
    <Stroke {...p}>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </Stroke>
  ),
} as const;

/* ---- We Serve animal icons (filled glyphs) ---- */
export const ServeIcons = {
  horses: (p: IconProps) => (
    <Solid {...p}>
      <path d="M19 4c-1 1-2 1.4-3 1.4-1.6 1-2.6 2.4-3 4.2-1.2-.4-2.6 0-3.6 1L5 14c-.8.8-1 1.6-1 3v3h3l1-2 2 2h2l-1-3 3-3c1.2-1.2 1.6-2.6 1.4-4.2 1.4-.6 2.4-1.8 2.6-3.6L19 4z" />
    </Solid>
  ),
  livestock: (p: IconProps) => (
    <Solid {...p}>
      <path d="M4 8c-1 0-1.6-1-1.4-2 .8.2 1.4.8 1.6 1.6L4 8zm16 0l-.2-.4c.2-.8.8-1.4 1.6-1.6.2 1-.4 2-1.4 2zM6 7c0-1.6 2.4-3 6-3s6 1.4 6 3c0 1-.4 2-1 3 .6.8 1 1.8 1 3 0 3-2.6 5-6 5s-6-2-6-5c0-1.2.4-2.2 1-3-.6-1-1-2-1-3zm3 4a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
    </Solid>
  ),
  camels: (p: IconProps) => (
    <Solid {...p}>
      <path d="M4 18l1-7c-.6-.4-1-1-1-1.8 0-1.2 1-2.2 2.2-2.2.6 0 1 .2 1.4.4C8.4 4.8 9.6 4 11 4c1.8 0 3.2 1.2 3.8 3 .4 2 1.2 3.6 2.6 4.6 1 .8 1.6 1.6 1.6 2.8V18h-2v-3l-2-1-1 4h-2l.4-5c-1 .2-2 .2-3 0L9 18H7l.6-7H6l-.4 7H4z" />
    </Solid>
  ),
  poultry: (p: IconProps) => (
    <Solid {...p}>
      <path d="M9 3c1.2 0 2 .8 2.2 2 .8-.6 1.8-.6 2.6 0 .6.4.8 1.2.6 2 1 .2 1.6 1 1.6 2 0 .8-.4 1.4-1 1.8L17 13c1.2.4 2 1.4 2 2.8 0 .6-.2 1.2-.6 1.6L20 22h-3l-1.4-3c-.8.4-1.8.6-2.6.6-3 0-5-2-5.4-4.6L6 13c-1.2-.2-2-1.2-2-2.4 0-1 .6-1.8 1.4-2.2C5 7.6 5 6.6 5.6 6 6 5.4 6.8 5 7.6 5 7.4 3.8 8 3 9 3z" />
    </Solid>
  ),
  qualityFodder: (p: IconProps) => (
    <Solid {...p}>
      <path d="M12 2c-1 3-1 6 0 9 1-3 1-6 0-9zm-4 4c.6 3 2 5.4 4 7 2-1.6 3.4-4 4-7-2 1-3 3-4 5-1-2-2-4-4-5zM4 11c1.4 2.4 3.6 4 6 4.6V22h4v-6.4c2.4-.6 4.6-2.2 6-4.6-3 .4-5.4 1.8-7 4-1.6-2.2-4-3.6-7-4z" />
    </Solid>
  ),
} as const;
