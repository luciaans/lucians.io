/** Sources for the landing page's @-mentions: what the hover card shows, plus where a click lands. */

export type Source = {
    key: string;
    /** Shown beside the mark in the card header. */
    name: string;
    /**
     * Optical size correction, default 1. A circular plate covers ~79% of the
     * area a square one does, so it reads small at the same dimensions.
     */
    iconScale?: number;
    /** Vendored favicon in /public/logos. Omit and the card falls back to a monogram. */
    icon?: string;
    /** Prominent line in the card — the title slot. */
    role: string;
    /** Leads the body line, the way a publication date does in a real citation. */
    dates: string;
    /** One line on the work itself. */
    summary: string;
    /** Where a click lands: an in-app path or an external URL. */
    href?: string;
    /** Keys of other sources this one rolls up; the card lists each of them instead of one role. */
    group?: string[];
};

export const SOURCES: Record<string, Source> = {
    diskominfo: {
        key: "diskominfo",
        name: "Diskominfo Kota Pontianak",
        icon: "/logos/diskominfo.png",
        iconScale: 1.16,
        role: "Intern – Sectoral Statistical Data Division",
        dates: "Nov 2025–Jan 2026",
        summary: "Managed and visualized Pontianak city data for the Department of Communication and Information.",
        href: "https://diskominfo.pontianak.go.id",
    },
    governmentProjects: {
        key: "governmentProjects",
        name: "Government Data & Analytics",
        role: "Sectoral Statistics & Data Management",
        dates: "2025–2026",
        summary:
            "Analyzed and organized public-sector data, then turned it into clear statistics, interactive visualizations, and accessible information services.",
        href: "/projects",
    },
    webGIS: {
        key: "webGIS",
        name: "Web GIS & Data Apps",
        role: "Geospatial Development & Data Visualization",
        dates: "2025–Present",
        summary:
            "Building interactive maps and data-driven applications to explore spatial patterns, analyze information, and communicate insights across different domains.",
        href: "/projects",
    },
    unmuhpnk: {
        key: "unmuhpnk",
        name: "Universitas Muhammadiyah Pontianak",
        role: "Informatics Engineering (S.Kom)",
        dates: "2022–2026",
        summary: "Focused on Software Engineering and Game Development. GPA: 3.83/4.00.",
        href: "https://unmuhpnk.ac.id/",
    },
};
