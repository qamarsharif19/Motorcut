/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — Section
   ───────────────────────────────────────────────────────────────────
   Section wrapper for marketing pages. 3 axes:
     padding — sm (64) | md (96) | lg (112, default) | xl (128)
     surface — default (transparent, inherits page) | raised (white)
               | tinted (n-100) | brand-soft (brand-50) | dark (n-900)
               | radial (radial brand-soft gradient — footer CTAs)
     bordered — none (default) | top | bottom | both
   ═══════════════════════════════════════════════════════════════════ */

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const sectionVariants = cva("mc-section", {
  variants: {
    padding: {
      sm: "mc-section--pad-sm",
      md: "mc-section--pad-md",
      lg: "mc-section--pad-lg",
      xl: "mc-section--pad-xl",
    },
    surface: {
      default: "mc-section--surface-default",
      raised: "mc-section--surface-raised",
      tinted: "mc-section--surface-tinted",
      "brand-soft": "mc-section--surface-brand-soft",
      dark: "mc-section--surface-dark",
      radial: "mc-section--surface-radial",
    },
    bordered: {
      none: "",
      top: "mc-section--border-top",
      bottom: "mc-section--border-bottom",
      both: "mc-section--border-both",
    },
  },
  defaultVariants: {
    padding: "lg",
    surface: "default",
    bordered: "none",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "header" | "footer" | "div" | "main" | "article";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, padding, surface, bordered, as: Comp = "section", ...props }, ref) => (
    <Comp
     ref={ref as React.Ref<any>}
      className={cn(sectionVariants({ padding, surface, bordered }), className)}
      {...props}
    />
  ),
);
Section.displayName = "Section";

export { sectionVariants };
