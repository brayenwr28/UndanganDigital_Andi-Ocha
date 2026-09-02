"use client";

import { useState, useEffect } from "react";
import CoverSection from "@/components/CoverSection";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import QuoteSection from "@/components/QuoteSection";
import BrideGroom from "@/components/BrideGroom";
import EventDetail from "@/components/EventDetail";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import GiftSection from "@/components/GiftSection";
import RsvpForm from "@/components/RsvpForm";
import ClosingSection from "@/components/ClosingSection";
import AudioPlayer from "@/components/AudioPlayer";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mencegah scroll saat cover belum dibuka
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="relative min-h-screen max-w-lg mx-auto bg-[#f5f0eb] shadow-2xl overflow-hidden">

      {/* Dekorasi Bunga Tepi Layar (Muncul setelah dibuka) */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 max-w-lg mx-auto pointer-events-none z-0"
          >
            {/* Kiri Atas */}
            <div className="absolute top-0 left-0 w-40 md:w-56 opacity-60">
              <svg viewBox="0 0 200 200" className="w-full text-[#c4b5a3]">
                <path d="M0,0 Q40,10 30,50 Q15,90 40,120 Q15,100 50,70 Q90,50 70,15 Q50,0 0,0Z" fill="currentColor"/>
                <path d="M10,10 Q35,25 20,45 Q10,65 25,85 Q15,75 35,55 Q55,35 45,15 Q25,5 10,10Z" fill="#8b7355" opacity="0.4"/>
                <circle cx="20" cy="20" r="4" fill="#8b7355" opacity="0.6"/>
                <circle cx="45" cy="50" r="3" fill="#8b7355" opacity="0.5"/>
                <circle cx="65" cy="25" r="2" fill="#8b7355" opacity="0.4"/>
              </svg>
            </div>

            {/* Kanan Bawah */}
            <div className="absolute bottom-0 right-0 w-40 md:w-56 opacity-60 rotate-180">
              <svg viewBox="0 0 200 200" className="w-full text-[#c4b5a3]">
                <path d="M0,0 Q40,10 30,50 Q15,90 40,120 Q15,100 50,70 Q90,50 70,15 Q50,0 0,0Z" fill="currentColor"/>
                <path d="M10,10 Q35,25 20,45 Q10,65 25,85 Q15,75 35,55 Q55,35 45,15 Q25,5 10,10Z" fill="#8b7355" opacity="0.4"/>
                <circle cx="20" cy="20" r="4" fill="#8b7355" opacity="0.6"/>
                <circle cx="45" cy="50" r="3" fill="#8b7355" opacity="0.5"/>
                <circle cx="65" cy="25" r="2" fill="#8b7355" opacity="0.4"/>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpened && <CoverSection onOpen={handleOpenInvitation} />}
      </AnimatePresence>

      <div className="relative z-10">
        <HeroSection />
      <CountdownTimer />
      <QuoteSection />
      <BrideGroom />
      <EventDetail />
      <StorySection />
      <Gallery />
      <GiftSection />
      <RsvpForm />
      <ClosingSection />
      </div>

      {isOpened && (
        <AudioPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
      )}
    </main>
  );
}
