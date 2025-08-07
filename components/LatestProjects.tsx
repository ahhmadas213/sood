// Add 'use client' at the top for hooks and interactivity
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 1. IMPORT GSAP, FRAMER MOTION & ICONS
// =====================================
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion' // <-- Import Framer Motion
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Data structure remains the same
const latestProjects = [
  {
    title: 'هوية بصرية لمتجر "بيري"',
    description: 'تصميم شامل لهوية بصرية لمتجر بيري، يشمل الشعار والألوان والخطوط.',
    date: 'April 8, 2024',
    tags: ['هوية بصرية', 'تصميم ويب'],
    images: [
      '/images/gallery-3.webp',
      '/images/gallery-1.webp',
      '/images/gallery-2.webp',
    ],
  },
  {
    title: 'تغليف منتج "كريم مرطب"',
    description: 'تصميم تغليف مبتكر لمنتج كريم مرطب، يعكس الفخامة والجودة.',
    date: 'March 22, 2024',
    tags: ['تصميم منتجات', 'هوية بصرية'],
    images: [
      '/images/gallery-4.webp',
      '/images/gallery-3.webp',
    ],
  },
  {
    title: 'تطوير واجهة "موكاب"',
    description: 'تصميم واجهة مستخدم لموكاب تطبيق جديد، يركز على تجربة المستخدم.',
    date: 'February 15, 2024',
    tags: ['تصميم ويب', 'تطوير واجهات'],
    images: [
      '/images/gallery-7.webp',
      '/images/gallery-4.webp',
      '/images/gallery-5.webp',
      '/images/gallery-6.webp',
    ],
  },
];

interface Project {
  title: string;
  description?: string;
  date: string;
  tags: string[];
  images: string[];
}


// 3. PROJECT CARD WITH ADVANCED ANIMATIONS
// ========================================
const ProjectCard = ({ project }: { project: Project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track slide direction for Framer Motion
  const [direction, setDirection] = useState(0); 

  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // --- GSAP Hover Animation ---
  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      const rotateX = gsap.utils.mapRange(0, height, 10, -10)(y);
      const rotateY = gsap.utils.mapRange(0, width, -10, 10)(x);

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: 'power1.out',
        duration: 0.8,
      });
      gsap.to(image, {
        x: -rotateY * 0.5,
        y: rotateX * 0.5,
        ease: 'power1.out',
        duration: 0.8,
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        ease: 'power1.out',
        duration: 0.8,
      });
       gsap.to(image, {
        x: 0,
        y: 0,
        ease: 'power1.out',
        duration: 0.8,
      });
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // --- Framer Motion Slider Logic ---
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div ref={cardRef} className="project-card bg-white/5 rounded-3xl  flex flex-col h-full" style={{ transformStyle: 'preserve-3d' }}>
      <div ref={imageRef} className="relative w-full rounded-2xl aspect-[4/3] overflow-hidden">
        {/* Framer Motion Image Slider */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute h-full w-full"
          >
            <Image
              src={project.images[currentIndex]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {project.images.length > 1 && (
         <>
            <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 text-white rounded-full transition-opacity duration-300 hover:bg-black/70" aria-label="Previous Image"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 text-white rounded-full transition-opacity duration-300 hover:bg-black/70" aria-label="Next Image"><ChevronRight className="h-5 w-5" /></button>
          </>
        )}
      </div>
      <div className="flex pt-6 flex-col flex-grow">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs text-almost-black border border-almost-black/30 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-xs text-almost-black/60">{project.date}</p>
        </div>
        <h3 className="text-xl font-semibold text-almost-black flex-grow">{project.title}</h3>
        <p className='text-base text-almost-black/50 mt-1'>{project.description}</p>
      </div>
    </div>
  );
};


// 4. MAIN COMPONENT (NO CHANGES HERE)
// ============================================
const LatestProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from(sectionRef.current.querySelectorAll('.section-header-anim'), {
          opacity: 0, y: 50, duration: 0.8, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        });
        gsap.from(sectionRef.current.querySelectorAll('.project-card'), {
          opacity: 0, y: 60, duration: 1, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.grid') || sectionRef.current,
            start: 'top 85%'
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-light-gray text-almost-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-header-anim">المعرض </h2>
          <p className="text-lg text-almost-black/70 max-w-2xl mx-auto section-header-anim">
            مجموعة مختارة من المشاريع التي نفخر بها والتي تعكس شغفنا بالإبداع.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-12">
          {latestProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link className='text-almost-black underline ' href="/portfolio">شاهد كل الأعمال</Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;