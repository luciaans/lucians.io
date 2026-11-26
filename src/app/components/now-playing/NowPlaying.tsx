"use client";

import { useEffect, useState } from "react";
import { TerminalIcon } from "@phosphor-icons/react/dist/csr/Terminal";

interface NowPlayingData {
    isPlaying: boolean;
    title: string;
    artist: string;
    albumArt: string;
    progress: number;
    duration: number;
}

export default function NowPlaying() {
    const [data, setData] = useState<NowPlayingData | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const fetchNowPlaying = async () => {
            try {
                const res = await fetch("/api/spotify/now-playing", {
                    next: { revalidate: 0 },
                });
                if (!res.ok) {
                    setError(true);
                    return;
                }
                setData(await res.json());
            } catch {
                setError(true);
            }
        };

        fetchNowPlaying();
        interval = setInterval(fetchNowPlaying, 30000);
        return () => clearInterval(interval);
    }, []);

    if (error || !data) {
        return null;
    }

    if (!data.isPlaying) {
        return (
            <div className="flex items-center gap-2 font-geistMono text-[13px] opacity-85">
                <TerminalIcon size={16} weight="bold" className="shrink-0 opacity-60" />
                <span>Idle</span>
            </div>
        );
    }

    const progressPercent = data.duration > 0 ? (data.progress / data.duration) * 100 : 0;
    const progressBarWidth = Math.min(Math.max(progressPercent, 0), 100);

    return (
        <div className="flex items-center gap-2 font-geistMono text-[13px] opacity-85">
            <TerminalIcon size={16} weight="bold" className="shrink-0 opacity-60" />
            <div className="flex flex-col min-w-0">
                <span className="text-[var(--foreground-color)] truncate">{data.title}</span>
                <span className="opacity-70 truncate">{data.artist}</span>
                <div className="mt-1 w-full h-[2px] bg-[color-mix(in_srgb,var(--foreground-color)_20%,transparent)] overflow-hidden rounded">
                    <div
                        className="h-full bg-[color-mix(in_srgb,var(--foreground-color)_60%,transparent)]"
                        style={{ width: `${progressBarWidth}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
