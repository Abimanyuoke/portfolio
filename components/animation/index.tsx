"use client"

import React from "react";
import html from "@/public/techStack/html.svg";
import css from "@/public/techStack/css.svg";
import js from "@/public/techStack/js.svg";
import nodejs from "@/public/techStack/nodejs.svg";
import ts from "@/public/techStack/typescript.svg";
import tailwind from "@/public/techStack/tailwindcss.svg";
import nextjs from "@/public/techStack/nextjs2.svg";
import mySQL from "@/public/techStack/mysql.svg";
import react from "@/public/techStack/reactjs.svg";
import figma from "@/public/techStack/figma.svg";
import firebase from "@/public/techStack/firebase.svg";
import mongodb from "@/public/techStack/mongodb.svg";
import vscode from "@/public/techStack/vscode.svg";
import github from "@/public/techStack/github.svg";
import git from "@/public/techStack/git.svg";
import python from "@/public/techStack/python.svg";
import photoshop from "@/public/techStack/ps.svg";
import postgreSQL from "@/public/techStack/postgresql.svg";
import bootstrap from "@/public/techStack/bootstrap.svg";
import vue from "@/public/techStack/vue.svg";
import prisma from "@/public/techStack/prisma.svg";
import vite from "@/public/techStack/vitejs.svg";
import supabase from "@/public/techStack/supabase.svg";
import vercel from "@/public/techStack/vercel.svg";
import TechItem from "./TechItem";
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
        { title: "PostgreSQL", ImgTech: postgreSQL },
        { title: "Bootstrap", ImgTech: bootstrap },
        { title: "Vite.js", ImgTech: vite },
        { title: "MySQL", ImgTech: mySQL },
    ];

    return (
        <div>
            <div className="pb-20">
                <div className="max-w-7xl mx-auto">
                    <h3
                        data-aos="fade-right"
                        data-aos-duration="500"
                        className="text-surface-50 font-medium xl:text-[36px] lg:text-[34px] md:text-[32px] sm:text-[30px] text-[28px] py-20">
                        I have used <span className="text-[#ffc95b]">30+ </span>programming langguages, frameworks, and digital tools{" "}
                    </h3>
                </div>
                <div className="space-y-4">
                    <Marquee direction="right" speed={50} loop={0}>
                        <div data-aos="fade-up" data-aos-duration="500" className="mx-auto">
                            <div className="items-center flex space-x-6">
                                {[...row1].map((item, i) => (
                                    <TechItem key={i} title={item.title} ImgTech={item.ImgTech} />
                                ))}
                            </div>
                        </div>
                    </Marquee>
                    <Marquee direction="left" speed={50} loop={0}>
                        <div data-aos="fade-up" data-aos-duration="500" className="mx-auto">
                            <div className="items-center flex space-x-6">
                                {[...row2].map((item, i) => (
                                    <TechItem key={i} title={item.title} ImgTech={item.ImgTech} />
                                ))}
                            </div>
                        </div>
                    </Marquee>
                    <Marquee direction="right" speed={50} loop={0}>
                        <div data-aos="fade-up" data-aos-duration="500" className="mx-auto">
                            <div className="items-center flex space-x-6">
                                {[...row3].map((item, i) => (
                                    <TechItem key={i} title={item.title} ImgTech={item.ImgTech} />
                                ))}
                            </div>
                        </div>
                    </Marquee>
                    <Marquee direction="left" speed={50} loop={0}>
                        <div data-aos="fade-up" data-aos-duration="500" className="mx-auto">
                            <div className="items-center flex space-x-5">
                                {[...row4].map((item, i) => (
                                    <TechItem key={i} title={item.title} ImgTech={item.ImgTech} />
                                ))}
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}