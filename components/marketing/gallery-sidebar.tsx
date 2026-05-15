"use client";

/* ═══════════════════════════════════════════════════════════════════
   MotorCut Gallery — Sidebar TOC
   ───────────────────────────────────────────────────────────────────
   Sticky left navigation with category grouping + active-section
   highlighting via IntersectionObserver. Active treatment lifts the
   V4 app sidebar DNA: brand-50 fill + brand-700 text + brand-200 ring.
   ═══════════════════════════════════════════════════════════════════ */

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type SidebarGroup = {
  label: string;
  items: { id: string; label: string; ref?: string }[];
};

interface GallerySidebarProps {
  groups: SidebarGroup[];
}

export function GallerySidebar({ groups }: GallerySidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const ids = groups.flatMap((g) => g.items.map((i) => i.id));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [groups]);

  return (
    <aside className="gallery-sidebar">
      <div className="gallery-sidebar__inner">
        <a href="#top" className="gallery-sidebar__brand" aria-label="Back to top">
          <Image
            src="/logos/motorcut-icon-circle-purple.png"
            alt=""
            width={32}
            height={32}
            className="gallery-sidebar__brand-icon"
          />
          <div className="gallery-sidebar__brand-text">
            <span className="gallery-sidebar__brand-name">MotorCut</span>
            <span className="gallery-sidebar__brand-meta">V4 · Component gallery</span>
          </div>
        </a>

        <nav className="gallery-sidebar__nav">
          {groups.map((group) => (
            <div key={group.label} className="gallery-sidebar__group">
              <span className="gallery-sidebar__group-label">{group.label}</span>
              <ul className="gallery-sidebar__items">
                {group.items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={cn(
                          "gallery-sidebar__item",
                          isActive && "gallery-sidebar__item--active",
                        )}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span className="gallery-sidebar__item-ref">{item.ref}</span>
                        <span className="gallery-sidebar__item-label">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
