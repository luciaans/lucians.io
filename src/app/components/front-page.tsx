"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGlobal } from "../../context-providers/global-provider";
import Cited from "./citation";
import Container from "./container";
import type { PondStats } from "./koi-pond/koi-pond";
import { SOURCES } from "../data/sources";

const SOCIALS = [
    { label: "github", href: "https://github.com/luciaans" }, // TODO: ganti dengan link GitHub kamu
    { label: "discord", href: "https://discord.com/users/867236993683816458" },
    { label: "instagram", href: "https://www.instagram.com/kikiinyaa/" },
];

const UNDERLINE =
    "underline decoration-[color-mix(in_srgb,var(--foreground-color)_35%,transparent)] decoration-1 underline-offset-[5px] outline-none transition-opacity duration-150 hover:decoration-foreground focus-visible:decoration-foreground";

// TODO: Replace with your personal 2-line tagline
const QuoteLines = () => (
    <>
        turning complex data into clarity,
        <br />
        crafting thoughtful software
        <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-foreground motion-reduce:animate-none"
        />
    </>
);

const Socials = ({ className }: { className?: string }) => (
    <p className={className}>
        {SOCIALS.map(({ label, href }, i) => (
            <span key={label}>
                {i > 0 && <span className="opacity-40"> / </span>}
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${UNDERLINE} opacity-60 hover:opacity-100 focus-visible:opacity-100`}
                >
                    {label}
                </a>
            </span>
        ))}
    </p>
);

const FrontPage = ({ isLight, stats }: { isLight: boolean; stats: PondStats }) => {
    const { isMobile } = useGlobal();

    if (isMobile === null) return null;
    return isMobile ? mobilePage() : desktopPage({ isLight, stats });
};

const desktopPage = ({ isLight, stats }: { isLight: boolean; stats: PondStats }) => {
    return (
        <Container
            as="header"
            className="relative flex h-full flex-col justify-end gap-10 bg-transparent pb-32 pt-32 text-foreground [@media(max-height:720px)]:gap-6 [@media(max-height:720px)]:pb-12 [@media(max-height:720px)]:pt-20"
        >
            {stats.koi > 0 && (
                <div
                    data-koi-avoid
                    aria-hidden="true"
                    className="absolute right-6 top-8 font-geistMono text-[11px] leading-relaxed tabular-nums lg:right-[20vw]"
                >
                    <div className="opacity-[0.32]">{stats.koi}</div>
                    {/* The pellet count flashes each time it changes, tying a click or a bite to the number. */}
                    <motion.div
                        key={stats.pellets}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.32 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {stats.pellets}
                    </motion.div>
                </div>
            )}
            <motion.blockquote
                data-koi-avoid
                className="font-geistMono text-[14px] lowercase leading-relaxed tracking-[0.02em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.4 }}
            >
                <QuoteLines />
            </motion.blockquote>
            <motion.div
                data-koi-avoid
                className="cited-prose max-w-[54rem] font-geistMono text-[15px] leading-[max(22px,3vh)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <h1>Hi, I&apos;m Lucians.</h1>
                <p>
                    An{" "}
                    <Cited source="unmuhpnk" isLight={isLight}>
                        Informatics Engineering
                    </Cited>{" "}
                    graduate focused on Data Analytics and Software Engineering.
                </p>
                <p>
                    Previously interned at{" "}
                    <Cited source="diskominfo" isLight={isLight}>
                        Diskominfo Kota Pontianak
                    </Cited>{" "}
                    and worked on{" "}
                    <Cited source="governmentProjects" isLight={isLight}>
                        government projects
                    </Cited>
                    .
                </p>
                <p>
                    Currently exploring AI, emerging technologies, and building{" "}
                    <Cited source="webGIS" isLight={isLight}>
                        web GIS
                    </Cited>{" "}
                    and data-driven applications.
                </p>
                <Socials className="mt-[1.5vh]" />
            </motion.div>
        </Container>
    );
};

// Hover cards need a pointer, so on touch the mentions link straight to each site/route.
const MobileLink = ({ source, children }: { source: string; children: ReactNode }) => {
    const src = SOURCES[source];
    if (src?.href?.startsWith("/")) {
        return (
            <Link href={src.href} className={UNDERLINE}>
                {children}
            </Link>
        );
    }
    return (
        <a href={src?.href ?? "#"} target="_blank" rel="noopener noreferrer" className={UNDERLINE}>
            {children}
        </a>
    );
};

const mobilePage = () => {
    return (
        // Top padding clears the floating nav pill.
        <Container
            as="header"
            className="flex h-full flex-col justify-end gap-8 bg-transparent pb-12 pt-28 font-geistMono text-foreground [@media(max-height:640px)]:gap-5 [@media(max-height:640px)]:pb-8"
        >
            <motion.blockquote
                data-koi-avoid
                className="text-[13px] lowercase leading-relaxed tracking-[0.02em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.4 }}
            >
                <QuoteLines />
            </motion.blockquote>
            <motion.div
                data-koi-avoid
                className="flex flex-col gap-3 text-[14px] leading-[1.6]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <h1>Hi, I&apos;m Lucians.</h1>
                <p>
                    An <MobileLink source="unmuhpnk">Informatics Engineering</MobileLink> graduate focused on Data
                    Analytics and Software Engineering.
                </p>
                <p>
                    Previously interned at <MobileLink source="diskominfo">Diskominfo Kota Pontianak</MobileLink> and
                    worked on <MobileLink source="governmentProjects">government projects</MobileLink>.
                </p>
                <p>
                    Currently exploring AI, emerging technologies, and building{" "}
                    <MobileLink source="webGIS">web GIS</MobileLink> and data-driven applications.
                </p>
                <Socials className="mt-2" />
            </motion.div>
        </Container>
    );
};

export default FrontPage;
