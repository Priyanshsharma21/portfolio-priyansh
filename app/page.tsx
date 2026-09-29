"use client";

import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import ProjectsSection from "./components/ProjectsSection";
import Experience from "./components/Experience";
import SkillsAwards from "./components/SkillsAwards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] selection:bg-[#FEF08A] selection:text-[#1c1917]">
      {/* Custom Pointer Cursor */}
      <CustomCursor />

      {/* GSAP Preloader */}
      {!loadingDone && (
        <Preloader onComplete={() => setLoadingDone(true)} />
      )}

      {/* Apple-style Frosted Glass Navbar */}
      <Navbar />

      <main>
        {/* Editorial Serif Hero with GSAP text reveal triggered precisely after preloader ends */}
        <Hero isReady={loadingDone} />

        {/* Product Engineering Philosophy */}
        <Philosophy />

        {/* Digital Contributions / Exact 10 Projects in List Style */}
        <ProjectsSection />

        {/* Work Experience Journey */}
        <Experience />

        {/* Recognition & Technical Capabilities */}
        <SkillsAwards />

        {/* Get In Touch */}
        <Contact />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
