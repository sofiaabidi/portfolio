"use client";

import { marqueeTags } from "@/lib/portfolio-data";

type MarqueeProps = {
  variant?: "default" | "reverse" | "stripes";
  className?: string;
};

// A neon-brutalist marquee strip. Renders the same content twice for a
// seamless infinite scroll.
export function Marquee({ variant = "default", className = "" }: MarqueeProps) {
  const isReverse = variant === "reverse";
  const isStripes = variant === "stripes";

  const stripBg = isStripes
    ? "bg-brutal-black text-white"
    : "bg-brutal-yellow text-brutal-black";

  return (
    <div
      className={`relative overflow-hidden border-y-3 border-brutal-black ${stripBg} ${className}`}
    >
      <div
        className={`flex whitespace-nowrap ${
          isReverse ? "animate-marquee-fast" : "animate-marquee"
        }`}
        style={isReverse ? { animationDirection: "reverse" } : undefined}
      >
        {Array.from({ length: 2 }).map((_, dupIdx) => (
          <div key={dupIdx} className="flex shrink-0 items-center">
            {marqueeTags.map((tag, i) => (
              <span
                key={`${dupIdx}-${i}`}
                className="flex items-center font-mono text-sm font-bold uppercase tracking-widest md:text-base"
              >
                <span className="px-5 py-3 md:px-7 md:py-4">{tag}</span>
                <span
                  className={
                    isStripes ? "text-brutal-orange" : "text-brutal-coral"
                  }
                >
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
