import { useTranslations } from 'next-intl';
import { products } from '@/lib/data';
import { ProductIcons } from './icons';
import { Reveal } from './ui/Reveal';

export function Products() {
  const t = useTranslations('products');

  return (
    <section className="products pad" id="products">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2>{t('title')}</h2>
          <p>{t('intro')}</p>
        </Reveal>

        <div className="prod-grid">
          {products.map((product, i) => {
            const Icon = ProductIcons[product.icon];
            const specLabels = t.raw(`items.${product.id}.specs`) as string[];

            return (
              <Reveal key={product.id} delay={(i % 3) * 0.08}>
                <article className="prod">
                  <div className="ic">
                    <Icon />
                  </div>
                  <h3>{product.name}</h3>
                  <div className="ar" lang="ar">
                    {product.arabicName}
                  </div>
                  <p>{t(`items.${product.id}.desc`)}</p>
                  <div className="specs">
                    {product.specValues.map((value, idx) => (
                      <div className="spec" key={idx}>
                        <b>{value}</b>
                        <span>{specLabels[idx]}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
