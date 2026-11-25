"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { DiscordLogoIcon } from "@phosphor-icons/react/dist/csr/DiscordLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/csr/InstagramLogo";
import ThemeIcon from "./theme-icon";

const navLinks = [
    { label: "Luci", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Credentials", href: "/credentials" },
    { label: "Activities", href: "/activities" },
];

const secondaryLinks = [
    { label: "GitHub", href: "https://github.com/luciaans", icon: GithubLogoIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kikialqadrie/", icon: LinkedinLogoIcon },
    { label: "Discord", href: "https://discord.com/users/867236993683816458", icon: DiscordLogoIcon },
    { label: "Instagram", href: "https://www.instagram.com/kikiinyaa/", icon: InstagramLogoIcon },
];

interface MobileNavProps {
    isLight?: boolean;
    toggleTheme?: () => void;
}

export default function MobileNav({ isLight, toggleTheme }: MobileNavProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const fg = isLight ? "#262523" : "#fff7f0";
    const fgDim = isLight ? "rgba(38,37,35,0.35)" : "rgba(255,247,240,0.35)";
    const fgIcon = isLight ? "rgba(38,37,35,0.5)" : "rgba(255,247,240,0.5)";
    const bg = isLight ? "#f5f4f1" : "#1a1917";
    const pillBg = isLight ? "rgba(38,37,35,0.06)" : "rgba(255,247,240,0.06)";

    return (
        <>
            {/* Single persistent pill — always on top */}
            <div className="fixed left-3 right-3 top-[max(12px,env(safe-area-inset-top))] z-50 sm:left-6 sm:right-6">
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                    className="flex min-h-12 w-full cursor-pointer items-center justify-between rounded-full px-5 py-3 sm:px-6"
                    style={{ background: pillBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                >
                    <span className="font-inter text-[18px] font-normal tracking-normal" style={{ color: fg }}>
                        Lucians
                    </span>
                    <span className="relative flex h-6 w-6 items-center justify-center">
                        <AnimatePresence mode="wait">
                            {open ? (
                                <motion.div
                                    key="close"
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, rotate: 45 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 45 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <CloseIcon color={fgIcon} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="grid"
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, rotate: -45 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -45 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <GridIcon color={fgIcon} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </span>
                </button>
            </div>

            {/* Full screen overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        id="mobile-navigation"
                        className="fixed inset-0 z-40 overflow-y-auto overscroll-contain"
                        style={{ backgroundColor: bg }}
                    >
                        <div className="flex min-h-[100dvh] flex-col">
                            <nav
                                aria-label="Main"
                                className="flex flex-1 flex-col items-center justify-center gap-1 px-5 pb-6 pt-[max(88px,calc(env(safe-area-inset-top)+72px))]"
                            >
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.07 + 0.08, duration: 0.28, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="block text-center font-playfairDisplay text-[clamp(44px,11vw,88px)] font-bold leading-[1.16]"
                                            style={{ color: fg }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 px-5 pb-[max(28px,env(safe-area-inset-bottom))] pt-2">
                                {secondaryLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 font-inter text-[13px] tracking-wide"
                                            style={{ color: fgDim }}
                                        >
                                            {link.label}
                                            <Icon size={15} weight="bold" />
                                        </a>
                                    );
                                })}
                                {toggleTheme && (
                                    <button
                                        onClick={toggleTheme}
                                        aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
                                        className="flex h-10 w-10 cursor-pointer items-center justify-center"
                                        style={{ color: fgDim }}
                                    >
                                        <ThemeIcon isLight={Boolean(isLight)} size={18} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function GridIcon({ color }: { color: string }) {
    return (
        <svg width="20" height="20" viewBox="0 0 16 16" fill={color} aria-hidden="true">
            <circle cx="4" cy="4" r="1.5" />
            <circle cx="12" cy="4" r="1.5" />
            <circle cx="4" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
        </svg>
    );
}

function CloseIcon({ color }: { color: string }) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
        >
            <path d="M3 3L13 13M13 3L3 13" />
        </svg>
    );
}
