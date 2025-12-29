import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-6 md:px-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-sm tracking-[0.2em] uppercase text-neutral-500"
        >
          UX/UI Designer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8"
        >
          Ankit Dhyani
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed"
        >
          A designer who brings inclusive, minimal, and future-oriented user experience to
          people in need.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          View My Work
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-6 h-6 text-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
