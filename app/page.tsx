"use client"; 
import { TopNav, type NavItem } from "@/components/marketing/top-nav";
import { Footer } from "@/components/marketing/footer";
import { AnnouncementBanner } from "@/components/marketing/announcement-banner";

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

export default function Home() {
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

      <main>
        {/* Page content goes here */}
      </main>

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
    </>
  );
}