"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Wifi } from "lucide-react";
import { useState } from "react";

export default function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-4xl text-[#8b7355] mb-3">Kado Digital</h2>
          <p className="text-sm text-[#5c4a3a] mb-8">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kedua mempelai.
            Namun jika memberi adalah ungkapan tanda kasih Anda, dapat disalurkan melalui rekening di bawah ini:
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Kartu Bank BRI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#07254e] via-[#0d3b74] to-[#081d3d] text-white p-5 sm:p-6 shadow-2xl border border-white/20 text-left min-h-[220px] sm:min-h-[235px] flex flex-col justify-between select-none cursor-pointer transition-shadow hover:shadow-[0_20px_40px_rgba(7,37,78,0.3)]"
          >
            {/* Glossy Overlay & Soft Ambient Waves */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-[#f37021]/30 via-white/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Bank Name & Wifi */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h3 className="font-black text-xl tracking-wider text-white drop-shadow">
                  BANK BRI
                </h3>
                <span className="text-[10px] font-semibold tracking-widest text-blue-200 uppercase">
                  BRITAMA DEBIT
                </span>
              </div>
              <Wifi className="w-6 h-6 text-white/80 rotate-90" />
            </div>

            {/* Middle: EMV Chip */}
            <div className="relative z-10 flex items-center justify-between my-2">
              <div className="w-11 h-8 bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-200 rounded-md p-1 border border-yellow-600/60 shadow-inner flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                <div className="border-b border-yellow-800/40 h-1/2 w-full flex">
                  <div className="w-1/2 border-r border-yellow-800/40" />
                </div>
                <div className="h-1/2 w-full flex">
                  <div className="w-1/2 border-r border-yellow-800/40" />
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-blue-200/80 uppercase">
                GPN
              </span>
            </div>

            {/* Bottom: Card Number & Holder */}
            <div className="relative z-10 space-y-2">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-blue-200/70 block">
                  Nomor Rekening
                </span>
                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <span className="font-mono text-base sm:text-lg font-bold tracking-widest text-white drop-shadow">
                    0321 0102 4241 531
                  </span>
                  
                  <button
                    onClick={() => handleCopy("032101024241531", "bri")}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md transition-all duration-300 shadow-md active:scale-95 shrink-0 ${
                      copied === "bri"
                        ? "bg-emerald-500 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {copied === "bri" ? (
                        <motion.span
                          key="check"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Tersalin</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-1"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              <div className="border-t border-white/15 pt-2 flex justify-between items-end">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-blue-200/70 block">
                    Nama Rekening
                  </span>
                  <span className="font-semibold text-xs sm:text-sm tracking-wider uppercase text-white drop-shadow">
                    ANDI IRAWAN
                  </span>
                </div>
                <span className="font-black italic text-lg text-white/90">DEBIT</span>
              </div>
            </div>
          </motion.div>

          {/* Kartu Bank BSI (Smooth SVG Silver Debit Design) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200 text-gray-800 p-5 sm:p-6 min-h-[220px] sm:min-h-[235px] flex flex-col justify-between select-none cursor-pointer transition-shadow hover:shadow-[0_20px_40px_rgba(0,168,158,0.25)]"
          >
            {/* Smooth SVG Smooth Curves Background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 400 250"
              fill="none"
            >
              {/* Teal Top-Left Curve */}
              <path
                d="M0 0 H180 C110 60 0 90 0 140 V0 Z"
                fill="#00a89e"
              />
              {/* Soft White Curve Accent */}
              <path
                d="M160 0 C100 65 0 95 0 150 V0 H160 Z"
                fill="#ffffff"
                fillOpacity="0.3"
              />
              {/* Smooth Orange Section Covering Entire Bottom */}
              <path
                d="M0 160 C120 150 240 100 400 30 V250 H0 Z"
                fill="url(#bsi-orange-grad)"
              />
              <defs>
                <linearGradient id="bsi-orange-grad" x1="0" y1="160" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f5a623" />
                  <stop offset="1" stopColor="#e08e00" />
                </linearGradient>
              </defs>
            </svg>

            {/* Header: Chip & SILVER DEBIT + BSI Logo */}
            <div className="relative z-10 flex justify-between items-start">
              {/* Chip & SILVER DEBIT */}
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-8 bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-200 rounded-md p-1 border border-yellow-600/60 shadow-inner flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  <div className="border-b border-yellow-800/40 h-1/2 w-full flex">
                    <div className="w-1/2 border-r border-yellow-800/40" />
                  </div>
                  <div className="h-1/2 w-full flex">
                    <div className="w-1/2 border-r border-yellow-800/40" />
                  </div>
                </div>
                <div className="leading-tight">
                  <span className="font-extrabold text-[11px] tracking-wider text-gray-700 block">
                    SILVER
                  </span>
                  <span className="font-bold text-[10px] tracking-wider text-gray-600 block">
                    DEBIT
                  </span>
                </div>
              </div>

              {/* BSI Logo with Star */}
              <div className="text-right">
                <div className="flex items-center justify-end gap-0.5">
                  <span className="font-black text-2xl tracking-tight text-white drop-shadow">
                    BSI
                  </span>
                  <span className="text-white text-xs font-bold -mt-3">✦</span>
                </div>
              </div>
            </div>

            {/* Middle: Account / Card Number */}
            <div className="relative z-10 my-2">
              <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold block mb-0.5">
                Nomor Rekening
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-base sm:text-xl font-bold tracking-widest text-gray-800 drop-shadow-sm">
                  7182 0028 90
                </span>

                <button
                  onClick={() => handleCopy("7182002890", "bsi")}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 shadow-md active:scale-95 shrink-0 ${
                    copied === "bsi"
                      ? "bg-emerald-600 text-white"
                      : "bg-[#00a89e] hover:bg-[#008f87] text-white"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {copied === "bsi" ? (
                      <motion.span
                        key="check-bsi"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Tersalin</span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy-bsi"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Bottom Row: Card Holder & VISA logo */}
            <div className="relative z-10 flex justify-between items-end border-t border-white/20 pt-2">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-white/90 font-bold block">
                  Nama Rekening
                </span>
                <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white drop-shadow-md">
                  ROSNA LINNY
                </span>
              </div>
              <span className="font-black italic text-xl sm:text-2xl text-white tracking-tighter drop-shadow-md">
                VISA
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
