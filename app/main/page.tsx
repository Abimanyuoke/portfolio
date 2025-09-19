import React from "react";
import Navbar from "../components/navbar";
import AnimationLanguages from "../components/animation/index.";

export default function Main() {
    return (
        <main className="max-w-7xl min-h-screen mx-auto p-4">
            <Navbar/>
            {/* image gradient */}
            <img src="/image/gradient.png" alt="gradient img" className="absolute top-8 right-0 opacity-60 -z-1"/>
            <div className="h-0 w-[40rem] absolute top-[20%] right-[5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[-30deg] -z-10">
            </div>
        </main>
    )
}