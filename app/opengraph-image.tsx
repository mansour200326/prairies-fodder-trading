import { ImageResponse } from 'next/og';

export const alt =
  'Prairies Fodder Trading — premium forage, delivered to the Gulf';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Single branded Open Graph card, shared across locales. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'linear-gradient(150deg, #0A1810 0%, #102A1C 45%, #163A29 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#E0C079',
            fontSize: 26,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 40, height: 2, background: '#E0C079' }} />
          Sourced worldwide · Delivered across the GCC
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: 92,
              color: '#FFFCF5',
              lineHeight: 1.02,
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            <span>Feed from the finest&nbsp;</span>
            <span style={{ color: '#E0C079' }}>plains.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: 'rgba(250,243,231,0.75)',
              maxWidth: 840,
            }}
          >
            Lab-tested premium hay, grasses and feed — precision-baled and
            delivered fresh to stables and farms across the UAE and GCC.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#F2E5C3',
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <span>Prairies Fodder Trading</span>
          <span style={{ color: '#CBA24E' }}>سهول · Dubai, UAE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
