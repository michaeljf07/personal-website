import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import UniversityLogos from "@/components/university_logos";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Michael Ferreira",
    description: "My personal portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navbar />
                <UniversityLogos />
                {children}
            </body>
        </html>
    );
}
