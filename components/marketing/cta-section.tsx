/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — CTASection
   ───────────────────────────────────────────────────────────────────
   Generic full-width CTA block — distinct from FooterCTA (which always
   sits at the page bottom + uses radial atmosphere). CTASection is
   composable mid-page with more flexibility:

     - Atmosphere: any Background variant (radial / mesh / grid / dark)
     - Tone: light or dark
     - Optional trust signals row (logos, stats, badges)
     - Optional secondary button

   Used for: free-tool teaser, demo-request mid-page, "join 350+ dealers".
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import { Background } from "./background";
import { cn } from "@/lib/utils";

export interface CTASectionProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  /** Optional trust-signal row below buttons (e.g. "14-day trial · No card required"). */
  trustNote?: React.ReactNode;
  /** Background atmosphere variant. */
  background?:
    | "radial"
    | "hero-mesh"
    | "hero-grid"
    | "hero-dark-mesh"
    | "hero-dark-grid"
    | "section-glow"
    | "section-dark"
    | "none";
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  (
    {
      eyebrow,
      title,
      sub,
      primary,
      secondary,
      trustNote,
      background = "section-glow",
      tone = "light",
      align = "center",
      className,
    },
    ref,
  ) => {
    const surface =
      tone === "dark" ? "dark"
        : background === "radial" ? "radial"
        : "default";

    const bgVariant =
      background === "radial" || background === "none"
        ? null
        : background;

    return (
      <Section
        ref={ref}
        padding="xl"
        surface={surface}
        className={cn("mc-cta-section", className)}
      >
        {bgVariant && <Background variant={bgVariant} />}
        <Container>
          <SectionHeader
            align={align}
            size="lg"
            tone={tone === "dark" ? "on-dark" : "default"}
            eyebrow={eyebrow}
            title={title}
            sub={sub}
          />
          <div
            className={cn(
              "mc-cta-section__buttons",
              `mc-cta-section__buttons--${align}`,
            )}
          >
            <Button asChild size="lg">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary && (
              <Button
                asChild
                size="lg"
                variant={tone === "dark" ? "secondary" : "secondary"}
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
          {trustNote && (
            <p className={cn("mc-cta-section__trust", `mc-cta-section__trust--tone-${tone}`)}>
              {trustNote}
            </p>
          )}
        </Container>
      </Section>
    );
  },
);
CTASection.displayName = "CTASection";
