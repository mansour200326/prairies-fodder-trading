import { notFound } from 'next/navigation';

/** Catch-all that routes any unmatched path to the localized 404 page. */
export default function CatchAllPage() {
  notFound();
}
