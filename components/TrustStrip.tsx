import { useTranslations } from 'next-intl';
import { trustCards } from '@/lib/data';
import { TrustIcons } from './icons';
import { Reveal } from './ui/Reveal';

export function TrustStrip() {
  const t = useTranslations('trust');

  return (
    <section className="trust" aria-label="Why Prairies">
      <div className="wrap">
        <div className="trust-grid">
          {trustCards.map((card, i) => {
            const Icon = TrustIcons[card.icon];
            return (
              <Reveal key={card.id} delay={i * 0.08}>
                <div className="trust-card">
                  <div className="ic">
                    <Icon />
                  </div>
                  <h3>{t(`items.${card.id}.title`)}</h3>
                  <p>{t(`items.${card.id}.desc`)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
