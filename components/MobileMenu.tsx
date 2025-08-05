'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { title: 'من نحن', href: '/about' },
  { title: 'خدماتنا', href: '/services' },
  { title: 'أعمالنا', href: '/portfolio' },
  { title: 'تواصل معنا', href: '/contact' },
];

const menuVariants = {
  hidden: {
    x: '100%',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
};

const navLinkVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      type: 'spring',
      stiffness: 100,
    },
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
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
          onClick={onClose}
        >
          <nav className="flex flex-col items-center space-y-8">
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
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
