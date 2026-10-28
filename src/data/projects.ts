export type Project = {
    /** URL segment for the project's own page. */
    slug: string;
    index: string;
    name: string;
    description: string;
    tech: string[];
    year: string;
    /** Omit to show the project without sending anyone anywhere. */
    link?: string;
    linkLabel?: string;
    /** Small raster preview, rendered from the original artwork or screenshot. */
    thumb: string;
    /** A project with its own page on the site; its tiles link there instead of out. */
    page?: {
        tagline: string;
        /** The write-up under the tagline, so the page doesn't repeat it. */
        about: Prose;
        /** Omit for a project without a demo; the poster then stands alone as the lead image. */
        video?: string;
        poster: string;
        /** Wide banner across the top of the page, like a Notion cover. */
        cover?: string;
        /** 1200×630 card for link previews when the page is shared. */
        share?: string;
        /** How the project got here, as prose with the clips placed between paragraphs. */
        story?: StoryBlock[];
    };
};

/** Plain text with inline links. */
export type Prose = (string | { text: string; href: string })[];

/** A paragraph is plain text with inline links; a clip is a short muted video. */
export type StoryBlock =
    | { kind: "heading"; text: string }
    | { kind: "text"; parts: Prose }
    | { kind: "clip"; src: string; poster?: string; label: string }
    | { kind: "image"; src: string; alt: string; width: number; height: number }
    /** `start` is the panel open before anyone interacts; lead with the strongest shot. */
    | { kind: "gallery"; title?: string; shots: Shot[]; start?: number };

/** A captioned still of the product, shown on its own or in a gallery grid. */
export type Shot = {
    /** Tight crop of the UI, for the swipeable cards on small screens. */
    src: string;
    /** The full 16:9 frame, for the accordion panels on desktop. */
    frame: string;
    alt: string;
    title: string;
    caption: string;
    width: number;
    height: number;
};

export const projects: Project[] = [
    {
        index: "01",
        slug: "masjid-nurrudin",
        name: "Masjid Nurrudin UM Islamic Dakwah Experience",
        description:
            "An interactive 3D dakwah experience on Roblox, bringing Islamic learning and the Masjid Nurrudin community to life.",
        tech: ["Roblox Studio", "Lua", "3D Interactive Simulation"],
        year: "2026",
        link: "https://www.roblox.com/share?code=d596bc36ffe6314dbf9f02b90601ffef&type=ExperienceDetails&stamp=1793219240007",
        linkLabel: "Open experience on Roblox ↗",
        thumb: "/projects/masjid-nurrudin-manual-exterior.webp",
        page: {
            tagline: "An interactive Roblox experience for Islamic learning and dakwah at Masjid Nurrudin.",
            about: [
                "Developed as an undergraduate thesis for the mosque of Universitas Muhammadiyah Pontianak, this project turns Masjid Nurrudin into an explorable 3D experience on Roblox. Visitors can explore the mosque, listen to Qur'an recitations, check prayer times, and access Islamic learning content. Built with Roblox Studio and Lua, the project is registered as a computer program with Indonesia's Directorate General of Intellectual Property (DJKI).",
            ],
            poster: "/projects/masjid-nurrudin-manual-exterior.webp",
            cover: "/projects/masjid-nurrudin-manual-exterior.webp",
            story: [
                { kind: "heading", text: "Explore and learn" },
                {
                    kind: "text",
                    parts: [
                        "The environment recreates Masjid Nurrudin as a space visitors can move through and explore. Interactive audio players provide Qur'an recitations, while prayer schedules and Islamic learning modules make key resources available inside the experience.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/masjid-nurrudin-manual-interior-prayer.webp",
                    alt: "Interior view of the Masjid Nurrudin Roblox experience, showing the prayer hall and digital prayer-time display.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "A detailed mosque interior" },
                {
                    kind: "text",
                    parts: [
                        "The 3D environment recreates the mosque's prayer space, including its mihrab, prayer rugs, architectural details, and areas for visitors to explore.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/masjid-nurrudin-manual-interior-hall.webp",
                    alt: "Wide interior view of the Masjid Nurrudin 3D environment, with prayer rugs and mosque architecture.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Interactive play area" },
                {
                    kind: "text",
                    parts: [
                        "The experience also includes a recreational area with a racing circuit and go-karts, giving visitors another interactive space to explore.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/masjid-nurrudin-play-area-track.webp",
                    alt: "Aerial view of the interactive racing circuit in the Masjid Nurrudin Roblox experience.",
                    width: 1600,
                    height: 900,
                },
                {
                    kind: "image",
                    src: "/projects/masjid-nurrudin-play-area-kart.webp",
                    alt: "Go-kart within the interactive recreational area of the Masjid Nurrudin Roblox experience.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Built for Roblox" },
                {
                    kind: "text",
                    parts: [
                        "Created in Roblox Studio with Lua, combining a 3D mosque environment with interactive media and navigation. The project was developed as an undergraduate thesis at Universitas Muhammadiyah Pontianak.",
                    ],
                },
                { kind: "heading", text: "Copyright registration" },
                {
                    kind: "text",
                    parts: [
                        "Registered as a computer program with Indonesia's Directorate General of Intellectual Property (DJKI), Copyright Record No. 001529903.",
                    ],
                },
            ],
        },
    },
    {
        index: "02",
        slug: "poniva",
        name: "PONIVA - Pontianak Interactive Visualization",
        description:
            "A public-facing population data platform for Pontianak, combining an interactive GIS map with a demographic dashboard.",
        tech: ["JavaScript", "Leaflet.js", "Chart.js", "Tailwind CSS", "GeoJSON"],
        year: "2025",
        link: "https://poniva-diskominfo-ptk.vercel.app/",
        linkLabel: "Visit live PONIVA ↗",
        thumb: "/projects/poniva-live-preview.webp",
        page: {
            tagline: "An interactive GIS dashboard for exploring Pontianak's population data.",
            about: [
                "Developed during my internship with the Pontianak City Department of Communication and Informatics, PONIVA brings population indicators and geographic data together in one public-facing web platform. It combines a demographic dashboard with an interactive map so visitors can explore population information across the city.",
            ],
            poster: "/projects/poniva-live-preview.webp",
            story: [
                { kind: "heading", text: "Population dashboard" },
                {
                    kind: "text",
                    parts: [
                        "The dashboard brings key citywide figures together: total residents, neighborhood units (RW), community units (RT), and the number of districts. Charts make it easier to compare population distribution and local area data at a glance. ",
                        {
                            text: "Open live dashboard ↗",
                            href: "https://poniva-diskominfo-ptk.vercel.app/dashboard.html",
                        },
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/poniva-dashboard-detail.webp",
                    alt: "PONIVA population dashboard with citywide totals and demographic charts.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Interactive population map" },
                {
                    kind: "text",
                    parts: [
                        "The map shows Pontianak's six districts alongside their population data. Visitors can select an area to explore its figures, while the map highlights the selected region and displays its location data. ",
                        { text: "Open live map ↗", href: "https://poniva-diskominfo-ptk.vercel.app/peta.html" },
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/poniva-map-detail.webp",
                    alt: "PONIVA interactive population map with a district list and mapped geographic data.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Implementation" },
                {
                    kind: "text",
                    parts: [
                        "Contributed to developing the web GIS visualization and public information experience using JavaScript, Leaflet.js, Chart.js, Tailwind CSS, and GeoJSON.",
                    ],
                },
            ],
        },
    },
    {
        index: "03",
        slug: "kalimas-gallery",
        name: "Kalimas Digital Gallery",
        description:
            "A digital home for Desa Kalimas, bringing village stories, population data, local maps, and community galleries together in one accessible website.",
        tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
        year: "2025",
        link: "https://website-gallery-desa-kalimas.vercel.app/",
        linkLabel: "Visit live village website ↗",
        thumb: "/projects/kalimas-manual-home.webp",
        page: {
            tagline: "Discover the stories, people, and places that make up Desa Kalimas.",
            about: [
                "Kalimas Digital Gallery gives residents and visitors one place to learn about Desa Kalimas in Sungai Kakap, Kubu Raya. Explore the village's history and leadership, browse population statistics, discover the potential of each dusun, and view local maps and photo galleries.",
            ],
            poster: "/projects/kalimas-manual-home.webp",
            story: [
                { kind: "heading", text: "Village profile" },
                {
                    kind: "text",
                    parts: [
                        "The profile introduces Kalimas through its history, general village information, vision, and leadership. ",
                        {
                            text: "View the live profile ↗",
                            href: "https://website-gallery-desa-kalimas.vercel.app/#profil",
                        },
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/kalimas-manual-profile.webp",
                    alt: "Desa Kalimas website profile section showing its history, general information, vision, and village head.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Population statistics" },
                {
                    kind: "text",
                    parts: [
                        "A village-wide overview presents population and household totals, followed by a breakdown of residents across Kalimas' five dusun. ",
                        {
                            text: "View the live statistics ↗",
                            href: "https://website-gallery-desa-kalimas.vercel.app/#statistik",
                        },
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/kalimas-manual-statistics.webp",
                    alt: "Desa Kalimas population statistics with village totals and population breakdown by dusun.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Explore each dusun" },
                {
                    kind: "text",
                    parts: [
                        "Each dusun has its own section with local population details, a location map, and a photo gallery that documents the area. ",
                        {
                            text: "View the Cempaka section ↗",
                            href: "https://website-gallery-desa-kalimas.vercel.app/#dusun-cempaka",
                        },
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/kalimas-manual-dusun.webp",
                    alt: "Dusun Cempaka section with local information, location map, and village photo gallery.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Local potential" },
                {
                    kind: "text",
                    parts: [
                        "The village highlights its agricultural, fruit-growing, livestock, and small-industry sectors, with a closer look at local products and opportunities.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/kalimas-manual-potensi.webp",
                    alt: "Desa Kalimas local potential page featuring agriculture, fruit, livestock, and industry.",
                    width: 1600,
                    height: 900,
                },
                { kind: "heading", text: "Implementation" },
                {
                    kind: "text",
                    parts: [
                        "Built with HTML, CSS, Bootstrap, and JavaScript as a responsive web experience for sharing village information and local photography.",
                    ],
                },
            ],
        },
    },
];

const SEASONS = ["Winter", "Spring", "Summer", "Fall"];
const when = (p: Project) => {
    const [season, year] = p.year.includes(" ") ? p.year.split(" ") : ["", p.year];
    return Number(year) * 4 + Math.max(0, SEASONS.indexOf(season));
};

/** Newest first; projects from the same year keep their order above. */
export const projectsByDate = [...projects].sort((a, b) => when(b) - when(a));

/** sessionStorage key for the last project page viewed, so the strip can return to it. */
export const LAST_PROJECT_KEY = "projects-last-viewed";

/** Where a project's tile or button leads: its own page, its outside link, or nowhere. */
export const projectHref = (p: Project) => (p.page ? `/projects/${p.slug}` : p.link);

export const isExternal = (href: string) => /^https?:/.test(href);
