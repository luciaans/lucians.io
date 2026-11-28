"use client";

import { useEffect, useState } from "react";
import { ABOUT_QUOTES } from "../../data/about-quotes";

const nextQuote = (current: number) => {
    const next = Math.floor(Math.random() * (ABOUT_QUOTES.length - 1));
    return next >= current ? next + 1 : next;
};

export default function QuotePanel() {
    const [index, setIndex] = useState(() => Math.floor(Math.random() * ABOUT_QUOTES.length));
    const [visibleText, setVisibleText] = useState("");
    const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
    const quote = ABOUT_QUOTES[index];

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReducedMotion(media.matches);
        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    useEffect(() => {
        if (reducedMotion === null) return;
        if (reducedMotion) {
            setVisibleText(quote.text);
            return;
        }

        let position = 0;
        let timer: ReturnType<typeof setTimeout>;
        const erase = () => {
            setVisibleText(quote.text.slice(0, --position));
            if (position) timer = setTimeout(erase, 16);
            else setIndex((current) => nextQuote(current));
        };
        const type = () => {
            setVisibleText(quote.text.slice(0, ++position));
            timer = setTimeout(position < quote.text.length ? type : erase, position < quote.text.length ? 32 : 4000);
        };

        setVisibleText("");
        timer = setTimeout(type, 200);
        return () => clearTimeout(timer);
    }, [index, quote.text, reducedMotion]);

    return (
        <button
            type="button"
            onClick={() => setIndex((current) => nextQuote(current))}
            className="flex h-32 w-full max-w-[22rem] flex-col justify-between border border-[color-mix(in_srgb,var(--foreground-color)_12%,transparent)] bg-[color-mix(in_srgb,var(--foreground-color)_3%,transparent)] p-3 text-left font-geistMono text-[12px] leading-[1.4] transition-colors hover:border-[color-mix(in_srgb,var(--foreground-color)_24%,transparent)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-foreground"
        >
            <span className="sr-only">
                “{quote.text}” — {quote.author}
            </span>
            <span aria-hidden="true" className="block">
                <span className="block opacity-55">~/lucians $ fortune dev</span>
                <span className="mt-1 block">
                    {visibleText}
                    <span className="animate-blink motion-reduce:animate-none">█</span>
                </span>
            </span>
            <span aria-hidden="true" className="flex justify-end">
                <span className="text-right opacity-55">— {quote.author}</span>
            </span>
        </button>
    );
}
