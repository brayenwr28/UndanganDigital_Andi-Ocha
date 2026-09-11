"use client";

import { motion } from "framer-motion";

const defaultImages = [
  "/Galery1.png",
  "/Galery2.png",
  "/Galery3.png",
  "/Galery4.png"
];

export default function Gallery() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-10"
        >
          <h2 className="font-script text-4xl text-[#8b7355] mb-2">Galeri Cinta</h2>
          <p className="text-sm text-[#5c4a3a] font-light">
            Momen bahagia yang kami abadikan
          </p>
        </motion.div>

        {/* Masonry Layout Murni (Tidak memotong tinggi foto) */}
        <div className="columns-2 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {defaultImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="break-inside-avoid bg-white p-2 md:p-3 rounded-lg shadow-sm border border-[#e8ddd0]"
            >
              <div className="relative rounded-md overflow-hidden">
                <img
                  src={src}
                  alt={`Galeri ${idx + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
