"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-[#5c4a3a] leading-relaxed mb-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami,
            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan
            doa restu kepada kedua mempelai.
          </p>
          <p className="text-sm text-[#5c4a3a] leading-relaxed mb-8">
            Atas kehadiran serta doa restu, kami ucapkan terima kasih.
          </p>

          <p className="text-sm italic text-[#8b7355] mb-2">Wassalamu&apos;alaikum Wr. Wb.</p>

          <h2 className="font-script text-3xl text-[#5c4a3a] mt-6">
            Andi & Ocha
          </h2>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-[#e8ddd0] text-center">
        <p className="text-xs text-[#b5a48f]">
          Made with ❤️ for Andi & Ocha
        </p>
      </div>
    </section>
  );
}
