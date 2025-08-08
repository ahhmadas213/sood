'use client';

// 1. IMPORT HOOKS, LIBRARIES, AND ICONS
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Palette, PencilRuler, Zap } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects'; // Assuming projects data is here
import { useParams, notFound } from 'next/navigation';

// 2. IMPORT GSAP FOR ANIMATIONS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function ProjectPage() {
    const params = useParams();
    const projectId = parseInt(params.id as string, 10);
    
    const projectIndex = projects.findIndex(p => p.id === projectId);
    const project = projects[projectIndex];

    const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    const mainRef = useRef<HTMLDivElement>(null);

    // --- GSAP ANIMATION LOGIC ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Parallax
            gsap.to('.hero-bg-parallax', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });

            // General section reveal animations
            gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((section: HTMLElement) => {
                gsap.from(section.querySelectorAll('.anim-element'), {
                    opacity: 0,
                    y: 60,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                    }
                });
            });

            // Image gallery parallax
            gsap.utils.toArray<HTMLElement>('.gallery-image-parallax').forEach((imgContainer: HTMLElement) => {
                const img = imgContainer.querySelector('img');
                gsap.fromTo(img, 
                    { yPercent: -5 },
                    { yPercent: 5, ease: 'none', scrollTrigger: {
                        trigger: imgContainer,
                        scrub: true,
                    }}
                );
            });

        }, mainRef);
        return () => ctx.revert();
    }, [projectId]); // Re-run animations if the project changes

    if (!project) {
        return notFound();
    }

    return (
        <div ref={mainRef} className="min-h-screen bg-almost-black text-light-gray" dir="rtl">
            
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden px-6 hero-section section-reveal">
                <div className="absolute inset-0 bg-almost-black/60 z-10"></div>
                <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover hero-bg-parallax"
                />
                <div className="relative z-20 container mx-auto">
                    <Badge className="mb-4 bg-white/10 text-white backdrop-blur-sm anim-element">{project.category}</Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white anim-element">
                        {project.title}
                    </h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 px-6 section-reveal">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 anim-element">موجز المشروع</h2>
                    <p className="text-white/70 leading-loose text-lg anim-element">{project.description}</p>
                </div>
            </section>

            {/* Full-width Showcase Image */}
            <section className="px-6 section-reveal">
                <div className="container mx-auto h-[70vh] rounded-3xl overflow-hidden gallery-image-parallax anim-element">
                     <Image
                        src={project.images[0]} // Using the first gallery image as a showcase
                        alt={`${project.title} - showcase`}
                        width={1600}
                        height={900}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Project Details */}
            <section className="py-24 px-6 section-reveal">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="space-y-16">
                                <div className="anim-element">
                                    <h2 className="text-3xl font-bold mb-4">العملية الإبداعية</h2>
                                    <p className="text-white/70 leading-loose text-lg">ركزنا على استراتيجية تصميم تعكس جوهر العلامة التجارية. بدأنا بالبحث وتحليل السوق، ثم انتقلنا إلى تطوير المفهوم البصري الأولي. بعد عدة جولات من المراجعة والتطوير، وصلنا إلى تصميم نهائي يوازن بين الأصالة والحداثة، مع لوحة ألوان فريدة ونظام طباعة يعزز من هوية العلامة التجارية.</p>
                                </div>
                                <div className="anim-element">
                                    <h2 className="text-3xl font-bold mb-4">النتائج النهائية</h2>
                                    <p className="text-white/70 leading-loose text-lg">النتيجة هي هوية بصرية قوية ومميزة تروي قصة العلامة التجارية وتجذب الجمهور المستهدف. تم تطبيق التصميم بنجاح عبر جميع نقاط الاتصال، مما أدى إلى تعزيز الوعي بالعلامة التجارية وتحقيق نتائج إيجابية للعميل.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 anim-element">
                            <div className="bg-white/5 rounded-2xl p-6 sticky top-28">
                                <h3 className="text-2xl font-bold mb-6">تفاصيل المشروع</h3>
                                <div className="space-y-4 border-t border-white/10 pt-6">
                                    <div><p className="font-semibold text-white/50">العميل</p><p className="text-white/80 text-lg">{project.client}</p></div>
                                    <div><p className="font-semibold text-white/50">الفئة</p><p className="text-white/80 text-lg">{project.category}</p></div>
                                    <div><p className="font-semibold text-white/50">السنة</p><p className="text-white/80 text-lg">{project.year}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="px-6 pb-24 section-reveal">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 anim-element">معرض الصور</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.images.slice(1).map((image, index) => ( // Slicing to skip the first image already used
                            <div key={index} className="relative h-96 w-full rounded-2xl overflow-hidden border border-white/10 group gallery-image-parallax anim-element">
                                <Image
                                    src={image}
                                    alt={`${project.title} - ${index + 2}`}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Navigation */}
            <section className="py-16 px-6 text-center border-t border-white/10">
                <div className="container mx-auto grid md:grid-cols-2 gap-8">
                    {previousProject ? (
                        <Link href={`/portfolio/${previousProject.id}`} className="group block text-right bg-white/5 hover:bg-white/10 p-8 rounded-2xl transition-colors">
                            <p className="text-sm text-white/50 mb-2">المشروع السابق</p>
                            <h3 className="text-3xl font-bold flex items-center justify-between">
                                {previousProject.title}
                                <ArrowRight className="w-8 h-8 transition-transform group-hover:-translate-x-2" />
                            </h3>
                        </Link>
                    ) : ( <div></div> )}
                    {nextProject ? (
                        <Link href={`/portfolio/${nextProject.id}`} className="group block text-left bg-white/5 hover:bg-white/10 p-8 rounded-2xl transition-colors">
                            <p className="text-sm text-white/50 mb-2">المشروع التالي</p>
                            <h3 className="text-3xl font-bold flex items-center justify-between">
                                <ArrowLeft className="w-8 h-8 transition-transform group-hover:translate-x-2" />
                                {nextProject.title}
                            </h3>
                        </Link>
                    ) : ( <div></div> )}
                </div>
            </section>
        </div>
    );
}