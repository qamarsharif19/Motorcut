/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — Footer
   ───────────────────────────────────────────────────────────────────
   Multi-column site footer. Brand column (wordmark + tagline + locale)
   anchors left, then 4-5 nav columns. Bottom bar with copyright +
   "Built in the UK" tagline.

   Config-driven — pass groups[] of { heading, items[] }. Keeps every
   page consistent; one source of truth for footer IA.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export type FooterLink = { href: string; label: string };
export type FooterGroup = { heading: string; items: FooterLink[] };

export interface FooterProps {
  groups: FooterGroup[];
  /** Tagline under brand wordmark in the leftmost column. */
  tagline?: string;
  /** Bottom-bar legal text. Defaults to current-year copyright. */
  copyright?: string;
  /** Right-side bottom text — locale, build origin etc. */
  trailing?: string;
  className?: string;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      groups,
      tagline = "Photo editing software built for car dealerships. Based in the UK.",
      copyright = `© ${new Date().getFullYear()} MotorCut Ltd. All rights reserved.`,
      trailing = "Built in the UK",
      className,
    },
    ref,
  ) => (
    <footer ref={ref} className={cn("mc-footer", className)}>
      <Container>
        <div className="mc-footer__grid">
          <div className="mc-footer__brand-col">
            <Link href="/" className="mc-footer__brand-link" aria-label="MotorCut — home">
              <Image
                src="/logos/motorcut-wordmark-dark.png"
                alt="MotorCut"
                width={160}
                height={32}
                className="mc-footer__brand-img"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="mc-footer__tagline">{tagline}</p>
          </div>

          {groups.map((group) => (
            <div key={group.heading} className="mc-footer__col">
              <h5 className="mc-footer__heading">{group.heading}</h5>
              <ul className="mc-footer__list">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="mc-footer__link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mc-footer__bottom">
          <span>{copyright}</span>
          <span>{trailing}</span>
        </div>
      </Container>
    </footer>
  ),
);
Footer.displayName = "Footer";
