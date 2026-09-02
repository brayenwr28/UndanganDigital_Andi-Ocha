"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrideGroom() {
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
                src="/sicowok.jpeg"
                alt="Andi Irawan, S.H., M.H"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
          <h2 className="font-script text-3xl md:text-4xl text-[#5c4a3a] mb-2 leading-tight">
            Andi Irawan, S.H., M.H
          </h2>
          <p className="text-xs text-[#8b7355] font-light mt-1">
            Anak Keempat
          </p>
          <p className="text-xs text-[#8b7355] font-light">
            Putra dari Bapak irianto & Ibu Nurleli (Almarhumah)
          </p>
        </motion.div>

        {/* Separator & */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
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
                src="/sicewek.jpeg"
                alt="Adv. Rosna Linny, S.H., Gr"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
          <h2 className="font-script text-3xl md:text-4xl text-[#5c4a3a] mb-2 leading-tight">
            Adv. Rosna Linny, S.H., Gr
          </h2>
          <p className="text-xs text-[#8b7355] font-light mt-1">
            Anak Kedua
          </p>
          <p className="text-xs text-[#8b7355] font-light">
            Putri dari Bapak Adiswan & Ibu Rosna
          </p>
        </motion.div>
      </div>
    </section>
  );
}
