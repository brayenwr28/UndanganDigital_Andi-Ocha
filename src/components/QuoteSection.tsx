"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#8b7355]"
        >
          <p className="text-lg md:text-xl leading-relaxed italic mb-4" dir="rtl" lang="ar">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>
          <p className="text-sm leading-relaxed text-[#5c4a3a] mt-4 italic">
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
            isteri-isteri dari jenismu sendiri, supaya kamu merasa tenang dan tenteram
            kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berfikir.&rdquo;
          </p>
          <p className="text-sm font-bold text-[#8b7355] mt-4">
            QS. Ar-Rum: 21
          </p>
        </motion.div>
      </div>
    </section>
  );
}
