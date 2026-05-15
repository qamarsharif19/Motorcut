"use client";

/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — TopNav
   ───────────────────────────────────────────────────────────────────
   Sticky top navigation. Brand wordmark left, centred nav links with
   dropdowns, sign-in + primary CTA right, hamburger + full-screen
   drawer at <768px.

   Nav config is data-driven via the `items` prop so every page renders
   the same structure. Dropdowns are CSS-driven (hover-triggered with an
   invisible bridge) for desktop; the mobile drawer is a React state
   toggle.

   Active state: pass `currentPath` (or wire usePathname() in the host
   page) — the top-level link matching the path's prefix gets the
   brand-tinted active treatment.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type NavDropdownItem = {
  href: string;
  title: string;
  description: string;
};

export type NavItem =
  | { type: "link"; href: string; label: string; matchPrefix?: string }
  | {
      type: "dropdown";
      label: string;
      eyebrow: string;
      items: NavDropdownItem[];
      /** Wide dropdowns render in 2 columns (used for Features 6-up). */
      width?: "standard" | "wide";
      /** When the dropdown trigger itself is a link target. */
      href?: string;
      matchPrefix?: string;
    };

export interface TopNavProps {
  items: NavItem[];
  signInHref: string;
  ctaHref: string;
  ctaLabel?: string;
  signInLabel?: string;
  currentPath?: string;
  className?: string;
}

export function TopNav({
  items,
  signInHref,
  ctaHref,
  ctaLabel = "Start Free Trial",
  signInLabel = "Sign In",
  currentPath = "",
  className,
}: TopNavProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Lock body scroll when the mobile drawer is open
  React.useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = original; };
    }
  }, [mobileOpen]);

  // Close drawer on Escape
  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isActive = (item: NavItem): boolean => {
    if (!currentPath) return false;
    const prefix = item.type === "link" ? (item.matchPrefix ?? item.href) : item.matchPrefix;
    if (!prefix) return false;
    return currentPath === prefix || currentPath.startsWith(prefix + "/");
  };

  return (
    <nav className={cn("top-nav", className)} aria-label="Primary">
      <div className="top-nav__inner">
        {/* Brand */}
        <Link href="/" className="top-nav__brand" aria-label="MotorCut — home">
          <Image
            src="/logos/motorcut-wordmark-dark.png"
            alt="MotorCut"
            width={148}
            height={32}
            priority
            className="top-nav__brand-img"
            style={{ width: "auto" }}
          />
        </Link>

        {/* Desktop links */}
        <ul className="top-nav__links">
          {items.map((item, i) => (
            <li
              key={i}
              className={cn(
                "top-nav__item",
                item.type === "dropdown" && "top-nav__item--has-dropdown",
                isActive(item) && "top-nav__item--active",
              )}
            >
              {item.type === "link" ? (
                <Link href={item.href} className="top-nav__link">
                  {item.label}
                </Link>
              ) : (
                <>
                  <Link href={item.href ?? "#"} className="top-nav__link top-nav__link--trigger">
                    {item.label}
                    <svg className="top-nav__caret" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </Link>
                  <div className={cn("top-nav__dropdown", item.width === "wide" && "top-nav__dropdown--wide")}>
                    <span className="top-nav__dropdown-eyebrow">{item.eyebrow}</span>
                    {item.items.map((sub, j) => (
                      <Link key={j} href={sub.href} className="top-nav__dropdown-item">
                        <span className="top-nav__dropdown-item-title">{sub.title}</span>
                        <span className="top-nav__dropdown-item-desc">{sub.description}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="top-nav__cta-cluster">
          <Button asChild variant="ghost" size="sm" className="top-nav__signin">
            <Link href={signInHref}>{signInLabel}</Link>
          </Button>
          <Button asChild size="sm" className="top-nav__cta">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="top-nav__hamburger"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn("top-nav__drawer", mobileOpen && "top-nav__drawer--open")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        aria-hidden={!mobileOpen}
      >
        <div className="top-nav__drawer-header">
          <Image
            src="/logos/motorcut-wordmark-dark.png"
            alt="MotorCut"
            width={132}
            height={28}
            className="top-nav__brand-img"
            style={{ width: "auto" }}
          />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="top-nav__drawer-close"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <div className="top-nav__drawer-body">
          <ul className="top-nav__drawer-links">
            {items.map((item, i) => (
              <li key={i} className="top-nav__drawer-item">
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="top-nav__drawer-link"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <details className="top-nav__drawer-group">
                    <summary className="top-nav__drawer-link top-nav__drawer-link--summary">
                      {item.label}
                      <svg className="top-nav__caret" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </summary>
                    <ul className="top-nav__drawer-sub">
                      {item.items.map((sub, j) => (
                        <li key={j}>
                          <Link
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="top-nav__drawer-sub-link"
                          >
                            <span className="top-nav__drawer-sub-title">{sub.title}</span>
                            <span className="top-nav__drawer-sub-desc">{sub.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            ))}
          </ul>

          <div className="top-nav__drawer-cta">
            <Button asChild variant="ghost" size="md" className="top-nav__drawer-button">
              <Link href={signInHref} onClick={() => setMobileOpen(false)}>{signInLabel}</Link>
            </Button>
            <Button asChild size="md" className="top-nav__drawer-button">
              <Link href={ctaHref} onClick={() => setMobileOpen(false)}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Drawer backdrop */}
      <div
        className={cn("top-nav__drawer-backdrop", mobileOpen && "top-nav__drawer-backdrop--visible")}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </nav>
  );
}
