"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-16 px-4 text-center overflow-hidden">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#8b7355] font-medium mb-3">
            Undangan Pernikahan
          </p>

          <h1 className="font-script text-5xl md:text-6xl text-[#5c4a3a] mb-6 leading-tight">
            Andi & Ocha
          </h1>

          <p className="text-sm font-light text-[#6b5847] mb-1">Sabtu</p>
          <p className="text-base font-medium tracking-[0.2em] text-[#5c4a3a]">
            17 • 10 • 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}

