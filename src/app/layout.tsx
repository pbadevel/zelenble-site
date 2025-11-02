import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/background";
import { StaticDecorations } from "@/components/layout/background/static-decorations";
import UpNavBar from "@/components/layout/navbar/up-navbar";
import PageLoader from "@/components/layout/page-loader";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_COMPANY_NAME || "AXONISIUM",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--background)] antialiased h-full m-0 p-0 overflow-x-hidden`}
      >
        <PageLoader>
          <div className="flex flex-col min-h-screen overflow-x-hidden"> {/* Добавлено overflow-x-hidden */}
            <UpNavBar />
            <main className="flex-grow w-full overflow-x-hidden"> {/* Добавлено overflow-x-hidden */}
              {children}
              <StaticDecorations />
              <Background />
            </main>
            <Footer/>
          </div>
        </PageLoader>
      </body>
    </html>
  );
}

