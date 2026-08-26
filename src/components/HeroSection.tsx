"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm tracking-widest text-[#8b7355] mb-4">
            Undangan Pernikahan
          </p>

          <h1 className="font-script text-5xl md:text-6xl text-[#5c4a3a] mb-4">
            Andi & Ocha
          </h1>

          <p className="text-sm text-[#8b7355] mb-2">Sabtu</p>
          <p className="text-sm text-[#5c4a3a] tracking-wider">17 • 10 • 2026</p>

          {/* Countdown inline */}
          <div className="flex justify-center mt-8" id="countdown-hero" />
        </motion.div>
      </div>
    </section>
  );
}
