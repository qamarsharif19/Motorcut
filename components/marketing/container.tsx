/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — Container
   ───────────────────────────────────────────────────────────────────
   Fixed-width content shell. 4 widths.
     compact (720) — forms, legal, narrow editorial
     narrow  (880) — blog body, contact, single-column content
     default (1240) — every standard page (NAV, FOOTER, sections)
     wide    (1440) — Tier A heroes, full-bleed product showcases
   Padding: 32px desktop, 24px mobile (responsive via globals).
   ═══════════════════════════════════════════════════════════════════ */

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const containerVariants = cva("mc-container", {
  variants: {
    width: {
      compact: "mc-container--compact",
      narrow: "mc-container--narrow",
      default: "mc-container--default",
      wide: "mc-container--wide",
    },
  },
  defaultVariants: { width: "default" },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, width, as: Comp = "div", ...props }, ref) => (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn(containerVariants({ width }), className)}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { containerVariants };
