"use client";

/* ═══════════════════════════════════════════════════════════════════
   MotorCut V4 — Homepage Hero (BESPOKE)
   ───────────────────────────────────────────────────────────────────
   Reference moves stolen from:
     - Stripe pricing hero (asymmetric copy / product split)
     - Linear feature pages (massive italic accent in headline)
     - Vercel homepage (floating UI cards over imagery)
     - Rivian (real product photography as canvas)
     - Arc browser (mixed-weight typography with character)

   Composition:
     LEFT 55%  — eyebrow + display H1 (sans + Newsreader italic) +
                 lede + buttons + trust row
     RIGHT 45% — scissors-K mark (large, low-opacity, slow rotate) +
                 hero car image (real, fading into atmosphere) +
                 two floating UI cards (frosted glass, brand-bloomed)
     BOTTOM    — full-bleed dark stat band, four stats with count-up

   Motion:
     Entrance — staggered fade-up choreography
     Continuous — floating cards bob, scissors-K rotate, pulse dot
     Scroll — parallax on car image
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "350+", label: "Active dealerships" },
  { value: "2.4M", label: "Photos processed" },
  { value: "98%", label: "Customer retention" },
  { value: "12s", label: "Avg. processing" },
];

const TRUST_LOGOS = [
  "Kirkham", "RRG", "Yeovil Audi", "CSH Performance", "Beechwood", "Chestnut",
];

export function HomepageHero() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax on hero imagery — moves up slower than page scroll
  const carParallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scissorsRotation = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={heroRef} className="hp-hero">
      {/* ─── Atmosphere layers ───────────────────────────────────── */}
      <div className="hp-hero__atmosphere" aria-hidden="true">
        <div className="hp-hero__mesh" />
        <div className="hp-hero__grid" />
      </div>

      <div className="hp-hero__inner">
        {/* ─── LEFT: Copy column ────────────────────────────────── */}
        <div className="hp-hero__copy">
          <motion.div
            className="hp-hero__chip"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hp-hero__chip-dot" aria-hidden="true" />
            <span>March 2026 · V4 launching now</span>
          </motion.div>

          <h1 className="hp-hero__headline">
            <motion.span
              className="hp-hero__headline-line"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Every vehicle,
            </motion.span>
            <motion.span
              className="hp-hero__headline-line"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hp-hero__italic">showroom-ready</span>
            </motion.span>
            <motion.span
              className="hp-hero__headline-line"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              in seconds.
            </motion.span>
          </h1>

          <motion.p
            className="hp-hero__lede"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
          >
            Photo editing software built for automotive dealerships.
            Background replacement, plate covers, showroom backgrounds —
            used by <strong>350+ dealers</strong> across the UK and Europe.
          </motion.p>

          <motion.div
            className="hp-hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button asChild size="lg" className="hp-hero__cta-primary">
              <Link href="https://app.motorcut.com/signup">
                Start Free Trial
                <ArrowRight className="hp-hero__cta-arrow" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </motion.div>

          <motion.div
            className="hp-hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hp-hero__trust-label">
              <span className="hp-hero__pulse-dot" aria-hidden="true" />
              Currently processing photos for
            </span>
            <div className="hp-hero__trust-logos">
              {TRUST_LOGOS.map((name, i) => (
                <motion.span
                  key={name}
                  className="hp-hero__trust-logo"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.92 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT: Visual column ─────────────────────────────── */}
        <div className="hp-hero__visual">
          {/* Scissors-K mark, used as a graphic device — slow rotate + scroll-bound */}
          <motion.div
            className="hp-hero__scissors"
            aria-hidden="true"
            style={{ rotate: scissorsRotation }}
          >
            <motion.div
              className="hp-hero__scissors-spin"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, ease: "linear", repeat: Infinity }}
            >
              <Image
                src="/logos/motorcut-icon-square.png"
                alt=""
                width={680}
                height={680}
                priority
                className="hp-hero__scissors-img"
              />
            </motion.div>
          </motion.div>

          {/* Hero car image — full-bleed bottom, parallax */}
          <motion.div
            className="hp-hero__car"
            style={{ y: carParallaxY }}
            initial={{ opacity: 0, scale: 1.04, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hp-hero__car-glow" aria-hidden="true" />
            <Image
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=80"
              alt="Audi A6 Saloon — showroom-ready after MotorCut processing"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              priority
              className="hp-hero__car-img"
            />
          </motion.div>

          {/* Floating UI cards */}
          <motion.div
            className="hp-hero__float hp-hero__float--top"
            initial={{ opacity: 0, x: -16, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [-3, 4, -3] }}
              transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
              className="hp-hero__float-inner"
            >
              <span className="hp-hero__float-eyebrow">Avg. processing</span>
              <span className="hp-hero__float-value">12<span className="hp-hero__float-unit">s</span></span>
              <span className="hp-hero__float-meta">Per car · full pipeline</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hp-hero__float hp-hero__float--bottom"
            initial={{ opacity: 0, x: 16, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [4, -3, 4] }}
              transition={{ duration: 5.6, ease: "easeInOut", repeat: Infinity }}
              className="hp-hero__float-inner"
            >
              <span className="hp-hero__float-eyebrow">
                <span className="hp-hero__pulse-dot" aria-hidden="true" />
                Live
              </span>
              <span className="hp-hero__float-value-sm">247 cars</span>
              <span className="hp-hero__float-meta">Processing right now</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── BOTTOM: Stat band ──────────────────────────────────── */}
      <motion.div
        className="hp-hero__stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hp-hero__stats-inner">
          {STATS.map((stat) => (
            <div key={stat.label} className="hp-hero__stat">
              <span className="hp-hero__stat-value">{stat.value}</span>
              <span className="hp-hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
