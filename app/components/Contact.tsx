"use client";

import React, { useState, useEffect, useRef } from "react";
import { PERSONAL_INFO } from "../portfolioData";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline masked text reveal on scroll
      gsap.fromTo(
        ".contact-reveal-line",
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
            start: "top 80%",
          },
        }
      );

      // Actions and subtitle reveal
      gsap.fromTo(
        ".contact-reveal-item",
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 76%",
          },
        }
      );

      // Right-to-left pen highlight on scroll
      gsap.fromTo(
        ".contact-pen-highlight",
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 76%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section ref={containerRef} id="contact" className="py-24 md:py-32 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Pill Badge */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-800 text-sm font-serif bg-white/60">
            Get in touch
          </div>
        </div>

        {/* Big Editorial Headline with masked line reveals and soft yellow highlight */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 leading-[1.15] tracking-tight">
            <span className="mask-line">
              <span className="contact-reveal-line inline-block">
                Let&apos;s build software that feels
              </span>
            </span>
            <span className="mask-line">
              <span className="contact-reveal-line inline-block">
                <span className="italic font-light">effortless</span> ☼ and ships{" "}
                <mark className="contact-pen-highlight pen-highlight text-stone-900 font-serif not-italic">
                  fast
                </mark>{" "}
                ✿
              </span>
            </span>
          </h2>
          <p className="contact-reveal-item text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Whether you&apos;re an early-stage founder needing a 0→1 MVP, an AI team scaling user-facing workflows, or a company looking for a Forward Deployed Engineer — my calendar and inbox are always open.
          </p>
        </div>

        {/* Main Get In Touch Button (Redirects to Cal.com) & Email Copy */}
        <div className="contact-reveal-item mt-10 sm:mt-12 flex flex-wrap items-center gap-4">
          <a
            href={PERSONAL_INFO.calCom}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white text-sm sm:text-base font-medium hover:bg-stone-800 transition-all shadow-xs active:scale-95"
          >
            <span>Get in touch / Book a call</span>
            <ArrowUpRight className="w-4 h-4 text-stone-400" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 text-sm font-mono hover:border-stone-500 transition-colors shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-stone-900" />
                <span className="text-stone-900 font-sans font-medium">Email Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-400" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Profile Links: LinkedIn & GitHub */}
        <div className="contact-reveal-item mt-14 pt-8 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-700 hover:text-stone-950 font-sans font-medium transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-stone-500" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-700 hover:text-stone-950 font-sans font-medium transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-stone-500" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>

          <div className="text-xs font-mono text-stone-400">
            Based in Bangalore, India · Available for global contracts &amp; roles
          </div>
        </div>
      </div>
    </section>
  );
}
