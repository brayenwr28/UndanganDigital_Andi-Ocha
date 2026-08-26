import type { Metadata } from "next";
import { Great_Vibes, Philosopher } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Andi & Ocha",
  description: "Undangan digital pernikahan Andi Irawan, S.H., M.H & Adv. Rosna Linny, S.H., Gr — 17 Oktober 2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${greatVibes.variable} ${philosopher.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f0eb] text-[#5c4a3a]" style={{ fontFamily: "var(--font-philosopher), serif" }}>{children}</body>
    </html>
  );
}
