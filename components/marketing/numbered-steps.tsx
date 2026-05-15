/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — NumberedSteps
   ───────────────────────────────────────────────────────────────────
   "How it works" pattern. CSS counter-driven numbering (01 / 02 / 03)
   in display brand colour, then h3 + body. Used on homepage + audience
   + product pages. Optional connecting line between steps for the
   "step-by-step" visual signal.

   Variants:
     stack       — vertical (mobile + narrow features)
     row         — horizontal 3-up (homepage how-it-works default)
     row-lined   — horizontal 3-up with connecting line through numbers

   Pass steps[] of { title, body, icon? }. The CSS counter handles the
   numbering automatically — children only need title + body.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import { cn } from "@/lib/utils";

export type Step = {
  title: string;
  body: string;
  icon?: React.ReactNode;
};

export interface NumberedStepsProps {
  steps: Step[];
  variant?: "stack" | "row" | "row-lined";
  className?: string;
}

export function NumberedSteps({
  steps,
  variant = "row",
  className,
}: NumberedStepsProps) {
  return (
    <ol className={cn("mc-steps", `mc-steps--${variant}`, className)}>
      {steps.map((step, i) => (
        <li key={i} className="mc-steps__step">
          {step.icon && <div className="mc-steps__icon" aria-hidden="true">{step.icon}</div>}
          <h3 className="mc-steps__title">{step.title}</h3>
          <p className="mc-steps__body">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
