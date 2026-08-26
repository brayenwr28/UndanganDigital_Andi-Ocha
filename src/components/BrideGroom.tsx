"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrideGroom() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-sm text-[#8b7355]">
            Kami mohon do&apos;a & restunya atas pernikahan kami
          </p>
        </motion.div>

        {/* Mempelai Pria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#d4c5b0] shadow-lg">
            <Image
              src="/groom.jpg"
              alt="Mempelai Pria"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="font-script text-3xl text-[#5c4a3a] mb-1">
            Andi Irawan, S.H., M.H
          </h2>
          <p className="text-xs text-[#8b7355]">
            Putra dari Bapak ... & Ibu ...
          </p>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-script text-5xl text-[#8b7355] my-6"
        >
          &
        </motion.div>

        {/* Mempelai Wanita */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#d4c5b0] shadow-lg">
            <Image
              src="/bride.jpg"
              alt="Mempelai Wanita"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="font-script text-3xl text-[#5c4a3a] mb-1">
            Adv. Rosna Linny, S.H., Gr
          </h2>
          <p className="text-xs text-[#8b7355]">
            Putri dari Bapak Adiswan & Ibu Rosna
          </p>
        </motion.div>
      </div>
    </section>
  );
}
