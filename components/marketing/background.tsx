/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — Background
   ───────────────────────────────────────────────────────────────────
   Atmospheric background overlay. Drop inside any positioned parent
   (e.g. <Section>) and it absolute-fills, sits at z-base, and is
   pointer-events: none so content above it is fully interactive.

   Six variants in 4 symmetric categories:

     HERO · LIGHT
       hero-mesh        — soft brand blob top + secondary glow bottom-right
       hero-grid        — 3D-tilted floor grid, masked + horizon glow

     HERO · DARK         (mirrors of Hero · Light, on n-950)
       hero-dark-mesh   — same blob composition, dark surface, brighter brand
       hero-dark-grid   — 3D-tilted floor grid + Tron-style horizon glow

     SECTION · LIGHT
       section-glow     — subtle top-right corner glow (page default)

     SECTION · DARK
       section-dark     — n-950 + faint top-right brand veil

   All values come from tokens — change a token, atmosphere retunes.
   ═══════════════════════════════════════════════════════════════════ */

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const backgroundVariants = cva("mc-bg", {
  variants: {
    variant: {
      // Hero · Light
      "hero-mesh": "mc-bg--hero-mesh",
      "hero-grid": "mc-bg--hero-grid",
      // Hero · Dark
      "hero-dark-mesh": "mc-bg--hero-dark-mesh",
      "hero-dark-grid": "mc-bg--hero-dark-grid",
      // Section · Light
      "section-glow": "mc-bg--section-glow",
      // Section · Dark
      "section-dark": "mc-bg--section-dark",
    },
  },
  defaultVariants: { variant: "section-glow" },
});

export interface BackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundVariants> {}

export const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(backgroundVariants({ variant }), className)}
      {...props}
    />
  ),
);
Background.displayName = "Background";

export { backgroundVariants };
