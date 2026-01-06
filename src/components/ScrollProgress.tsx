"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-1 origin-left bg-sky-600"
      style={{ scaleX }}
    />
  );
}
