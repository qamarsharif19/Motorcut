/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — LogoStrip
   ───────────────────────────────────────────────────────────────────
   "Trusted by 350+ dealerships" pattern. Title eyebrow + greyscale
   wordmark row that desaturates by default and lifts to brand-tinted
   colour on hover. Adapted from shadcnblockscom/logos3 + community
   greyscale-logos patterns.

   Variants:
     row     — single-row flex (homepage trusted-by, audience pages)
     grid    — 6-up grid (audience peer-strip, "join 350+" sections)

   Pass `logos` as { name, src, href? } objects. If no `src` is provided
   we fall back to a styled wordmark text — useful while logos are
   pending Ron's asset delivery.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoEntry = {
  name: string;
  /** Optional logo image. Falls back to wordmark text if omitted. */
  src?: string;
  /** Optional clickable link to a case study / external site. */
  href?: string;
};

export interface LogoStripProps {
  title?: string;
  logos: LogoEntry[];
  variant?: "row" | "grid";
  className?: string;
}

export function LogoStrip({
  title,
  logos,
  variant = "row",
  className,
}: LogoStripProps) {
  return (
    <div className={cn("mc-logo-strip", `mc-logo-strip--${variant}`, className)}>
      {title && <p className="mc-logo-strip__title">{title}</p>}
      <div className="mc-logo-strip__rail">
        {logos.map((logo, i) => {
          const inner = logo.src ? (
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={32}
              className="mc-logo-strip__logo"
            />
          ) : (
            <span className="mc-logo-strip__wordmark">{logo.name}</span>
          );
          const cls = "mc-logo-strip__cell";
          return logo.href ? (
            <Link key={i} href={logo.href} className={cls} aria-label={logo.name}>
              {inner}
            </Link>
          ) : (
            <div key={i} className={cls}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
