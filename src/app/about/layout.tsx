import type { ReactNode } from "react";

export const metadata = {
    title: "About Me",
    description:
        "Learn more about Lucians (Kiki Alqadrie), software engineer focused on reliable systems, Rust, and modern software development.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
