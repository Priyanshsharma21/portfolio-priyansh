"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-stone-200/80 bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FFC83B] flex items-center justify-center border border-[#F2B928]">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              className="w-5 h-5 text-stone-900"
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
            </svg>
          </div>
          <div>
            <span className="font-serif text-base text-stone-900 font-medium block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-stone-500 font-sans">
              Forward Deployed Engineer · IndianAppGuy / MagicSlides
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-stone-500 font-sans">
          <span>Making software with craft ☼ &amp; intention ✿</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-stone-950 transition-colors inline-flex items-center gap-1"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
