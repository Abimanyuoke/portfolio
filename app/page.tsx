"use client"

import React from "react";
import Navbar from "../components/navbar";
import AnimationLanguages from "../components/animation";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content with padding-top to account for fixed navbar */}
      <div className="pt-20">
        <div className="max-w-7xl min-h-screen mx-auto p-4">
          {/* image gradient */}
          <img src="/image/gradient.png" alt="gradient img" className="absolute top-8 right-0 opacity-60 -z-1" />
          <div className="h-0 w-[40rem] absolute top-[20%] right-[5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[-30deg] -z-10"></div>
          <Hero />
        </div>
        <AnimationLanguages />
        <Projects />
        <div id="contact">
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
