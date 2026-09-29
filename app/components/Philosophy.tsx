"use client";

import React, { useEffect, useRef } from "react";
import { Users, BarChart3, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal on ScrollTrigger
      gsap.fromTo(
        ".philosophy-reveal-line",
        {
          y: "115%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards staggered reveal
      gsap.fromTo(
        ".philosophy-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Pen highlight right-to-left animation on scroll
      gsap.fromTo(
        ".philosophy-pen-highlight",
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tenets = [
    {
      icon: Users,
      title: "Talk Directly With Customers",
      subtitle: "Zero distance between user pain and live code",
      description:
        "I don't wait for second-hand specs or static backlogs. I jump on calls directly with free and enterprise users, understand their real-world workflows, and translate support requests into shipped production features within 24 to 48 hours.",
      highlight: "250+ Direct Customer Calls",
    },
    {
      icon: BarChart3,
      title: "Stats & Telemetry-Backed Decisions",
      subtitle: "Code exists to drive measurable business outcomes",
      description:
        "I rely heavily on user activity, funnel drop-offs, and revenue telemetry to determine what features to build. Every architectural decision is rooted in real usage metrics — helping scale platforms to $750K+ total volume and $330K+ ARR.",
      highlight: "Telemetry-Driven Roadmap",
    },
    {
      icon: Rocket,
      title: "Ship Fast & Iterate on Market Demand",
      subtitle: "Launch 0→1, observe live behavior, refine relentlessly",
      description:
        "Great products are forged in production, not over-engineered in isolation. I believe in extreme shipping velocity: build the core feature cleanly, deploy it to live users immediately, and evolve the app rapidly according to what customers actually demand.",
      highlight: "Days, Not Months",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Pill Badge */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-800 text-sm font-serif bg-white/60">
            Product engineering philosophy
          </div>
        </div>

        {/* Big Editorial Manifesto with Masked Reveal */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.18] tracking-tight">
            <span className="mask-line">
              <span className="philosophy-reveal-line inline-block">
                I&apos;m not a conventional developer who simply closes tickets.
              </span>
            </span>
            <span className="mask-line">
              <span className="philosophy-reveal-line inline-block">
                <span className="italic font-light">I build products end-to-end</span>, talk with customers, and{" "}
                <mark className="philosophy-pen-highlight pen-highlight text-stone-900 font-serif not-italic">
                  ship fast
                </mark>
                .
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            From discovering the real problem on user calls to architecting the backend, refining UI interactions, and monitoring telemetry — I own the full lifecycle of customer value.
          </p>
        </div>

        {/* 3 Pillars Grid with GSAP Animation and Soft Yellow Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {tenets.map((tenet, idx) => {
            const Icon = tenet.icon;
            return (
              <div
                key={idx}
                className="philosophy-card p-8 rounded-3xl bg-[#f5f5f4] border border-stone-200/80 flex flex-col justify-between space-y-6 hover:bg-[#f0efea] transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-2xs">
                    <Icon className="w-5 h-5 text-stone-800" />
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-stone-900 leading-snug">
                      {tenet.title}
                    </h3>
                    <p className="text-xs font-mono text-stone-500 mt-1">
                      {tenet.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    {tenet.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/70">
                  <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#FEF08A] text-stone-900 border border-[#FDE047]">
                    {tenet.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
