import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes, Next.js internals, metadata routes and files (those with a dot)
  matcher: [
    '/((?!api|_next|_vercel|opengraph-image|sitemap.xml|robots.txt|icon.svg|.*\\..*).*)',
  ],
};
