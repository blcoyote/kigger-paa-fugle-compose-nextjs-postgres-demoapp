import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import seagulLogo from "@/assets/seagull-logo.svg";
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
  title: "Kigger på fugle",
  description: "Notering af fugleobservationer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isActive = (path: string) =>
    typeof window !== "undefined" && window.location.pathname === path;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen flex-col`}
      >
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link href="/">
                  <Image
                    style={{ filter: "invert(100%)" }}
                    src={seagulLogo}
                    alt="Seagul Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
              <li>
                <Link href="/add-observation">
                  <div
                    className={
                      isActive("/add-observation")
                        ? "text-yellow-300"
                        : "hover:text-yellow-300"
                    }
                  >
                    Tilføj fuglekik
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/observations">
                  <div
                    className={
                      isActive("/observations")
                        ? "text-yellow-300"
                        : "hover:text-yellow-300"
                    }
                  >
                    Vis fuglekik
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex-1 pt-8 bg-gray-100 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
