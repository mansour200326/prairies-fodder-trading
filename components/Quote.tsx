import { useTranslations } from 'next-intl';
import { ContactIcons } from './icons';
import { Reveal } from './ui/Reveal';
import { QuoteForm } from './QuoteForm';

export function Quote() {
  const t = useTranslations('quote');
  const phoneDigits = t('contact.phone').replace(/[^+\d]/g, '');

  return (
    <section className="quote pad dark" id="contact">
      <div className="wrap quote-grid">
        <Reveal>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2>{t('title')}</h2>
          <p className="sub">{t('sub')}</p>

          <div className="contact-list">
            <a className="contact-item" href={`tel:${phoneDigits}`}>
              <span className="ic">
                <ContactIcons.phone />
              </span>
              <span>
                <b>{t('contact.phone')}</b>
                <small>{t('contact.phoneLabel')}</small>
              </span>
            </a>
            <a className="contact-item" href={`mailto:${t('contact.email')}`}>
              <span className="ic">
                <ContactIcons.email />
              </span>
              <span>
                <b>{t('contact.email')}</b>
                <small>{t('contact.emailLabel')}</small>
              </span>
            </a>
            <div className="contact-item">
              <span className="ic">
                <ContactIcons.location />
              </span>
              <span>
                <b>{t('contact.location')}</b>
                <small>{t('contact.locationLabel')}</small>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
