"use client";

import React, { useEffect, useRef } from "react";
import { EXPERIENCES } from "../portfolioData";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading masked reveal on ScrollTrigger
      gsap.fromTo(
        ".exp-reveal-line",
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

      // Experience blocks reveal
      gsap.fromTo(
        ".experience-block",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-list-wrapper",
            start: "top 78%",
          },
        }
      );

      // Pen highlight right-to-left animation on scroll
      gsap.fromTo(
        ".exp-pen-highlight",
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".experience-list-wrapper",
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Pill Badge */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-800 text-sm font-serif bg-white/60">
            Work experience
          </div>
        </div>

        {/* Editorial Heading with GSAP Masked Reveal */}
        <div className="mb-12 sm:mb-16 max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.18] tracking-tight">
            <span className="mask-line">
              <span className="exp-reveal-line inline-block">
                Engineering roles scaling commercial
              </span>
            </span>
            <span className="mask-line">
              <span className="exp-reveal-line inline-block">
                AI suites, platforms, and <span className="italic font-light">enterprise products</span>.
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Leading 0→1 builds, optimizing critical infra, and deploying high-converting feature workflows.
          </p>
        </div>

        {/* Experience List with Generous Spacing & High-Detail Breakdown */}
        <div className="experience-list-wrapper space-y-16 sm:space-y-24">
          {EXPERIENCES.map((exp, idx) => (
            <article key={idx} className="experience-block space-y-6">
              {/* Header: Company, Role, Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-stone-200/70">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-stone-900">
                    {exp.company}
                  </h3>
                  <div className="text-sm sm:text-base font-sans font-medium text-stone-600 mt-1">
                    {exp.role} <span className="text-stone-400 font-normal">· {exp.type}</span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-mono text-stone-500">
                  {exp.period}
                </div>
              </div>

              {/* Stats Bar if present (MagicSlides) with soft yellow highlight */}
              {exp.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#f5f5f4] border border-stone-200/70">
                  {exp.stats.map((s, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <span className="font-serif text-xl sm:text-2xl text-stone-900 block font-semibold">
                        {s.value.includes("$") ? (
                          <mark className="exp-pen-highlight pen-highlight text-stone-900 font-serif font-semibold not-italic">
                            {s.value}
                          </mark>
                        ) : (
                          s.value
                        )}
                      </span>
                      <span className="text-xs text-stone-500 font-sans block">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Narrative Summary */}
              <p className="text-base text-stone-600 font-light leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Key Highlights & Features */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-stone-400 tracking-wider block mb-1">
                  Key Products Built &amp; Engineering Milestones:
                </span>
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-sans px-3 py-1 rounded-full bg-[#f5f5f4] text-stone-600 border border-stone-200/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
