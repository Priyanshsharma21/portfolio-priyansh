"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest(".project-list-row") ||
          target.getAttribute("role") === "button";
        setIsHovered(!!clickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // High performance smooth interpolation loop
    const render = () => {
      // 0.35 lerp factor for crisp responsiveness without lag
      currentX += (mouseX - currentX) * 0.45;
      currentY += (mouseY - currentY) * 0.45;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-7px, -4px)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform hidden md:block transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      <div
        className={`transition-transform duration-150 ease-out ${
          isHovered ? "scale-115" : "scale-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          className="drop-shadow-sm select-none"
        >
          <path
            fill="#FFF"
            stroke="#000"
            strokeWidth="2"
            strokeLinejoin="round"
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
          />
        </svg>
      </div>
    </div>
  );
}
