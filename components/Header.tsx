'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import MobileMenu from '@/components/MobileMenu';

const Header = () => {
  const { isVisible } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl mx-auto bg-white/5 backdrop-blur-lg shadow-xl rounded-full z-50"
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.jpg" alt="Sood Logo" width={48} height={48} className="rounded-full border-2 border-white/20" />
              <span className="text-xl font-bold text-white tracking-wider">سود</span>
            </Link>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300">
              من نحن
            </Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-colors duration-300">
              خدماتنا
            </Link>
            <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors duration-300">
              أعمالنا
            </Link>
          </nav>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:inline-block bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors duration-300">
              تواصل معنا
            </Link>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <motion.path
                    initial={false}
                    animate={{ d: isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.header>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;