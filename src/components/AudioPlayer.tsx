"use client";

import { useEffect, useRef } from "react";
import { Disc3, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

export default function AudioPlayer({ isPlaying, togglePlay }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-40 p-3 bg-[#8b7355] text-white rounded-full shadow-lg hover:bg-[#7a6548] transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Disc3 className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
        )}
      </motion.button>
    </>
  );
}
