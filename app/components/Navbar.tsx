"use client";

import React from "react";
import { PERSONAL_INFO } from "../portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 apple-frosted transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 sm:py-5 flex items-center justify-between">
        {/* Sunny Smiley Avatar */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          aria-label="Priyansh Sharma - Back to top"
        >
          <div className="w-10 h-10 rounded-full bg-[#FFC83B] flex items-center justify-center shadow-xs border border-[#F2B928] select-none text-stone-900 transition-transform group-hover:rotate-12">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              className="w-6 h-6 text-stone-900"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="14" r="2" fill="currentColor" />
              <circle cx="24" cy="14" r="2" fill="currentColor" />
              <path
                d="M12 21C13.5 24 22.5 24 24 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="8" cy="18" r="1.5" fill="#ECA21C" opacity="0.7" />
              <circle cx="28" cy="18" r="1.5" fill="#ECA21C" opacity="0.7" />
            </svg>
          </div>
          <span className="font-serif text-lg font-medium text-stone-900 tracking-tight hidden sm:inline">
            Priyansh
          </span>
        </a>

        {/* Right Action: Get in touch linking to Cal.com */}
        <a
          href={PERSONAL_INFO.calCom}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs sm:text-sm font-medium hover:bg-stone-800 transition-all active:scale-95 shadow-xs"
        >
          <span>Get in touch</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
        </a>
      </div>
    </header>
  );
}
