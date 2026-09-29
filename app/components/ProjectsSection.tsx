"use client";

import React, { useEffect, useRef, useState } from "react";
import { PROJECTS, Project } from "../portfolioData";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline masked text reveal on scroll
      gsap.fromTo(
        ".project-reveal-line",
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
            trigger: sectionRef.current,
            start: "top 82%",
          },
        }
      );

      // Staggered reveal on scroll for each project row
      gsap.fromTo(
        ".project-list-row",
        {
          opacity: 0,
          y: 32,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-list-wrapper",
            start: "top 80%",
          },
        }
      );

      // Pen highlight right-to-left animation on scroll
      gsap.fromTo(
        ".project-pen-highlight",
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-list-wrapper",
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      onMouseMove={handleMouseMove}
      className="py-20 md:py-28 border-t border-stone-200/80 relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Pill Badge */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-800 text-sm font-serif bg-white/60">
            Digital contributions
          </div>
        </div>

        {/* Editorial Heading with GSAP Masked Reveal */}
        <div className="mb-12 sm:mb-16 max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.18] tracking-tight">
            <span className="mask-line">
              <span className="project-reveal-line inline-block">
                Selected works &amp; products shipped
              </span>
            </span>
            <span className="mask-line">
              <span className="project-reveal-line inline-block">
                from <span className="italic font-light">zero to high-scale</span> volume.
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Every product below was built with obsessive focus on real customer pain, rapid shipping cadence, and business revenue.
          </p>
        </div>

        {/* Clean Editorial List View for the 10 Projects in Exact Order */}
        <div className="projects-list-wrapper divide-y divide-stone-200/80 border-t border-b border-stone-200/80">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="project-list-row py-7 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group transition-colors duration-150 hover:bg-stone-50/70 px-2 sm:px-4 rounded-xl cursor-pointer block"
            >
              {/* Left Column: Title, Category Pill, Metric Badge & Description */}
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 group-hover:text-[#2563eb] transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  <span className="text-xs font-sans text-stone-500 border border-stone-200 rounded-full px-2.5 py-0.5 bg-white">
                    {project.category}
                  </span>

                  {project.metricBadge && (
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full project-pen-highlight pen-highlight text-stone-900 border border-[#FDE047]/60">
                      {project.metricBadge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Right Column: View Project Link Indicator */}
              <div className="shrink-0 pt-1">
                <div className="inline-flex items-center gap-1 text-sm font-serif italic text-stone-600 group-hover:text-stone-950 transition-colors">
                  <span>View project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Floating Hover Image Preview with Smooth Fade In / Fade Out */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-40 hidden md:block transition-[left,top] duration-100 ease-out"
        style={{
          left: `${Math.min(mousePos.x + 28, typeof window !== "undefined" ? window.innerWidth - 440 : mousePos.x + 28)}px`,
          top: `${Math.max(20, Math.min(mousePos.y - 140, typeof window !== "undefined" ? window.innerHeight - 290 : mousePos.y - 140))}px`,
        }}
      >
        <div
          className={`w-[380px] lg:w-[420px] p-2 bg-white rounded-2xl shadow-2xl border border-stone-200/90 overflow-hidden transition-all duration-300 ease-out transform ${
            hoveredProject
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 pointer-events-none translate-y-2"
          }`}
        >
          {hoveredProject && (
            <>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                <img
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-2 pt-2 pb-1 flex items-center justify-between text-xs">
                <span className="font-serif font-medium text-stone-900">
                  {hoveredProject.title}
                </span>
                <span className="font-mono text-stone-500 text-[11px]">
                  {hoveredProject.category}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

