import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://al-fa-abmx.vercel.app"),
  title: "Khaled Almasri – Informatik-Student & Backend-Entwickler",
  description:
    "Portfolio von Khaled Almasri, Informatik-Student an der Universität Bremen: Java-Backend, funktionale Programmierung in Haskell und die Reha-App ReVia aus dem Bachelorprojekt.",
  openGraph: {
    title: "Khaled Almasri – Portfolio",
    description:
      "Informatik-Student in Bremen. Java-Backend, Haskell und Flutter.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
