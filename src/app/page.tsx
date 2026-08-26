"use client";

import { useState, useEffect } from "react";
import CoverSection from "@/components/CoverSection";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import QuoteSection from "@/components/QuoteSection";
import BrideGroom from "@/components/BrideGroom";
import EventDetail from "@/components/EventDetail";
import Gallery from "@/components/Gallery";
import GiftSection from "@/components/GiftSection";
import RsvpForm from "@/components/RsvpForm";
import ClosingSection from "@/components/ClosingSection";
import AudioPlayer from "@/components/AudioPlayer";
import { AnimatePresence } from "framer-motion";

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
    <main className="relative min-h-screen max-w-lg mx-auto bg-[#f5f0eb] shadow-2xl">
      <AnimatePresence>
        {!isOpened && <CoverSection onOpen={handleOpenInvitation} />}
      </AnimatePresence>

      <HeroSection />
      <CountdownTimer />
      <QuoteSection />
      <BrideGroom />
      <EventDetail />
      <Gallery />
      <GiftSection />
      <RsvpForm />
      <ClosingSection />

      {isOpened && (
        <AudioPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
      )}
    </main>
  );
}
