'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { heroHills } from '@/lib/data';
import { HeroWheat } from './HeroWheat';

export function Hero() {
  const t = useTranslations('hero');
  const reduceMotion = useReducedMotion();
  const sunRef = useRef<HTMLDivElement>(null);

  // Light parallax on the sun, matching the demo.
  useEffect(() => {
    if (reduceMotion) return;
    const sun = sunRef.current;
    if (!sun) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 900) sun.style.transform = `translateY(${y * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduceMotion]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.15 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  return (
    <section className="hero" id="top">
      <div className="hero-sun" ref={sunRef} aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="wrap">
        <motion.div
          className="hero-inner"
          variants={container}
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
        >
          <motion.span className="eyebrow" variants={item}>
            {t('eyebrow')}
          </motion.span>
          <motion.h1 variants={item}>
            {t.rich('title', {
              br: () => <br />,
              accent: (chunks) => <span className="accent">{chunks}</span>,
            })}
          </motion.h1>
          <motion.p className="sub" variants={item}>
            {t('sub')}
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <a href="#contact" className="btn btn-gold btn-lg">
              {t('ctaPrimary')} <span className="arrow">→</span>
            </a>
            <a href="#products" className="btn btn-ghost btn-lg">
              {t('ctaSecondary')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <HeroWheat />

      <svg
        className="hero-hills"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {heroHills.map((hill, i) => (
          <path key={i} d={hill.d} fill={hill.fill} opacity={hill.opacity} />
        ))}
      </svg>

      <div className="scroll-cue" aria-hidden="true">
        <span>{t('scroll')}</span>
        <span className="line" />
      </div>
    </section>
  );
}
