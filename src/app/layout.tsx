import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisRoot } from "@/components/providers/LenisRoot";
import { MotionProvider } from "@/components/providers/MotionProvider";
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06060a",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-dvh overflow-x-clip touch-manipulation`}
      >
        <LenisRoot>
          <MotionProvider>{children}</MotionProvider>
        </LenisRoot>
      </body>
    </html>
  );
}
