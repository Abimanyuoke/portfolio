"use client"

import React from "react";
import html from "../../public/techStack/html.svg";
import css from "../../public/techStack/css.svg";
import js from "../../public/techStack/js.svg";
import nodejs from "../../public/techStack/nodejs.svg";
import ts from "../../public/techStack/typescript.svg";
import tailwind from "../../public/techStack/tailwindcss.svg";
import nextjs from "../../public/techStack/nextjs2.svg";
import mySQL from "../../public/techStack/mysql.svg";
import react from "../../public/techStack/reactjs.svg";
import figma from "../../public/techStack/figma.svg";
import firebase from "../../public/techStack/firebase.svg";
import mongodb from "../../public/techStack/mongodb.svg";
import vscode from "../../public/techStack/vscode.svg";
import github from "../../public/techStack/github.svg";
import git from "../../public/techStack/git.svg";
import python from "../../public/techStack/python.svg";
import photoshop from "../../public/techStack/ps.svg";
import postgre from "../../public/techStack/postgre.svg";
import bootstrap from "../../public/techStack/bootstrap.svg";
import vue from "../../public/techStack/vue.svg";
import prisma from "../../public/techStack/prisma.svg";
import vite from "../../public/techStack/vitejs.svg";
import supabase from "../../public/techStack/supabase.svg";
import vercel from "../../public/techStack/vercel.svg";
import TechItem from "./tech-item";
import Marquee from "react-fast-marquee";
import { StaticImageData } from "next/image";

interface ItemProops {
    title: string;
    ImgTech: StaticImageData;
}


export default function TechStack() {

    const row1: ItemProops[] = [
        { title: "HTML", ImgTech: html },
        { title: "CSS", ImgTech: css },
        { title: "JavaScript", ImgTech: js },
        { title: "Figma", ImgTech: figma },
        { title: "TailwindCSS", ImgTech: tailwind },
        { title: "Prisma", ImgTech: prisma },
    ];

    const row2: ItemProops[] = [
        { title: "Next.js", ImgTech: nextjs },
        { title: "React.js", ImgTech: react },
        { title: "Node.js", ImgTech: nodejs },
        { title: "Typescript", ImgTech: ts },
        { title: "Supabase", ImgTech: supabase },
        { title: "Vue.js", ImgTech: vue },

    ];

    const row3: ItemProops[] = [
        { title: "Firebase", ImgTech: firebase },
        { title: "MongoDB", ImgTech: mongodb },
        { title: "VSCode", ImgTech: vscode },
        { title: "Github", ImgTech: github },
        { title: "Git", ImgTech: git },
        { title: "Vercel", ImgTech: vercel },
    ];

    const row4: ItemProops[] = [
        { title: "Python", ImgTech: python },
        { title: "Adobe_Photoshop", ImgTech: photoshop },
        { title: "PostgreSQL", ImgTech: postgre },
        { title: "Bootstrap", ImgTech: bootstrap },
        { title: "Vite.js", ImgTech: vite },
        { title: "MySQL", ImgTech: mySQL },
    ];

    const renderRow = (data: ItemProops[]) => (
        <div className="flex items-center">
            {/* Kita bungkus dengan gap-8 sampai gap-12 yang konsisten */}
            <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8 ">
                {data.map((item, i) => (
                    <TechItem key={i} title={item.title} ImgTech={item.ImgTech} />
                ))}
            </div>
            <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
                {data.map((item, i) => (
                    <TechItem key={`dup-${i}`} title={item.title} ImgTech={item.ImgTech} />
                ))}
            </div>
        </div>
    );

    return (
        <div className="bg-white dark:bg-[#0a0a0a] overflow-hidden w-full">
            <div className="pb-20">
                <div className="max-w-7xl mx-auto p-4">
                    <h3
                        data-aos="fade-right"
                        className="text- dark:text-black mx-auto font-medium lg:text-[36px] md:text-[32px] text-[24px] py-16 md:py-24 leading-tight">
                        I have used <span className="text-[#ffc95b]">30+ </span>
                        programming languages, frameworks, and digital tools
                    </h3>
                </div>

                <div className="space-y-6 md:space-y-10">

                    {/* Row 1 */}
                    <Marquee direction="right" speed={50} gradient={false}>
                        {renderRow(row1)}
                    </Marquee>

                    {/* Row 2 */}
                    <Marquee direction="left" speed={45} gradient={false}>
                        {renderRow(row2)}
                    </Marquee>

                    {/* Row 3 */}
                    <Marquee direction="right" speed={40} gradient={false}>
                        {renderRow(row3)}
                    </Marquee>

                    {/* Row 4 */}
                    <Marquee direction="left" speed={55} gradient={false}>
                        {renderRow(row4)}
                    </Marquee>

                </div>
            </div>
        </div>
    );
}