"use client";
import React from "react";

// I don't feel like figuring out how this function works, but an llm told me it returns a constant seed
function simpleSeeded(seed: number) {
  let value = seed % 2147483647;
  return function () {
    value = (value * 16808) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

// shapes: bigger? smaller? blurrier? frequentier? colors? this script can accomodate
export default function DynamicBackground({ count = 150 }: { count?: number }) {
    const rng = simpleSeeded(1);
    const colors = [
      "bg-neutral-200",
      "bg-neutral-300",
      ];
  const shapes = Array.from({ length: count }, () => ({
    top: `${rng() * 175}%`,
    left: `${rng() * 150}%`,
    width: `${rng() * 1 + 8}vw`,
    opacity: rng() * 0.3 + 0.2,
    color: colors[Math.floor(rng() * colors.length)],
    animation:
      rng() > 0.66 ? "animate-blink-slow" : rng() > 0.33 ? "animate-blink-slower" : "animate-blink-fast",
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {shapes.map((d, i) => (
          <div
            key={i}
            className={`absolute ${d.color} ${d.animation} rounded-full`}
            style={{
              top: d.top,
              left: d.left,
              width: d.width,
              height: d.width,
              opacity: d.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
