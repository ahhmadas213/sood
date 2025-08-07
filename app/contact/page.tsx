'use client';

// 1. IMPORT HOOKS, LIBRARIES, AND ICONS
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, Mail, Phone, MapPin, FileUp } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

// 2. IMPORT GSAP FOR ANIMATIONS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- DATA (Merged and simplified for the new design) ---
const services = [
    "تصميم الهوية البصرية",
    "استراتيجية العلامة التجارية",
    "الرسومات التجريدية والهندسية",
    "استشارة براندينق",
    "أخرى",
];

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        window.scrollTo(0, 0);
    };

    // --- GSAP ANIMATION LOGIC ---
    useEffect(() => {
        if (isSubmitted) return;
        const ctx = gsap.context(() => {
            gsap.from('.anim-hero-item', { opacity: 0, y: 40, duration: 0.8, stagger: 0.2, ease: 'power3.out' });
            gsap.from('.hero-bg', { scale: 1.1, duration: 1.2, ease: 'power3.out' });
            const tl = gsap.timeline({ scrollTrigger: { trigger: '.content-section', start: 'top 80%' } });
            tl.from('.anim-left-col', { opacity: 0, y: 50, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
              .from('.anim-right-col', { opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' }, "-=0.6");
        }, mainRef);
        return () => ctx.revert();
    }, [isSubmitted]);


    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-almost-black flex items-center justify-center p-4" dir="rtl">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-6 max-w-md mx-auto">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-10 w-10 text-almost-black" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">تم الإرسال بنجاح!</h2>
                        <p className="text-light-gray/70">شكراً لتواصلك معنا. سنعود إليك في أقرب وقت ممكن.</p>
                    </div>
                    <Button
                        className="bg-white hover:bg-light-gray text-almost-black font-semibold w-full py-6 text-base rounded-xl"
                        onClick={() => setIsSubmitted(false)}
                    >
                        إرسال طلب آخر
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div ref={mainRef} className="min-h-screen bg-white text-almost-black overflow-hidden" dir="rtl">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-white rounded-b-[3rem] overflow-hidden">
                <div className="absolute inset-0 bg-almost-black/60 z-10" />
                <Image 
                    src="/images/contact-hero.jpeg" // Replace with your desired high-quality hero image
                    alt="تواصل معنا"
                    fill
                    className="object-cover hero-bg"
                />
                <div className="relative z-20 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-bold anim-hero-item">تواصل معنا</h1>
                    <div className="mt-4 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 inline-block anim-hero-item">
                        <p className="text-sm">الرئيسية / تواصل معنا</p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 px-6 content-section">
                <div className="container mx-auto grid lg:grid-cols-5 gap-16">
                    
                    {/* Left Column: Information */}
                    <div className="lg:col-span-2">
                        <p className="font-semibold text-slate-500 mb-4 anim-left-col">/ ابدأ الحوار</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 anim-left-col">مستعدون لتحويل فكرتك إلى واقع بصري مؤثر</h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-12 anim-left-col">
                            املأ النموذج بكافة تفاصيل مشروعك، وسيقوم فريقنا المختص بالتواصل معك في أقرب فرصة لمناقشة الخطوات التالية.
                        </p>

                        <div className="border-t border-slate-200 pt-10 anim-left-col">
                            <h4 className="font-bold text-lg mb-4">أو تواصل معنا مباشرة عبر:</h4>
                            <div className="space-y-4">
                                <a href="mailto:sood@example.com" className="flex items-center gap-3 group">
                                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-almost-black transition-colors"/>
                                    <span className="text-slate-600 group-hover:text-almost-black transition-colors">sood@example.com</span>
                                </a>
                                <a href="#" className="flex items-center gap-3 group">
                                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-almost-black transition-colors"/>
                                    <span className="text-slate-600 group-hover:text-almost-black transition-colors">+966 123 456 7890</span>
                                </a>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-slate-400"/>
                                    <span className="text-slate-600">مكة المكرمة، المملكة العربية السعودية</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-3 anim-right-col">
                        <div className="bg-slate-100 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-8">تفاصيل المشروع</h3>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="space-y-1"><Label htmlFor="name" className="text-sm text-slate-600">الاسم الكامل</Label><Input id="name" type="text" variant="line" /></div>
                                    <div className="space-y-1"><Label htmlFor="email" className="text-sm text-slate-600">البريد الإلكتروني</Label><Input id="email" type="email" variant="line" /></div>
                                </div>
                                <div className="space-y-1"><Label htmlFor="company" className="text-sm text-slate-600">اسم العلامة أو المشروع</Label><Input id="company" type="text" variant="line" /></div>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="space-y-1"><Label htmlFor="service" className="text-sm text-slate-600">الخدمة المطلوبة</Label>
                                        <Select><SelectTrigger variant="line"><SelectValue placeholder="اختر الخدمة" /></SelectTrigger>
                                            <SelectContent>{services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-1"><Label htmlFor="contact_method" className="text-sm text-slate-600">وسيلة التواصل المفضلة</Label>
                                        <Select><SelectTrigger variant="line"><SelectValue placeholder="اختر الوسيلة" /></SelectTrigger>
                                            <SelectContent><SelectItem value="email">البريد الإلكتروني</SelectItem><SelectItem value="whatsapp">واتساب</SelectItem><SelectItem value="phone">مكالمة هاتفية</SelectItem></SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-1"><Label htmlFor="message" className="text-sm text-slate-600">نبذة عن المشروع</Label><Textarea id="message" variant="line" placeholder="أخبرنا المزيد عن رؤيتك وأهدافك..." /></div>
                                <div className="space-y-1"><Label htmlFor="file-upload" className="text-sm text-slate-600">ملف مرفق (اختياري)</Label>
                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-200 transition-colors">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <FileUp className="w-8 h-8 mb-3 text-slate-400"/>
                                                <p className="text-sm text-slate-500"><span className="font-semibold">انقر للرفع</span> أو اسحب وأفلت الملف</p>
                                                <p className="text-xs text-slate-400"> (PDF, DOCX, PNG, JPG)</p>
                                            </div>
                                            <Input id="file-upload" type="file" className="hidden" />
                                        </label>
                                    </div> 
                                </div>
                                <Button type="submit" size="lg" className="w-full bg-almost-black text-white hover:bg-black/80 font-semibold py-7 text-base rounded-full">
                                    <Send className="w-5 h-5 ml-2 transform -rotate-45" />
                                    إرسال الطلب
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}