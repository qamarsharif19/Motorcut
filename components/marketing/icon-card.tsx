/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — IconCard
   ───────────────────────────────────────────────────────────────────
   Composition over <Card>. Covers three wireframe patterns that share
   the same DNA — a heading + body in a card, optionally preceded by an
   icon and/or followed by an arrow link:

     1. Audience card  (homepage 4-up grid) — no icon, link footer
     2. Capability tile (product / feature pages 4-up) — icon, no link
     3. Pain / Gain tile (audience pages 4-up) — icon, no link

   Pass `icon` for variants 2 + 3, pass `href` + `linkLabel` for variant 1.
   Tone: "default" (light) | "tinted" (n-50 surface) — used for visual
   alternation in long stacks of icon cards.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface IconCardProps {
  title: string;
  description: string;
  /** Optional icon — appears in a brand-tinted square above the title. */
  icon?: React.ReactNode;
  /** Optional link footer — e.g. "For Dealer Groups →". */
  href?: string;
  linkLabel?: string;
  /** Visual variant. */
  tone?: "default" | "tinted";
  className?: string;
}

export const IconCard = React.forwardRef<HTMLDivElement, IconCardProps>(
  (
    {
      title,
      description,
      icon,
      href,
      linkLabel,
      tone = "default",
      className,
    },
    ref,
  ) => (
    <Card
      ref={ref}
      className={cn("icon-card", `icon-card--tone-${tone}`, className)}
    >
      <div className="icon-card__inner">
        {icon && (
          <div className="icon-card__icon" aria-hidden="true">
            {icon}
          </div>
        )}
        <div className="icon-card__body">
          <h3 className="icon-card__title">{title}</h3>
          <p className="icon-card__description">{description}</p>
        </div>
        {href && linkLabel && (
          <Link href={href} className="icon-card__link">
            <span>{linkLabel}</span>
            <ArrowRight className="icon-card__link-arrow" />
          </Link>
        )}
      </div>
    </Card>
  ),
);
IconCard.displayName = "IconCard";
