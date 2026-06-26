/**
 * Typed content data for Prairies Fodder Trading.
 *
 * Translatable copy lives in `messages/{en,ar}.json`; this file holds the
 * structural, language-independent data (ids, icon keys, fixed spec values,
 * constant brand names) and the message keys that bind them together.
 */

import type {
  ProductIcons,
  JourneyIcons,
  TrustIcons,
  ServeIcons,
} from '@/components/icons';

type ProductIconKey = keyof typeof ProductIcons;
type JourneyIconKey = keyof typeof JourneyIcons;
type TrustIconKey = keyof typeof TrustIcons;
type ServeIconKey = keyof typeof ServeIcons;

/* ---- Stats band ---- */
export interface Stat {
  /** message key under `stats` */
  key: 'countries' | 'grades' | 'turnaround' | 'tested';
  target: number;
  suffix?: string;
}

export const stats: Stat[] = [
  { key: 'countries', target: 12, suffix: '+' },
  { key: 'grades', target: 6 },
  { key: 'turnaround', target: 24, suffix: 'h' },
  { key: 'tested', target: 100, suffix: '%' },
];

/* ---- Forage products ---- */
export interface Product {
  /** message key under `products.items` */
  id: 'alfalfa' | 'rhodes' | 'timothy' | 'oatBarley' | 'strawBran' | 'compound';
  /** constant English name (shown in both locales) */
  name: string;
  /** constant Arabic sub-label (shown in both locales) */
  arabicName: string;
  icon: ProductIconKey;
  /** fixed spec values, paired with translated labels by index */
  specValues: [string, string, string];
}

export const products: Product[] = [
  {
    id: 'alfalfa',
    name: 'Alfalfa / Lucerne',
    arabicName: 'برسيم / فصة',
    icon: 'alfalfa',
    specValues: ['18–22%', '<12%', '2×'],
  },
  {
    id: 'rhodes',
    name: 'Rhodes Grass',
    arabicName: 'حشيش رودس',
    icon: 'rhodes',
    specValues: ['8–12%', 'Low', 'Bulk'],
  },
  {
    id: 'timothy',
    name: 'Timothy Hay',
    arabicName: 'دريس تيموثي',
    icon: 'timothy',
    specValues: ['7–10%', 'High', 'Premium'],
  },
  {
    id: 'oatBarley',
    name: 'Oat & Barley',
    arabicName: 'شوفان وشعير',
    icon: 'oatBarley',
    specValues: ['9–13%', 'Energy', 'Hay+Grain'],
  },
  {
    id: 'strawBran',
    name: 'Wheat Straw & Bran',
    arabicName: 'تبن ونخالة',
    icon: 'strawBran',
    specValues: ['Value', 'Bedding', 'Bulk'],
  },
  {
    id: 'compound',
    name: 'Compound Feed',
    arabicName: 'أعلاف مركبة',
    icon: 'compound',
    specValues: ['Custom', 'Pellet', 'Bagged'],
  },
];

/* ---- Field to Feed journey ---- */
export interface JourneyStep {
  /** message key under `journey.steps` */
  id: 'source' | 'test' | 'compress' | 'store' | 'deliver';
  no: string;
  icon: JourneyIconKey;
}

export const journeySteps: JourneyStep[] = [
  { id: 'source', no: '01', icon: 'source' },
  { id: 'test', no: '02', icon: 'test' },
  { id: 'compress', no: '03', icon: 'compress' },
  { id: 'store', no: '04', icon: 'store' },
  { id: 'deliver', no: '05', icon: 'deliver' },
];

/* ---- We Serve categories (constant names, like products) ---- */
export interface ServeCategory {
  id: ServeIconKey;
  name: string;
  arabicName: string;
}

export const serveCategories: ServeCategory[] = [
  { id: 'horses', name: 'Horses', arabicName: 'الخيول' },
  { id: 'livestock', name: 'Livestock', arabicName: 'الماشية' },
  { id: 'camels', name: 'Camels', arabicName: 'الإبل' },
  { id: 'poultry', name: 'Poultry', arabicName: 'الدواجن' },
  { id: 'qualityFodder', name: 'Quality Fodder', arabicName: 'أعلاف فاخرة' },
];

/* ---- Trust strip ---- */
export interface TrustCard {
  /** message key under `trust.items` */
  id: 'quality' | 'traceability' | 'storage' | 'logistics';
  icon: TrustIconKey;
}

export const trustCards: TrustCard[] = [
  { id: 'quality', icon: 'quality' },
  { id: 'traceability', icon: 'traceability' },
  { id: 'storage', icon: 'storage' },
  { id: 'logistics', icon: 'logistics' },
];

/* ---- Global sourcing (constant origin names + map geometry) ---- */
export interface Origin {
  name: string;
  cx: number;
  cy: number;
  /** label coordinates */
  tx: number;
  ty: number;
  /** SVG path for its flowing route into the Dubai hub */
  route: string;
  /** route animation offset in seconds */
  delay: number;
}

export const origins: Origin[] = [
  {
    name: 'United States',
    cx: 70,
    cy: 70,
    tx: 58,
    ty: 58,
    route: 'M70,70 C220,40 360,110 430,180',
    delay: 0,
  },
  {
    name: 'Canada',
    cx: 150,
    cy: 40,
    tx: 138,
    ty: 30,
    route: 'M150,40 C280,60 380,120 430,182',
    delay: 1.6,
  },
  {
    name: 'Spain',
    cx: 40,
    cy: 110,
    tx: 30,
    ty: 128,
    route: 'M40,110 C190,90 350,140 430,184',
    delay: 2,
  },
  {
    name: 'France',
    cx: 60,
    cy: 150,
    tx: 48,
    ty: 170,
    route: 'M60,150 C200,150 340,150 430,185',
    delay: 0.4,
  },
  {
    name: 'Sudan',
    cx: 80,
    cy: 240,
    tx: 68,
    ty: 260,
    route: 'M80,240 C220,260 360,230 432,195',
    delay: 0.8,
  },
  {
    name: 'Australia',
    cx: 120,
    cy: 300,
    tx: 100,
    ty: 320,
    route: 'M120,300 C240,300 360,250 433,200',
    delay: 1.2,
  },
];

/** Origin chips, in the order the demo lists them. */
export const originChips = [
  'United States',
  'Spain',
  'Australia',
  'Canada',
  'Sudan',
  'France',
];

/** Hero parallax hill layers (back to front). */
export const heroHills = [
  {
    d: 'M0,170 C250,110 470,190 720,165 C980,138 1180,205 1440,155 L1440,280 L0,280 Z',
    fill: '#C9A86B',
    opacity: 0.35,
  },
  {
    d: 'M0,200 C300,160 560,222 860,195 C1120,170 1280,228 1440,200 L1440,280 L0,280 Z',
    fill: '#2C5E45',
    opacity: 1,
  },
  {
    d: 'M0,224 C320,206 620,244 960,220 C1180,205 1320,238 1440,226 L1440,280 L0,280 Z',
    fill: '#163A29',
    opacity: 1,
  },
  {
    d: 'M0,250 C360,238 700,262 1040,246 C1240,237 1360,256 1440,250 L1440,280 L0,280 Z',
    fill: '#0A1810',
    opacity: 1,
  },
];
