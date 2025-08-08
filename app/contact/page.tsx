'use client';

// 1. IMPORT HOOKS, LIBRARIES, AND ICONS
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, Mail, FileUp, User, Building, MessageSquare, Phone, MapPin } from "lucide-react";
import { FaPhone, FaMapLocationDot } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";

import Link from "next/link";
import Image from 'next/image';
import { FaInstagram, FaXTwitter, FaSnapchat } from "react-icons/fa6";

// Array for social links for easier management
const socialLinks = [
  {
    href: "https://twitter.com",
    icon: <FaXTwitter className="h-5 w-5 text-almost-black/70 group-hover:text-almost-black transition-colors duration-300" />,
    ariaLabel: "X (formerly Twitter) profile",
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram className="h-5 w-5 text-almost-black/70 group-hover:text-almost-black transition-colors duration-300" />,
    ariaLabel: "Instagram profile",
  },
  {
    href: "https://snapchat.com",
    icon: <FaSnapchat className="h-5 w-5 text-almost-black/70 group-hover:text-almost-black transition-colors duration-300" />,
    ariaLabel: "Snapchat profile",
  },
]

// 2. IMPORT GSAP FOR ANIMATIONS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const services = [
    "تصميم الهوية البصرية",
    "استراتيجية العلامة التجارية",
    "الرسومات التجريدية والهندسية",
    "استشارة براندينق",
    "أخرى",
];

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileName, setFileName] = useState('');
    const mainRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        window.scrollTo(0, 0);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
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
            <div className="min-h-screen bg-gradient-to-br from-almost-black via-almost-black to-slate-900 flex items-center justify-center p-4" dir="rtl">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-center space-y-8 max-w-md mx-auto shadow-2xl">
                    <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <CheckCircle className="h-10 w-10 text-almost-black" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-3">تم الإرسال بنجاح!</h2>
                        <p className="text-white/80 leading-relaxed">شكراً لتواصلك معنا. سنعود إليك في أقرب وقت ممكن.</p>
                    </div>
                    <Button
                        className="bg-white hover:bg-gray-100 text-almost-black font-semibold w-full py-6 text-base rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
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
            <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-white rounded-b-[4rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-almost-black/80 via-almost-black/70 to-black/90 z-10" />
                <Image 
                    src="/images/contact-hero.jpeg"
                    alt="تواصل معنا"
                    fill
                    className="object-cover hero-bg"
                />
                <div className="relative z-20 text-center px-6">
         
                    <h1 className="text-5xl md:text-7xl font-bold anim-hero-item bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">تواصل معنا</h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 px-6 content-section">
                <div className="container mx-auto grid lg:grid-cols-5 gap-16">
                    
                    {/* Left Column: Information */}
                    <div className="lg:col-span-2">
                        <div className="inline-block p-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full mb-4 anim-left-col">
                            <div className="bg-slate-50 rounded-full px-4 py-1">
                                <p className="font-semibold text-slate-600 text-sm">/ ابدأ الحوار</p>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 anim-left-col leading-tight">مستعدون لتحويل فكرتك إلى <span className="bg-gradient-to-r from-almost-black to-slate-700 bg-clip-text text-transparent">واقع بصري مؤثر</span></h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-12 anim-left-col">
                            املأ النموذج بكافة تفاصيل مشروعك، وسيقوم فريقنا المختص بالتواصل معك في أقرب فرصة لمناقشة الخطوات التالية.
                        </p>

                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 anim-left-col">
                            <h4 className="font-bold text-lg mb-6 text-almost-black">أو تواصل معنا مباشرة عبر:</h4>
                            <div className="space-y-4">
                                <a href="mailto:projects@sooddesign.com" className="flex items-center gap-4 p-3 bg-white/80 rounded-xl group hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="p-2 bg-almost-black/10 rounded-lg group-hover:bg-almost-black/20 transition-colors">
                                        <Mail className="w-5 h-5 text-almost-black"/>
                                    </div>
                                    <span className="text-slate-700 group-hover:text-almost-black transition-colors font-medium">projects@sooddesign.com</span>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-3 bg-white/80 rounded-xl group hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="p-2 bg-almost-black/10 rounded-lg group-hover:bg-almost-black/20 transition-colors">
                                        <FaPhone className="w-5 h-5 text-almost-black"/>
                                    </div>
                                    <span className="text-slate-700 group-hover:text-almost-black transition-colors font-medium">+966 123 456 7890</span>
                                </a>
                                <div className="flex items-center gap-4 p-3 bg-white/80 rounded-xl">
                                    <div className="p-2 bg-almost-black/10 rounded-lg">
                                        <FaMapLocationDot className="w-5 h-5 text-almost-black"/>
                                    </div>
                                    <span className="text-slate-700 font-medium">مكة المكرمة، المملكة العربية السعودية</span>
                                </div>
                            </div>
                        </div>       
                        
                        <div className="flex items-center gap-3 mt-8 anim-left-col">
                            {socialLinks.map((social) => (
                            <Link 
                                key={social.ariaLabel}
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={social.ariaLabel}
                                className="group p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl hover:from-almost-black/10 hover:to-almost-black/20 transition-all duration-300 hover:shadow-lg hover:scale-110"
                            >
                                {social.icon}
                            </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-3 anim-right-col">
                        <div className="bg-gradient-to-br from-light-gray via-slate-100 to-light-gray rounded-3xl p-8 shadow-2xl border border-slate-200/50">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-almost-black rounded-lg">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-almost-black">تفاصيل المشروع</h3>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <Label htmlFor="name" className="text-sm font-semibold text-almost-black flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            الاسم الكامل
                                        </Label>
                                        <Input 
                                            className="border-2 border-slate-300 focus:border-almost-black bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:border-slate-400 focus:shadow-lg focus:bg-white group-hover:border-slate-400" 
                                            id="name" 
                                            type="text" 
                                            placeholder="أدخل اسمك الكامل"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <Label htmlFor="email" className="text-sm font-semibold text-almost-black flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            البريد الإلكتروني
                                        </Label>
                                        <Input 
                                            className="border-2 border-slate-300 focus:border-almost-black bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:border-slate-400 focus:shadow-lg focus:bg-white group-hover:border-slate-400" 
                                            id="email" 
                                            type="email" 
                                            placeholder="example@domain.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2 group">
                                    <Label htmlFor="company" className="text-sm font-semibold text-almost-black flex items-center gap-2">
                                        <Building className="w-4 h-4" />
                                        اسم العلامة أو المشروع
                                    </Label>
                                    <Input 
                                        className="border-2 border-slate-300 focus:border-almost-black bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:border-slate-400 focus:shadow-lg focus:bg-white group-hover:border-slate-400" 
                                        id="company" 
                                        type="text" 
                                        placeholder="اسم شركتك أو مشروعك"
                                    />
                                </div>
                                
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="service" className="text-sm font-semibold text-almost-black">الخدمة المطلوبة</Label>
                                        <Select>
                                            <SelectTrigger className="border-2 border-slate-300 focus:border-almost-black bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:border-slate-400">
                                                <SelectValue placeholder="اختر الخدمة" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-200">
                                                {services.map(s => 
                                                    <SelectItem key={s} value={s} className="rounded-lg">{s}</SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="contact_method" className="text-sm font-semibold text-almost-black flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            وسيلة التواصل المفضلة
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="border-2 border-slate-300 focus:border-almost-black bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:border-slate-400">
                                                <SelectValue placeholder="اختر الوسيلة" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-200">
                                                <SelectItem value="email" className="rounded-lg">البريد الإلكتروني</SelectItem>
                                                <SelectItem value="whatsapp" className="rounded-lg">واتساب</SelectItem>
                                                <SelectItem value="phone" className="rounded-lg">مكالمة هاتفية</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                
                                <div className="space-y-2 group">
                                    <Label htmlFor="message" className="text-sm font-semibold text-almost-black">نبذة عن المشروع</Label>
                                    <Textarea 
                                        className="border-2 border-slate-300 focus:border-almost-black bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 min-h-[120px] transition-all duration-300 hover:border-slate-400 focus:shadow-lg focus:bg-white group-hover:border-slate-400" 
                                        id="message" 
                                        placeholder="أخبرنا المزيد عن رؤيتك وأهدافك، والنتائج المتوقعة من المشروع..."
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <Label htmlFor="file-upload" className="text-sm font-semibold text-almost-black">ملف مرفق (اختياري)</Label>
                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-36 border-2 border-slate-300 border-dashed rounded-2xl cursor-pointer bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm hover:from-white hover:to-slate-50 hover:border-almost-black/50 transition-all duration-300 hover:shadow-lg group">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <div className="p-3 bg-almost-black/10 rounded-full mb-3 group-hover:bg-almost-black/20 transition-colors">
                                                    <FaFileUpload className="w-6 h-6 text-almost-black"/>
                                                </div>
                                                {fileName ? (
                                                    <p className="text-sm text-almost-black font-semibold">{fileName}</p>
                                                ) : (
                                                    <>
                                                        <p className="text-sm text-almost-black/80 mb-1">
                                                            <span className="font-semibold">انقر للرفع</span> أو اسحب وأفلت الملف
                                                        </p>
                                                        <p className="text-xs text-almost-black/50">PDF, DOCX, PNG, JPG (الحد الأقصى 10MB)</p>
                                                    </>
                                                )}
                                            </div>
                                            <Input 
                                                id="file-upload" 
                                                type="file" 
                                                className="hidden" 
                                                accept=".pdf,.docx,.png,.jpg,.jpeg"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    </div> 
                                </div>
                                
                                <Button 
                                    type="submit" 
                                    size="lg" 
                                    className="w-full bg-gradient-to-r from-almost-black to-slate-800 hover:from-black hover:to-almost-black text-white font-semibold py-7 text-base rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
                                >
                                    <Send className="w-5 h-5 ml-2 transform -rotate-45 group-hover:scale-110 transition-transform" />
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