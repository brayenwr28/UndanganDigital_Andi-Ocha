import type { Metadata } from "next";
import { Parisienne, Philosopher } from "next/font/google";
import "./globals.css";

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Andi & Linny (Ocha)",
  description: "Undangan digital pernikahan Andi Irawan, S.H., M.H & Adv. Rosna Linny, S.H., Gr — 24 Oktober 2026",
  icons: {
    icon: "/icon-cincin.png",
    shortcut: "/icon-cincin.png",
    apple: "/icon-cincin.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html
        lang="id"
        className={`${parisienne.variable} ${philosopher.variable} h-full antialiased`}
        suppressHydrationWarning
      >
      <body
        className="min-h-full flex flex-col bg-[#f5f0eb] text-[#5c4a3a]"
        style={{ fontFamily: "var(--font-philosopher), serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
