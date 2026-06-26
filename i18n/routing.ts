import { defineRouting } from 'next-intl/routing';

/**
 * Pure routing definition only.
 *
 * IMPORTANT: this module is imported by `middleware.ts`, which runs on the Edge
 * runtime. It must NOT import `next-intl/navigation` (createNavigation) or any
 * server-only code — doing so pulls `next-intl/server` (node:async_hooks, etc.)
 * into the Edge bundle and crashes with `__dirname is not defined`.
 * Navigation helpers live in `./navigation.ts`.
 */
export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
