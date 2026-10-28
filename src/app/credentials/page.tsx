"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobal } from "../../context-providers/global-provider";
import MobileNav from "../components/mobile-nav";
import TopNav from "../components/top-nav";
import { credentials, type CredentialCategory, type CredentialItem } from "../../data/credentials";

const CATEGORIES: CredentialCategory[] = ["All", "Certificate", "HKI", "Internship"];

const UNDERLINE =
    "underline decoration-[color-mix(in_srgb,var(--foreground-color)_35%,transparent)] decoration-1 underline-offset-[5px] outline-none transition-opacity duration-150 hover:decoration-foreground focus-visible:decoration-foreground";

export default function Credentials() {
    const { isLight, isMobile, toggleTheme } = useGlobal();
    const [selectedCategory, setSelectedCategory] = useState<CredentialCategory>("All");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredCredentials =
        selectedCategory === "All" ? credentials : credentials.filter((c) => c.category === selectedCategory);

    if (isMobile === null) return null;

    return (
        <div className={`min-h-screen w-full bg-background text-foreground ${isLight ? "light" : "dark"}`}>
            {isMobile ? (
                <MobileNav isLight={isLight} toggleTheme={toggleTheme} />
            ) : (
                <TopNav isLight={isLight} toggleTheme={toggleTheme} />
            )}
            <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 pb-24 pt-28 lg:gap-16 lg:px-[6vw] lg:pt-36">
                <header className="flex flex-col gap-6 font-geistMono lg:flex-row lg:items-end lg:justify-between">
                    <div className="flex flex-col gap-4">
                        <h1 className="sr-only">Credentials</h1>
                        <p className="text-[14px] lowercase leading-relaxed tracking-[0.02em] opacity-60">
                            credentials &amp; certifications.
                            <span
                                aria-hidden="true"
                                className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-foreground motion-reduce:animate-none"
                            />
                        </p>
                        <p className="max-w-[32rem] font-geistSans text-[16px] leading-[1.6] opacity-80 [text-wrap:pretty]">
                            Verified certifications, registered intellectual property (HKI), and professional
                            internships.
                        </p>
                    </div>

                    {/* Filter tabs */}
                    <div className="flex flex-wrap items-center gap-3 text-[13px] lowercase">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded px-2.5 py-1 transition-opacity ${
                                    selectedCategory === cat
                                        ? "bg-[color-mix(in_srgb,var(--foreground-color)_12%,transparent)] opacity-100"
                                        : "opacity-45 hover:opacity-80"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                <section
                    aria-label="Credentials list"
                    className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16"
                >
                    {filteredCredentials.map((item, idx) => {
                        const globalIndex = credentials.findIndex((c) => c.id === item.id);
                        return (
                            <figure
                                key={item.id}
                                className="group flex flex-col justify-between overflow-hidden rounded-[6px] border border-[color-mix(in_srgb,var(--foreground-color)_8%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_2%,transparent)] p-4 transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--foreground-color)_18%,transparent)]"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(globalIndex)}
                                    aria-label={`View ${item.title} larger`}
                                    className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[4px] bg-[color-mix(in_srgb,var(--foreground-color)_5%,transparent)] outline-none focus-visible:ring-1 focus-visible:ring-foreground cursor-pointer"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={item.width}
                                        height={item.height}
                                        loading="lazy"
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="h-full w-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                    />
                                    <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[rgb(0_0_0/0.65)] px-3 py-1 font-geistMono text-[11px] text-dark-foreground opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                                        zoom image
                                    </span>
                                </button>

                                <figcaption className="mt-4 flex flex-col gap-2 font-geistMono text-[13px]">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="rounded bg-[color-mix(in_srgb,var(--foreground-color)_10%,transparent)] px-2 py-0.5 text-[11px] uppercase tracking-wide opacity-75">
                                            {item.category}
                                        </span>
                                        <span className="tabular-nums opacity-45 text-[12px]">{item.date}</span>
                                    </div>

                                    <h2 className="font-semibold text-[15px] leading-snug tracking-tight text-foreground">
                                        {item.title}
                                    </h2>

                                    <p className="text-[13px] opacity-70">{item.issuer}</p>

                                    {item.credentialId && (
                                        <p className="font-mono text-[12px] tabular-nums opacity-50">
                                            ID: {item.credentialId}
                                        </p>
                                    )}

                                    {item.verifyLink && (
                                        <div className="mt-2">
                                            <a
                                                href={item.verifyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${UNDERLINE} text-[12px] opacity-60 hover:opacity-100`}
                                            >
                                                verify certificate ↗
                                            </a>
                                        </div>
                                    )}
                                </figcaption>
                            </figure>
                        );
                    })}
                </section>
            </main>

            <Lightbox index={openIndex} items={credentials} onClose={() => setOpenIndex(null)} onStep={setOpenIndex} />
        </div>
    );
}

/** Full-screen lightbox view of one credential */
function Lightbox({
    index,
    items,
    onClose,
    onStep,
}: {
    index: number | null;
    items: CredentialItem[];
    onClose: () => void;
    onStep: (i: number) => void;
}) {
    const step = useCallback(
        (by: number) => {
            if (index === null) return;
            const nextIndex = (index + by + items.length) % items.length;
            onStep(nextIndex);
        },
        [index, items.length, onStep]
    );

    useEffect(() => {
        if (index === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowRight") step(1);
            else if (e.key === "ArrowLeft") step(-1);
        };
        window.addEventListener("keydown", onKey);
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = overflow;
        };
    }, [index, onClose, step]);

    const item = index === null ? null : items[index];

    return (
        <AnimatePresence>
            {item && index !== null && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={item.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-[color-mix(in_srgb,var(--background-color)_94%,transparent)] p-4 sm:p-8 font-geistMono text-foreground backdrop-blur-sm"
                >
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="flex max-h-[92vh] max-w-[94vw] flex-col items-center gap-4 overflow-y-auto"
                    >
                        <div className="relative max-h-[70vh] overflow-hidden rounded-[4px] border border-[color-mix(in_srgb,var(--foreground-color)_12%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_3%,transparent)]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                                sizes="90vw"
                                className="h-auto max-h-[70vh] w-auto max-w-[90vw] object-contain"
                            />
                        </div>

                        <div className="flex w-full max-w-[800px] flex-col gap-2 rounded bg-[color-mix(in_srgb,var(--background-color)_90%,var(--foreground-color))] p-4 text-[13px] border border-[color-mix(in_srgb,var(--foreground-color)_10%,transparent)] shadow-lg">
                            <div className="flex items-start justify-between gap-4">
                                <span className="flex flex-col gap-1">
                                    <span className="font-semibold text-[15px]">{item.title}</span>
                                    <span className="opacity-70">
                                        {item.issuer} · {item.date}
                                    </span>
                                </span>
                                <span className="flex items-center gap-3 tabular-nums shrink-0">
                                    <button
                                        type="button"
                                        aria-label="Previous"
                                        onClick={() => step(-1)}
                                        className="opacity-50 outline-none transition-opacity hover:opacity-100 focus-visible:opacity-100 p-1"
                                    >
                                        ←
                                    </button>
                                    <span className="opacity-45 text-[12px]">
                                        {index + 1} / {items.length}
                                    </span>
                                    <button
                                        type="button"
                                        aria-label="Next"
                                        onClick={() => step(1)}
                                        className="opacity-50 outline-none transition-opacity hover:opacity-100 focus-visible:opacity-100 p-1"
                                    >
                                        →
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Close"
                                        onClick={onClose}
                                        className="ml-2 opacity-50 outline-none hover:opacity-100 p-1 text-[16px]"
                                    >
                                        ✕
                                    </button>
                                </span>
                            </div>

                            {item.details && item.details.length > 0 && (
                                <ul className="mt-1 flex flex-col gap-1 border-t border-[color-mix(in_srgb,var(--foreground-color)_8%,transparent)] pt-2 text-[12px] opacity-75">
                                    {item.details.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                            )}

                            {item.verifyLink && (
                                <div className="mt-1 pt-1">
                                    <a
                                        href={item.verifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${UNDERLINE} text-[12px] opacity-80 hover:opacity-100`}
                                    >
                                        verify certificate at issuer ↗
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
