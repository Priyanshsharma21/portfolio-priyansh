"use client";

import React, { useEffect, useRef } from "react";
import { SKILLS, AWARDS } from "../portfolioData";
import { Award, GraduationCap, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SkillsAwards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading masked reveal
      gsap.fromTo(
        ".skills-reveal-line",
        {
          y: "115%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1.05,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );

      // Animate awards cards
      gsap.fromTo(
        ".award-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".awards-grid-wrapper",
            start: "top 80%",
          },
        }
      );

      // Animate skill categories
      gsap.fromTo(
        ".skill-row",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-list-container",
            start: "top 82%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section 1: Recognition & Awards */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-800 text-sm font-serif bg-white/60">
            Recognition &amp; Milestones
          </div>
        </div>

        {/* Editorial Heading with GSAP Masked Reveal */}
        <div className="mb-12 sm:mb-16 max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.18] tracking-tight">
            <span className="mask-line">
              <span className="skills-reveal-line inline-block">
                Recognized achievements &amp;
              </span>
            </span>
            <span className="mask-line">
              <span className="skills-reveal-line inline-block">
                core <span className="italic font-light">technical proficiencies</span>.
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Proven track record of hackathon victories, community awards, and high-velocity stack execution.
          </p>
        </div>

        <div className="awards-grid-wrapper grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {AWARDS.map((award, idx) => (
            <div
              key={idx}
              className="award-card p-8 rounded-3xl bg-[#f5f5f4] border border-stone-200/80 space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700">
                {idx === 0 ? (
                  <Trophy className="w-5 h-5 text-amber-600" />
                ) : idx === 1 ? (
                  <Award className="w-5 h-5 text-blue-600" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-stone-700" />
                )}
              </div>
              <h3 className="text-xl font-serif text-stone-900 pt-1">
                {award.title}
              </h3>
              <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                {award.organization}
              </p>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2: Technical Capabilities & Stack */}
        <div className="skills-list-container mt-20 pt-16 border-t border-stone-200/80">
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-800 text-sm font-serif bg-white/60">
              Technical capabilities
            </div>
          </div>

          <div className="space-y-10">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="skill-row grid grid-cols-1 md:grid-cols-12 gap-4 pb-8 border-b border-stone-200/70"
              >
                <div className="md:col-span-4">
                  <h4 className="text-lg font-serif text-stone-900">
                    {category === "AppliedAI" ? "Applied AI & LLMs" : category}
                  </h4>
                  <span className="text-xs font-mono text-stone-400">
                    Production stack
                  </span>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-2.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#f5f5f4] text-stone-700 text-xs sm:text-sm font-sans border border-stone-200/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Adaptability Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-white border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h5 className="font-serif text-xl text-stone-900">
                &ldquo;Ship in any stack from day 1&rdquo;
              </h5>
              <p className="text-sm text-stone-600 font-light mt-1">
                Whether diving into legacy codebases or scaffolding new languages and runtimes, I ramp up and ship in days.
              </p>
            </div>
            <span className="text-xs font-mono text-stone-900 bg-[#FEF08A]/70 px-3 py-1.5 rounded-full border border-[#FDE047]/80 shrink-0 self-start sm:self-auto">
              High Adaptability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
