"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";

interface CoverSectionProps {
  onOpen: () => void;
}

export default function CoverSection({ onOpen }: CoverSectionProps) {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/cover.jpg')" }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-48 md:w-64 opacity-40">
        <svg viewBox="0 0 200 200" className="w-full text-[#c4b5a3]">
          <path d="M0,0 Q50,20 30,60 Q10,100 40,140 Q20,100 60,80 Q100,60 80,20 Q60,0 0,0Z" fill="currentColor" opacity="0.3"/>
          <circle cx="15" cy="15" r="3" fill="currentColor" opacity="0.5"/>
          <circle cx="35" cy="45" r="2" fill="currentColor" opacity="0.4"/>
          <circle cx="55" cy="25" r="2.5" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 md:w-64 opacity-40 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full text-[#c4b5a3]">
          <path d="M0,0 Q50,20 30,60 Q10,100 40,140 Q20,100 60,80 Q100,60 80,20 Q60,0 0,0Z" fill="currentColor" opacity="0.3"/>
          <circle cx="15" cy="15" r="3" fill="currentColor" opacity="0.5"/>
          <circle cx="35" cy="45" r="2" fill="currentColor" opacity="0.4"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 w-full max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-widest text-[#8b7355] mb-6"
        >
          Undangan Pernikahan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-script text-5xl md:text-6xl mb-8 text-[#5c4a3a]"
        >
          Andi & Ocha
        </motion.h1>

        {/* Date Display - Mildness Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12 text-[#5c4a3a]"
        >
          <span className="text-sm text-right w-20">Sabtu</span>
          <div className="border-l-2 border-r-2 border-[#8b7355] px-4 py-1">
            <div className="text-3xl font-bold">17</div>
            <div className="text-xs mt-1">2026</div>
          </div>
          <span className="text-sm text-left w-20">Oktober</span>
        </motion.div>

        {/* Guest Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-8"
        >
          <p className="text-sm text-[#8b7355] mb-1">Kepada:</p>
          <p className="text-xl font-bold text-[#5c4a3a]">
            {guestName || "Tamu Undangan"}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={onOpen}
          className="group inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-[#8b7355] rounded-md hover:bg-[#7a6548] transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <MailOpen className="w-4 h-4 mr-2" />
          Buka Undangan
        </motion.button>
      </div>
    </motion.div>
  );
}
