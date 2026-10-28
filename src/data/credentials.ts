export type CredentialCategory = "All" | "Certificate" | "HKI" | "Internship";

export type CredentialItem = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    validUntil?: string;
    credentialId?: string;
    verifyLink?: string;
    image: string;
    category: "Certificate" | "HKI" | "Internship";
    width: number;
    height: number;
    details?: string[];
};

export const credentials: CredentialItem[] = [
    {
        id: "dicoding-ai",
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia (Google Cloud Partner)",
        date: "13 Oct 2024",
        validUntil: "13 Oct 2027",
        credentialId: "QLZ96QM27Z5D",
        verifyLink: "https://www.dicoding.com/certificates/QLZ96QM27Z5D",
        image: "/credentials/dicoding-ai.png",
        category: "Certificate",
        width: 1683,
        height: 1190,
        details: ["Issued: 13 Oct 2024 · Valid until 13 Oct 2027", "ID: QLZ96QM27Z5D"],
    },
    {
        id: "dicoding-javascript",
        title: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding Indonesia",
        date: "11 Oct 2024",
        validUntil: "11 Oct 2027",
        credentialId: "1OP841W41ZQK",
        verifyLink: "https://www.dicoding.com/certificates/1OP841W41ZQK",
        image: "/credentials/dicoding-javascript.png",
        category: "Certificate",
        width: 1683,
        height: 1190,
        details: ["Issued: 11 Oct 2024 · Valid until 11 Oct 2027", "ID: 1OP841W41ZQK"],
    },
    {
        id: "hki-masjid-nurrudin",
        title: "Surat Pencatatan Ciptaan (HKI / Copyright Registration)",
        issuer: "Kementerian Hukum RI, DJKI",
        date: "7 Oct 2026",
        credentialId: "001529903",
        image: "/credentials/hki-page1.png",
        category: "HKI",
        width: 1191,
        height: 1685,
        details: [
            "Karya: Masjid Nurrudin UM Islamic Dakwah Experience",
            "Jenis: Program Komputer",
            "No. Pencatatan: 001529903 · Permohonan: EC002026193482 (7 Oct 2026)",
            "Pertama Diumumkan: 27 Jul 2026 · Perlindungan: 50 Tahun",
            "Pemegang: LP3M Universitas Muhammadiyah Pontianak",
        ],
    },
    {
        id: "magang-diskominfo",
        title: "Surat Keterangan Kerja Praktik (Magang)",
        issuer: "Dinas Komunikasi dan Informatika Kota Pontianak",
        date: "9 Jan 2026",
        image: "/credentials/magang-diskominfo.png",
        category: "Internship",
        width: 1024,
        height: 728,
        details: [
            "Instansi: Dinas Komunikasi dan Informatika Kota Pontianak",
            "Periode: 10 Nov 2025 – 9 Jan 2026",
            "Hasil: BAIK",
        ],
    },
];
