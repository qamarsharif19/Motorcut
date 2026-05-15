"use client";
import { Carousel, TestimonialCard } from "@/components/marketing/our-clients";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Container } from "@/components/marketing/container";
import { Section } from "@/components/marketing/section";
import { SectionHeader } from "@/components/marketing/section-header";
import { Background } from "@/components/marketing/background";
import { FeatureCard } from "@/components/marketing/feature-card";
import { IconCard } from "@/components/marketing/icon-card";
import { BlogCard } from "@/components/marketing/blog-card";
import { CardsSlider } from "@/components/marketing/cards-slider";
import { TopNav, type NavItem } from "@/components/marketing/top-nav";
import { Footer } from "@/components/marketing/footer";
import { FooterCTA } from "@/components/marketing/footer-cta";
import { LogoStrip } from "@/components/marketing/logo-strip";
import { FAQ } from "@/components/marketing/faq";
import { StatCard } from "@/components/marketing/stat-card";
import { NumberedSteps } from "@/components/marketing/numbered-steps";
import { CTASection } from "@/components/marketing/cta-section";
import { AnnouncementBanner } from "@/components/marketing/announcement-banner";
import { GallerySidebar, type SidebarGroup } from "@/components/marketing/gallery-sidebar";
import { ArrowRight, Sparkles, Trash2, Building2, Users, Building, Zap, Layers, ShieldCheck, Camera, Upload, Wand2, Download } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    designation: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sara Malik",
    designation: "UI Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in.",
    profileImage: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Usman Ali",
    designation: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis.",
    profileImage: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Ayesha Khan",
    designation: "Product Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Pellentesque in ipsum.",
    profileImage: "https://i.pravatar.cc/150?img=5",
  },
];
const sidebarGroups: SidebarGroup[] = [
  {
    label: "Foundations",
    items: [
      { id: "brand-mark", label: "Brand mark", ref: "F00" },
      { id: "typography", label: "Typography", ref: "F01" },
      { id: "colour", label: "Brand ramp", ref: "F02" },
      { id: "neutrals", label: "Neutral ramp", ref: "F03" },
      { id: "spacing", label: "Spacing", ref: "F04" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "button", label: "Button", ref: "C01" },
      { id: "container", label: "Container", ref: "C02" },
      { id: "section", label: "Section", ref: "C03" },
      { id: "section-header", label: "Section header", ref: "C04" },
      { id: "card", label: "Card primitive", ref: "C05" },
      { id: "feature-card", label: "Feature card", ref: "C06" },
      { id: "icon-card", label: "Icon card", ref: "C07" },
      { id: "blog-card", label: "Blog card", ref: "C08" },
      { id: "cards-slider", label: "Cards slider", ref: "C09" },
      { id: "top-nav", label: "Top nav", ref: "C10" },
      { id: "footer", label: "Footer", ref: "C11" },
      { id: "footer-cta", label: "Footer CTA", ref: "C12" },
      { id: "logo-strip", label: "Logo strip", ref: "C13" },
      { id: "faq", label: "FAQ accordion", ref: "C14" },
      { id: "stat-card", label: "Stat card", ref: "C15" },
      { id: "numbered-steps", label: "Numbered steps", ref: "C16" },
      { id: "cta-section", label: "CTA section", ref: "C17" },
      { id: "announcement", label: "Announcement banner", ref: "C18" },
    ],
  },
  {
    label: "Atmosphere",
    items: [
      { id: "bg-hero-light", label: "Hero · Light", ref: "A01" },
      { id: "bg-hero-dark", label: "Hero · Dark", ref: "A02" },
      { id: "bg-section-light", label: "Section · Light", ref: "A03" },
      { id: "bg-section-dark", label: "Section · Dark", ref: "A04" },
    ],
  },
];

type BgVariant =
  | "hero-mesh"
  | "hero-grid"
  | "hero-dark-mesh"
  | "hero-dark-grid"
  | "section-glow"
  | "section-dark";

type BgEntry = {
  variant: BgVariant;
  label: string;
  note: string;
  inspiredBy: string;
  tone: "light" | "dark";
};

const heroLight: BgEntry[] = [
  {
    variant: "hero-mesh",
    label: "hero-mesh",
    note: "Soft brand-500 blob top-anchored + secondary glow bottom-right. Most atmospheric. Pairs with editorial typography heroes.",
    inspiredBy: "sshahaider · bg-pattern",
    tone: "light",
  },
  {
    variant: "hero-grid",
    label: "hero-grid",
    note: "3D-tilted floor grid, 70° rotateX, mask-fades into the distance + brand horizon glow. Geometric, confident, has real depth.",
    inspiredBy: "dillionverma · grid-pattern (with 3D + fade)",
    tone: "light",
  },
];

const heroDark: BgEntry[] = [
  {
    variant: "hero-dark-mesh",
    label: "hero-dark-mesh",
    note: "Dark mirror of hero-mesh. Same blob composition on n-950, brand-400 brought brighter so it reads through the dark surface.",
    inspiredBy: "sshahaider · bg-pattern (dark)",
    tone: "dark",
  },
  {
    variant: "hero-dark-grid",
    label: "hero-dark-grid",
    note: "Dark mirror of hero-grid. Same 3D-tilted floor with stronger brand-300 lines + a Tron-style horizon glow.",
    inspiredBy: "dillionverma · grid-pattern (Tron variant)",
    tone: "dark",
  },
];

const sectionLight: BgEntry[] = [
  {
    variant: "section-glow",
    label: "section-glow",
    note: "Subtle top-right corner glow. The page-wide default — never competes with content, just adds warmth.",
    inspiredBy: "ibelick · radial-violet",
    tone: "light",
  },
];

const navItems: NavItem[] = [
  {
    type: "dropdown",
    label: "Product",
    eyebrow: "Three surfaces, one platform",
    href: "/product/web-app",
    matchPrefix: "/product",
    items: [
      { href: "/product/web-app", title: "Web App", description: "Bulk edit your inventory in the browser." },
      { href: "/product/mobile-app", title: "Mobile App", description: "Photograph cars on the forecourt." },
      { href: "/product/api", title: "API", description: "Pipe photos through your DMS." },
    ],
  },
  {
    type: "dropdown",
    label: "Features",
    eyebrow: "Six tools, built for dealer photography",
    width: "wide",
    href: "/features/half-cut",
    matchPrefix: "/features",
    items: [
      { href: "/features/3d-backgrounds", title: "3D Backgrounds", description: "Premium 3D-rendered showroom backdrops." },
      { href: "/features/half-cut", title: "Half Cut", description: "Replace the background, keep the original shadow." },
      { href: "/features/plate-covers", title: "Plate Covers", description: "Branded number plate covers across the inventory." },
      { href: "/features/bulk-editing", title: "Bulk Editing", description: "Process 100 cars in a single upload." },
      { href: "/features/custom-backgrounds", title: "Custom Backgrounds", description: "Your branded backdrop on every photo." },
      { href: "/features/photo-guidance", title: "Photo Guidance", description: "Live shooting prompts in the mobile app." },
    ],
  },
  { type: "link", href: "/pricing", label: "Pricing" },
  {
    type: "dropdown",
    label: "Compare",
    eyebrow: "Why dealers switch to MotorCut",
    href: "/compare/spyne",
    matchPrefix: "/compare",
    items: [
      { href: "/compare/spyne", title: "vs Spyne", description: "Premium positioning vs volume pricing." },
      { href: "/compare/carcutter", title: "vs CarCutter", description: "Modern UX vs legacy desktop tooling." },
      { href: "/compare/phyron", title: "vs Phyron", description: "Photo editing vs video-first platform." },
      { href: "/compare/autofox", title: "vs AutoFox", description: "Dealer-focused vs general automotive AI." },
    ],
  },
  { type: "link", href: "/blog", label: "Blog" },
  { type: "link", href: "/contact", label: "Contact" },
];

type BlogPost = {
  id: number;
  category: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  author: { name: string };
  date: string;
  readTime: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Pillar guide",
    title: "The complete car dealership photography guide",
    description: "Forecourt capture to showroom-ready listings, in one place. Camera settings, angles, lighting, and the post-production checklist.",
    href: "/blog/car-dealership-photography-guide",
    imageSrc: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    imageAlt: "Car on a forecourt at golden hour",
    author: { name: "Maia" },
    date: "Apr 28, 2026",
    readTime: "12 min read",
  },
  {
    id: 2,
    category: "Explainer",
    title: "AI car background replacement, explained",
    description: "Half cut vs full cut, shadow retention, and why generic background tools fall apart on cars. A primer for dealers.",
    href: "/blog/ai-car-background-replacement",
    imageSrc: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    imageAlt: "Modern car against a clean studio backdrop",
    author: { name: "Andre" },
    date: "Apr 22, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Workflow",
    title: "Bulk editing: 200 cars, one afternoon",
    description: "How a dealer group runs an entire used inventory through MotorCut in a single bulk pass — and the upload-folder convention behind it.",
    href: "/blog/bulk-editing-200-cars",
    imageSrc: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    imageAlt: "Dealership lot with multiple cars",
    author: { name: "Maia" },
    date: "Apr 18, 2026",
    readTime: "8 min read",
  },
  {
    id: 4,
    category: "Conversion",
    title: "Listing photo quality vs click-through — the data",
    description: "Three months of A/B data across 12 dealerships. The lift from showroom backgrounds, plate covers, and consistent angles.",
    href: "/blog/listing-conversion-photo-quality",
    imageSrc: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    imageAlt: "Car listing on a phone screen",
    author: { name: "Andre" },
    date: "Apr 12, 2026",
    readTime: "9 min read",
  },
  {
    id: 5,
    category: "Geo guide",
    title: "Photo standards for AutoTrader UK listings",
    description: "Resolution, aspect ratio, watermarking, and the AutoTrader-specific gotchas dealers run into when uploading at scale.",
    href: "/blog/uk-autotrader-photo-requirements",
    imageSrc: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    imageAlt: "Mechanic inspecting a car",
    author: { name: "Maia" },
    date: "Apr 4, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    category: "Mobile",
    title: "iPhone car photography guide for the forecourt",
    description: "Settings, framing, and the in-app guidance overlay that turns any sales rep into a competent forecourt photographer.",
    href: "/blog/iphone-car-photography",
    imageSrc: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80",
    imageAlt: "Hand holding an iPhone photographing a car",
    author: { name: "Maia" },
    date: "Mar 29, 2026",
    readTime: "7 min read",
  },
];

const sectionDark: BgEntry[] = [
  {
    variant: "section-dark",
    label: "section-dark",
    note: "Dark mirror of section-glow. n-950 + faint top-right brand veil. Quiet dark blocks between content.",
    inspiredBy: "ibelick · radial-violet (dark)",
    tone: "dark",
  },
];

const brandRamp = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const neutralRamp = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const typeScale = [
  { token: "--text-display-xl", px: 96, label: "Display XL — hero anchors" },
  { token: "--text-display-lg", px: 72, label: "Display LG — page H1" },
  { token: "--text-display-md", px: 56, label: "Display MD — section H2" },
  { token: "--text-display-sm", px: 40, label: "Display SM — sub-section H3" },
  { token: "--text-5xl", px: 36, label: "Text 5XL — large feature title" },
  { token: "--text-4xl", px: 28, label: "Text 4XL — block title" },
  { token: "--text-3xl", px: 22, label: "Text 3XL — card title" },
  { token: "--text-2xl", px: 18, label: "Text 2XL — small heading" },
  { token: "--text-body-marketing-lg", px: 18, label: "Body LG — hero lede" },
  { token: "--text-body-marketing-md", px: 17, label: "Body MD — long-form" },
  { token: "--text-body-marketing-sm", px: 16, label: "Body SM — default body" },
  { token: "--text-base", px: 14, label: "Text base — UI / labels" },
  { token: "--text-sm", px: 12, label: "Text SM — meta / fine print" },
  { token: "--text-2xs", px: 10, label: "Text 2XS — eyebrow" },
];

const spacingRamp = [
  { token: "--space-1", px: 4 },
  { token: "--space-2", px: 8 },
  { token: "--space-3", px: 12 },
  { token: "--space-4", px: 16 },
  { token: "--space-6", px: 24 },
  { token: "--space-8", px: 32 },
  { token: "--space-12", px: 48 },
  { token: "--space-16", px: 64 },
  { token: "--space-24", px: 96 },
  { token: "--space-32", px: 128 },
];

export default function ComponentsGallery() {
  const cards = testimonials.map((testimonial, index) => (
    <TestimonialCard
      key={index}
      testimonial={testimonial}
      index={index}
    />
  ));
  return (
    <>
      <AnnouncementBanner
        chip="Live"
        label="V4 launches March 2026 — bulk editing, custom backgrounds, full API."
        href="/blog/motorcut-v4-launch"
        ctaLabel="Read more"
        dismissKey="mc-announce-v4-launch"
      />
      
      <TopNav
        items={navItems}
        signInHref="https://app.motorcut.com/login"
        ctaHref="https://app.motorcut.com/signup"
      />
      <div className="gallery" id="top">
      <GallerySidebar groups={sidebarGroups} />

      <main className="gallery-main">
        {/* ─── Header ─── */}
        <header className="gallery-header">
          <Container>
            <Image
              src="/logos/motorcut-wordmark-dark.png"
              alt="MotorCut"
              width={200}
              height={42}
              priority
              className="brand-wordmark"
            />
            <span className="gallery-eyebrow">Component gallery · V4 marketing site</span>
            <h1 className="gallery-title">The website language, in one place.</h1>
            <p className="gallery-lede">
              Locked components, drop-in tokens, marketing extensions. Built from the V4 app design system.
              Every section here is the canonical reference — what ships on the live site, ships from this page first.
            </p>
          </Container>
        </header>

        {/* ─── F00 · Brand mark ─── */}
        <Carousel items={cards} />
      
        <Section id="brand-mark" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Foundation 00"
              title="Brand mark"
              sub="The MotorCut wordmark uses a custom scissors-K — the brand symbol. Three wordmark variants and three icon variants. Light-bg wordmark is the default everywhere. White variants ship on dark CTA blocks. Icon-circle-purple is the favicon and compact mark."
            />
            <div className="logo-grid">
              <LogoTile label="Wordmark — light bg" filename="motorcut-wordmark-dark.png" note="Default. Top nav, light sections, light CTA blocks." src="/logos/motorcut-wordmark-dark.png" dark={false} ratio="aspect-[5/1]" />
              <LogoTile label="Wordmark — dark bg (mixed)" filename="motorcut-wordmark-white-purple.png" note="For dark CTA blocks. Outlined white + purple K." src="/logos/motorcut-wordmark-white-purple.png" dark ratio="aspect-[5/1]" />
              <LogoTile label="Wordmark — dark bg (solid)" filename="motorcut-wordmark-white.png" note="Pure white version. For photo overlays." src="/logos/motorcut-wordmark-white.png" dark ratio="aspect-[5/1]" />
              <LogoTile label="Icon — circle (purple)" filename="motorcut-icon-circle-purple.png" note="Favicon, mobile, app store, OG fallback." src="/logos/motorcut-icon-circle-purple.png" dark={false} ratio="aspect-square" />
              <LogoTile label="Icon — circle (white)" filename="motorcut-icon-circle-white.png" note="Light-bg compact mark." src="/logos/motorcut-icon-circle-white.png" dark={false} ratio="aspect-square" />
              <LogoTile label="Icon — square (purple)" filename="motorcut-icon-square.png" note="Alt favicon. Square format." src="/logos/motorcut-icon-square.png" dark={false} ratio="aspect-square" />
            </div>
          </Container>
        </Section>

        {/* ─── F01 · Typography ─── */}
        <Section id="typography" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Foundation 01"
              title="Typography scale"
              sub="Manrope across the board. Marketing extensions add display sizes (40 / 56 / 72 / 96) on top of the app's 14px-rooted scale, and bumped body sizes (16-18) for editorial pages."
            />
            <div className="type-stack">
              {typeScale.map((t) => (
                <div key={t.token} className="type-row">
                  <div
                    className="type-sample"
                    style={{
                      fontSize: `${t.px}px`,
                      lineHeight: t.px >= 40 ? 1.05 : t.px >= 22 ? 1.2 : 1.5,
                      letterSpacing: t.px >= 40 ? "-0.025em" : t.px >= 22 ? "-0.015em" : 0,
                      fontWeight: t.px >= 22 ? 700 : 500,
                    }}
                  >
                    Showroom-ready in seconds.
                  </div>
                  <div className="type-meta">
                    <code>{t.token}</code>
                    <span>{t.px}px · {t.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─── F02 · Brand ramp ─── */}
        <Section id="colour" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Foundation 02"
              title="Brand ramp"
              sub="Single purple ramp from the V4 app. Anchor 500 (#7d3ede) is the brand colour. 600 is the default Primary button base. 50 is the active-pill background. 900–950 is reserved for shadows + overlays."
            />
            <div className="ramp">
              {brandRamp.map((step) => (
                <div key={step} className="swatch">
                  <div className="swatch-tile" style={{ background: `var(--brand-${step})` }} />
                  <code>--brand-{step}</code>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─── F03 · Neutral ramp ─── */}
        <Section id="neutrals" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Foundation 03"
              title="Neutral ramp"
              sub="Cool grey, Stripe-faithful. n-50 is the page surface, n-200 is the default border, n-900 is body text."
            />
            <div className="ramp">
              {neutralRamp.map((step) => (
                <div key={step} className="swatch">
                  <div className="swatch-tile" style={{ background: `var(--n-${step})` }} />
                  <code>--n-{step}</code>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─── F04 · Spacing ─── */}
        <Section id="spacing" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Foundation 04"
              title="Spacing scale"
              sub="4px base from the app. --space-32 (128px) added for marketing section rhythm."
            />
            <div className="spacing-stack">
              {spacingRamp.map((s) => (
                <div key={s.token} className="spacing-row">
                  <div className="spacing-bar" style={{ width: `${s.px}px` }} />
                  <code>{s.token}</code>
                  <span>{s.px}px</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─── C01 · Button ─── */}
        <Section id="button" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 01"
              title="Button"
              sub="Six variants × four sizes. Primary is the default, lit-from-below purple gradient with the V4 32px radius signature. Premium gets the sparkle. Secondary is the white pill with brand-tinted hover. Ghost is the quietest. Destructive uses the same DNA on the error ramp. Link is text + animated underline."
            />
            <div className="component-stack">
              <ComponentBlock label="Primary">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="md" disabled>Disabled</Button>
              </ComponentBlock>

              <ComponentBlock label="Premium" sub="Sparkle on by default — pass icon={null} to suppress.">
                <Button variant="premium" size="sm">Upgrade</Button>
                <Button variant="premium" size="md">Upgrade to Pro</Button>
                <Button variant="premium" size="lg">Upgrade to Ultra</Button>
              </ComponentBlock>

              <ComponentBlock label="Secondary">
                <Button variant="secondary" size="sm">Cancel</Button>
                <Button variant="secondary" size="md">View pricing</Button>
                <Button variant="secondary" size="lg">See features</Button>
                <Button variant="secondary" size="md" disabled>Disabled</Button>
              </ComponentBlock>

              <ComponentBlock label="Ghost">
                <Button variant="ghost" size="sm">Sign in</Button>
                <Button variant="ghost" size="md">Sign in</Button>
                <Button variant="ghost" size="lg">Sign in</Button>
              </ComponentBlock>

              <ComponentBlock label="Destructive">
                <Button variant="destructive" size="sm" icon={<Trash2 />}>Delete</Button>
                <Button variant="destructive" size="md" icon={<Trash2 />}>Delete account</Button>
                <Button variant="destructive" size="lg">Cancel subscription</Button>
              </ComponentBlock>

              <ComponentBlock label="Link">
                <Button variant="link" size="sm">Read the docs</Button>
                <Button variant="link" size="md">Learn more</Button>
                <Button variant="link" size="lg">Explore the API</Button>
              </ComponentBlock>

              <ComponentBlock label="With icons" sub="Icon-left default. Pass iconPosition='right' to flip.">
                <Button icon={<Sparkles />}>Create advert</Button>
                <Button icon={<ArrowRight />} iconPosition="right">Get started</Button>
                <Button variant="secondary" icon={<ArrowRight />} iconPosition="right">See pricing</Button>
              </ComponentBlock>

              <ComponentBlock label="Icon-only">
                <Button size="icon" aria-label="Trash"><Trash2 /></Button>
                <Button variant="secondary" size="icon" aria-label="Forward"><ArrowRight /></Button>
                <Button variant="ghost" size="icon" aria-label="Sparkle"><Sparkles /></Button>
              </ComponentBlock>
            </div>
          </Container>
        </Section>

        {/* ─── C02 · Container ─── */}
        <Section id="container" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 02"
              title="Container"
              sub="The fixed-width content shell. Four widths — compact 720, narrow 880, default 1240, wide 1440. 32px padding desktop, 24px mobile. Every section uses one."
            />
          </Container>
          <div className="container-demo-stack">
            <ContainerDemo width="compact" px={720} note="Forms, legal, narrow editorial content (privacy, T&Cs)." />
            <ContainerDemo width="narrow" px={880} note="Blog body, contact, single-column long-form." />
            <ContainerDemo width="default" px={1240} note="Default. Every standard section, nav, footer." />
            <ContainerDemo width="wide" px={1440} note="Tier A heroes, full-bleed product showcases." />
          </div>
        </Section>

        {/* ─── C03 · Section ─── */}
        <Section id="section" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 03"
              title="Section"
              sub="Three axes — padding (sm 64 / md 96 / lg 112 / xl 128), surface (default / raised / tinted / brand-soft / dark / radial), and border (none / top / bottom / both). Defaults: lg padding, default surface, no border. Live demo of each surface below."
            />
          </Container>
          <Section padding="sm" surface="raised" bordered="both" className="section-demo">
            <Container><SurfaceLabel name="raised" desc="surface (white) — for tinted/inverted callouts within a flow" /></Container>
          </Section>
          <Section padding="sm" surface="tinted" bordered="both" className="section-demo">
            <Container><SurfaceLabel name="tinted" desc="n-100 — gentle break between flow sections" /></Container>
          </Section>
          <Section padding="sm" surface="brand-soft" bordered="both" className="section-demo">
            <Container><SurfaceLabel name="brand-soft" desc="brand-50 — for brand-anchored CTAs and highlight blocks" /></Container>
          </Section>
          <Section padding="sm" surface="radial" bordered="both" className="section-demo">
            <Container><SurfaceLabel name="radial" desc="radial brand-soft gradient — every page footer CTA uses this" /></Container>
          </Section>
          <Section padding="sm" surface="dark" bordered="none" className="section-demo">
            <Container>
              <SurfaceLabel name="dark" desc="n-900 with text-on-dark — for the inverted free-tool footer CTA pattern" tone="on-dark" />
            </Container>
          </Section>
        </Section>

        {/* ─── C04 · Section header ─── */}
        <Section id="section-header" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 04"
              title="Section header"
              sub="Eyebrow + title + sub. Sat at the top of every Section (you've seen it 9 times already). Variants — alignment (left default / center) × size (sm 36 / md 40 / lg 56 / xl 72)."
            />

            <div className="section-header-demo-stack">
              <SectionHeaderDemo label="size=md, align=left (the default)">
                <SectionHeader
                  eyebrow="Foundation 02"
                  title="Brand ramp"
                  sub="Single purple ramp from the V4 app. Anchor 500 is the brand colour."
                />
              </SectionHeaderDemo>

              <SectionHeaderDemo label="size=sm, align=left — for nested / sub-sections">
                <SectionHeader
                  size="sm"
                  eyebrow="Sub-section"
                  title="A smaller section title"
                  sub="Use sm when the section sits inside a larger composition (e.g. a tabbed area, a sidebar)."
                />
              </SectionHeaderDemo>

              <SectionHeaderDemo label="size=lg, align=center — for hero CTAs and standout blocks">
                <SectionHeader
                  size="lg"
                  align="center"
                  eyebrow="Pricing"
                  title="Simple pricing. Premium unlimited at the top."
                  sub="Start at £49 a month. Scale to Pro. Unlock unlimited on Ultra. No fixed-term contracts."
                />
              </SectionHeaderDemo>

              <SectionHeaderDemo label="size=xl, align=center — for page-level hero anchors">
                <SectionHeader
                  size="xl"
                  align="center"
                  eyebrow="Homepage hero"
                  title="Every vehicle, showroom-ready in seconds."
                  sub="Photo editing software for automotive dealerships — used by 350+ dealers."
                />
              </SectionHeaderDemo>

              <SectionHeaderDemo label="tone=on-dark — for headers inside surface=dark sections" dark>
                <Section padding="sm" surface="dark" className="inline-dark-stage">
                  <Container>
                    <SectionHeader
                      size="md"
                      align="center"
                      tone="on-dark"
                      eyebrow="Free tool"
                      title="Cover any number plate, free."
                      sub="No signup. No watermark. Built for the trade."
                    />
                  </Container>
                </Section>
              </SectionHeaderDemo>
            </div>
          </Container>
        </Section>

        {/* ─── C05 · Card primitive ─── */}
        <Section id="card" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 05"
              title="Card primitive"
              sub="The base — white surface, 20px radius, brand-bloom 5-layer shadow, hover lift (4px translate + shadow upgrade). Ported from V4 app DS verbatim. Six structured slots (Header / Title / Description / Content / Footer) for ad-hoc compositions; specialised cards (FeatureCard, IconCard, etc.) compose this primitive."
            />
            <div className="card-primitive-stack">
              <Card className="card-primitive-demo">
                <CardHeader>
                  <CardTitle>Card with structured slots</CardTitle>
                  <CardDescription>
                    The standard composition — Header (Title + Description) above Content, with optional Footer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "var(--n-700)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", margin: 0 }}>
                    Drop any content in here. Lists, forms, paragraphs, media. Inherits the card chrome from
                    the primitive — no extra styling needed.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                  <Button size="sm" variant="ghost">Cancel</Button>
                </CardFooter>
              </Card>

              <Card className="card-primitive-demo">
                <CardContent>
                  <p style={{ color: "var(--n-700)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", margin: 0 }}>
                    Cards can also skip the Header/Footer slots — just wrap content directly. Useful for
                    media-led cards, free-form blocks, or when the surrounding layout already provides hierarchy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        {/* ─── C06 · Feature card ─── */}
        <Section id="feature-card" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 06"
              title="Feature card"
              sub="The 3-up homepage feature pattern. Visual on top (16:10), title + body below. Ken-Burns hover scale on the image. Three visual variants: gradient (default placeholder), placeholder (dashed for wireframes), or pass imageSrc + imageAlt for next/image rendering. Used on the homepage feature grid, audience pages, and feature index blocks."
            />

            <div className="card-grid card-grid--3">
              <FeatureCard
                title="3D Backgrounds"
                description="Premium 3D-rendered showroom backdrops. Pick from the library or commission your own."
                visualVariant="gradient"
              />
              <FeatureCard
                title="Half Cut"
                description="Replace the background, keep the original shadow. Cars stay grounded, no floating effect."
                visualVariant="gradient"
              />
              <FeatureCard
                title="Plate Covers"
                description="Branded number plate covers. Hide the plate, add your logo. Consistent across the inventory."
                visualVariant="gradient"
              />
              <FeatureCard
                title="Bulk Editing"
                description="Process 100 cars in a single upload. Same settings, same output, queued in parallel."
                tag="New"
                visualVariant="gradient"
              />
              <FeatureCard
                title="Custom Backgrounds"
                description="Your own branded backdrop on every photo. Upload a still or design one with us."
                visualVariant="placeholder"
              />
              <FeatureCard
                title="Photo Guidance"
                description="Live shooting prompts in the mobile app. Frame, angle, and distance, every time."
                visualVariant="placeholder"
              />
            </div>
          </Container>
        </Section>

        {/* ─── C07 · Icon card ─── */}
        <Section id="icon-card" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 07"
              title="Icon card"
              sub="Covers three wireframe patterns at once — Audience cards (homepage 4-up, no icon, link footer), Capability tiles (product pages 4-up, icon, no link), Pain/Gain tiles (audience pages 4-up, icon, no link). Pass icon + body for the tile pattern; pass href + linkLabel for the audience pattern."
            />

            <div className="card-grid-stack">
              <div>
                <span className="card-grid-stack__label">Audience pattern — title + body + link, no icon</span>
                <div className="card-grid card-grid--2">
                  <IconCard
                    title="Dealer Groups"
                    description="Multi-site operations turning over thousands of cars a month. Group-wide branding, role-based access, and API across the estate."
                    href="/for-dealer-groups"
                    linkLabel="For Dealer Groups"
                  />
                  <IconCard
                    title="Main Dealers"
                    description="Franchise dealers handling new and used inventory. Manufacturer-compliant photography with brand-locked backgrounds."
                    href="/for-main-dealers"
                    linkLabel="For Main Dealers"
                  />
                  <IconCard
                    title="Independent Dealers"
                    description="One site, one team, stock turning over fast. Showroom-quality photos without a studio — just your phone and MotorCut."
                    href="/for-independent-dealers"
                    linkLabel="For Independent Dealers"
                  />
                  <IconCard
                    title="Used Car Dealers"
                    description="Used-car retailers moving 50–300 cars a month. Bulk-edit the inventory, keep branding consistent, sell faster."
                    href="/for-used-car-dealers"
                    linkLabel="For Used Car Dealers"
                  />
                </div>
              </div>

              <div>
                <span className="card-grid-stack__label">Capability / Pain · Gain pattern — icon + title + body, no link</span>
                <div className="card-grid card-grid--4">
                  <IconCard
                    icon={<Zap />}
                    title="Sub-second processing"
                    description="The model runs on dedicated GPUs. Every photo is editable in seconds, not minutes."
                  />
                  <IconCard
                    icon={<Layers />}
                    title="Bulk operations"
                    description="Queue 200 cars in a single upload. Same settings, parallel processing, downloadable in one ZIP."
                  />
                  <IconCard
                    icon={<ShieldCheck />}
                    title="DMS integration"
                    description="Pipe photos through your DMS. Auto-process every new stock upload, no manual touchpoint."
                  />
                  <IconCard
                    icon={<Camera />}
                    title="Mobile capture"
                    description="iOS and Android apps for the forecourt. Photo-guidance overlay, on-device upload."
                  />
                </div>
              </div>

              <div>
                <span className="card-grid-stack__label">Tinted variant — alternating surface for visual rhythm in long stacks</span>
                <div className="card-grid card-grid--3">
                  <IconCard
                    icon={<Building2 />}
                    title="Group-wide branding"
                    description="One brand spec applied across every dealership in your estate. No drift between sites."
                    tone="tinted"
                  />
                  <IconCard
                    icon={<Users />}
                    title="Role-based access"
                    description="Photographers upload, managers approve, dealers publish. Permissions per site."
                    tone="tinted"
                  />
                  <IconCard
                    icon={<Building />}
                    title="Multi-site billing"
                    description="One invoice for the group. Cost-allocation reports per site for back-office reconciliation."
                    tone="tinted"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── C08 · Blog card ─── */}
        <Section id="blog-card" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 08"
              title="Blog card"
              sub="Editorial card for blog posts. 16:10 cover image with brand-soft fallback gradient + bottom-fade overlay, brand-50 category pill (frosted, top-left), Manrope title that brand-tints on hover, 3-line description, footer with author avatar + date + read time pill. Image scales 1.06x on hover. Wraps the entire card in a Link."
            />

            <div className="card-grid card-grid--3">
              {blogPosts.slice(0, 3).map((p) => (
                <BlogCard key={p.id} {...p} />
              ))}
            </div>
          </Container>
        </Section>

        {/* ─── C09 · Cards slider ─── */}
        <Section id="cards-slider" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 09"
              title="Cards slider"
              sub="Horizontal drag-to-scroll wrapper. Generic — accepts any cards (BlogCard, FeatureCard, IconCard, future testimonials). Hover the slider to reveal frosted prev/next arrows. Drag with mouse or trackpad. Spring-animated programmatic scroll on arrow click. Works on touch."
            />
          </Container>

          <div className="cards-slider-stage">
            <CardsSlider cardWidth={360} gap={24}>
              {blogPosts.map((p) => (
                <BlogCard key={p.id} {...p} />
              ))}
            </CardsSlider>
          </div>
        </Section>

        {/* ─── C11 · Footer ─── */}
        <Section id="footer" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 11"
              title="Footer"
              sub="Multi-column site footer. Brand wordmark + tagline anchors left, then 4 nav columns (Product / Features / Compare / Resources). Bottom bar with copyright + locale tagline. Config-driven via groups[] — every page renders identical IA from one source."
            />
            <div className="footer-demo-stage">
              <Footer
                groups={[
                  {
                    heading: "Product",
                    items: [
                      { href: "/product/web-app", label: "Web App" },
                      { href: "/product/mobile-app", label: "Mobile App" },
                      { href: "/product/api", label: "API" },
                      { href: "/pricing", label: "Pricing" },
                    ],
                  },
                  {
                    heading: "Features",
                    items: [
                      { href: "/features/3d-backgrounds", label: "3D Backgrounds" },
                      { href: "/features/half-cut", label: "Half Cut" },
                      { href: "/features/plate-covers", label: "Plate Covers" },
                      { href: "/features/bulk-editing", label: "Bulk Editing" },
                      { href: "/features/custom-backgrounds", label: "Custom Backgrounds" },
                      { href: "/features/photo-guidance", label: "Photo Guidance" },
                    ],
                  },
                  {
                    heading: "Compare",
                    items: [
                      { href: "/compare/spyne", label: "vs Spyne" },
                      { href: "/compare/carcutter", label: "vs CarCutter" },
                      { href: "/compare/phyron", label: "vs Phyron" },
                      { href: "/compare/autofox", label: "vs AutoFox" },
                    ],
                  },
                  {
                    heading: "Resources",
                    items: [
                      { href: "/blog", label: "Blog" },
                      { href: "/free-tool/plate-cover", label: "Free tools" },
                      { href: "/contact", label: "Contact" },
                      { href: "/legal/privacy", label: "Privacy" },
                      { href: "/legal/terms", label: "Terms" },
                    ],
                  },
                ]}
              />
            </div>
          </Container>
        </Section>

        {/* ─── C12 · Footer CTA ─── */}
        <Section id="footer-cta" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 12"
              title="Footer CTA"
              sub="Closing CTA block — sits just above the Footer on every marketing page. Composes Section + Container + centred SectionHeader + dual buttons. Two tones: light (radial accent gradient) and dark (n-950 + on-dark text)."
            />

            <div className="footer-cta-demo-stack">
              <span className="card-grid-stack__label">tone=&quot;light&quot;</span>
              <FooterCTA
                title="Start editing car photos that sell."
                sub="14 day free trial. No card required. Cancel any time."
                primary={{ href: "https://app.motorcut.com/signup", label: "Start Free Trial" }}
                secondary={{ href: "/pricing", label: "See pricing" }}
              />

              <span className="card-grid-stack__label" style={{ marginTop: "var(--space-8)" }}>tone=&quot;dark&quot;</span>
              <FooterCTA
                tone="dark"
                eyebrow="Free tool"
                title="Cover any number plate, free."
                sub="No signup. No watermark. Built for the trade."
                primary={{ href: "/free-tool/plate-cover", label: "Try the free tool" }}
                secondary={{ href: "/pricing", label: "See pricing" }}
              />
            </div>
          </Container>
        </Section>

        {/* ─── C13 · Logo strip ─── */}
        <Section id="logo-strip" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 13"
              title="Logo strip"
              sub="Trusted-by row. Greyscale + 55% opacity by default; lifts to full colour + 100% opacity on hover. Two variants: row (single flex-row, used on homepage trusted-by) and grid (6-up grid, used on audience peer-strips). Logos default to wordmark text fallback when no image is supplied — useful before Ron's logo set lands."
            />

            <div className="card-grid-stack">
              <div>
                <span className="card-grid-stack__label">variant=&quot;row&quot; — homepage trusted-by</span>
                <LogoStrip
                  title="Trusted by 350+ dealerships"
                  variant="row"
                  logos={[
                    { name: "Kirkham" },
                    { name: "RRG" },
                    { name: "Yeovil Audi" },
                    { name: "CSH Performance" },
                    { name: "Beechwood" },
                    { name: "Chestnut Motors" },
                  ]}
                />
              </div>

              <div>
                <span className="card-grid-stack__label">variant=&quot;grid&quot; — audience peer-strip</span>
                <LogoStrip
                  variant="grid"
                  logos={[
                    { name: "Kirkham" },
                    { name: "RRG" },
                    { name: "Yeovil Audi" },
                    { name: "CSH Performance" },
                    { name: "Beechwood" },
                    { name: "Chestnut Motors" },
                  ]}
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── C14 · FAQ accordion ─── */}
        <Section id="faq" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 14"
              title="FAQ accordion"
              sub="Native <details>-based accordion (zero-JS fallback, accessible by default). Plus icon rotates 45° to a cross when an item opens. Smooth height transition via animated grid-template-rows. Two variants: stacked (default, 800px max-width) and grid (2-col for pricing-page FAQs with lots of items)."
            />

            <div className="card-grid-stack">
              <div>
                <span className="card-grid-stack__label">variant=&quot;stacked&quot; — default</span>
                <FAQ
                  defaultOpen={0}
                  items={[
                    { q: "How does the free trial work?", a: "14 days, full access. Card required. Auto-converts to a paid Lite plan if you don't cancel — cancel any time during the trial." },
                    { q: "Are there long-term contracts?", a: "No. Monthly subscription with 14-day cancellation notice. Annual billing saves ~20% if you'd rather pay yearly." },
                    { q: "What about photo quality?", a: "The model only sees cars. Cleaner cut-lines around mirrors, wheels, and antennae than generic background tools." },
                    { q: "Can MotorCut integrate with my DMS?", a: "Yes, via the API. Most major dealer management systems are supported. Auto-process every new stock upload." },
                  ]}
                />
              </div>

              <div>
                <span className="card-grid-stack__label">variant=&quot;grid&quot; — 2-col for pricing pages</span>
                <FAQ
                  variant="grid"
                  items={[
                    { q: "How accurate is the calculator?", a: "It's a guide. Real photo counts vary by dealer — we used 12 photos per car as a typical mid-point." },
                    { q: "What happens at the image cap?", a: "Lite and Pro have hard caps; processing pauses until your next billing cycle, or you can upgrade for an immediate reset." },
                    { q: "Can I switch plans mid-month?", a: "Yes. Upgrades take effect immediately and reset your image allowance. Downgrades take effect at the next billing cycle." },
                    { q: "Do you charge per user?", a: "No. Lite is single-user. Pro and Ultra include multi-user team access at no extra cost." },
                  ]}
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── C15 · Stat card ─── */}
        <Section id="stat-card" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 15"
              title="Stat card"
              sub="Big-number callout. Adapted from V4 app StatCard. Two variants: stacked (number on top — marketing default) and inline (icon-left, V4 app dashboard variant). Three sizes: sm (28px / 4-up dense rows), md (40px / default), lg (56px / hero stat band)."
            />

            <div className="card-grid-stack">
              <div>
                <span className="card-grid-stack__label">variant=&quot;stacked&quot; size=&quot;md&quot; — audience stat band, 4-up</span>
                <div className="card-grid card-grid--4">
                  <StatCard value="350+" label="Active dealerships" source="As of April 2026" />
                  <StatCard value="2.4M" label="Photos processed" source="Last 12 months" />
                  <StatCard value="12s" label="Avg. processing time" source="Per car, full pipeline" />
                  <StatCard value="98%" label="Customer retention" source="12-month rolling" />
                </div>
              </div>

              <div>
                <span className="card-grid-stack__label">variant=&quot;stacked&quot; size=&quot;lg&quot; — homepage hero stat band</span>
                <div className="card-grid card-grid--3">
                  <StatCard size="lg" value="350+" label="Active dealerships" />
                  <StatCard size="lg" value="2.4M" label="Photos processed" />
                  <StatCard size="lg" value="98%" label="Customer retention" />
                </div>
              </div>

              <div>
                <span className="card-grid-stack__label">variant=&quot;inline&quot; size=&quot;sm&quot; — dashboard-style</span>
                <div className="card-grid card-grid--3">
                  <StatCard variant="inline" size="sm" value="350+" label="Dealerships" icon={<Building2 />} />
                  <StatCard variant="inline" size="sm" value="2.4M" label="Photos / yr" icon={<Camera />} />
                  <StatCard variant="inline" size="sm" value="12s" label="Avg. process" icon={<Zap />} />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── C16 · Numbered steps ─── */}
        <Section id="numbered-steps" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 16"
              title="Numbered steps"
              sub="How-it-works pattern. CSS counter automatically generates the 01 / 02 / 03 numbering — pass steps[] of { title, body, icon? }. Three variants: row (3-up, homepage default), row-lined (with connecting brand-tinted line between numbers), stack (vertical for narrow contexts)."
            />

            <div className="card-grid-stack">
              <div>
                <span className="card-grid-stack__label">variant=&quot;row&quot; — homepage how-it-works</span>
                <NumberedSteps
                  steps={[
                    { title: "Upload", body: "Drop any car photo — forecourt, showroom, or your phone. Web, mobile, or API." },
                    { title: "Edit", body: "Pick your background, cut style, and branding. Processed in seconds." },
                    { title: "Publish", body: "Download or push directly to your DMS. Ready to advertise." },
                  ]}
                />
              </div>

              <div>
                <span className="card-grid-stack__label">variant=&quot;row-lined&quot; — connecting brand line</span>
                <NumberedSteps
                  variant="row-lined"
                  steps={[
                    { title: "Upload", body: "Drop forecourt photos. Folder watch picks up new uploads automatically.", icon: <Upload /> },
                    { title: "Edit", body: "Pick background, cut style, branding. Processed in seconds, in parallel.", icon: <Wand2 /> },
                    { title: "Publish", body: "Download as ZIP or push to your DMS via API. Ready to advertise.", icon: <Download /> },
                  ]}
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── C17 · CTA section ─── */}
        <Section id="cta-section" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 17"
              title="CTA section"
              sub="Generic full-width call-to-action — distinct from FooterCTA (always at page bottom, always radial). CTASection is composable mid-page with any Background variant, light or dark tone, optional trust note, optional secondary button."
            />
          </Container>

          <div className="cta-section-demo-stack">
            <CTASection
              eyebrow="Free tool"
              title="Cover any number plate, free."
              sub="Upload a car photo, drop in your dealership logo, download a clean plate cover. No signup, no watermark, runs in your browser."
              primary={{ href: "/free-tool/plate-cover", label: "Try the free tool" }}
              trustNote={<>No signup · Built for the trade · Released April 2026</>}
              background="hero-mesh"
            />

            <CTASection
              tone="dark"
              eyebrow="API"
              title="Pipe photos through your DMS."
              sub="Auto-process every new stock upload. Webhooks, sandbox keys, code samples for major DMS systems."
              primary={{ href: "/product/api", label: "Read the docs" }}
              secondary={{ href: "/contact", label: "Talk to us" }}
              background="hero-dark-grid"
            />
          </div>
        </Section>

        {/* ─── C18 · Announcement banner ─── */}
        <Section id="announcement" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 18"
              title="Announcement banner"
              sub="Slim bar above the TopNav. Brand-tinted gradient sweep with optional chip + CTA + dismiss. The banner above the gallery is the live A01 instance — dismiss it, refresh the page, and it stays dismissed (localStorage-persisted)."
            />

            <div className="card-grid-stack">
              <div>
                <span className="card-grid-stack__label">tone=&quot;light&quot; — default</span>
                <div className="announcement-demo-stage">
                  <AnnouncementBanner
                    chip="New"
                    label="Bulk editing now lives — process 200 cars in one upload."
                    href="/features/bulk-editing"
                    ctaLabel="Try it"
                    dismissible={false}
                  />
                </div>
              </div>

              <div>
                <span className="card-grid-stack__label">tone=&quot;dark&quot; — for high-contrast launches</span>
                <div className="announcement-demo-stage">
                  <AnnouncementBanner
                    tone="dark"
                    chip="Live"
                    label="V4 ships March 2026 — bulk editing, custom backgrounds, full API."
                    href="/blog/motorcut-v4-launch"
                    ctaLabel="Read more"
                    dismissible={false}
                  />
                </div>
              </div>

              <div>
                <span className="card-grid-stack__label">No CTA, dismissible — for soft notes</span>
                <div className="announcement-demo-stage">
                  <AnnouncementBanner
                    label="Status: All systems normal · Last incident 86 days ago"
                    dismissible={false}
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── A01 · Hero · Light ─── */}
        <Section id="bg-hero-light" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Atmosphere 01"
              title="Hero · Light"
              sub="Bold, atmospheric backgrounds for anchor pages — homepage, product features, top of long pages. These compete with the content; that's the point."
            />
            <BackgroundCategoryGrid entries={heroLight} />
          </Container>
        </Section>

        {/* ─── A02 · Hero · Dark ─── */}
        <Section id="bg-hero-dark" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Atmosphere 02"
              title="Hero · Dark"
              sub="Premium dark hero blocks. Free-tool, dark CTAs, footer anchors. n-950 base with violet radials. Pair with on-dark SectionHeader tone."
            />
            <BackgroundCategoryGrid entries={heroDark} />
          </Container>

          {/* In-context: full-width dark hero preview using the dark mesh */}
          <Section padding="xl" surface="dark" className="dark-cta-preview">
            <Background variant="hero-dark-mesh" />
            <Container>
              <SectionHeader
                size="lg"
                align="center"
                tone="on-dark"
                eyebrow="In context — Hero · Dark · Mesh"
                title="Cover any number plate, free."
                sub="hero-dark-mesh in production. n-950 + brand mesh blob, on-dark section header, two real Buttons."
              />
              <div className="dark-cta-preview__cta">
                <Button size="lg" icon={<ArrowRight />} iconPosition="right">Try the free tool</Button>
                <Button variant="secondary" size="lg">View pricing</Button>
              </div>
            </Container>
          </Section>

          {/* In-context: full-width dark hero preview using the Tron grid */}
          <Section padding="xl" surface="dark" className="dark-cta-preview">
            <Background variant="hero-dark-grid" />
            <Container>
              <SectionHeader
                size="lg"
                align="center"
                tone="on-dark"
                eyebrow="In context — Hero · Dark · Grid"
                title="Every vehicle, showroom-ready in seconds."
                sub="hero-dark-grid in production. 3D floor grid + Tron horizon glow on n-950."
              />
              <div className="dark-cta-preview__cta">
                <Button size="lg" icon={<ArrowRight />} iconPosition="right">Start free trial</Button>
                <Button variant="secondary" size="lg">See pricing</Button>
              </div>
            </Container>
          </Section>
        </Section>

        {/* ─── A03 · Section · Light ─── */}
        <Section id="bg-section-light" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Atmosphere 03"
              title="Section · Light"
              sub="Supporting atmosphere between content blocks. Subtler than Hero variants — adds warmth without competing. section-glow is the page-wide default you're seeing across this gallery."
            />
            <BackgroundCategoryGrid entries={sectionLight} />
          </Container>
        </Section>

        {/* ─── A04 · Section · Dark ─── */}
        <Section id="bg-section-dark" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Atmosphere 04"
              title="Section · Dark"
              sub="Subtler dark sections — for dark blocks between content (testimonial pull-outs, mid-page CTAs) where Hero · Dark would be too dramatic."
            />
            <BackgroundCategoryGrid entries={sectionDark} />
          </Container>

          {/* In-context: subtle dark section preview */}
          <Section padding="lg" surface="dark" className="dark-cta-preview">
            <Background variant="section-dark" />
            <Container>
              <SectionHeader
                size="md"
                tone="on-dark"
                eyebrow="In context — Section · Dark"
                title="350+ dealerships across the UK and Europe."
                sub="section-dark in production. Subtle brand veil on n-950, used here as a quiet pull-quote-style block between content."
              />
            </Container>
          </Section>
        </Section>

        {/* ─── C10 · Top nav ─── */}
        <Section id="top-nav" bordered="bottom">
          <Container>
            <SectionHeader
              eyebrow="Component 10"
              title="Top nav"
              sub="The sticky nav already at the top of this page is the C10 component in production placement. Brand wordmark left, centred nav links with hover-bridged dropdowns (Product 3-up, Features 6-up wide 2-col, Compare 4-up), Sign In + Start Free Trial right. Hamburger swaps in at narrow viewports and opens a full-screen drawer with collapsible groups + bottom-pinned CTAs. Hover Product / Features / Compare in the nav above to see the dropdowns."
            />

            <div className="top-nav-notes">
              <div className="top-nav-note">
                <span className="top-nav-note__num">01</span>
                <div>
                  <strong>Config-driven.</strong> Pass an array of nav items (link | dropdown). Every page renders the same structure. Active state is derived from <code>currentPath</code> — top-level item matching the path's prefix gets the brand-50 active pill.
                </div>
              </div>
              <div className="top-nav-note">
                <span className="top-nav-note__num">02</span>
                <div>
                  <strong>Hover-bridged dropdowns.</strong> An invisible 12px bridge sits between the trigger and the panel so the dropdown stays open while the cursor crosses. No flicker, no JS — pure CSS.
                </div>
              </div>
              <div className="top-nav-note">
                <span className="top-nav-note__num">03</span>
                <div>
                  <strong>Mobile drawer.</strong> Right-side slide-in (Apple ease curve, 320ms) with backdrop blur, body-scroll lock while open, Escape-to-close, and click-backdrop-to-close. Dropdowns become collapsible <code>&lt;details&gt;</code> groups inside the drawer.
                </div>
              </div>
              <div className="top-nav-note">
                <span className="top-nav-note__num">04</span>
                <div>
                  <strong>Sticky + frosted.</strong> 82% white background + 14px backdrop-blur + 1.1× saturate. Survives over any hero background variant — light, dark, or grid.
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── Footer ─── */}
        <footer className="gallery-footer">
          <Container>
            <div className="gallery-footer__inner">
              <span>MotorCut V4 · Component gallery · {new Date().getFullYear()}</span>
              <span>Maia · {new Date().toISOString().split("T")[0]}</span>
            </div>
          </Container>
        </footer>
      </main>
    </div>
    </>
  );
}

/* ─── Local helpers ─────────────────────────────────────────── */

function ComponentBlock({
  label,
  sub,
  children,
}: {
  label: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="component-block">
      <div className="component-block-meta">
        <span className="component-block-label">{label}</span>
        {sub && <span className="component-block-sub">{sub}</span>}
      </div>
      <div className="component-block-stage">{children}</div>
    </div>
  );
}

function LogoTile({
  label,
  filename,
  note,
  src,
  dark,
  ratio,
}: {
  label: string;
  filename: string;
  note: string;
  src: string;
  dark: boolean;
  ratio: string;
}) {
  return (
    <div className="logo-tile">
      <div className={`logo-tile-stage ${dark ? "logo-tile-stage--dark" : ""} ${ratio}`}>
        <Image
          src={src}
          alt={label}
          width={ratio === "aspect-square" ? 120 : 240}
          height={ratio === "aspect-square" ? 120 : 48}
          className="logo-tile-img"
        />
      </div>
      <div className="logo-tile-meta">
        <span className="logo-tile-label">{label}</span>
        <span className="logo-tile-note">{note}</span>
        <code className="logo-tile-filename">{filename}</code>
      </div>
    </div>
  );
}

function ContainerDemo({
  width,
  px,
  note,
}: {
  width: "compact" | "narrow" | "default" | "wide";
  px: number;
  note: string;
}) {
  return (
    <div className="container-demo">
      <div className="container-demo__stage">
        <Container width={width} className="container-demo__band">
          <span className="container-demo__band-label">{`width="${width}"`}</span>
          <span className="container-demo__band-px">{px}px</span>
        </Container>
      </div>
      <div className="container-demo__meta">
        <code>{`<Container width="${width}">`}</code>
        <span>{note}</span>
      </div>
    </div>
  );
}

function SurfaceLabel({
  name,
  desc,
  tone,
}: {
  name: string;
  desc: string;
  tone?: "on-dark";
}) {
  return (
    <div className={`surface-label ${tone === "on-dark" ? "surface-label--on-dark" : ""}`}>
      <code>{`surface="${name}"`}</code>
      <span>{desc}</span>
    </div>
  );
}

function SectionHeaderDemo({
  label,
  dark,
  children,
}: {
  label: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="section-header-demo">
      <span className="section-header-demo__label">{label}</span>
      <div className={`section-header-demo__stage ${dark ? "section-header-demo__stage--dark" : ""}`}>
        {children}
      </div>
    </div>
  );
}

function BackgroundCategoryGrid({ entries }: { entries: BgEntry[] }) {
  return (
    <div className="bg-grid">
      {entries.map((b) => (
        <div key={b.variant} className="bg-tile">
          <div className={`bg-tile__stage ${b.tone === "dark" ? "bg-tile__stage--dark" : ""}`}>
            <Background variant={b.variant} />
            <div className="bg-tile__content">
              <span className="bg-tile__variant-label">{b.variant}</span>
            </div>
          </div>
          <div className="bg-tile__meta">
            <span className="bg-tile__label">{b.label}</span>
            <span className="bg-tile__note">{b.note}</span>
            <code className="bg-tile__inspiration">21st.dev: {b.inspiredBy}</code>
          </div>
        </div>
      ))}
    </div>
  );
}