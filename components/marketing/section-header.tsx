/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — SectionHeader
   ───────────────────────────────────────────────────────────────────
   Standard "eyebrow + title + sub" block at the top of every section.
   Variants:
     align — left (default) | center
     size  — sm (h3 36px) | md (h2 48px, default) | lg (display 56px)
             | xl (display 72px — hero anchor)
   Eyebrow + sub are optional. Pass tone="on-dark" to flip text colour
   for use inside <Section surface="dark">.
   ═══════════════════════════════════════════════════════════════════ */

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const sectionHeaderVariants = cva("mc-section-header", {
  variants: {
    align: {
      left: "mc-section-header--align-left",
      center: "mc-section-header--align-center",
    },
    size: {
      sm: "mc-section-header--size-sm",
      md: "mc-section-header--size-md",
      lg: "mc-section-header--size-lg",
      xl: "mc-section-header--size-xl",
    },
    tone: {
      default: "mc-section-header--tone-default",
      "on-dark": "mc-section-header--tone-on-dark",
    },
  },
  defaultVariants: {
    align: "left",
    size: "md",
    tone: "default",
  },
});

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof sectionHeaderVariants> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** Render the title as a different tag (default is h2). */
  titleAs?: "h1" | "h2" | "h3";
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      eyebrow,
      title,
      sub,
      align,
      size,
      tone,
      titleAs: TitleTag = "h2",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(sectionHeaderVariants({ align, size, tone }), className)}
      {...props}
    >
      {eyebrow && <span className="mc-section-header__eyebrow">{eyebrow}</span>}
      <TitleTag className="mc-section-header__title">{title}</TitleTag>
      {sub && <p className="mc-section-header__sub">{sub}</p>}
    </div>
  ),
);
SectionHeader.displayName = "SectionHeader";

export { sectionHeaderVariants };
