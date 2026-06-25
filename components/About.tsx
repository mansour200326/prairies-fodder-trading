import { useTranslations } from 'next-intl';
import { Reveal } from './ui/Reveal';

export function About() {
  const t = useTranslations('about');

  return (
    <section className="about pad" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 style={{ marginTop: 16 }}>
            {t.rich('title', { br: () => <br /> })}
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>
            {t('lead')}
          </p>
          <p style={{ marginTop: 20 }}>{t('p1')}</p>
          <p>{t('p2')}</p>
        </Reveal>

        <Reveal className="about-side" delay={0.1}>
          <div className="pull">
            <div className="qmark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote>{t('quote')}</blockquote>
            <cite>{t('quoteCite')}</cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
