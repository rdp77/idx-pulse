import type {Metadata} from "next";
import {ThemeProvider} from "@/components/contexts/theme-provider";
import {Analytics} from '@vercel/analytics/next';
import {Navbar} from "@/components/navbar";
import {Space_Mono, Space_Grotesk} from "next/font/google";
import {Footer} from "@/components/footer";
import "@/styles/globals.css";

const sansFont = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-geist-sans",
    display: "swap",
    weight: "400",
});

const monoFont = Space_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap",
    weight: "400",
});

export const metadata: Metadata = {
    title: "IDX Pulse - Documentation",
    metadataBase: new URL("https://ariadocs.vercel.app/"),
    description:
        "A documentation website for IDX Pulse, a scraper-based API for Indonesian stock exchange data.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
            />
        </head>
        <body
            className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
            suppressHydrationWarning
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar/>
            <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        <Analytics/>
        </body>
        </html>
    );
}
