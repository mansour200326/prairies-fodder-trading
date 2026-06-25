import { useTranslations } from 'next-intl';
import { serveCategories } from '@/lib/data';
import { ServeIcons } from './icons';
import { Reveal } from './ui/Reveal';

export function Serve() {
  const t = useTranslations('serve');

  return (
    <section className="serve pad" id="serve">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2>{t('title')}</h2>
          <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {t('intro')}
          </p>
        </Reveal>

        <div className="serve-grid">
          {serveCategories.map((cat, i) => {
            const Icon = ServeIcons[cat.id];
            return (
              <Reveal key={cat.id} delay={i * 0.06}>
                <div className="cat">
                  <div className="ring">
                    <Icon />
                  </div>
                  <h3>{cat.name}</h3>
                  <span lang="ar">{cat.arabicName}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
