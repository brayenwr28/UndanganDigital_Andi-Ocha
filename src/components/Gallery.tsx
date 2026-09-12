"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const defaultImages = [
  "/Galery1.png",
  "/Galery2.png",
  "/Galery3.png",
  "/Galery4.png",
];

interface GalleryItem {
  id?: number;
  image_url?: string;
  url?: string;
  image?: string;
  path?: string;
}

export default function Gallery() {
  const [images, setImages] = useState<string[]>(defaultImages);

  useEffect(() => {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    const BACKEND_URL = API_BASE.replace(/\/api\/?$/, ""); // misal "http://127.0.0.1:8000"

    const fetchGalleries = async () => {
      try {
        const res = await fetch(`${API_BASE.replace(/\/$/, "")}/galleries`);
        if (!res.ok) return;

        const data = await res.json();
        const list = Array.isArray(data) ? data : data.data || [];

        if (list.length > 0) {
          const parsedUrls = list
            .map((item: string | GalleryItem) => {
              if (typeof item === "string") {
                return item.startsWith("http")
                  ? item
                  : `${BACKEND_URL}/storage/${item.replace(/^\/?storage\//, "").replace(/^\//, "")}`;
              }
              const imgPath = item.image_url || item.url || item.image || item.path || "";
              if (!imgPath) return "";
              if (imgPath.startsWith("http")) return imgPath;
              return `${BACKEND_URL}/storage/${imgPath.replace(/^\/?storage\//, "").replace(/^\//, "")}`;
            })
            .filter(Boolean);

          if (parsedUrls.length > 0) {
            setImages(parsedUrls);
          }
        }
      } catch (err) {
        console.warn("Gagal mengambil data galeri dari API, menggunakan foto default:", err);
      }
    };

    fetchGalleries();
  }, []);

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
          {images.map((src, idx) => (
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
