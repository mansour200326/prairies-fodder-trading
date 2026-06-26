import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

// The message shape next-intl expects back from getRequestConfig.
type RequestMessages = Awaited<
  ReturnType<Parameters<typeof getRequestConfig>[0]>
>['messages'];

// Static import map — avoids a template-literal dynamic import, which would
// otherwise create a webpack "context module" over the messages directory.
const loaders = {
  en: () => import('../messages/en.json'),
  ar: () => import('../messages/ar.json'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = routing.locales.includes(requested as Locale)
    ? (requested as Locale)
    : routing.defaultLocale;

  // JSON imports infer literal types (incl. arrays) that don't structurally
  // match next-intl's recursive message type; cast through unknown.
  const messages = (await loaders[locale]())
    .default as unknown as RequestMessages;

  return { locale, messages };
});
