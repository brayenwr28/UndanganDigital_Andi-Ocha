"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircleHeart, Clock } from "lucide-react";

interface WishItem {
  id?: number;
  name: string;
  attendance?: string;
  message: string;
  created_at?: string;
  time?: string;
}

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "Hadir",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [wishes, setWishes] = useState<WishItem[]>([
    {
      name: "Keluarga Besar",
      message: "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah mawaddah warahmah ❤️",
      time: "Baru saja",
    },
  ]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://undangan.musiindahlogistik.co.id/api";

  // Ambil daftar ucapan dari Backend Laravel saat pertama load
  const fetchWishes = async () => {
    try {
      const res = await fetch(`${API_URL}/wishes`);
      if (res.ok) {
        const data = await res.json();
        setWishes(data);
      }
    } catch (err) {
      console.warn("Gagal terhubung ke Laravel API, menggunakan data lokal:", err);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(`${API_URL}/wishes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const responseData = await res.json();
        setFormData({ name: "", attendance: "Hadir", message: "" });
        setStatus("success");
        // Reload list ucapan dari API
        fetchWishes();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const errData = await res.json().catch(() => null);
        setErrorMessage(errData?.message || "Gagal mengirim ucapan ke backend.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting to Laravel API:", error);
      setErrorMessage("Tidak dapat terhubung ke server backend. Pastikan koneksi internet Anda lancar.");
      setStatus("error");
    }
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

            {status === "error" && (
              <p className="text-xs text-red-500 bg-red-50 p-2 rounded border border-red-200">
                {errorMessage}
              </p>
            )}

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
              key={wish.id || index}
              className="bg-[#faf6f1] rounded-lg p-3 border border-[#e8ddd0]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#8b7355]">{wish.name}</p>
                {wish.attendance && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${wish.attendance === 'Hadir' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {wish.attendance}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#b5a48f] my-1">
                <Clock className="w-3 h-3" />
                <span>
                  {wish.created_at
                    ? new Date(wish.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : wish.time || "Baru saja"}
                </span>
              </div>
              <p className="text-sm text-[#5c4a3a]">{wish.message}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

