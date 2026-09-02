"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Route, Gem, BookHeart } from "lucide-react";

export default function StorySection() {
  const stories = [
    {
      date: "8 Januari 2026",
      title: "Awal Sebuah Pertemuan",
      desc: "Semua bermula ketika Andi dan Ocha dipertemukan dalam sebuah proses taaruf di Masjid. Sebuah pertemuan yang sederhana, namun menjadi awal dari perjalanan panjang yang tidak pernah mereka sangka sebelumnya.",
      type: "image",
      img: "/story1.jpg", // Gunakan foto asli di sini
    },
    {
      date: "Bulan Ramadhan",
      title: "Nadzor & Pertemuan Keluarga",
      desc: "Perjalanan berlanjut ke tahap nadzor. Di bulan Ramadhan, Andi bertemu dengan keluarga besar Ocha. Andi hadir menjadi imam shalat berjamaah dan turut mendoakan kesembuhan Ocha. Momen ini menjadi gambaran bahwa hubungan ini dibangun bukan hanya dengan rasa, tetapi juga dengan doa dan ketaatan.",
      type: "image",
      img: "/story2.jpg",
    },
    {
      date: "Perjalanan",
      title: "Yang Tidak Mudah",
      desc: "Perjalanan tidak selalu mudah dengan kesibukan dan tanggung jawab masing-masing. Ada waktu menunggu, jarak, dan kesabaran. Namun dari situ mereka belajar bahwa pernikahan bukan tentang siapa yang paling cepat, melainkan siapa yang tetap bersungguh-sungguh.",
      type: "illustration",
      icon: Route,
    },
    {
      date: "Khitbah",
      title: "Sebuah Keberanian",
      desc: "Andi kembali memberanikan diri melangkah lebih jauh. Dengan niat yang jelas, ia menemui orang tua Ocha. Langkah itu bukan sekadar meminta izin, tetapi bentuk keberanian seorang laki-laki menunjukkan keseriusannya untuk memperjuangkan keluarga perempuan.",
      type: "illustration",
      icon: Gem,
    },
    {
      date: "Menuju Halal",
      title: "Melibatkan Allah",
      desc: "Kini perjalanan itu perlahan membawa mereka menuju satu tujuan: membangun rumah tangga yang dipenuhi iman, kesabaran, dan keberkahan. Karena kisah cinta terindah adalah milik dua orang yang memilih berjuang, berdoa, dan melibatkan Allah dalam setiap langkahnya.",
      type: "image",
      img: "/story5.jpg", // Gunakan foto asli di sini
    },
  ];

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl text-[#8b7355] mb-2">Kisah Cinta</h2>
          <p className="text-sm text-[#5c4a3a]">
            Perjalanan Andi & Ocha
          </p>
        </motion.div>

        <div className="relative border-l border-[#d4c5b0] ml-4 md:ml-6 space-y-12 pb-4">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#f5f0eb] border-2 border-[#8b7355] flex items-center justify-center shadow-sm z-10">
                  <Heart className="w-3.5 h-3.5 text-[#8b7355] fill-[#8b7355]/20" />
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-xl shadow-sm border border-[#e8ddd0] overflow-hidden">

                  {/* Bagian Visual (Foto atau Ilustrasi) */}
                  {story.type === "image" ? (
                    <div className="relative w-full h-40 bg-[#f5f0eb]">
                      <Image
                        src={story.img!}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="text-xs font-bold text-white bg-[#8b7355]/80 px-2 py-1 rounded backdrop-blur-sm shadow-sm">
                          {story.date}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-32 bg-[#faf6f1] flex items-center justify-center border-b border-[#e8ddd0]">
                      {/* Dekorasi pola SVG estetik di background */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#8b7355" />
                          </pattern>
                          <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${index})`} />
                        </svg>
                      </div>

                      {/* Ikon Utama */}
                      {Icon && (
                        <div className="relative w-14 h-14 bg-white rounded-full shadow-sm border border-[#e8ddd0] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#8b7355]" strokeWidth={1.5} />
                        </div>
                      )}

                      <div className="absolute bottom-2 left-3">
                        <span className="text-[10px] font-bold text-[#8b7355] bg-white px-2 py-0.5 rounded shadow-sm border border-[#e8ddd0]">
                          {story.date}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Teks Konten */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#5c4a3a] text-lg mb-2">
                      {story.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#5c4a3a] leading-relaxed text-justify">
                      {story.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
