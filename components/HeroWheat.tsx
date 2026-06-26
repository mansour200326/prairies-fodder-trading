/**
 * Procedurally-generated swaying wheat for the hero foreground.
 *
 * Stalks are generated with a deterministic seeded PRNG so the server-rendered
 * markup matches the client exactly (no hydration mismatch). The sway itself is
 * pure CSS (`.stalk`), which is disabled under `prefers-reduced-motion`.
 */

const STALK_COUNT = 26;
const BASE = 200;

/** Mulberry32 — tiny deterministic PRNG. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Stalk {
  x: number;
  stem: string;
  grains: { cx: number; cy: number; rot: number }[];
  duration: number;
  delay: number;
}

function buildStalks(): Stalk[] {
  const rand = mulberry32(20240607);
  const stalks: Stalk[] = [];

  for (let i = 0; i < STALK_COUNT; i++) {
    const x = 20 + i * (1400 / STALK_COUNT) + (rand() * 16 - 8);
    const h = 70 + rand() * 70;
    const duration = +(4 + rand() * 3).toFixed(2);
    const delay = +(rand() * -5).toFixed(2);

    const stem = `M${x} ${BASE} C${x - 3} ${BASE - h * 0.5} ${x + 3} ${
      BASE - h * 0.7
    } ${x} ${BASE - h}`;

    const grains: Stalk['grains'] = [];
    for (let k = 0; k < 5; k++) {
      const gy = BASE - h + 6 + k * 7;
      grains.push({ cx: x - 4, cy: gy, rot: -28 });
      grains.push({ cx: x + 4, cy: gy, rot: 28 });
    }

    stalks.push({ x, stem, grains, duration, delay });
  }

  return stalks;
}

const STALKS = buildStalks();

export function HeroWheat() {
  return (
    <svg
      className="hero-wheat"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="#0A1810">
        {STALKS.map((stalk, i) => (
          <g
            key={i}
            className="stalk"
            style={{
              transformOrigin: `${stalk.x}px ${BASE}px`,
              animationDuration: `${stalk.duration}s`,
              animationDelay: `${stalk.delay}s`,
            }}
          >
            <path
              d={stalk.stem}
              stroke="#0A1810"
              strokeWidth={2.2}
              fill="none"
            />
            {stalk.grains.map((g, k) => (
              <ellipse
                key={k}
                cx={g.cx}
                cy={g.cy}
                rx={2.4}
                ry={4.5}
                transform={`rotate(${g.rot} ${g.cx} ${g.cy})`}
              />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
