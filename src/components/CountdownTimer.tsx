"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const targetDate = new Date("2026-10-24T08:00:00+07:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="py-6 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-2 sm:gap-3"
        >
          {items.map((item, index) => (
            <div key={item.label} className="flex items-center gap-2 sm:gap-3">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-[#ece4d9]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#5c4a3a]">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[11px] text-[#8b7355] mt-2 font-light">{item.label}</span>
              </div>
              {index < items.length - 1 && (
                <span className="text-xl font-medium text-[#8b7355] -mt-5">:</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

