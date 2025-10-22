import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/background";
import { StaticDecorations } from "@/components/layout/background/static-decorations";
import UpNavBar from "@/components/layout/navbar/up-navbar";
import PageLoader from "@/components/layout/page-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_COMPANY_NAME,
  description: "MEGACOMPANY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full m-0 p-0`}
      >
        <PageLoader>
          <UpNavBar />
          <main className="min-h-screen w-full overflow-x-hidden">
            {children}
            <Background />
            <StaticDecorations />
            {/* <DownNavbar /> */}
          </main>
        </PageLoader>
      </body>
    </html>
  );
}