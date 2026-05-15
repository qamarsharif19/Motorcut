"use client";

/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — FAQ
   ───────────────────────────────────────────────────────────────────
   Accordion-style FAQ. Built on native <details> for accessibility +
   zero-JS fallback, animated via grid-template-rows for the smooth
   height transition. Plus icon rotates to minus when open.

   Variants:
     stacked  — single column (default — for FAQ sections at end of page)
     grid     — 2-col grid (for pricing-page FAQs with lots of items)

   Pass items[] of { q, a }. Pre-open the first item via `defaultOpen`.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQItem = { q: string; a: React.ReactNode };

export interface FAQProps {
  items: FAQItem[];
  variant?: "stacked" | "grid";
  defaultOpen?: number;
  className?: string;
}

export function FAQ({
  items,
  variant = "stacked",
  defaultOpen,
  className,
}: FAQProps) {
  return (
    <div className={cn("mc-faq", `mc-faq--${variant}`, className)}>
      {items.map((item, i) => (
        <details
          key={i}
          className="mc-faq__item"
          open={defaultOpen === i || undefined}
        >
          <summary className="mc-faq__question">
            <span className="mc-faq__q-text">{item.q}</span>
            <span className="mc-faq__icon" aria-hidden="true">
              <Plus />
            </span>
          </summary>
          <div className="mc-faq__answer-wrap">
            <div className="mc-faq__answer">{item.a}</div>
          </div>
        </details>
      ))}
    </div>
  );
}
