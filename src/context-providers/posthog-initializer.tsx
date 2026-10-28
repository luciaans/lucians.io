"use client";

import posthog from "posthog-js";
import type { ReactNode } from "react";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (typeof window !== "undefined" && posthogKey) {
    posthog.init(posthogKey, {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com",
        defaults: "2026-01-30",
        capture_exceptions: true,
        debug: process.env.NODE_ENV === "development",
    });
}

export function PostHogInitializer({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
