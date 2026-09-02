"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function EventDetail() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-script text-4xl text-[#8b7355] mb-3">Acara</h2>
          <p className="text-sm text-[#5c4a3a]">
            Kami bermaksud untuk mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami pada:
          </p>
        </motion.div>

        {/* Akad Nikah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl p-6 mb-4 shadow-sm text-center"
        >
          <h3 className="text-lg font-bold text-[#5c4a3a] mb-4">Akad Nikah</h3>

          <div className="space-y-2 text-sm text-[#5c4a3a]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#8b7355]" />
              <span>Sabtu, 24 Oktober 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#8b7355]" />
              <span>08.00 WIB - Selesai</span>
            </div>
            <div className="flex items-start justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#8b7355] shrink-0 mt-0.5" />
              <span>Kediaman Keluarga<br />Jl. Joundul Rawang - Padang Selatan - Blok C/20</span>
            </div>
          </div>

          <a
            href="https://www.google.com/calendar/event?action=TEMPLATE&text=Akad+Nikah+Andi+%26+Ocha&dates=20261024T010000Z/20261024T030000Z&location=Jl.+Joundul+Rawang+-+Padang+Selatan+-+Blok+C/20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 text-xs font-medium text-white bg-[#8b7355] rounded-md hover:bg-[#7a6548] transition-colors"
          >
            <Calendar className="w-3 h-3 inline mr-1 -mt-0.5" />
            Simpan Tanggal
          </a>
        </motion.div>

        {/* Divider */}
        <div className="flex justify-center my-2">
          <div className="w-px h-8 bg-[#d4c5b0]" />
        </div>

        {/* Resepsi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl p-6 mb-6 shadow-sm text-center"
        >
          <h3 className="text-lg font-bold text-[#5c4a3a] mb-4">Resepsi</h3>

          <div className="space-y-2 text-sm text-[#5c4a3a]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#8b7355]" />
              <span>Sabtu, 24 Oktober 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#8b7355]" />
              <span>8.00 WIB - Selesai</span>
            </div>
            <div className="flex items-start justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#8b7355] shrink-0 mt-0.5" />
              <span>Kediaman Keluarga<br />Jl. Joundul Rawang - Padang Selatan - Blok C/20</span>
            </div>
          </div>

          <a
            href="https://www.google.com/calendar/event?action=TEMPLATE&text=Resepsi+Andi+%26+Ocha&dates=20261024T040000Z/20261024T100000Z&location=Jl.+Joundul+Rawang+-+Padang+Selatan+-+Blok+C/20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 text-xs font-medium text-white bg-[#8b7355] rounded-md hover:bg-[#7a6548] transition-colors"
          >
            <Calendar className="w-3 h-3 inline mr-1 -mt-0.5" />
            Simpan Tanggal
          </a>
        </motion.div>

        {/* Maps Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://maps.app.goo.gl/HituNCtyvmm5feYz6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#8b7355] rounded-md hover:bg-[#7a6548] transition-colors shadow-md"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Navigasi Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
