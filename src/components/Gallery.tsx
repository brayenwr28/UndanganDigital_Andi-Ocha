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
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://invit.metamedia.ac.id/api";
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
              let imgPath =
                typeof item === "string"
                  ? item
                  : item.image_url || item.url || item.image || item.path || "";
              if (!imgPath) return "";

              // Jika data di DB masih mengandung localhost/127.0.0.1, ganti dengan BACKEND_URL
              if (imgPath.includes("localhost") || imgPath.includes("127.0.0.1")) {
                imgPath = imgPath.replace(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/, BACKEND_URL);
              }

              if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) {
                // Konversi http ke https jika halaman dimuat via HTTPS (mencegah Mixed Content Block)
                if (typeof window !== "undefined" && window.location.protocol === "https:") {
                  return imgPath.replace(/^http:\/\//, "https://");
                }
                return imgPath;
              }

              // Bersihkan prefix 'public/' atau 'storage/' yang berulang
              const cleanPath = imgPath
                .replace(/^\/?public\//, "")
                .replace(/^\/?storage\//, "")
                .replace(/^\//, "");

              const finalUrl = `${BACKEND_URL}/storage/${cleanPath}`;
              if (typeof window !== "undefined" && window.location.protocol === "https:") {
                return finalUrl.replace(/^http:\/\//, "https://");
              }
              return finalUrl;
            })
            .filter(Boolean);

          setImages(parsedUrls);
        } else {
          // Jika admin mengosongkan/menghapus semua foto dari backend, kosongkan daftar foto
          setImages([]);
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

        {images.length === 0 ? (
          <p className="text-center text-sm text-[#8b7355]/70 italic py-6">
            Belum ada foto galeri yang diunggah.
          </p>
        ) : (
          /* Masonry Layout Murni (Tidak memotong tinggi foto) */
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
        )}
      </div>
    </section>
  );
}
