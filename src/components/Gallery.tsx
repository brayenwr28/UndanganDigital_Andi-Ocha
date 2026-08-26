"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) setCurrentIndex(galleryImages.length - 1);
    else if (index >= galleryImages.length) setCurrentIndex(0);
    else setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-script text-4xl text-[#8b7355]">Galeri</h2>
        </motion.div>

        {/* Thumbnail Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 justify-center">
            {galleryImages.map((src, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? "border-[#8b7355] opacity-100"
                    : "border-transparent opacity-60 hover:opacity-80"
                }`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
            <div className="relative aspect-[4/5]">
              <Image
                src={galleryImages[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-[#5c4a3a]" />
            </button>
            <button
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-[#5c4a3a]" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#8b7355] w-4" : "bg-[#d4c5b0]"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
