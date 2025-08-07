'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// 1. IMPORT AnimatePresence from Framer Motion and the new icons
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi'; // Using Heroicons from react-icons
import { useScrollDirection } from '@/hooks/useScrollDirection';
import MobileMenu from '@/components/MobileMenu';


const Header = () => {
  const { isVisible } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the icons
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, rotate: 90 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mx-auto bg-almost-black/50 backdrop-blur-sm shadow-lg rounded-2xl z-50"
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Sood Logo" width={48} height={48} className="rounded-full border-2 border-white/20" />
              <span className="text-xl font-bold text-light-gray tracking-wider">سُود</span>
            </Link>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300">عن سُود</Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-colors duration-300">خدماتنا</Link>
            <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors duration-300">أعمالنا</Link>
            <Link href="/testimonials" className="text-white/80 hover:text-white transition-colors duration-300">آراء العملاء</Link>
            <Link href="/book" className="text-white/80 hover:text-white transition-colors duration-300">احجز الآن</Link>
          </nav>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:inline-block bg-light-gray text-almost-black px-6 py-2 rounded-md hover:bg-light-gray/20 hover:text-light-gray transition-colors duration-300">
              تواصل معنا
            </Link>

            {/* --- MOBILE MENU BUTTON --- */}
            {/* 2. This is the updated section */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-white p-2 z-10 rounded-full hover:bg-white/20 transition-colors duration-300 flex items-center justify-center w-11 h-11"
                aria-label="Toggle menu"
              >
                {/* 3. AnimatePresence handles the enter/exit animations */}
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close" // Unique key is crucial for AnimatePresence
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <HiX className="h-7 w-7" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu" // Unique key is crucial for AnimatePresence
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <HiMenu className="h-7 w-7" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.header>
      {/* 4. The MobileMenu component now receives the state and works as before */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;