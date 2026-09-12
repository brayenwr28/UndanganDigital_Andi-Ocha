"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";

interface CoverSectionProps {
  onOpen: () => void;
}

export default function CoverSection({ onOpen }: CoverSectionProps) {
  const [guestName, setGuestName] = useState<string>("Tamu Undangan");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get("to") || params.get("guest") || params.get("n");
    if (!toParam) return;

    // Fallback awal dari URL (misal "budi-santoso" -> "budi santoso")
    const formattedFallback = decodeURIComponent(toParam).replace(/-/g, " ");
    setGuestName(formattedFallback);

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    const API_GUEST_URL = API_BASE.endsWith("/")
      ? `${API_BASE}guests/${encodeURIComponent(toParam)}`
      : `${API_BASE}/guests/${encodeURIComponent(toParam)}`;

    fetch(API_GUEST_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data tamu");
        return res.json();
      })
      .then((data) => {
        if (data && (data.name || data.nama || data.nama_tamu)) {
          setGuestName(data.name || data.nama || data.nama_tamu);
        }
      })
      .catch((err) => {
        console.warn("Gagal mengambil data tamu dari API backend, menggunakan fallback URL:", err);
      });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#f7f3ee]"
    >
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f7f3ee] to-[#ebe3d8] opacity-80" />

      {/* === DEKORASI BUNGA TEPI === */}
      {/* Bunga Kiri Atas */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -40 }}
        animate={{ opacity: 0.7, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-0 left-0 pointer-events-none"
      >
        <svg width="140" height="160" viewBox="0 0 140 160" fill="none">
          <path d="M0 0C20 30 60 50 40 90C25 120 50 140 30 160" stroke="#c4b5a3" strokeWidth="1.5" fill="none"/>
          <path d="M5 5C25 20 45 15 35 45C20 70 40 80 25 100" stroke="#d4c5b0" strokeWidth="1" fill="none"/>
          <ellipse cx="30" cy="25" rx="18" ry="12" fill="#d4c5b0" opacity="0.4" transform="rotate(-30 30 25)"/>
          <ellipse cx="18" cy="40" rx="14" ry="10" fill="#c4b5a3" opacity="0.3" transform="rotate(-50 18 40)"/>
          <ellipse cx="40" cy="55" rx="16" ry="11" fill="#d4c5b0" opacity="0.35" transform="rotate(-20 40 55)"/>
          <ellipse cx="25" cy="70" rx="12" ry="9" fill="#c4b5a3" opacity="0.25" transform="rotate(-40 25 70)"/>
          <circle cx="28" cy="28" r="4" fill="#8b7355" opacity="0.5"/>
          <circle cx="20" cy="50" r="3" fill="#8b7355" opacity="0.4"/>
          <circle cx="38" cy="62" r="3.5" fill="#8b7355" opacity="0.35"/>
        </svg>
      </motion.div>

      {/* Bunga Kanan Atas */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -40 }}
        animate={{ opacity: 0.7, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-0 right-0 pointer-events-none"
      >
        <svg width="140" height="160" viewBox="0 0 140 160" fill="none" className="scale-x-[-1]">
          <path d="M0 0C20 30 60 50 40 90C25 120 50 140 30 160" stroke="#c4b5a3" strokeWidth="1.5" fill="none"/>
          <path d="M5 5C25 20 45 15 35 45C20 70 40 80 25 100" stroke="#d4c5b0" strokeWidth="1" fill="none"/>
          <ellipse cx="30" cy="25" rx="18" ry="12" fill="#d4c5b0" opacity="0.4" transform="rotate(-30 30 25)"/>
          <ellipse cx="18" cy="40" rx="14" ry="10" fill="#c4b5a3" opacity="0.3" transform="rotate(-50 18 40)"/>
          <ellipse cx="40" cy="55" rx="16" ry="11" fill="#d4c5b0" opacity="0.35" transform="rotate(-20 40 55)"/>
          <ellipse cx="25" cy="70" rx="12" ry="9" fill="#c4b5a3" opacity="0.25" transform="rotate(-40 25 70)"/>
          <circle cx="28" cy="28" r="4" fill="#8b7355" opacity="0.5"/>
          <circle cx="20" cy="50" r="3" fill="#8b7355" opacity="0.4"/>
          <circle cx="38" cy="62" r="3.5" fill="#8b7355" opacity="0.35"/>
        </svg>
      </motion.div>

      {/* Bunga Kiri Bawah */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 0.6, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-0 left-0 pointer-events-none rotate-180"
      >
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          <path d="M0 0C15 25 50 40 35 75C22 100 42 115 28 140" stroke="#c4b5a3" strokeWidth="1.5" fill="none"/>
          <ellipse cx="25" cy="20" rx="15" ry="10" fill="#d4c5b0" opacity="0.35" transform="rotate(-35 25 20)"/>
          <ellipse cx="35" cy="45" rx="14" ry="9" fill="#c4b5a3" opacity="0.3" transform="rotate(-25 35 45)"/>
          <circle cx="22" cy="25" r="3.5" fill="#8b7355" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* Bunga Kanan Bawah */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 40 }}
        animate={{ opacity: 0.6, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className="absolute bottom-0 right-0 pointer-events-none rotate-180 scale-x-[-1]"
      >
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          <path d="M0 0C15 25 50 40 35 75C22 100 42 115 28 140" stroke="#c4b5a3" strokeWidth="1.5" fill="none"/>
          <ellipse cx="25" cy="20" rx="15" ry="10" fill="#d4c5b0" opacity="0.35" transform="rotate(-35 25 20)"/>
          <ellipse cx="35" cy="45" rx="14" ry="9" fill="#c4b5a3" opacity="0.3" transform="rotate(-25 35 45)"/>
          <circle cx="22" cy="25" r="3.5" fill="#8b7355" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* Garis Dekoratif Sudut */}
      <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-[#c4b5a3]/30 rounded-tl-xl pointer-events-none" />
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#c4b5a3]/30 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[#c4b5a3]/30 rounded-bl-xl pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-[#c4b5a3]/30 rounded-br-xl pointer-events-none" />

      {/* === KONTEN UTAMA === */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 w-full max-w-sm">
        {/* Bismillah */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs text-[#8b7355] tracking-widest mb-4"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        {/* Title Tag */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#8b7355] font-medium mb-3"
        >
          Undangan Pernikahan
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
          className="font-script text-5xl md:text-6xl text-[#5c4a3a] my-2 leading-tight"
        >
          Andi & Ocha
        </motion.h1>

        {/* Separator Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-24 h-[1px] bg-[#c4b5a3] my-4"
        />

        {/* Date Display */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="my-2 text-[#8b7355]"
        >
          <p className="text-sm font-light tracking-wide mb-1 text-[#6b5847]">Sabtu</p>
          <p className="text-base font-medium tracking-[0.2em] text-[#5c4a3a]">
            24 • 10 • 2026
          </p>
        </motion.div>

        {/* Guest Name Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mb-4 mt-4 w-full"
        >
          <p className="text-sm text-[#5c4a3a] mb-2 font-medium">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h2 className="text-2xl font-bold text-[#5c4a3a] mb-3">
            {guestName || "Nama Tamu"}
          </h2>
          <p className="text-xs text-[#5c4a3a] mb-4 leading-relaxed max-w-xs mx-auto">
            Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
          </p>
        </motion.div>

        {/* Tombol Buka */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2, type: "spring", bounce: 0.5 }}
          onClick={onOpen}
          className="group inline-flex items-center justify-center px-8 py-2.5 text-sm font-medium text-white bg-[#8b7355] rounded-full hover:bg-[#7a6548] transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <MailOpen className="w-4 h-4 mr-2" />
          Buka Undangan
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="text-[10px] text-[#8b7355] mt-4 font-light"
        >
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </motion.p>
      </div>
    </motion.div>
  );
}
