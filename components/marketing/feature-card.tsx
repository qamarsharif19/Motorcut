/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — FeatureCard
   ───────────────────────────────────────────────────────────────────
   Composition over <Card>: visual placeholder + heading + body.
   The "feature card" pattern from Andre's wireframes — used on the
   homepage in 3-up grids, on audience pages, and on feature index
   blocks. Ken-Burns image hover lift inherited from the Card base.

   Visual variants:
     placeholder — dashed brand placeholder (default for wireframe)
     gradient    — soft brand gradient (when no real asset yet)
     image       — pass src + alt for next/image rendering
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  title: string;
  description: string;
  /** Path to image asset. If omitted, renders the placeholder visual. */
  imageSrc?: string;
  imageAlt?: string;
  /** Override the visual treatment when no image is supplied. */
  visualVariant?: "placeholder" | "gradient";
  /** Tag rendered above the title (e.g. "New" / "Available now"). */
  tag?: string;
  className?: string;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      title,
      description,
      imageSrc,
      imageAlt = "",
      visualVariant = "gradient",
      tag,
      className,
    },
    ref,
  ) => (
    <Card ref={ref} className={cn("feature-card", className)}>
      <div className={cn("feature-card__visual", `feature-card__visual--${visualVariant}`)}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 400px"
            className="feature-card__image"
          />
        ) : null}
      </div>
      <div className="feature-card__body">
        {tag && <span className="feature-card__tag">{tag}</span>}
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </Card>
  ),
);
FeatureCard.displayName = "FeatureCard";
