import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { fontVariables } from '../fonts';
import '../globals.css';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prairiesfodder.ae';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: '%s · Prairies Fodder Trading',
    },
    description: t('description'),
    applicationName: 'Prairies Fodder Trading',
    keywords: [
      'fodder',
      'animal feed',
      'hay',
      'alfalfa',
      'Rhodes grass',
      'Timothy hay',
      'Dubai',
      'UAE',
      'GCC',
      'horses',
      'livestock',
      'camels',
      'poultry',
      'سهول',
      'أعلاف',
    ],
    alternates: {
      canonical: locale === routing.defaultLocale ? '/' : `/${locale}`,
      languages: {
        en: '/',
        ar: '/ar',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Prairies Fodder Trading',
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      url:
        locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`,
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
      apple: '/icon.svg',
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={fontVariables}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
