import React from "react";
import html from "@/public/techStack/html.svg";
import css from "@/public/techStack/css.svg";
import js from "@/public/techStack/js.svg";
import nodejs from "@/public/techStack/nodejs.svg";
import ts from "@/public/techStack/typescript.svg";
import tailwind from "@/public/techStack/tailwindcss.svg";
import nextjs from "@/public/techStack/nextjs2.svg";
import react from "@/public/techStack/reactjs.svg";
import figma from "@/public/techStack/figma.svg";
import firebase from "@/public/techStack/firebase.svg";
import mongodb from "@/public/techStack/mongodb.svg";
import vscode from "@/public/techStack/vscode.svg";
import github from "@/public/techStack/github.svg";
import git from "@/public/techStack/git.svg";
import python from "@/public/techStack/python.svg";
import photoshop from "@/public/techStack/ps.svg";
import TechItem from "./TechItem";
import Marquee from "react-fast-marquee";
import { StaticImageData } from "next/image";

interface ItemProops {
    title: string;
    IMGUrl: StaticImageData;
}

export default function TechStack() {
    const row1: ItemProops[] = [
        {
            title: "HTML",
            IMGUrl: html,
        },
        {
            title: "CSS",
            IMGUrl: css,
        },
        {
            title: "JavaScript",
            IMGUrl: js,
        },
        {
            title: "Node.js",
            IMGUrl: nodejs,
        },
        {
            title: "TypeScript",
            IMGUrl: ts,
        },
        {
            title: "TailwindCSS",
            IMGUrl: tailwind,
        },
    ];
    const row2: ItemProops[] = [
        {
            title: "Next.js",
            IMGUrl: nextjs,
        },
        {
            title: "React.js",
            IMGUrl: react,
        },
        {
            title: "Figma",
            IMGUrl: figma,
        },
    ];
    const row3: ItemProops[] = [
        {
            title: "Firebase",
            IMGUrl: firebase,
        },
        {
            title: "MongoDB",
            IMGUrl: mongodb,
        },
        {
            title: "VSCode",
            IMGUrl: vscode,
        },
        {
            title: "Github",
            IMGUrl: github,
        },
        {
            title: "Git",
            IMGUrl: git,
        },
    ];
    const row4: ItemProops[] = [
        {
            title: "Python",
            IMGUrl: python,
        },
        {
            title: "Adobe_Photoshop",
            IMGUrl: photoshop,
        },
        {
            title: "JavaScript",
            IMGUrl: js,
        },
    ];

    return (
        <div className="pb-20">
            <h3
                data-aos="fade-right"
                data-aos-duration="500"
                className="text-surface-50 font-glancyr font-medium xl:text-[36px] lg:text-[34px] md:text-[32px] sm:text-[30px] text-[28px] pt-20 pb-2">
                We have used <span className="text-oranges-300">30+ </span>programming langguages, frameworks, and digital tools{" "}
            </h3>
            <div className="space-y-4">
                <Marquee direction="right" speed={50}  gradient={true} gradientColor="black" gradientWidth={60}>
                    <div data-aos="fade-up" data-aos-duration="500" className="marquee-row marquee-right mt-8 lg:mx-auto">
                        <div className="marquee-content flex gap-6">
                            {[...row1, ...row1].map((item, i) => (
                                <TechItem key={i} title={item.title} IMGUrl={item.IMGUrl} />
                            ))}
                        </div>
                    </div>
                </Marquee>
                <Marquee direction="left" speed={50}  gradient={true} gradientColor="black" gradientWidth={60}>
                    <div data-aos="fade-up" data-aos-duration="500" className="marquee-row marquee-left mx-auto">
                        <div className="marquee-content flex gap-6">
                            {[...row2, ...row2].map((item, i) => (
                                <TechItem key={i} title={item.title} IMGUrl={item.IMGUrl} />
                            ))}
                        </div>
                    </div>
                </Marquee>
                <Marquee direction="right" speed={50}  gradient={true} gradientColor="black" gradientWidth={60}>
                    <div data-aos="fade-up" data-aos-duration="500" className="marquee-row marquee-right lg:mx-auto">
                        <div className="marquee-content flex gap-6">
                            {[...row3, ...row3].map((item, i) => (
                                <TechItem key={i} title={item.title} IMGUrl={item.IMGUrl} />
                            ))}
                        </div>
                    </div>
                </Marquee>
                <Marquee direction="left" speed={50}  gradient={true} gradientColor="black" gradientWidth={60}>
                    <div data-aos="fade-up" data-aos-duration="500" className="marquee-row marquee-left mx-auto">
                        <div className="marquee-content flex gap-6">
                            {[...row4, ...row4].map((item, i) => (
                                <TechItem key={i} title={item.title} IMGUrl={item.IMGUrl} />
                            ))}
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
}