"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: number; // 0 = kelopak, 1 = daun kecil, 2 = lingkaran kecil
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * -25,
      opacity: 0.15 + Math.random() * 0.35,
      type: Math.floor(Math.random() * 3),
    }));
    setPetals(newPetals);
  }, []);

  const renderShape = (petal: Petal) => {
    const s = petal.size;
    switch (petal.type) {
      case 0: // Kelopak bunga
        return (
          <svg width={s} height={s} viewBox="0 0 24 24" fill="#c4b5a3">
            <path d="M12 2C16.5 2 20 6.5 20 12C20 17.5 12 22 12 22C12 22 4 17.5 4 12C4 6.5 7.5 2 12 2Z" />
          </svg>
        );
      case 1: // Daun kecil
        return (
          <svg width={s} height={s * 0.7} viewBox="0 0 30 20" fill="#d4c5b0">
            <ellipse cx="15" cy="10" rx="14" ry="8" />
          </svg>
        );
      case 2: // Titik lembut
        return (
          <svg width={s * 0.5} height={s * 0.5} viewBox="0 0 10 10" fill="#8b7355" opacity="0.6">
            <circle cx="5" cy="5" r="5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: "-5%",
            opacity: petal.opacity,
            animation: `petalFall ${petal.duration}s linear infinite, petalSway ${petal.duration / 4}s ease-in-out infinite alternate`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          {renderShape(petal)}
        </div>
      ))}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes petalFall {
          0% { top: -8%; transform: rotate(0deg); }
          100% { top: 105%; transform: rotate(360deg); }
        }
        @keyframes petalSway {
          0% { margin-left: -20px; }
          100% { margin-left: 30px; }
        }
      `}} />
    </div>
  );
}
