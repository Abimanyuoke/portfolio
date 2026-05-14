"use client"

import React from "react";
import Navbar from "../components/navbar";
import AnimationLanguages from "../components/animation";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Contact from "../components/contact";
import ScrollingBand from "@/components/scrolling/scrolling-band";
import AboutMe from "@/components/common/about-hero";
import JourneyTimeline from "./about/_components/vertical-roadmap/roadmap";
import AboutSection from "@/components/common/about-hero-section";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl min-h-screen mx-auto p-4">
          <img src="/image/gradient.png" alt="gradient img" className="absolute top-8 right-0 opacity-60 -z-1" />
          <Hero />
        </div>
        <AboutMe />
        <AboutSection/>
        <AnimationLanguages />
        {/* Journey Timeline */}
        <div className="relative mb-12">
          {/* Vertical Line */}
          <div>
            <JourneyTimeline />
          </div>
        </div>
        <Projects />
        <div id="contact">
          <Contact />
          <main className="relative min-h-screen bg-zinc-100 flex items-center justify-center overflow-hidden">

            <div className="relative w-full py-20 flex flex-col items-center justify-center">

              <ScrollingBand
                baseVelocity={-1}
                text="Custom Web Experiences"
                className="bg-black text-white py-4 rotate-[-5deg] scale-110 shadow-xl z-10"
              />

              <ScrollingBand
                baseVelocity={1}
                text="Innovative Self-Made Creations"
                className="bg-lime-400 text-black py-4 rotate-[5deg] scale-110 shadow-xl -mt-12 z-20"
              />

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
