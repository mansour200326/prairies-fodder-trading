import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 18,
        padding: '120px 24px',
      }}
    >
      <span className="eyebrow">404</span>
      <h1 style={{ fontSize: '2.4rem', color: 'var(--green-900)' }}>
        Page not found
      </h1>
      <p style={{ color: 'var(--muted)', maxWidth: 420 }}>
        The page you’re looking for has moved or never existed.
      </p>
      <Link href="/" className="btn btn-gold" style={{ marginTop: 8 }}>
        Back home <span className="arrow">→</span>
      </Link>
    </main>
  );
}
