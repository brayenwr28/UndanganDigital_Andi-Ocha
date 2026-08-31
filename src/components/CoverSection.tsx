"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MailOpen, UserCheck } from "lucide-react";

interface CoverSectionProps {
  onOpen: () => void;
}

export default function CoverSection({ onOpen }: CoverSectionProps) {
  const [guestName, setGuestName] = useState<string>("Tamu Undangan");
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://undangan.musiindahlogistik.co.id/api";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get("to") || params.get("guest") || params.get("n");

    if (toParam) {
      setGuestName(toParam);

      // Coba fetch nama resmi dari Laravel API jika parameternya adalah slug/id
      const fetchGuestFromApi = async () => {
        try {
          setLoading(true);
          const res = await fetch(`${API_URL}/guests/${encodeURIComponent(toParam)}`);
          if (res.ok) {
            const data = await res.json();
            if (data.name) {
              setGuestName(data.name);
            }
          }
        } catch (err) {
          console.warn("Laravel API guest search fallback to URL param:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchGuestFromApi();
    }
  }, [API_URL]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#f7f3ee]"
    >
      {/* Soft Background Accent */}
      <div className="absolute inset-0 bg-radial from-[#ffffff] via-[#f7f3ee] to-[#ebe3d8] opacity-80" />

      {/* Decorative Ornaments */}
      <div className="absolute top-6 left-6 w-24 h-24 border-t-2 border-l-2 border-[#c4b5a3]/40 rounded-tl-xl pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-24 h-24 border-b-2 border-r-2 border-[#c4b5a3]/40 rounded-br-xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 w-full max-w-sm">
        {/* Title Tag */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#8b7355] font-medium mb-3"
        >
          Undangan Pernikahan
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-5xl md:text-6xl text-[#5c4a3a] my-2 leading-tight"
        >
          Andi & Ocha
        </motion.h1>

        {/* Date Display (Matching uploaded image style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-6 text-[#8b7355]"
        >
          <p className="text-sm font-light tracking-wide mb-1 text-[#6b5847]">Sabtu</p>
          <p className="text-base font-medium tracking-[0.2em] text-[#5c4a3a]">
            17 • 10 • 2026
          </p>
        </motion.div>

        {/* Dynamic Guest Name Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full bg-white/70 backdrop-blur-sm border border-[#e8ddd0] rounded-2xl p-5 my-4 shadow-sm"
        >
          <p className="text-xs text-[#a08c75] font-light mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-[#5c4a3a] capitalize">
            {loading ? "Memuat nama..." : guestName}
          </h2>
        </motion.div>

        {/* Open Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={onOpen}
          className="mt-4 inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-[#8b7355] rounded-full hover:bg-[#7a6548] transition-all hover:scale-105 active:scale-95 shadow-md gap-2"
        >
          <MailOpen className="w-4 h-4" />
          Buka Undangan
        </motion.button>
      </div>
    </motion.div>
  );
}

