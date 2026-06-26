import Image from 'next/image';
import { useTranslations } from 'next-intl';
import logo from '@/public/logo.png';

const exploreLinks = [
  { href: '#about', key: 'about' },
  { href: '#products', key: 'forage' },
  { href: '#journey', key: 'fieldToFeed' },
  { href: '#origins', key: 'sourcing' },
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tQuote = useTranslations('quote.contact');
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="foot-logo">
              <Image
                src={logo}
                alt="Prairies Fodder Trading"
                height={46}
                sizes="120px"
                style={{ height: 46, width: 'auto' }}
              />
            </span>
            <p>{t('tagline')}</p>
          </div>

          <div className="foot-cols">
            <div className="foot-col">
              <h4>{t('exploreHeading')}</h4>
              {exploreLinks.map((link) => (
                <a key={link.key} href={link.href}>
                  {tNav(link.key)}
                </a>
              ))}
            </div>
            <div className="foot-col">
              <h4>{t('contactHeading')}</h4>
              <a href="#contact">{tQuote('phone')}</a>
              <a href="#contact">{tQuote('email')}</a>
              <a href="#contact">{t('locationShort')}</a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {year} Prairies Fodder Trading · <span lang="ar">سهول</span>.{' '}
            {t('rights')}
          </span>
          <span>Prairies Fodder Trading</span>
        </div>
      </div>
    </footer>
  );
}
