'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { GlobeIcon, MenuIcon, CloseIcon } from './icons';
import logo from '@/public/logo.png';

const navItems = [
  { href: '#about', key: 'about' },
  { href: '#products', key: 'forage' },
  { href: '#journey', key: 'fieldToFeed' },
  { href: '#origins', key: 'sourcing' },
  { href: '#serve', key: 'weServe' },
  { href: '#contact', key: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLanguage = () => {
    const next = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: next });
  };

  return (
    <header
      className={['site-header', scrolled && 'scrolled']
        .filter(Boolean)
        .join(' ')}
    >
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label={t('home')}>
          <span className="logo-pill">
            <Image
              src={logo}
              alt="Prairies Fodder Trading"
              height={42}
              priority
              sizes="120px"
              style={{ height: 42, width: 'auto' }}
            />
          </span>
        </Link>

        <nav
          className={['nav-links', menuOpen && 'open']
            .filter(Boolean)
            .join(' ')}
          id="navlinks"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="lang"
            onClick={switchLanguage}
            aria-label={t('switchLanguage')}
            lang={locale === 'en' ? 'ar' : 'en'}
          >
            <GlobeIcon width={15} height={15} />
            <span>{t('langLabel')}</span>
          </button>
          <a href="#contact" className="btn btn-gold nav-cta">
            {t('requestQuote')}
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t('menu')}
            aria-expanded={menuOpen}
            aria-controls="navlinks"
          >
            {menuOpen ? (
              <CloseIcon width={26} height={26} />
            ) : (
              <MenuIcon width={26} height={26} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
