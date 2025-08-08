// components/TracingBeam.tsx

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Heart, Eye, Users, Palette } from 'lucide-react';

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export const TracingBeam = ({ children, className }: TracingBeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <div className="absolute right-0 top-0 h-full w-2">
        <svg viewBox="0 0 20 100" width="20" height="100%" className="ml-4 block" preserveAspectRatio="none">
          {/* The tracing line */}
          <motion.path
            d="M 1 0V 100"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.2"
            transition={{ duration: 10 }}
          ></motion.path>
          {/* The glowing beam */}
          <motion.path
            d="M 1 0V 100"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]"
            style={{ pathLength }}
          />
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100">
              <stop stopColor="#FFFFFF" stopOpacity="0"></stop>
              <stop stopColor="#FFFFFF"></stop>
              <stop offset="0.325" stopColor="#D1D1D1"></stop>
              <stop offset="1" stopColor="#1B1B1D" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mr-10">{children}</div>
    </div>
  );
};