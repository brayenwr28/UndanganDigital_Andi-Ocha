"use client";

import { motion } from "framer-motion";

const defaultImages = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto5.jpg"
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

        {/* Masonry / Grid Estetik */}
        <div className="grid grid-cols-2 gap-3">
          {/* Foto 1 - Besar di Atas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-2 aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-white border-4 border-white"
          >
            <img
              src={defaultImages[0]}
              alt="Galeri 1"
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Foto 2 - Kotak Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-1 aspect-square rounded-2xl overflow-hidden shadow-md bg-white border-4 border-white"
          >
            <img
              src={defaultImages[1]}
              alt="Galeri 2"
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Foto 3 - Kotak Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-1 aspect-square rounded-2xl overflow-hidden shadow-md bg-white border-4 border-white"
          >
            <img
              src={defaultImages[2]}
              alt="Galeri 3"
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Foto 4 - Potrait Kiri */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="col-span-1 aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-white border-4 border-white"
          >
            <img
              src={defaultImages[3]}
              alt="Galeri 4"
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Foto 5 - Potrait Kanan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="col-span-1 aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-white border-4 border-white"
          >
            <img
              src={defaultImages[4]}
              alt="Galeri 5"
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
