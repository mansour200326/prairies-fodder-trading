import { useTranslations } from 'next-intl';
import { stats } from '@/lib/data';
import { CountUp } from './ui/CountUp';

export function StatsBand() {
  const t = useTranslations('stats');

  return (
    <section className="stats-band" aria-label="Key figures">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.key}>
              <div className="num">
                <CountUp target={stat.target} />
                {stat.suffix && <span className="suffix">{stat.suffix}</span>}
              </div>
              <div className="lbl">{t(stat.key)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
