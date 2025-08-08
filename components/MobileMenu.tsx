

// components/MobileMenu.tsx

'use client';

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaXTwitter, FaSnapchat } from "react-icons/fa6";
import Image from 'next/image';

// Data arrays remain the same
const socialLinks = [
  { href: "https://twitter.com", icon: <FaXTwitter className="h-6 w-6 text-light-gray" />, ariaLabel: "X (formerly Twitter) profile" },
  { href: "https://instagram.com", icon: <FaInstagram className="h-6 w-6 text-light-gray" />, ariaLabel: "Instagram profile" },
  { href: "https://snapchat.com", icon: <FaSnapchat className="h-6 w-6 text-light-gray" />, ariaLabel: "Snapchat profile" },
];
const navLinks = [
  { title: 'الرئيسية', href: '/' },
  { title: 'من نحن', href: '/about' },
  { title: 'خدماتنا', href: '/services' },
  { title: 'أعمالنا', href: '/portfolio' },
  { title: 'آراء العملاء', href: '/testimonials' },
  { title: 'احجز الآن', href: '/book' },
];

// Animation variants remain the same
const menuVariants: Variants = {
  hidden: {
    x: '100%',
    transition: {
      type: 'tween' as const,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5
    }
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween' as const,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5
    }
  },
};
const navLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      ease: 'easeOut' as const
    }
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.08,
      ease: 'easeOut' as const,
      duration: 0.3
    }
  }),
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // THE BACKDROP: Full screen, handles closing when clicked.
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose} // 1. Re-add onClick for backdrop closing
        >
          {/* THE CONTENT PANEL: Slides in, stops clicks from closing menu */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()} // Stop click from propagating to the backdrop
            // 2. Added pt-24 (padding-top) and moved other layout classes here
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-almost-black p-8 pt-24 flex flex-col justify-between gap-8"
          >

            
            {/* Navigation Links */}
            <nav className="flex-grow flex flex-col justify-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-semibold text-white/80 hover:text-white transition-colors duration-300"
                    onClick={onClose}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
                          <div>
              <Link href="/contact" className="inline-block bg-light-gray w-full text-3xl font-semibold mt-4 text-almost-black px-6 py-2 rounded-md hover:bg-light-gray/20 hover:text-light-gray transition-colors duration-300">
              تواصل معنا
            </Link>
            </div>
            
            </nav>


            {/* Social Links at the bottom */}
            <div className="flex-shrink-0 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.ariaLabel}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-4 bg-light-gray/20 rounded-2xl hover:bg-light-gray/30 transition-colors duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;