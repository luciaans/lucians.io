"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeIcon from "./theme-icon";

const LINKS = [
    { label: "luci", href: "/" },
    { label: "about", href: "/about" },
    { label: "projects", href: "/projects" },
    { label: "credentials", href: "/credentials" },
    { label: "activities", href: "/activities" },
];

const ITEM = "transition-opacity duration-150 hover:opacity-100 focus-visible:opacity-100 outline-none";

type TopNavProps = {
    isLight: boolean;
    toggleTheme: () => void;
    /** Keep the nav dark while it sits over a project cover. */
    overCover?: boolean;
    /** Let the koi pond show through on the home page. */
    transparent?: boolean;
};

export default function TopNav({ isLight, toggleTheme, overCover = false, transparent = false }: TopNavProps) {
    const pathname = usePathname();
    // A project's own page still counts as being in projects.
    const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
    const theme = overCover
        ? "bg-dark-background text-dark-foreground"
        : isLight
          ? "bg-light-background text-light-foreground"
          : "bg-dark-background text-dark-foreground";

    return (
        <nav
            data-koi-avoid
            aria-label="Main"
            // Named for view transitions, so the nav stays in place instead of fading out with the rest of the page.
            className={`fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-center gap-8 font-geistMono text-[13px] lowercase transition-colors duration-200 [view-transition-name:site-nav] ${
                transparent ? "bg-transparent text-foreground" : theme
            }`}
        >
            {LINKS.map(({ label, href }) => (
                <Link
                    key={href}
                    href={href}
                    aria-current={active(href) ? "page" : undefined}
                    className={`${ITEM} ${active(href) ? "opacity-100" : "opacity-50"}`}
                >
                    {label}
                </Link>
            ))}
            {/* A margin of dead space around the toggle, so a near miss doesn't drop food in the pond behind it. */}
            <span data-koi-ignore className="-m-4 flex p-4">
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
                    className={`${ITEM} opacity-50`}
                >
                    <ThemeIcon isLight={isLight} size={15} />
                </button>
            </span>
        </nav>
    );
}
