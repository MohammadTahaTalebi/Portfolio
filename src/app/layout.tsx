import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taha Talebi – Fullstack Developer",
  description: "Portfolio of Taha Talebi, Fullstack developer specializing in Next.js, React, Node.js, and TypeScript. Explore projects, experience, and contact info.",
  keywords: ["Taha Talebi", "Fullstack Developer", "Next.js", "React", "Node.js", "TypeScript", "Portfolio"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  authors: [{ name: "Taha Talebi", url: "https://github.com/MohammadTahaTalebi" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Taha Talebi – Fullstack Developer",
    description: "Portfolio of Taha Talebi, Fullstack developer specializing in Next.js, React, Node.js, and TypeScript.",
    url: "https://MohammadTahaTalebi.vercel.app",
    siteName: "Taha Talebi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taha Talebi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Talebi – Fullstack Developer",
    description: "Portfolio of Taha Talebi, Fullstack developer specializing in Next.js, React, Node.js, and TypeScript.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground bg-background`}
      >
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
