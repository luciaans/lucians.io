"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGlobal } from "../../context-providers/global-provider";
import MobileNav from "../components/mobile-nav";
import TopNav from "../components/top-nav";
import Container from "../components/container";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { DiscordLogoIcon } from "@phosphor-icons/react/dist/csr/DiscordLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/csr/InstagramLogo";
import NowPlaying from "../components/now-playing/NowPlaying";
import QuotePanel from "./quote-panel";
import Toolkit from "./toolkit";

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/luciaans", icon: GithubLogoIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kikialqadrie/", icon: LinkedinLogoIcon },
    { label: "Discord", href: "https://discord.com/users/867236993683816458", icon: DiscordLogoIcon },
    { label: "Instagram", href: "https://www.instagram.com/kikiinyaa/", icon: InstagramLogoIcon },
];

export default function AboutPage() {
    const { isLight, isMobile, toggleTheme } = useGlobal();
    const [imgSrc, setImgSrc] = useState("/profile.jpg");

    if (isMobile === null) return null;

    return (
        <div className={`min-h-screen w-full bg-background text-foreground ${isLight ? "light" : "dark"}`}>
            {isMobile ? (
                <MobileNav isLight={isLight} toggleTheme={toggleTheme} />
            ) : (
                <TopNav isLight={isLight} toggleTheme={toggleTheme} />
            )}

            <Container as="main" className="flex flex-col gap-8 pb-24 pt-24 lg:gap-14 lg:pt-28">
                {/* Header */}
                <header className="flex flex-col gap-4 font-geistMono">
                    <h1 className="sr-only">About Me</h1>
                    <p className="text-[14px] lowercase leading-relaxed tracking-[0.02em] opacity-60">
                        about me.
                        <span
                            aria-hidden="true"
                            className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-foreground motion-reduce:animate-none"
                        />
                    </p>
                    <p className="max-w-[38rem] font-geistSans text-[16px] leading-[1.6] opacity-80 [text-wrap:pretty]">
                        Software engineer and Informatics Engineering graduate focused on systems development, Rust, and
                        building reliable digital tools.
                    </p>
                </header>

                {/* Hero profile grid */}
                <section aria-label="Profile and bio" className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* Left Column: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-start gap-5 lg:col-span-5"
                    >
                        <div className="group relative aspect-square w-full max-w-[22rem] overflow-hidden rounded-[8px] border border-[color-mix(in_srgb,var(--foreground-color)_12%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_4%,transparent)]">
                            <Image
                                src={imgSrc}
                                alt="Lucians (Kiki Alqadrie)"
                                fill
                                sizes="(max-width: 1024px) 100vw, 350px"
                                quality={90}
                                priority
                                className="object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-[1.02]"
                                onError={() => setImgSrc("/profile-placeholder.svg")}
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.4)] via-transparent to-transparent opacity-60" />
                        </div>

                        <QuotePanel />

                        {/* Now playing */}
                        <div className="flex flex-col gap-2.5 font-geistMono text-[13px] opacity-85">
                            <NowPlaying />
                        </div>

                        {/* Social links */}
                        <div className="pt-1">
                            <p className="mb-3 font-geistMono text-[12px] uppercase tracking-wider opacity-50">
                                Connect
                            </p>
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 font-geistMono text-[14px]">
                                {SOCIALS.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 opacity-65 transition-opacity hover:opacity-100"
                                    >
                                        <Icon size={16} weight="bold" />
                                        <span className="underline decoration-1 underline-offset-[5px] decoration-[color-mix(in_srgb,var(--foreground-color)_35%,transparent)] hover:decoration-foreground">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bio Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-col gap-6 font-geistSans lg:col-span-7"
                    >
                        <div className="border border-[color-mix(in_srgb,var(--foreground-color)_12%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_3%,transparent)] p-4">
                            <p className="mb-4 border-b border-[color-mix(in_srgb,var(--foreground-color)_8%,transparent)] pb-2 font-geistMono text-[11px] opacity-50">
                                ~/lucians $ cat about.txt
                            </p>
                            <div className="flex flex-col divide-y divide-[color-mix(in_srgb,var(--foreground-color)_10%,transparent)] text-left text-[15px] leading-[1.75] opacity-85 [text-wrap:pretty] xl:text-justify">
                                <p className="py-4 first:pt-0 last:pb-0">
                                    Hi, I&apos;m{" "}
                                    <strong className="font-semibold text-foreground">
                                        Sayyid M. Rizqi R. Al Qadrie
                                    </strong>
                                    , but friends and colleagues know me simply as{" "}
                                    <strong className="font-semibold text-foreground">Kiki</strong> (or{" "}
                                    <strong className="font-semibold text-foreground">Lucians</strong> on the web). I am
                                    an Informatics Engineering graduate with a primary focus on Software Engineering and
                                    Systems Development.
                                </p>
                                <p className="py-4 first:pt-0 last:pb-0">
                                    During my academic journey at Universitas Muhammadiyah Pontianak (graduating with a
                                    3.83/4.00 GPA), I developed a solid foundation in software architecture, algorithmic
                                    problem solving, and data analytics. I interned at{" "}
                                    <strong className="font-medium text-foreground">Diskominfo Kota Pontianak</strong>{" "}
                                    (Sectoral Statistics Division), where I built interactive demographic visualization
                                    dashboards and public-facing data platforms.
                                </p>
                                <p className="py-4 first:pt-0 last:pb-0">
                                    Currently, I am diving deep into{" "}
                                    <strong className="font-medium text-foreground">Rust</strong> and systems-level
                                    programming—exploring memory safety, zero-cost abstractions, and concurrency
                                    alongside modern web technologies like Next.js and React.
                                </p>
                                <p className="py-4 first:pt-0 last:pb-0">
                                    Outside of building systems, I am an avid music listener with an extensive
                                    appreciation across diverse genres, artists, and discographies. Music is my constant
                                    companion and creative catalyst for focus and flow state while coding.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <Toolkit />
            </Container>
        </div>
    );
}
