"use client";

/* ═══════════════════════════════════════════════════════════════════
   MotorCut V4 — Button
   ───────────────────────────────────────────────────────────────────
   Ported 2026-05-01 from agent-teams/maia/motorcut/design-system/components/button/.
   Locked source: button.md + button.css + button.jsx (V4 app DS).
   Variants: primary · premium · secondary · ghost · destructive · link
   Sizes: sm | md (default) | lg | icon
   ═══════════════════════════════════════════════════════════════════ */

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      premium: "btn-premium",
      secondary: "btn-secondary",
      ghost: "btn-ghost",
      destructive: "btn-destructive",
      link: "btn-link",
      // Backwards-compat aliases (mirror app DS)
      default: "btn-primary",
      outline: "btn-secondary",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      icon: "btn-icon",
      default: "btn-md",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

const SparkleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="btn-icon-glyph"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"
      fill="currentColor"
    />
  </svg>
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode | null;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const resolvedIcon =
      icon === null
        ? null
        : icon !== undefined
          ? icon
          : variant === "premium"
            ? <SparkleIcon />
            : null;

    // Radix Slot's React.Children.only counts every child slot — including
    // falsy ones from `{cond && expr}`. When asChild=true we must pass
    // exactly ONE element. Skip the icon scaffold for the asChild path.
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {resolvedIcon && iconPosition === "left" && resolvedIcon}
        {children}
        {resolvedIcon && iconPosition === "right" && resolvedIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
