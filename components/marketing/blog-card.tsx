/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — BlogCard
   ───────────────────────────────────────────────────────────────────
   Editorial card for blog posts. Inspired by larsen66 / cards-slider-
   shadcnui (21st.dev) but adapted to our locked design system:
     - Card primitive (white surface, brand-bloom shadow, hover lift)
     - Brand-50 category pill (matches eyebrow language)
     - Manrope type with our display + body scale
     - Image gradient overlay → brand-soft (fades to bottom)
     - Hover: image scale-up, brand-tinted shadow upgrade, border highlight
     - Avatar + read time inlined — no separate Avatar/Badge primitives

   Works standalone in a 3-up grid AND inside <CardsSlider>.
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  /** Article URL. Wraps the entire card in a Link. */
  href: string;
  /** Cover image. Optional — fallback to gradient placeholder. */
  imageSrc?: string;
  imageAlt?: string;
  author?: {
    name: string;
    avatarSrc?: string;
  };
  date?: string;
  readTime?: string;
  className?: string;
}

export const BlogCard = React.forwardRef<HTMLAnchorElement, BlogCardProps>(
  (
    {
      category,
      title,
      description,
      href,
      imageSrc,
      imageAlt = "",
      author,
      date,
      readTime,
      className,
    },
    ref,
  ) => {
    const initial = author?.name?.[0]?.toUpperCase() ?? "M";

    return (
      <Link href={href} ref={ref} className={cn("blog-card-link", className)}>
        <Card className="blog-card">
          <div className="blog-card__media">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="blog-card__image"
              />
            ) : (
              <div className="blog-card__image-fallback" />
            )}
            <div className="blog-card__media-gradient" aria-hidden="true" />
            <span className="blog-card__category">{category}</span>
          </div>

          <div className="blog-card__body">
            <div className="blog-card__copy">
              <h3 className="blog-card__title">{title}</h3>
              <p className="blog-card__description">{description}</p>
            </div>

            <div className="blog-card__footer">
              {author && (
                <div className="blog-card__author">
                  <div className="blog-card__avatar" aria-hidden="true">
                    {author.avatarSrc ? (
                      <Image
                        src={author.avatarSrc}
                        alt=""
                        width={32}
                        height={32}
                      />
                    ) : (
                      <span>{initial}</span>
                    )}
                  </div>
                  <div className="blog-card__author-meta">
                    <span className="blog-card__author-name">{author.name}</span>
                    {date && <span className="blog-card__author-date">{date}</span>}
                  </div>
                </div>
              )}
              {readTime && (
                <span className="blog-card__read-time">
                  <Clock />
                  {readTime}
                </span>
              )}
            </div>
          </div>
        </Card>
      </Link>
    );
  },
);
BlogCard.displayName = "BlogCard";
