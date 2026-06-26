import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Locale-aware navigation helpers (client + server components).
 *
 * Kept separate from `routing.ts` so the Edge middleware can import the routing
 * definition without pulling in the navigation/server graph.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
