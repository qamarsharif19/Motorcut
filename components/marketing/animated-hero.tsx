"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContainerScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 1] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleDimensions()
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-20 md:px-10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

      <div
        className="relative w-full max-w-7xl"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} />

        <Card rotate={rotate} scale={scale} />
      </div>
    </div>
  );
};

const Header = ({
  translate,
}: {
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="mx-auto mb-14 max-w-4xl text-center"
    >
      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
        🚗 AI Powered Vehicle Advertising
      </div>

      {/* Heading */}
      <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
        Best Car Photo Editing App to Create the Best Vehicle Adverts{" "}
        <span className="relative inline-block text-blue-500">
          in Seconds
          <svg
            className="absolute -bottom-3 left-0 w-full"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
        MotorCut is the best car photo editing app designed to take the hard
        work out of creating stunning vehicle adverts.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="https://app.motor-cut.com/auth/register"
          target="_blank"
          className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          Try for free!
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>

        <Link
          href="https://motorcut.com/book-meeting/"
          target="_blank"
          className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
        >
          Book a Demo!
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Card = ({
  rotate,
  scale,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformStyle: "preserve-3d",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4), 0 30px 80px rgba(59,130,246,0.15)",
      }}
      className="mx-auto w-full max-w-6xl rounded-[32px] border border-white/10 bg-[#111111] p-3 md:p-6"
    >
      <div className="overflow-hidden rounded-[24px] bg-gradient-to-b from-zinc-900 to-black">
        <div className="relative h-[24rem] w-full md:h-[42rem]">
          
          {/* YouTube Video */}
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/g-hAdRKZdkU?autoplay=1&mute=1&loop=1&playlist=g-hAdRKZdkU&controls=0&showinfo=0&rel=0"
            title="MotorCut Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </motion.div>
  );
};