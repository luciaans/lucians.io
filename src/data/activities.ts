export type ActivityItem = {
    id: string;
    date: string;
    title: string;
    description: string;
    /** Optional photo URL in public/activities/ (e.g. "/activities/my-photo.jpg") */
    photo?: string;
    photoAlt?: string;
    tags?: string[];
};

export const activities: ActivityItem[] = [
    {
        id: "hki-masjid-nurrudin",
        date: "Jul 2026 – Oct 2026",
        title: "Registered copyright (HKI): Masjid Nurrudin UM Islamic Dakwah Experience",
        description:
            "Published the interactive Islamic da'wah media experience on Roblox for the mosque of Universitas Muhammadiyah Pontianak (first published 27 Jul 2026) and officially registered copyright under Program Komputer with DJKI Kementerian Hukum RI (7 Oct 2026).",
        // TODO: Add activity photo to public/activities/ (e.g. photo: "/activities/hki-announcement.jpg")
        tags: ["HKI", "Thesis", "Roblox"],
    },
    {
        id: "graduation-ump",
        date: "2026",
        title: "Bachelor of Informatics Engineering – Universitas Muhammadiyah Pontianak",
        description:
            "Graduated with a Bachelor's degree (S.Kom) in Informatics Engineering from Universitas Muhammadiyah Pontianak, Faculty of Engineering and Computer Science. Focused on Software Engineering and Game Development. GPA: 3.83/4.00.",
        tags: ["Graduation", "S1", "UMP"],
    },
    {
        id: "magang-diskominfo",
        date: "10 Nov 2025 – 9 Jan 2026",
        title: "Internship at Diskominfo Kota Pontianak",
        description:
            "Completed an internship with the Sectoral Statistics Division of the Pontianak City Department of Communication and Informatics, developing interactive demographic data visualizations and public information web systems. Received a Good performance rating.",
        // TODO: Add activity photo to public/activities/ (e.g. photo: "/activities/diskominfo-team.jpg")
        tags: ["Internship", "Web GIS", "Government"],
    },
    {
        id: "kalimas-google-maps-mapping",
        date: "Aug 2025 - Sep 2025",
        title: "Geographic Mapping of Desa Kalimas on Google Maps",
        description:
            "Conducted geographic mapping of Desa Kalimas, Sungai Kakap, Kubu Raya, documenting the spatial boundaries of each dusun (sub-village) along with photo documentation that is publicly accessible online. Contributed to improving the village's digital geographic presence on Google Maps.",
        tags: ["Mapping", "GIS", "Google Maps", "Community"],
    },
    {
        id: "kalimas-digital-gallery",
        date: "Aug 2025 - Sep 2025",
        title: "Kalimas Digital Gallery – Village Heritage Web Platform",
        description:
            "Designed and developed the Kalimas Digital Gallery, a web platform showcasing the cultural heritage, landscapes, and community life of Desa Kalimas. The site serves as a digital documentation hub for the village's history and visual identity.",
        tags: ["Web Development", "Digital Gallery", "Community"],
    },
    {
        id: "dicoding-courses",
        date: "Oct 2024",
        title: "Completed Dicoding Courses: AI Fundamentals and JavaScript Programming Fundamentals",
        description:
            "Completed the AI Fundamentals and JavaScript Programming Fundamentals courses offered by Dicoding Indonesia. The AI course was delivered in partnership with Google Cloud.",
        // TODO: Add activity photo to public/activities/ (e.g. photo: "/activities/dicoding-study.jpg")
        tags: ["Certification", "AI", "JavaScript"],
    },
    {
        id: "web-umkm-pontianak",
        date: "2023",
        title: "Web Development for UMKM in Pontianak City",
        description:
            "Contributed to a web development project aimed at supporting micro, small, and medium enterprises (UMKM) in Pontianak City, helping local businesses establish a digital presence through a purpose-built web platform.",
        tags: ["Web Development", "UMKM", "Community"],
    },
];
