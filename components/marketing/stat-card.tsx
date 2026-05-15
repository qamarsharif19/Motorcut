/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — StatCard
   ───────────────────────────────────────────────────────────────────
   Big-number callout. Adapted from V4 app StatCard (icon-left layout)
   into a website-context "stacked" variant — display number on top,
   label below, optional source attribution. Built on the .card
   primitive so it inherits brand-bloom shadow + hover lift.

   Variants:
     stacked — number top, label bottom (the marketing default)
     inline  — number left, label right (the V4 app dashboard variant)

   Sizes:
     sm — 28px number / 13px label (4-up dense rows)
     md — 40px number / 14px label (default)
     lg — 56px number / 15px label (audience hero stat band)
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  label: string;
  source?: string;
  variant?: "stacked" | "inline";
  size?: "sm" | "md" | "lg";
  /** Optional icon for inline variant. */
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      value,
      label,
      source,
      variant = "stacked",
      size = "md",
      icon,
      className,
    },
    ref,
  ) => (
    <Card
      ref={ref}
      className={cn(
        "mc-stat-card",
        `mc-stat-card--${variant}`,
        `mc-stat-card--size-${size}`,
        className,
      )}
    >
      {icon && variant === "inline" && (
        <div className="mc-stat-card__icon" aria-hidden="true">{icon}</div>
      )}
      <div className="mc-stat-card__body">
        <div className="mc-stat-card__value">{value}</div>
        <div className="mc-stat-card__label">{label}</div>
        {source && <div className="mc-stat-card__source">{source}</div>}
      </div>
    </Card>
  ),
);
StatCard.displayName = "StatCard";
