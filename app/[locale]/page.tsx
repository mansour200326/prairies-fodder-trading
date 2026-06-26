import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsBand } from '@/components/StatsBand';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Journey } from '@/components/Journey';
import { Origins } from '@/components/Origins';
import { Serve } from '@/components/Serve';
import { TrustStrip } from '@/components/TrustStrip';
import { Quote } from '@/components/Quote';
import { Footer } from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Products />
        <Journey />
        <Origins />
        <Serve />
        <TrustStrip />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
