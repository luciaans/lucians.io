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
import { MapPinIcon } from "@phosphor-icons/react/dist/csr/MapPin";
import { TerminalIcon } from "@phosphor-icons/react/dist/csr/Terminal";
import { CodeIcon } from "@phosphor-icons/react/dist/csr/Code";
import { SparkleIcon } from "@phosphor-icons/react/dist/csr/Sparkle";

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/luciaans", icon: GithubLogoIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kikialqadrie/", icon: LinkedinLogoIcon },
    { label: "Discord", href: "https://discord.com/users/867236993683816458", icon: DiscordLogoIcon },
    { label: "Instagram", href: "https://www.instagram.com/kikiinyaa/", icon: InstagramLogoIcon },
];

const SKILLS = [
    {
        category: "Languages",
        items: ["Rust", "TypeScript", "JavaScript", "Python", "SQL", "HTML / CSS"],
    },
    {
        category: "Frameworks & Web",
        items: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
        category: "Data & Systems",
        items: ["PostgreSQL", "Supabase", "GeoJSON", "Leaflet.js", "Data Analytics"],
    },
    {
        category: "Tools & Workflow",
        items: ["Git", "GitHub", "Linux", "Docker", "Vite", "Vercel"],
    },
];

const PRINCIPLES = [
    {
        number: "01",
        title: "Reliability First",
        description:
            "Write predictable, robust, and maintainable software. Systems should handle failure gracefully and stay rock solid under real-world usage.",
    },
    {
        number: "02",
        title: "Curiosity & Lower-Level Depth",
        description:
            "Currently deep-diving into Rust and systems programming to master memory management, concurrency, and performance from the bottom up.",
    },
    {
        number: "03",
        title: "Purpose-Driven Engineering",
        description:
            "From public-sector statistical dashboards to registered interactive digital media, the priority is delivering tangible utility and clean developer experience.",
    },
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

            <Container as="main" className="flex flex-col gap-14 pb-24 pt-28 lg:gap-20 lg:pt-36">
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
                <section aria-label="Profile and bio" className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Left Column: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col gap-5 lg:col-span-5"
                    >
                        <div className="group relative aspect-square w-full max-w-[22rem] overflow-hidden rounded-[8px] border border-[color-mix(in_srgb,var(--foreground-color)_12%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_4%,transparent)]">
                            <Image
                                src={imgSrc}
                                alt="Lucians (Kiki Alqadrie)"
                                fill
                                sizes="(max-width: 1024px) 100vw, 350px"
                                quality={90}
                                priority
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                onError={() => setImgSrc("/profile-placeholder.svg")}
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.4)] via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-geistMono text-[12px] text-white">
                                <span className="rounded bg-black/60 px-2 py-1 backdrop-blur-sm">@luciaans</span>
                                <span className="flex items-center gap-1.5 rounded bg-black/60 px-2 py-1 backdrop-blur-sm">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                    Available
                                </span>
                            </div>
                        </div>

                        {/* Quick meta details */}
                        <div className="flex flex-col gap-2.5 font-geistMono text-[13px] opacity-85">
                            <div className="flex items-center gap-2">
                                <MapPinIcon size={16} weight="bold" className="shrink-0 opacity-60" />
                                <span>Pontianak, Indonesia (GMT+7)</span>
                            </div>
                        </div>

                        {/* Developer Motto Terminal */}
                        <MottoTerminal />
                    </motion.div>

                    {/* Right Column: Bio Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-col justify-between gap-6 font-geistSans lg:col-span-7"
                    >
                        <div className="flex flex-col gap-4 text-[15px] leading-[1.7] opacity-85 [text-wrap:pretty]">
                            <p>
                                Hi, I&apos;m{" "}
                                <strong className="font-geistMono font-semibold text-foreground">
                                    Sayyid M. Rizqi R. Al Qadrie
                                </strong>
                                , but friends and colleagues know me simply as{" "}
                                <strong className="font-geistMono font-semibold text-foreground">Kiki</strong> (or{" "}
                                <strong className="font-geistMono font-semibold text-foreground">Lucians</strong> on the
                                web). I am an Informatics Engineering graduate with a primary focus on Software
                                Engineering and Systems Development.
                            </p>
                            <p>
                                During my academic journey at Universitas Muhammadiyah Pontianak (graduating with a
                                3.83/4.00 GPA), I developed a solid foundation in software architecture, algorithmic
                                problem solving, and data analytics. I interned at{" "}
                                <strong className="font-geistMono font-medium text-foreground">
                                    Diskominfo Kota Pontianak
                                </strong>{" "}
                                (Sectoral Statistics Division), where I built interactive demographic visualization
                                dashboards and public-facing data platforms.
                            </p>
                            <p>
                                Currently, I am diving deep into{" "}
                                <strong className="font-geistMono font-medium text-foreground">Rust</strong> and
                                systems-level programming—exploring memory safety, zero-cost abstractions, and
                                concurrency alongside modern web technologies like Next.js and React.
                            </p>
                            <p>
                                Outside of building systems, I am an avid music listener with an extensive appreciation
                                across diverse genres, artists, and discographies. Music is my constant companion and
                                creative catalyst for focus and flow state while coding.
                            </p>
                        </div>

                        {/* Social links row */}
                        <div className="pt-2">
                            <p className="font-geistMono text-[12px] uppercase tracking-wider opacity-50 mb-3">
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
                </section>

                {/* Skills / Tech Stack */}
                <section aria-label="Skills & Technologies" className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 font-geistMono text-[13px] uppercase tracking-wider opacity-60">
                        <TerminalIcon size={16} weight="bold" />
                        <h2>Technical Toolkit</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {SKILLS.map((skillGroup, idx) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: idx * 0.06 }}
                                className="flex flex-col gap-3 rounded-[6px] border border-[color-mix(in_srgb,var(--foreground-color)_10%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_3%,transparent)] p-4 font-geistMono"
                            >
                                <span className="text-[12px] font-medium text-[var(--muted-color)]">
                                    {skillGroup.category}
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded bg-[color-mix(in_srgb,var(--foreground-color)_7%,transparent)] px-2 py-0.5 text-[12px] opacity-85"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Engineering Philosophy */}
                <section aria-label="Engineering Philosophy" className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 font-geistMono text-[13px] uppercase tracking-wider opacity-60">
                        <CodeIcon size={16} weight="bold" />
                        <h2>Engineering Philosophy</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {PRINCIPLES.map((principle, idx) => (
                            <motion.article
                                key={principle.number}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: idx * 0.08 }}
                                className="flex flex-col gap-2 rounded-[6px] border border-[color-mix(in_srgb,var(--foreground-color)_10%,transparent)] p-5"
                            >
                                <div className="flex items-center justify-between font-geistMono">
                                    <span className="text-[12px] opacity-40">{principle.number}</span>
                                    <SparkleIcon size={14} weight="bold" className="opacity-30" />
                                </div>
                                <h3 className="font-geistMono text-[15px] font-medium tracking-tight text-foreground">
                                    {principle.title}
                                </h3>
                                <p className="font-geistSans text-[14px] leading-relaxed text-[var(--muted-color)] [text-wrap:pretty]">
                                    {principle.description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    );
}

function MottoTerminal() {
    return (
        <div className="w-full max-w-[22rem] overflow-hidden rounded-[8px] border border-[color-mix(in_srgb,var(--foreground-color)_12%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_3%,transparent)] font-geistMono">
            {/* Terminal bar */}
            <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--foreground-color)_10%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_5%,transparent)] px-3 py-2">
                <div className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                </div>
                <span className="text-[11px] lowercase tracking-wider opacity-50">motto.sh</span>
                <div className="w-8" />
            </div>

            {/* Terminal body */}
            <div className="flex flex-col gap-2 p-3.5 text-[12px] leading-relaxed">
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted-color)]">
                    <span className="font-semibold text-[#c87852]">luci@arch</span>
                    <span className="opacity-40">:</span>
                    <span className="text-emerald-500/80">~</span>
                    <span className="opacity-40">$</span>
                    <span className="text-foreground/90">cat motto.txt</span>
                </div>
                <p className="border-l border-[#c87852]/60 pl-2.5 text-[13px] italic text-foreground/90">
                    &ldquo;Stay curious, build reliable systems, and keep exploring.&rdquo;
                </p>
                <div className="flex items-center gap-1 pt-0.5 text-[11px] text-[var(--muted-color)]">
                    <span className="font-semibold text-[#c87852]">luci@arch</span>
                    <span className="opacity-40">:</span>
                    <span className="text-emerald-500/80">~</span>
                    <span className="opacity-40">$</span>
                    <span
                        aria-hidden="true"
                        className="inline-block h-[1.1em] w-[0.55em] animate-blink bg-foreground"
                    />
                </div>
            </div>
        </div>
    );
}
