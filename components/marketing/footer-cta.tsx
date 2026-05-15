/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — FooterCTA
   ───────────────────────────────────────────────────────────────────
   Full-width closing CTA block. Sits just above the Footer on every
   marketing page. Composes Section (radial surface variant) + Container
   + a centred SectionHeader-style title + dual buttons.

   Pass eyebrow / title / sub plus button props. Two button slots —
   primary CTA + optional secondary.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

export interface FooterCTAProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  /** Switch between light/dark backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}

export const FooterCTA = React.forwardRef<HTMLElement, FooterCTAProps>(
  ({ eyebrow, title, sub, primary, secondary, tone = "light", className }, ref) => (
    <Section
      ref={ref}
      padding="xl"
      surface={tone === "dark" ? "dark" : "radial"}
      className={cn("mc-footer-cta", className)}
    >
      <Container>
        <SectionHeader
          align="center"
          size="lg"
          tone={tone === "dark" ? "on-dark" : "default"}
          eyebrow={eyebrow}
          title={title}
          sub={sub}
        />
        <div className="mc-footer-cta__buttons">
          <Button asChild size="lg">
            <Link href={primary.href}>{primary.label}</Link>
          </Button>
          {secondary && (
            <Button asChild size="lg" variant="secondary">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          )}
        </div>
      </Container>
    </Section>
  ),
);
FooterCTA.displayName = "FooterCTA";
