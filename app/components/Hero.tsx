"use client";

import React, { useEffect, useRef } from "react";
import { PERSONAL_INFO } from "../portfolioData";
import gsap from "gsap";

interface HeroProps {
  isReady?: boolean;
}

export default function Hero({ isReady = true }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isReady || animatedRef.current) return;
    animatedRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // GSAP masked text reveal effect (from forum topic 44603)
      tl.fromTo(
        ".hero-reveal-line",
        {
          y: "120%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1.15,
          stagger: 0.12,
          ease: "power4.out",
        }
      )
        .fromTo(
          ".hero-bio",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Pen highlight drawing from right to left
        .fromTo(
          ".hero-pen-highlight",
          {
            backgroundSize: "0% 100%",
          },
          {
            backgroundSize: "100% 100%",
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-stat-card",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section ref={containerRef} className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Headline in Bradley Ziffer Editorial Serif Style with GSAP Masked Reveal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif font-normal text-stone-900 leading-[1.14] tracking-tight">
          <span className="mask-line pb-1">
            <span className="hero-reveal-line inline-block">
              Hello, I engineer{" "}
              <span className="text-[#2563eb]">software</span>
            </span>
          </span>

          <span className="mask-line pb-1">
            <span className="hero-reveal-line inline-block">
              <span className="text-[#2563eb]">paradigms</span> that solve{" "}
              <span className="italic font-light">real problems</span>
            </span>
          </span>

          <span className="mask-line pb-1">
            <span className="hero-reveal-line inline-block">
              {/* Rotating Sun Icon (every 2 seconds) */}
              <span
                className="sun-spin-2s mx-1 sm:mx-2 text-stone-900 inline-flex items-center justify-center align-middle"
                title="Sun rotating every 2 seconds"
              >
                <svg
                  className="w-8 h-8 sm:w-11 sm:h-11 inline-block shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </span>{" "}
              and scale <span className="italic font-light">effortlessly</span>{" "}
              <span className="inline-block text-stone-900 align-middle">✿</span>
            </span>
          </span>
        </h1>

        {/* Narrative Subtitle expressing end-to-end product builder mindset */}
        <p className="hero-bio mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed font-sans font-light">
          I&apos;m not a conventional developer who just writes tickets —{" "}
          <span className="text-stone-900 font-medium">I build and ship products end-to-end</span>. On my journey as a Forward Deployed Engineer at IndianAppGuy &amp; MagicSlides, I interact directly with customers to understand their exact use cases, rely on user activity and telemetry to make smart roadmap decisions, and scale multi-product AI suites to{" "}
          <mark className="hero-pen-highlight pen-highlight text-stone-900 font-normal">
            $750K+ total volume
          </mark>{" "}
          and{" "}
          <mark className="hero-pen-highlight pen-highlight text-stone-900 font-normal">
            $330K+ ARR
          </mark>
          . I believe in shipping fast and relentlessly refining the app according to what users demand.
        </p>

        {/* Understated Metrics Row with Soft Yellow Accent Highlights */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-card space-y-1.5">
              <div className="flex items-center gap-2">
                <span
                  className={`font-serif text-2xl sm:text-3xl text-stone-900 tracking-tight ${
                    stat.isHighlight
                      ? "hero-pen-highlight pen-highlight border border-[#FDE047]/60 shadow-2xs inline-block"
                      : ""
                  }`}
                >
                  {stat.value}
                </span>
              </div>
              <div className="text-xs text-stone-500 font-sans font-normal leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
