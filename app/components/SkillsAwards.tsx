"use client";

import React, { useEffect, useRef } from "react";
import { SKILLS, ACHIEVEMENTS } from "../portfolioData";
import { Award, GraduationCap, Trophy, Sparkles, Store, Zap, Building2 } from "lucide-react";
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

      // Animate awards & achievement cards
      gsap.fromTo(
        ".award-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".awards-grid-wrapper",
            start: "top 80%",
          },
        }
      );

      // Pen highlight right-to-left animation on achievement metrics
      gsap.fromTo(
        ".ach-pen-highlight",
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".awards-grid-wrapper",
            start: "top 78%",
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

  const getAchievementIcon = (type: string) => {
    const iconClass = "w-5 h-5 text-stone-700 stroke-[1.75]";
    switch (type) {
      case "google":
        return <Sparkles className={iconClass} />;
      case "kingfisher":
        return <Store className={iconClass} />;
      case "photobooth":
        return <Zap className={iconClass} />;
      case "gov":
        return <Building2 className={iconClass} />;
      case "jsm":
        return <Trophy className={iconClass} />;
      case "functionup":
        return <Award className={iconClass} />;
      case "degree":
      default:
        return <GraduationCap className={iconClass} />;
    }
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section 1: Recognition & Achievements */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-800 text-sm font-serif bg-white/60">
            Achievements &amp; Brand Deployments
          </div>
        </div>

        {/* Editorial Heading with GSAP Masked Reveal */}
        <div className="mb-12 sm:mb-16 max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.18] tracking-tight">
            <span className="mask-line">
              <span className="skills-reveal-line inline-block">
                High-impact brand deployments,
              </span>
            </span>
            <span className="mask-line">
              <span className="skills-reveal-line inline-block">
                awards &amp; <span className="italic font-light">enterprise milestones</span>.
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            From deploying vision AI at Google Summits and scaling apps to 4,000+ Kingfisher outlets in IPL 2026, to winning global engineering honors.
          </p>
        </div>

        {/* 7 Core Achievements & Deployments in Responsive Grid */}
        <div className="awards-grid-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="award-card p-7 sm:p-8 rounded-3xl bg-[#f5f5f4] border border-stone-200/80 flex flex-col justify-between space-y-4 hover:bg-[#f0efea] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-2xs shrink-0">
                    {getAchievementIcon(item.iconType)}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full ach-pen-highlight pen-highlight text-stone-900 border border-[#FDE047]/60 shrink-0">
                    {item.metricBadge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-serif text-stone-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    {item.organization}
                  </p>
                </div>

                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
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
