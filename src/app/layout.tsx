import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisRoot } from "@/components/providers/LenisRoot";
import portfolio from "@/data/portfolio.json";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: portfolio.site.title,
  description: portfolio.site.description,
  themeColor: "#06060a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LenisRoot>{children}</LenisRoot>
      </body>
    </html>
  );
}
