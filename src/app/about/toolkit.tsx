import type { CSSProperties } from "react";
import { TerminalIcon } from "@phosphor-icons/react/dist/csr/Terminal";
import {
    siCss,
    siDocker,
    siExpress,
    siGit,
    siGithub,
    siHtml5,
    siJavascript,
    siLeaflet,
    siLinux,
    siNextdotjs,
    siNodedotjs,
    siPostgresql,
    siPython,
    siReact,
    siRust,
    siSqlite,
    siSupabase,
    siTailwindcss,
    siTypescript,
    siVercel,
    siVite,
    type SimpleIcon,
} from "simple-icons";

const GROUPS: {
    label: string;
    items: { name: string; icon: SimpleIcon; learning?: boolean; neutralHover?: boolean }[];
}[] = [
    {
        label: "languages",
        items: [
            { name: "Rust", icon: siRust, learning: true },
            { name: "TypeScript", icon: siTypescript },
            { name: "JavaScript", icon: siJavascript },
            { name: "Python", icon: siPython },
            { name: "SQL", icon: siSqlite },
        ],
    },
    {
        label: "web",
        items: [
            { name: "HTML", icon: siHtml5 },
            { name: "CSS", icon: siCss },
            { name: "Next.js", icon: siNextdotjs, neutralHover: true },
            { name: "React", icon: siReact },
            { name: "Node.js", icon: siNodedotjs },
            { name: "Express", icon: siExpress, neutralHover: true },
            { name: "Tailwind CSS", icon: siTailwindcss },
        ],
    },
    {
        label: "data",
        items: [
            { name: "PostgreSQL", icon: siPostgresql },
            { name: "Supabase", icon: siSupabase },
            { name: "Leaflet", icon: siLeaflet },
        ],
    },
    {
        label: "tools",
        items: [
            { name: "Git", icon: siGit },
            { name: "GitHub", icon: siGithub, neutralHover: true },
            { name: "Linux", icon: siLinux },
            { name: "Docker", icon: siDocker },
            { name: "Vite", icon: siVite },
            { name: "Vercel", icon: siVercel, neutralHover: true },
        ],
    },
];

export default function Toolkit() {
    return (
        <section aria-label="Skills & Technologies" className="flex flex-col gap-7">
            <div className="flex items-center gap-2 font-geistMono text-[13px] uppercase tracking-wider opacity-60">
                <TerminalIcon size={16} weight="bold" />
                <h2>Technical Toolkit</h2>
            </div>
            <div className="flex flex-col gap-6">
                {GROUPS.map((group) => (
                    <div key={group.label}>
                        <p className="mb-3 font-geistMono text-[11px] opacity-45">// {group.label}</p>
                        <div className="grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-4 lg:flex lg:flex-wrap lg:gap-x-5">
                            {group.items.map(({ name, icon, learning, neutralHover }) => (
                                <span
                                    key={name}
                                    role="img"
                                    tabIndex={0}
                                    aria-label={learning ? `${name}, learning` : name}
                                    className={`group relative flex min-h-[4.5rem] w-full flex-col items-center justify-start gap-1 rounded-sm outline-none transition-colors focus-visible:ring-1 focus-visible:ring-foreground lg:w-[5.5rem] ${
                                        neutralHover
                                            ? "hover:text-foreground focus-visible:text-foreground"
                                            : "hover:text-[var(--brand-color)] focus-visible:text-[var(--brand-color)]"
                                    }`}
                                    style={{ "--brand-color": `#${icon.hex}` } as CSSProperties}
                                >
                                    <span className="relative">
                                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-current">
                                            <path d={icon.path} />
                                        </svg>
                                        {learning && (
                                            <span
                                                aria-hidden="true"
                                                title="Learning"
                                                className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-current"
                                            />
                                        )}
                                    </span>
                                    <span className="text-center font-geistMono text-[10px] leading-tight opacity-70 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100">
                                        {name}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
