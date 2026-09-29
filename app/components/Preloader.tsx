"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      },
    });

    // Animate counter from 0 to 100
    tl.to(counterObj, {
      val: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.floor(counterObj.val));
      },
    });

    // Pulse the sun avatar
    tl.to(
      ".preloader-sun",
      {
        rotate: 360,
        duration: 1.2,
        ease: "power2.inOut",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#fafaf9] p-8 sm:p-12 text-[#1c1917] select-none"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
        <span>Priyansh Sharma</span>
        <span>Forward Deployed Engineer</span>
      </div>

      {/* Center Mark & Message */}
      <div className="my-auto max-w-xl mx-auto text-center space-y-6">
        <div className="preloader-sun inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFC83B] items-center justify-center border-2 border-[#F2B928] shadow-sm mx-auto">
          <svg
            viewBox="0 0 36 36"
            fill="none"
            className="w-10 h-10 text-stone-900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="14" r="2.5" fill="currentColor" />
            <circle cx="24" cy="14" r="2.5" fill="currentColor" />
            <path
              d="M11 21C13 25 23 25 25 21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
            Building products end-to-end.
          </h2>
          <p className="text-sm font-sans text-stone-500 font-light">
            Listening to users ☼ shipping fast ✿ scaling systems.
          </p>
        </div>
      </div>

      {/* Bottom Counter */}
      <div className="flex items-end justify-between border-t border-stone-200/80 pt-6">
        <span className="text-xs font-mono text-stone-400">
          Bangalore, India · 2026
        </span>
        <div className="font-serif text-4xl sm:text-6xl text-stone-900 tracking-tight">
          <span ref={counterRef}>{progress}</span>
          <span className="text-stone-400 text-2xl sm:text-4xl ml-1">%</span>
        </div>
      </div>
    </div>
  );
}
