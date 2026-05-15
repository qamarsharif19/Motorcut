/* ═══════════════════════════════════════════════════════════════════
   MotorCut V4 — Card primitive
   ───────────────────────────────────────────────────────────────────
   Ported 2026-05-01 from agent-teams/maia/motorcut/design-system/components/card/.
   Locked source: card.md + card.css + card.jsx (V4 app DS).

   Base primitive only — AdvertCard (advert-specific image-as-surface
   with completed/processing/failed/skeleton states) stays in the app.
   The website builds composed marketing cards (FeatureCard, IconCard,
   StatCard, etc.) on top of this primitive.

   Slots: Card · CardHeader · CardTitle · CardDescription · CardContent · CardFooter
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card", className)} {...props} />
  ),
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card__header", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("card__title", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("card__description", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card__content", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card__footer", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";
