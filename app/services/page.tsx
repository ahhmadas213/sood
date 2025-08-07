'use client';

// 1. IMPORT HOOKS AND LIBRARIES
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Link from 'next/link';

// 2. IMPORT GSAP FOR ANIMATIONS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// --- DATA STRUCTURE (No changes needed) ---
const servicesData = [
  { 
    id: 1, 
    number: "001", 
    title: "استراتيجية العلامة التجارية", 
    description: "قبل التصميم، نضع الأساس. نعمل معك لتحديد رؤية علامتك، ورسالتها، وقيمها، ونبرة صوتها، لنضمن أن كل قرار تصميمي يخدم أهدافك الاستراتيجية.", 
    features: ["جلسات استكشافية", "تحليل تنافسي", "تحديد شخصية العلامة", "بناء رسالة العلامة"]
  },
  { 
    id: 2, 
    number: "002", 
    title: "تصميم الهوية البصرية", 
    description: "نحن لا نصمم شعاراً فحسب، بل نبني نظاماً بصرياً متكاملاً. من لوحة الألوان والخطوط إلى الأنماط الفنية، نصنع لغة بصرية فريدة تروي قصة علامتك بوضوح وقوة.", 
    features: ["دليل هوية شامل", "تصميم تطبيقات بصرية", "إرشادات استخدام العلامة", "تصميم مواد تسويقية"]
  },
  { 
    id: 3, 
    number: "003", 
    title: "الرسومات التجريدية والهندسية", 
    description: "نبتكر أصولاً بصرية فريدة (Patterns & Illustrations) مستوحاة من الأشكال الهندسية والفن التجريدي. هذه الرسومات تعزز من تميز علامتك وتمنحها عمقاً فنياً يمكن استخدامه عبر مختلف التطبيقات.", 
    features: ["أنماط بصرية مخصصة", "رسومات فريدة للعلامة", "أصول فنية متعددة الاستخدامات", "تعزيز الهوية البصرية"]
  }
];

// Reusable component for each service item
const ServiceItem = ({ service, isActive, onToggle }) => {
    return (
        <div className="border-b border-white/10">
            <button 
                onClick={onToggle} 
                className={`w-full flex rounded-3xl justify-between items-center py-6 px-4 md:px-8 transition-colors duration-300 ${isActive ? 'bg-white/5' : 'hover:bg-white/5'}`}
            >
                <div className="flex items-center gap-4 md:gap-6">
                    <span className={`flex-shrink-0 text-sm font-mono transition-colors duration-300 ${isActive ? 'text-white' : 'text-light-gray/70'}`}>
                        {service.number}
                    </span>
                    <h3 className={`text-2xl md:text-4xl font-bold text-right transition-colors duration-300 ${isActive ? 'text-white' : 'text-light-gray/70'}`}>
                        {service.title}
                    </h3>
                </div>
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white text-almost-black' : 'bg-white/10 text-white'}`}>
                    <motion.div animate={{ rotate: isActive ? 0 : -45 }}>
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto', y: 0 },
                            collapsed: { opacity: 0, height: 0, y: -20 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 md:px-8 pb-10 pt-4 max-w-4xl ml-auto mr-12 md:mr-20">
                            <p className="text-light-gray/80 text-base md:text-lg leading-relaxed mb-8">{service.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                                {service.features.map(feature => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-white/50 flex-shrink-0" />
                                        <span className="text-light-gray">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ServicesAccordionPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const mainRef = useRef<HTMLDivElement>(null);

    // --- GSAP ANIMATION LOGIC ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.from('.anim-header', {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
            // Animate Service Items
            gsap.from('.anim-item', {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.services-list',
                    start: 'top 80%',
                }
            });
        }, mainRef);
        return () => ctx.revert(); // Cleanup GSAP context
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen flex items-center justify-center bg-almost-black text-white" dir="rtl">
            <div className="container mx-auto py-30 px-4">
                
                <header className="mb-16">
                    <div className="flex items-center gap-4 anim-header">
                        <span className="bg-white/10 text-light-gray px-6 py-3 rounded-full font-medium">خدماتنا</span>
                        <h1 className="text-2xl md:text-4xl font-bold text-white">حلول إبداعية لعلامات تجارية طموحة</h1>
                    </div>
                </header>

                <div className="border-t border-white/10 services-list">
                    {servicesData.map((service, index) => (
                        <div key={service.id} className="anim-item">
                            <ServiceItem 
                                service={service}
                                isActive={index === activeIndex}
                                onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}