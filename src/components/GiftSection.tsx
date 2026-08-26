"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function GiftSection() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-4xl text-[#8b7355] mb-3">Kado</h2>
          <p className="text-sm text-[#5c4a3a] mb-8">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kedua mempelai.
            Namun jika memberi adalah ungkapan tanda kasih Anda, dapat disalurkan melalui:
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Rekening 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-5 shadow-sm border border-[#e8ddd0]"
          >
            <p className="text-sm font-bold text-[#5c4a3a]">Bank BRI</p>
            <p className="text-xs text-[#8b7355] mt-1">Nama Rekening</p>
            <p className="text-sm text-[#5c4a3a]">Andi Irawan</p>
            <p className="text-xs text-[#8b7355] mt-2">Nomor Rekening</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-sm font-mono font-bold text-[#5c4a3a]">032101024241531</span>
              <button
                onClick={() => handleCopy("032101024241531", "bri")}
                className="p-1.5 rounded-md bg-[#f5f0eb] hover:bg-[#e8ddd0] transition-colors"
              >
                <Copy className="w-3.5 h-3.5 text-[#8b7355]" />
              </button>
            </div>
            {copied === "bri" && (
              <p className="text-xs text-green-600 mt-1">Tersalin!</p>
            )}
          </motion.div>

          {/* Rekening 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-5 shadow-sm border border-[#e8ddd0]"
          >
            <p className="text-sm font-bold text-[#5c4a3a]">Bank BSI</p>
            <p className="text-xs text-[#8b7355] mt-1">Nama Rekening</p>
            <p className="text-sm text-[#5c4a3a]">Rosna Linny</p>
            <p className="text-xs text-[#8b7355] mt-2">Nomor Rekening</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-sm font-mono font-bold text-[#5c4a3a]">7182002890</span>
              <button
                onClick={() => handleCopy("7182002890", "bsi")}
                className="p-1.5 rounded-md bg-[#f5f0eb] hover:bg-[#e8ddd0] transition-colors"
              >
                <Copy className="w-3.5 h-3.5 text-[#8b7355]" />
              </button>
            </div>
            {copied === "bsi" && (
              <p className="text-xs text-green-600 mt-1">Tersalin!</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
