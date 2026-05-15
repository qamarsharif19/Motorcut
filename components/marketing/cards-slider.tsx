"use client";

/* ═══════════════════════════════════════════════════════════════════
   MotorCut Website — CardsSlider
   ───────────────────────────────────────────────────────────────────
   Generic horizontal drag-to-scroll wrapper. Inspired by larsen66 /
   cards-slider-shadcnui (21st.dev) but generalised — accepts any
   children (BlogCard, FeatureCard, IconCard, future testimonials).

   Hover-revealed prev/next arrows on the left + right edges. Drag-
   constrained to the inner content width. Spring-animated programmatic
   scroll on arrow click.

   Usage:
     <CardsSlider>
       <BlogCard ... />
       <BlogCard ... />
       <BlogCard ... />
     </CardsSlider>
   ═══════════════════════════════════════════════════════════════════ */

import * as React from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CardsSliderProps {
  children: React.ReactNode;
  /** Slot width in pixels — the slider scrolls one card-width per arrow click. */
  cardWidth?: number;
  /** Horizontal gap between slots, in pixels. */
  gap?: number;
  className?: string;
}

export function CardsSlider({
  children,
  cardWidth = 360,
  gap = 24,
  className,
}: CardsSliderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const x = useMotionValue(0);

  React.useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setWidth(
          containerRef.current.scrollWidth - containerRef.current.offsetWidth,
        );
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [children]);

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const containerWidth = containerRef.current?.offsetWidth ?? 0;
    const step = Math.max(cardWidth + gap, containerWidth * 0.8);
    let nextX = direction === "left" ? currentX + step : currentX - step;
    nextX = Math.max(Math.min(nextX, 0), -width);
    animate(x, nextX, { type: "spring", stiffness: 280, damping: 32, mass: 0.9 });
  };

  return (
    <div className={cn("cards-slider", className)}>
      <button
        type="button"
        onClick={() => scrollTo("left")}
        className="cards-slider__arrow cards-slider__arrow--left"
        aria-label="Scroll left"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => scrollTo("right")}
        className="cards-slider__arrow cards-slider__arrow--right"
        aria-label="Scroll right"
      >
        <ChevronRight />
      </button>

      <motion.div ref={containerRef} className="cards-slider__viewport">
        <motion.div
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragElastic={0.08}
          style={{ x, gap: `${gap}px` }}
          className="cards-slider__track"
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="cards-slider__slot"
              style={{ width: cardWidth }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
