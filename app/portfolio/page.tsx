'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowUpRight, Filter } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

// 1. IMPORT GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- DATA (Using your existing data structure) ---
const portfolioItems = [
    { id: 1, title: "شركة تقنية ناشئة", client: "تك إنوفيشن", category: "هوية بصرية متكاملة", image: "/images/gallery-1.webp", year: "2024", size: "large"},
    { id: 2, title: "مطعم فاخر", client: "مذاق الأصالة", category: "شعار + هوية", image: "/images/gallery-2.webp", year: "2024", size: "medium"},
    { id: 3, title: "متجر أزياء", client: "أناقة عصرية", category: "سوشيال ميديا", image: "/images/gallery-3.webp", year: "2024", size: "medium"},
    { id: 4, title: "عيادة طبية", client: "مركز الشفاء الطبي", category: "هوية بصرية", image: "/images/gallery-4.webp", year: "2023", size: "small"},
    { id: 5, title: "شركة استشارات", client: "رؤى للاستشارات", category: "هوية بصرية متكاملة", image: "/images/gallery-5.webp", year: "2023", size: "small"},
    { id: 6, title: "كافيه متخصص", client: "قهوة الحرفيين", category: "شعار + تطبيقات", image: "/images/gallery-6.webp", year: "2023", size: "large"}
];
const categories = ["الكل", "هوية بصرية متكاملة", "شعار + هوية", "سوشيال ميديا", "هوية بصرية", "شعار + تطبيقات"];


export default function ModernPortfolio() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const mainRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "الكل" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const getCardClasses = (size: string) => {
    switch(size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'medium': return 'md:col-span-1 row-span-1';
      case 'small': return 'md:col-span-1 row-span-1';
      default: return 'md:col-span-1 row-span-1';
    }
  };

  // --- GSAP ANIMATIONS ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Hero
      gsap.from(".hero-anim", {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.2, ease: 'power3.out'
      });
      // Animate Filters
      gsap.from(".filter-anim", {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ".filters-container", start: "top 85%" }
      });
      // Animate Grid
       if (gridRef.current) {
         gsap.from(gridRef.current.children, {
           opacity: 0, y: 50, scale: 0.95, duration: 0.8, stagger: 0.1, ease: 'power3.out',
           scrollTrigger: { trigger: gridRef.current, start: "top 80%" }
         });
       }
    }, mainRef);
    return () => ctx.revert();
  }, [activeCategory]); // Re-run animations when category changes

  return (
    <div ref={mainRef} className="min-h-screen bg-almost-black text-light-gray" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-almost-black"></div>
        <div className="relative container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white hero-anim">
            صُنِع بشغف وإبداع
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed hero-anim">
            مجموعة مختارة من قصص النجاح البصرية التي صنعناها لعملائنا
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="px-6 mb-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 filters-container">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 filter-anim ${
                  activeCategory === category
                    ? 'bg-light-gray text-black shadow-lg shadow-yellow-500/20' // Active state with accent color
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 pb-32">
        <div className="container mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            {filteredItems.map((item) => (
              <Link
                href={`/portfolio/${item.id}`}
                key={item.id}
                className={`${getCardClasses(item.size)} group block`}
              >
                <div className="relative h-full w-full rounded-3xl overflow-hidden bg-[#1C1C1E] border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="text-white/70 text-sm font-medium">{item.client}</p>
                    </div>
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-6">
              <div className="container mx-auto">
        <div
          className="flex flex-col bg-white/5 border border-white/10 md:flex-row items-center justify-between rounded-3xl p-8 gap-10"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to left, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0) 70%), url('/cta-image.webp')",
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        >
          {/* Text Content */}  
          <div className="text-right md:max-w-[50%] space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            هل لديك فكرة مشروع؟
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-white">
              دعنا نساعدك في تحويلها إلى حقيقة بصرية مؤثرة تترك بصمة لا تُنسى.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 bg-light-gray hover:bg-light-gray/80 transition-all text-almost-black text-base duration-300 sm:text-xl md:text-2xl font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-md"
              >
              ابدأ مشروعك الآن
                <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10 p-1.5 sm:p-2 bg-white text-almost-black rounded-full flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}