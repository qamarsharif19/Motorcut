import type { Metadata } from "next";
import { Manrope, Newsreader, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Italic serif for editorial accents inside display headlines —
// Stripe / Linear / Arc lift on this kind of mixed sans + serif italic.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "MotorCut — Photo editing software for car dealerships",
  description:
    "Photo editing software built for automotive dealerships. Background replacement, plate covers, showroom backgrounds. 350+ dealers. 14-day trial.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(manrope.variable, newsreader.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
