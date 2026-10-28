"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useGlobal } from "../../context-providers/global-provider";
import MobileNav from "../components/mobile-nav";
import TopNav from "../components/top-nav";
import Container from "../components/container";
import { activities } from "../../data/activities";

export default function Activities() {
    const { isLight, isMobile, toggleTheme } = useGlobal();

    if (isMobile === null) return null;

    return (
        <div className={`min-h-screen w-full bg-background text-foreground ${isLight ? "light" : "dark"}`}>
            {isMobile ? (
                <MobileNav isLight={isLight} toggleTheme={toggleTheme} />
            ) : (
                <TopNav isLight={isLight} toggleTheme={toggleTheme} />
            )}
            <Container as="main" className="flex flex-col gap-12 pb-24 pt-28 lg:gap-16 lg:pt-36">
                <header className="flex flex-col gap-4 font-geistMono">
                    <h1 className="sr-only">Activities</h1>
                    <p className="text-[14px] lowercase leading-relaxed tracking-[0.02em] opacity-60">
                        activities &amp; milestones.
                        <span
                            aria-hidden="true"
                            className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-foreground motion-reduce:animate-none"
                        />
                    </p>
                    <p className="max-w-[32rem] font-geistSans text-[16px] leading-[1.6] opacity-80 [text-wrap:pretty]">
                        A timeline of professional experience, community projects, certifications, and academic
                        achievements.
                    </p>
                </header>

                <section aria-label="Activity timeline" className="flex flex-col gap-10 font-geistMono">
                    {activities.map((activity, i) => (
                        <motion.article
                            key={activity.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.08 }}
                            className="group relative flex flex-col gap-4 border-l border-[color-mix(in_srgb,var(--foreground-color)_15%,transparent)] pl-6 transition-colors duration-200 hover:border-foreground"
                        >
                            {/* Timeline bullet */}
                            <span
                                aria-hidden="true"
                                className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[color-mix(in_srgb,var(--foreground-color)_40%,transparent)] transition-colors duration-200 group-hover:bg-foreground"
                            />

                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <time className="text-[12px] tabular-nums opacity-45">{activity.date}</time>
                                {activity.tags && (
                                    <div className="flex gap-2">
                                        {activity.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded bg-[color-mix(in_srgb,var(--foreground-color)_8%,transparent)] px-2 py-0.5 text-[11px] uppercase tracking-wide opacity-65"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <h2 className="text-[16px] font-medium leading-snug tracking-tight text-foreground">
                                {activity.title}
                            </h2>

                            <p className="max-w-[48rem] font-geistSans text-[14px] leading-relaxed opacity-75">
                                {activity.description}
                            </p>

                            {/* Render photo if available; otherwise omit and leave TODO placeholder */}
                            {activity.photo ? (
                                <div className="mt-2 max-w-[36rem] overflow-hidden rounded-[4px] border border-[color-mix(in_srgb,var(--foreground-color)_10%,transparent)]">
                                    <Image
                                        src={activity.photo}
                                        alt={activity.photoAlt ?? activity.title}
                                        width={800}
                                        height={500}
                                        loading="lazy"
                                        className="h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                                    />
                                </div>
                            ) : /* TODO: Add photo to public/activities/ and reference in src/data/activities.ts */
                            null}
                        </motion.article>
                    ))}
                </section>
            </Container>
        </div>
    );
}
