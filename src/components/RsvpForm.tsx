"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircleHeart, Clock } from "lucide-react";

interface WishItem {
  name: string;
  message: string;
  time: string;
}

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "Hadir",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [wishes, setWishes] = useState<WishItem[]>([
    {
      name: "Keluarga Besar",
      message: "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah mawaddah warahmah ❤️",
      time: "Baru saja",
    },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setStatus("loading");

    // Simulasi kirim data
    setTimeout(() => {
      const newWish: WishItem = {
        name: formData.name,
        message: formData.message,
        time: "Baru saja",
      };
      setWishes([newWish, ...wishes]);
      setFormData({ name: "", attendance: "Hadir", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="font-script text-4xl text-[#8b7355] mb-3">Ucapan & Doa</h2>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-[#e8ddd0] rounded-lg text-sm text-[#5c4a3a] placeholder-[#b5a48f] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/30 focus:border-[#8b7355]"
              placeholder="Nama Anda"
            />

            <select
              value={formData.attendance}
              onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-[#e8ddd0] rounded-lg text-sm text-[#5c4a3a] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/30 focus:border-[#8b7355]"
            >
              <option value="Hadir">Ya, Saya akan hadir</option>
              <option value="Tidak Hadir">Maaf, Saya tidak bisa hadir</option>
            </select>

            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-[#e8ddd0] rounded-lg text-sm text-[#5c4a3a] placeholder-[#b5a48f] focus:outline-none focus:ring-2 focus:ring-[#8b7355]/30 focus:border-[#8b7355] resize-none"
              placeholder="Tulis ucapan & doa"
            />

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full py-3 text-sm font-medium text-white bg-[#8b7355] rounded-lg hover:bg-[#7a6548] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <MessageCircleHeart className="w-4 h-4 inline mr-1 -mt-0.5" />
              {status === "loading" ? "Mengirim..." : status === "success" ? "Terkirim!" : "Kirim Ucapan"}
            </button>
          </form>
        </motion.div>

        {/* Wishes List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-h-80 overflow-y-auto space-y-3 pr-1"
        >
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-[#faf6f1] rounded-lg p-3 border border-[#e8ddd0]"
            >
              <p className="text-sm font-bold text-[#8b7355]">{wish.name}</p>
              <div className="flex items-center gap-1 text-[10px] text-[#b5a48f] mb-2">
                <Clock className="w-3 h-3" />
                <span>{wish.time}</span>
              </div>
              <p className="text-sm text-[#5c4a3a]">{wish.message}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
