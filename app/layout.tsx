import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyansh Sharma — Forward Deployed Engineer & Software Architect",
  description:
    "Portfolio of Priyansh Sharma — Forward Deployed Engineer at IndianAppGuy / MagicSlides. Building 0→1 multi-product AI suites, resilient systems, and 3D web experiences.",
  keywords: [
    "Priyansh Sharma",
    "Forward Deployed Engineer",
    "MagicSlides",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Three.js",
    "AI Agents",
    "LLM Suites",
  ],
  authors: [{ name: "Priyansh Sharma" }],
  creator: "Priyansh Sharma",
  openGraph: {
    title: "Priyansh Sharma — Forward Deployed Engineer",
    description:
      "Building 0→1 multi-product AI suites, resilient systems, and high-velocity web platforms.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#fafaf9] text-[#1c1917] antialiased selection:bg-[#FEF08A] selection:text-[#1c1917]">
        {children}
      </body>
    </html>
  );
}
