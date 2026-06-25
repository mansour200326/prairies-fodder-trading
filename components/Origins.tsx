import { useTranslations } from 'next-intl';
import { origins, originChips } from '@/lib/data';
import { Reveal } from './ui/Reveal';

export function Origins() {
  const t = useTranslations('origins');

  return (
    <section className="origins pad dark" id="origins">
      <div className="wrap org-grid">
        <Reveal>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 style={{ color: 'var(--ivory)', marginTop: 16 }}>{t('title')}</h2>
          <p style={{ color: 'var(--muted-d)', marginTop: 18 }}>{t('intro')}</p>
          <div className="org-list">
            {originChips.map((chip) => (
              <span className="org-chip" key={chip}>
                <i aria-hidden="true" />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="org-map" delay={0.1}>
          <svg viewBox="0 0 520 340" role="img" aria-label={t('mapLabel')}>
            {/* flowing routes */}
            {origins.map((o) => (
              <path
                key={`route-${o.name}`}
                className="route"
                d={o.route}
                style={{ animationDelay: `${o.delay}s` }}
              />
            ))}

            {/* origin nodes */}
            {origins.map((o) => (
              <g className="node" key={`node-${o.name}`}>
                <circle cx={o.cx} cy={o.cy} r={5} />
                <text x={o.tx} y={o.ty}>
                  {o.name === 'United States' ? 'USA' : o.name}
                </text>
              </g>
            ))}

            {/* Dubai hub */}
            <g className="hub">
              <circle className="pulse" cx={432} cy={190} r={9} />
              <circle cx={432} cy={190} r={8} />
              <text x={412} y={172}>
                DUBAI
              </text>
            </g>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
