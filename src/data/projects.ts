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
            "A public-facing population data platform for Pontianak, combining an interactive map with a demographic dashboard.",
        tech: ["JavaScript", "Leaflet.js", "Chart.js", "Tailwind CSS", "GeoJSON"],
        year: "2025",
        link: "https://poniva-diskominfo-ptk.vercel.app/",
        linkLabel: "Visit live PONIVA ↗",
        thumb: "/projects/poniva-thumbnail.jpg",
        page: {
            tagline: "An interactive demographic dashboard for exploring Pontianak's population data.",
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
                        "Contributed to developing the interactive map visualization and public information experience using JavaScript, Leaflet.js, Chart.js, Tailwind CSS, and GeoJSON.",
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
        thumb: "/projects/kalimas-thumbnail.jpg",
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
    {
        index: "04",
        slug: "scaleup",
        name: "ScaleUp",
        description:
            "An offline-first Flutter app for tracking weight, calories, meals, and health goals, with a meme cat companion.",
        tech: ["Flutter", "Dart", "Riverpod", "SQLite (Drift)"],
        year: "2026",
        link: "https://github.com/luciaans/ScaleUp",
        linkLabel: "View source on GitHub",
        thumb: "/projects/scaleup-showcase.jpg",
        page: {
            tagline: "An offline-first health tracker for weight, calories, meals, and everyday goals.",
            about: [
                "ScaleUp is a Flutter app for keeping everyday health goals in one place. Log meals, track calories, record weight, and follow your progress with an encouraging cat companion. Its offline-first design keeps the core tracking experience available without an internet connection.",
            ],
            poster: "/projects/scaleup-showcase.jpg",
            story: [
                { kind: "heading", text: "Daily dashboard" },
                {
                    kind: "text",
                    parts: [
                        "The home screen brings together the daily calorie target, calories remaining, today's weight, and your current streak. A goal ring and short contextual tips make the day's progress easy to scan.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/scaleup-dashboard.png",
                    alt: "ScaleUp dashboard with the daily calorie target, streak, cat companion, and weight summary for a demo profile.",
                    width: 390,
                    height: 844,
                },
                { kind: "heading", text: "Weight tracking" },
                {
                    kind: "text",
                    parts: [
                        "Record weight once per day, add an optional note, and follow the trend in 7-day, 30-day, 90-day, or all-time charts. A 7-day moving average helps put daily changes in context.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/scaleup-weight.png",
                    alt: "ScaleUp weight tracking screen showing the current weight and trend chart for a demo profile.",
                    width: 390,
                    height: 844,
                },
                { kind: "heading", text: "Calories and meals" },
                {
                    kind: "text",
                    parts: [
                        "Log meals under breakfast, lunch, dinner, or snacks using a searchable library of 92 Indonesian foods and drinks. Favorites, recent foods, custom entries, serving sizes, macro progress, and copy-from-yesterday make daily logging quicker.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/scaleup-calories.png",
                    alt: "ScaleUp calorie tracker with macro progress and meal sections for a demo profile.",
                    width: 390,
                    height: 844,
                },
                { kind: "heading", text: "Goals and nutrition targets" },
                {
                    kind: "text",
                    parts: [
                        "Set a weight goal and activity level to get an estimated calorie target and goal timeline. ScaleUp applies built-in limits to its calculations and automatically recalculates the target when recorded weight changes by 2 kg or more.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/scaleup-profile.png",
                    alt: "ScaleUp profile showing activity level, calculated nutrition targets, and the active weight goal for a demo profile.",
                    width: 390,
                    height: 844,
                },
                { kind: "heading", text: "A little encouragement" },
                {
                    kind: "text",
                    parts: [
                        "Mochi Neko, the meme cat companion, reacts to check-ins and streaks. Daily reminders and milestone celebrations help make tracking feel less like a chore.",
                    ],
                },
                { kind: "heading", text: "Offline-first by design" },
                {
                    kind: "text",
                    parts: [
                        "Profiles, weight entries, and meals are stored locally in SQLite, with no account required. Built with Flutter and Dart, with Riverpod for state management and Drift for local database access; data can also be exported to CSV.",
                    ],
                },
            ],
        },
    },
    {
        index: "05",
        slug: "mutabaah",
        name: "MUTABA’AH",
        description:
            "A prayer attendance and student monitoring platform for pesantren, with class-based records and reports.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "ExcelJS"],
        year: "2026",
        link: "https://www.mutaba-ah.web.id",
        linkLabel: "Visit MUTABA’AH ↗",
        thumb: "/projects/mutabaah-thumbnail.jpg",
        page: {
            tagline: "A daily worship monitoring workspace for pesantren administrators and student advisors.",
            about: [
                "MUTABA’AH helps pesantren record students’ daily prayers and follow attendance across classes. Administrators and advisors can manage student records, review progress, and prepare reports from one web application.",
            ],
            poster: "/projects/mutabaah-dashboard.png",
            story: [
                { kind: "heading", text: "Daily overview" },
                {
                    kind: "text",
                    parts: [
                        "The dashboard summarizes active students, classes, and the day's attendance so staff can quickly see which records still need attention.",
                    ],
                },
                { kind: "heading", text: "Prayer attendance" },
                {
                    kind: "text",
                    parts: [
                        "Record attendance by date, class, and prayer. Unperformed prayers can be marked with a reason, and the interface keeps the class list and save action close at hand.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/mutabaah-attendance.png",
                    alt: "Prayer attendance form for a class; student names are anonymized.",
                    width: 1896,
                    height: 977,
                },
                { kind: "heading", text: "Student records" },
                {
                    kind: "text",
                    parts: [
                        "Manage student profiles, class placement, and active status. Spreadsheet import and export help staff maintain larger class lists.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/mutabaah-students.png",
                    alt: "Student management page with class and status filters.",
                    width: 1896,
                    height: 980,
                },
                { kind: "heading", text: "Progress reports" },
                {
                    kind: "text",
                    parts: [
                        "Filter records by period and class, then review completion rates and prayer-by-prayer summaries. Reports can be exported for further use; names in this screenshot are anonymized.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/mutabaah-reports.png",
                    alt: "Weekly prayer report with attendance statistics and anonymized student names.",
                    width: 1896,
                    height: 978,
                },
                { kind: "heading", text: "Attendance history" },
                {
                    kind: "text",
                    parts: [
                        "Review saved attendance records with date, prayer, class, status, and the account that recorded each entry. Student and staff names in this screenshot are anonymized.",
                    ],
                },
                {
                    kind: "image",
                    src: "/projects/mutabaah-history.png",
                    alt: "Attendance history table with anonymized student and staff names.",
                    width: 1900,
                    height: 978,
                },
                { kind: "heading", text: "Built for shared administration" },
                {
                    kind: "text",
                    parts: [
                        "The application supports administrator and advisor workflows. Built with Next.js, TypeScript, Tailwind CSS, and Supabase. ",
                        { text: "View source on GitHub ↗", href: "https://github.com/luciaans/Mutaba.ah" },
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
