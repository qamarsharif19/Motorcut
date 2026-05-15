"use client";

/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — AnnouncementBanner
   ───────────────────────────────────────────────────────────────────
   Slim announcement bar that sits ABOVE the TopNav. Brand-tinted
   background with a subtle horizontal sweep. Optional dismiss button
   (persisted to localStorage so a dismissed banner stays dismissed
   for the visit).

   Use cases:
     - Product launches ("V4 is here — bulk editing now lives")
     - Pricing changes ("New Ultra plan — unlimited from £249")
     - Free tool launches ("Try the free Plate Cover tool — no signup")

   Pass label, optional href + cta, optional id (for persisted dismiss).
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnnouncementBannerProps {
  /** Lead text — short headline. */
  label: string;
  /** Optional CTA link. */
  href?: string;
  ctaLabel?: string;
  /** Optional eyebrow chip on the left ("New", "Update", etc.). */
  chip?: string;
  /** Allow user to dismiss. */
  dismissible?: boolean;
  /** Persisted-dismiss key. Required if dismissible. */
  dismissKey?: string;
  /** Tone — light (brand-50 bg) or dark (n-950 bg). */
  tone?: "light" | "dark";
  className?: string;
}

export function AnnouncementBanner({
  label,
  href,
  ctaLabel,
  chip,
  dismissible = true,
  dismissKey = "mc-announcement-default",
  tone = "light",
  className,
}: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = React.useState(false);

  // Hydrate dismissed state from localStorage
  React.useEffect(() => {
    if (typeof window === "undefined" || !dismissible) return;
    try {
      if (window.localStorage.getItem(dismissKey) === "1") {
        setDismissed(true);
      }
    } catch {
      // ignore — localStorage may be unavailable
    }
  }, [dismissible, dismissKey]);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      try { window.localStorage.setItem(dismissKey, "1"); } catch { /* ignore */ }
    }
  };

  return (
    <div
      className={cn(
        "mc-announce",
        `mc-announce--tone-${tone}`,
        className,
      )}
      role="region"
      aria-label="Site announcement"
    >
      <div className="mc-announce__inner">
        {chip && <span className="mc-announce__chip">{chip}</span>}
        <span className="mc-announce__label">{label}</span>
        {href && ctaLabel && (
          <Link href={href} className="mc-announce__cta">
            {ctaLabel}
            <ArrowRight className="mc-announce__cta-arrow" />
          </Link>
        )}
      </div>
      {dismissible && (
        <button
          type="button"
          className="mc-announce__dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
        >
          <X />
        </button>
      )}
    </div>
  );
}
