import { useTranslations } from 'next-intl';
import { journeySteps } from '@/lib/data';
import { JourneyIcons } from './icons';
import { Reveal } from './ui/Reveal';

export function Journey() {
  const t = useTranslations('journey');

  return (
    <section className="journey pad dark" id="journey">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2>{t('title')}</h2>
          <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {t('intro')}
          </p>
        </Reveal>

        <div className="jrny-grid">
          {journeySteps.map((step, i) => {
            const Icon = JourneyIcons[step.icon];
            return (
              <Reveal key={step.id} delay={i * 0.08}>
                <div className="step">
                  <div className="dot">
                    <Icon />
                  </div>
                  <span className="no">{step.no}</span>
                  <h3>{t(`steps.${step.id}.title`)}</h3>
                  <p>{t(`steps.${step.id}.desc`)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
