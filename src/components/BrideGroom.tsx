"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CoupleData {
  groom_name: string;
  groom_parents: string;
  groom_photo: string;
  bride_name: string;
  bride_parents: string;
  bride_photo: string;
}

const defaultCouple: CoupleData = {
  groom_name: "Andi Irawan, S.H., M.H",
  groom_parents: "Putra dari Bapak ... & Ibu ...",
  groom_photo: "/groom.jpg",
  bride_name: "Adv. Rosna Linny, S.H., Gr",
  bride_parents: "Putri dari Bapak Adiswan & Ibu Rosna",
  bride_photo: "/bride.jpg",
};

export default function BrideGroom() {
  const [couple, setCouple] = useState<CoupleData>(defaultCouple);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

  useEffect(() => {
    const fetchCouple = async () => {
      try {
        const res = await fetch(`${API_URL}/couple`);
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setCouple({
              groom_name: data.groom_name || defaultCouple.groom_name,
              groom_parents: data.groom_parents || defaultCouple.groom_parents,
              groom_photo: data.groom_photo_url || data.groom_photo || defaultCouple.groom_photo,
              bride_name: data.bride_name || defaultCouple.bride_name,
              bride_parents: data.bride_parents || defaultCouple.bride_parents,
              bride_photo: data.bride_photo_url || data.bride_photo || defaultCouple.bride_photo,
            });
          }
        }
      } catch (err) {
        console.warn("Laravel API couple fetch fallback to default:", err);
      }
    };

    fetchCouple();
  }, [API_URL]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-sm text-[#8b7355] font-light">
            Kami mohon do&apos;a & restunya atas pernikahan kami
          </p>
        </motion.div>

        {/* Mempelai Pria (Marapulai) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-44 h-44 mx-auto mb-4 rounded-full p-1 border-2 border-[#c4b5a3] shadow-md bg-white">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src={couple.groom_photo}
                alt={couple.groom_name}
                className="object-cover w-full h-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = defaultCouple.groom_photo;
                }}
              />
            </div>
          </div>
          <h2 className="font-script text-3xl md:text-4xl text-[#5c4a3a] mb-2 leading-tight">
            {couple.groom_name}
          </h2>
          <p className="text-xs text-[#8b7355] font-light">
            {couple.groom_parents}
          </p>
        </motion.div>

        {/* Separator & */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-script text-5xl text-[#8b7355] my-6"
        >
          &
        </motion.div>

        {/* Mempelai Wanita (Anak Daro) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-44 h-44 mx-auto mb-4 rounded-full p-1 border-2 border-[#c4b5a3] shadow-md bg-white">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src={couple.bride_photo}
                alt={couple.bride_name}
                className="object-cover w-full h-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = defaultCouple.bride_photo;
                }}
              />
            </div>
          </div>
          <h2 className="font-script text-3xl md:text-4xl text-[#5c4a3a] mb-2 leading-tight">
            {couple.bride_name}
          </h2>
          <p className="text-xs text-[#8b7355] font-light">
            {couple.bride_parents}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

