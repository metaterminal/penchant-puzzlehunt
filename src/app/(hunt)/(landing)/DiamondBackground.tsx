"use client";
import React from "react";
import { cn } from "~/lib/utils";

function simpleSeeded(seed: number) {
  let value = seed % 2147483647;
  return function () {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export default function DiamondBackground({ count = 123 }: { count?: number }) {

    const rng = simpleSeeded(123);

      const colors = [
    "bg-red-400",
    // "bg-red-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-green-500",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-purple-300",
    "bg-purple-500"
  ];

  const diamonds = Array.from({ length: count }, () => ({
    top: `${rng() * 100}%`,
    left: `${rng() * 100}%`,
    width: `${rng() * 1 + 3}rem`,
    height: `${rng() * 1 + 0.75}rem`,
    opacity: rng() * 0.3 + 0.2,
    color: colors[Math.floor(rng() * colors.length)],
    animation:
      rng() > 0.66 ? "animate-blink-slow" : rng() > 0.33 ? "animate-blink-slower" : "animate-blink-fast",
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-main-bg">
      <div className="relative w-full h-full">
        {diamonds.map((d, i) => (
          <div
            key={i}
            // className={`absolute -rotate-45 ${d.blur} ${d.color} ${d.animation}`}
            className={`absolute -rotate-45 blur-sm ${d.color} ${d.animation} rounded-lg`}
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
