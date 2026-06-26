import {
  Fraunces,
  Hanken_Grotesk,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
} from 'next/font/google';

/** Display serif — headings & accents. */
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

/** Body / UI sans. */
export const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

/** Monospace — data, specs, eyebrows. */
export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

/** Arabic — applied automatically in RTL mode. */
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const fontVariables = [
  fraunces.variable,
  hanken.variable,
  plexMono.variable,
  plexArabic.variable,
].join(' ');
