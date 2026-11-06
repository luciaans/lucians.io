import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lucians — Data Analyst & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "58px 68px 48px",
                backgroundColor: "#f4f2eb",
                color: "#20211e",
                fontFamily: "Georgia, serif",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    right: "-94px",
                    top: "72px",
                    width: "440px",
                    height: "440px",
                    border: "1px solid #d9d4c7",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        width: "290px",
                        height: "290px",
                        border: "1px solid #d9d4c7",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "126px",
                            height: "126px",
                            border: "1px solid #d9d4c7",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "17px",
                                height: "17px",
                                borderRadius: "50%",
                                background: "#c87852",
                            }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 18 }}>
                <span
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#c87852",
                    }}
                />
                <span
                    style={{
                        fontFamily: "monospace",
                        fontSize: 15,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#6b6b63",
                    }}
                >
                    Portfolio / 2026
                </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ fontSize: 112, lineHeight: 1, letterSpacing: "-0.065em" }}>Lucians</div>
                <div
                    style={{
                        display: "flex",
                        marginTop: 24,
                        fontFamily: "monospace",
                        fontSize: 19,
                        letterSpacing: "0.02em",
                        color: "#56574f",
                    }}
                >
                    DATA ANALYST <span style={{ color: "#c87852", margin: "0 14px" }}>·</span> SOFTWARE ENGINEER
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderTop: "1px solid #d9d4c7",
                    paddingTop: 18,
                    fontFamily: "monospace",
                    fontSize: 15,
                    color: "#6b6b63",
                }}
            >
                <span>Turning complex data into clarity.</span>
                <span>LUCIANS.MY.ID ↗</span>
            </div>
        </div>,
        { ...size }
    );
}
