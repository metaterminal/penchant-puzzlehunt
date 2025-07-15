"use client";
import React from "react";

// I have no idea how this function works, but an llm told me it returns a constant seed
function simpleSeeded(seed: number) {
  let value = seed % 2147483647;
  return function () {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

// shapes: bigger? smaller? blurrier? frequentier? colors? this script can accomodate
export default function DynamicBackground({ count = 150 }: { count?: number }) {
    const rng = simpleSeeded(1);
    const colors = [
    // "bg-red-400",
    // "bg-orange-400",
    // "bg-yellow-400",
    // "bg-green-400",
    // "bg-green-500",
    // "bg-blue-400",
    // "bg-blue-500",
    // "bg-blue-600",
    // "bg-purple-300",
    // "bg-purple-400",
    // "bg-purple-500",
    "bg-neutral-300"
  ];
  const isOutline = rng() > 0.5;
  const shapes = Array.from({ length: count }, () => ({
    top: `${rng() * 100}%`,
    left: `${rng() * 100}%`,
    width: `${rng() * 1 + 3}vw`,
    height: `${rng() * 1 + 0.75}vw`,
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
            // className={`absolute -rotate-45 ${d.blur} ${d.color} ${d.animation}`}
            // className={`absolute -rotate-90 blur-sm ${d.color} ${d.animation} rounded-lg`}
            className={`absolute -rotate-90 ${d.color} ${d.animation} rounded-lg`}
            style={{
              top: d.top,
              left: d.left,
              width: d.width,
              height: d.height,
              opacity: d.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
