import { NextResponse } from "next/server";

export async function GET() {
    const accessToken = process.env.SPOTIFY_ACCESS_TOKEN;

    if (!accessToken) {
        return NextResponse.json({ error: "No access token" }, { status: 401 });
    }

    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
    });

    if (response.status === 204 || response.status === 404) {
        return NextResponse.json({ isPlaying: false });
    }

    if (!response.ok) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json({
        isPlaying: data.is_playing,
        title: data.item?.name ?? "",
        artist: data.item?.artists?.map((a: { name: string }) => a.name).join(", ") ?? "",
        albumArt: data.item?.album?.images?.[0]?.url ?? "",
        progress: data.progress_ms ?? 0,
        duration: data.item?.duration_ms ?? 0,
    });
}
