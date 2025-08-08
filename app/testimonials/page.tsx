'use client';

// 1. IMPORT HOOKS AND LIBRARIES
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Ghost, Link2, Star } from "lucide-react";

// 2. IMPORT GSAP FOR ANIMATIONS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// --- NEW, THEMED DATA STRUCTURE ---
type SocialLink = {
  type: 'instagram' | 'x' | 'snapchat' | 'website';
  url: string;
};

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  logo: string; // Using logo as the main image
  socials: SocialLink[];
}

const testimonialsData: Testimonial[] = [
  {
    name: 'أحمد المالكي',
    role: 'المؤسس والرئيس التنفيذي',
    company: 'شركة تقنية ناشئة',
    quote: 'سُود فهموا رؤيتنا قبل أن نعبر عنها. الهوية كانت دقيقة وتحدثت عنا بطريقة لم نتوقعها. كانوا شركاء حقيقيين في كل خطوة.',
    logo: '/images/gallery-1.webp',
    socials: [{ type: 'website', url: '#' }],
  },
  {
    name: 'فاطمة السعيد',
    role: 'مديرة التسويق',
    company: 'متجر أزياء راقية',
    quote: 'تعامل احترافي ونتيجة تفوق التوقعات. أصبحت هويتنا البصرية نقطة قوة حقيقية بفضل إبداعهم واهتمامهم بالتفاصيل.',
    logo: '/images/gallery-2.webp',
    socials: [{ type: 'instagram', url: '#' }],
  },
  {
    name: 'خالد عبد العزيز',
    role: 'شريك مؤسس',
    company: 'استشارات إدارية',
    quote: 'الدقة في المواعيد والوضوح في التواصل جعلت التجربة سلسة ومثمرة. الهوية التي صمموها لنا كانت انطلاقة قوية في السوق.',
    logo: '/images/gallery-3.webp',
    socials: [{ type: 'x', url: '#' }],
  },
  {
    name: 'نورة الشهري',
    role: 'صاحبة العلامة',
    company: 'علامة تجارية شخصية',
    quote: 'لم أتوقع هذا المستوى من الإبداع. لقد حولوا فكرتي المجردة إلى هوية بصرية تتحدث عن نفسها. شكراً لفريق سُود.',
    logo: '/images/gallery-4.webp',
    socials: [],
  },
];

// Helper to render social icons
const SocialIcon = ({ type }: { type: SocialLink['type'] }) => {
  const iconProps = { className: "w-5 h-5 text-light-gray/60 group-hover:text-white transition-colors" };
  switch (type) {
    case 'instagram': return <Instagram {...iconProps} />;
    case 'x': return <Twitter {...iconProps} />;
    case 'snapchat': return <Ghost {...iconProps} />;
    case 'website': return <Link2 {...iconProps} />;
    default: return null;
  }
};


export default function TestimonialsPage() {
    const mainRef = useRef<HTMLDivElement>(null);

    // --- GSAP ANIMATION LOGIC ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.anim-element').forEach((el: HTMLElement, i: number) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 60,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    }
                });
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-almost-black text-light-gray" dir="rtl">
            
            {/* Hero Section */}
            <section className="py-30 px-6 text-center section-reveal">
                <div className="container mx-auto">
                  
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white anim-element">
                        قصص نجاح نفتخر بها
                    </h1>
                    <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed anim-element">
                        كل شهادة هي دليل على الثقة وشراكة ناجحة. نستعرض هنا كلمات عملائنا الذين وثقوا بنا لنحول رؤيتهم إلى واقع بصري مؤثر.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className="anim-element bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl flex flex-col md:flex-row h-full overflow-hidden min-h-[450px]"
                            >
                                <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-full flex-shrink-0">
                                    <Image 
                                        src={testimonial.logo} 
                                        alt={`شعار ${testimonial.company}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                
                                <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
                                    <div className='flex flex-col bg-almost-black border border-white/10 p-6 rounded-2xl h-full w-full justify-between'>
                                        <div>
                                            <p className="text-light-gray mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                                            <p className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</p>
                                            <div className="flex items-center gap-3 mt-4">
                                                {testimonial.socials.map(social => (
                                                    <a href={social.url} key={social.type} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 group" aria-label={social.type}>
                                                        <SocialIcon type={social.type} />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
        </div>
    );
}