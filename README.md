# Prairies Fodder Trading — سهول

Production website for **Prairies Fodder Trading**, a Dubai-based premium
animal-fodder trading company. Lab-tested hay, grasses and feed — sourced
worldwide, delivered across the UAE and the wider GCC.

Built from the approved design demo (`design-reference/demo.html`) as a real,
maintainable codebase: bilingual (English / Arabic RTL), animated, accessible
and SEO-ready.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript** (strict)
- **Tailwind CSS** — design tokens ported into `tailwind.config.ts`; bespoke
  section styling in `app/globals.css`
- **Framer Motion** — scroll reveals, hero load sequence, count-up stats
  (all respecting `prefers-reduced-motion`)
- **next-intl** — `en` (LTR, default) and `ar` (RTL) locales, with all copy in
  `messages/{en,ar}.json`
- **next/font** — self-hosted Fraunces, Hanken Grotesk, IBM Plex Mono and
  IBM Plex Sans Arabic (no render-blocking font links)
- **Resend** — quote form delivery via a Route Handler (`app/api/quote`)

## Project structure

```
app/
  [locale]/
    layout.tsx        # <html lang dir>, fonts, per-locale metadata
    page.tsx          # assembles all sections
    not-found.tsx     # localized 404
    [...rest]/        # catch-all → localized 404
  api/quote/route.ts  # quote submission → Resend (graceful no-op without key)
  opengraph-image.tsx # generated branded OG card
  icon.svg            # favicon
  sitemap.ts, robots.ts
  globals.css         # design tokens + ported section styles
  fonts.ts            # next/font setup
components/           # one component per section + ui/ primitives + icons
lib/data.ts           # typed content data (products, journey, origins, …)
messages/             # en.json / ar.json
i18n/                 # next-intl routing + request config
design-reference/     # the approved demo (source of truth)
```

## Local development

```bash
npm install
cp .env.example .env.local   # optional — see below
npm run dev                  # http://localhost:3000  (Arabic at /ar)
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
npm run format   # Prettier
```

## Environment variables

All are optional for local development — the quote API logs submissions and
returns success when no key is present, so nothing breaks.

| Variable               | Purpose                                                            | Default                                   |
| ---------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| `RESEND_API_KEY`       | Resend API key. Without it, submissions are logged (dev-friendly). | _unset_                                   |
| `QUOTE_TO_EMAIL`       | Where quote requests are delivered.                                | `hello@prairiesfodder.ae`                 |
| `QUOTE_FROM_EMAIL`     | Verified Resend sender.                                            | `Prairies Fodder <onboarding@resend.dev>` |
| `NEXT_PUBLIC_SITE_URL` | Canonical/OG/sitemap base URL.                                     | `https://prairiesfodder.ae`               |

## Quote form / email

`POST /api/quote` validates `name` + `contact` server-side, then sends a
formatted email via Resend. To enable real delivery:

1. Create an API key at [resend.com](https://resend.com).
2. Verify your sending domain and set `QUOTE_FROM_EMAIL` to an address on it.
3. Set `RESEND_API_KEY` and `QUOTE_TO_EMAIL`.

## Internationalization

- Default locale `en` is served at `/`; Arabic at `/ar` (RTL).
- The header language toggle swaps locale while preserving the path.
- All strings live in `messages/en.json` and `messages/ar.json`, keyed by
  section. `<html lang>`/`dir` and the Arabic font are applied automatically.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repository (zero-config —
   Next.js is detected automatically).
3. Under **Settings → Environment Variables**, add:
   - `RESEND_API_KEY`
   - `QUOTE_TO_EMAIL`
   - `QUOTE_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (your production domain, e.g. `https://prairiesfodder.ae`)
4. **Deploy.** Add your custom domain under **Settings → Domains**.

## Accessibility & performance

- Semantic HTML, keyboard-navigable, visible focus rings, labelled form
  fields, `aria-label`s on icon buttons, AA contrast.
- Self-hosted fonts, optimized logo via `next/image`, lean client bundle,
  no layout shift.
- Every animation degrades to a static layout under
  `prefers-reduced-motion`.
