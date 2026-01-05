"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export function HeroCarousel() {
  const slides = useMemo(
    () => ["/1imagen.jpg", "/2imagen.jpg", "/3imagen.jpg", "/4imagen.jpg"],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-black/15" />

      <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a la imagen ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`size-2 rounded-full transition ${
              i === index ? "bg-sky-600" : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
