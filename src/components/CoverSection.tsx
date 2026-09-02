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
            24 • 10 • 2026
          </p>
        </motion.div>

        {/* Guest Name Section matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-6 w-full"
        >
          <p className="text-sm text-[#5c4a3a] mb-2 font-medium">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h2 className="text-2xl font-bold text-[#5c4a3a] mb-4">
            {guestName || "Nama Tamu"}
          </h2>
          <p className="text-sm text-[#5c4a3a] mb-6 leading-relaxed max-w-xs mx-auto">
            Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, type: "spring", bounce: 0.5 }}
          onClick={onOpen}
          className="group inline-flex items-center justify-center px-8 py-2.5 text-sm font-medium text-white bg-[#8b7355] rounded-full hover:bg-[#7a6548] transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <MailOpen className="w-4 h-4 mr-2" />
          Buka Undangan
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-xs text-[#5c4a3a] mt-4 font-light"
        >
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </motion.p>
      </div>
    </motion.div>
  );
}
