'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Eye, Users, Palette, Download, ArrowUpRight, Compass, Clock } from "lucide-react";
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

// Import the new TracingBeam component
import { TracingBeam } from '@/components/TracingBeam'; // Adjust the path if needed

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// --- DATA (Content remains the same) ---
const ourValues = [
  { id: 1, title: "الأصالة", subtitle: "جوهر كل شيء", description: "نؤمن بأن كل علامة تجارية تمتلك بصمة فريدة. مهمتنا هي الكشف عن هذا الجوهر والتعبير عنه بصدق وشفافية، لنخلق هويات لا تُنسى.", image: "/images/gallery-1.webp" },
  { id: 2, title: "الدقة", subtitle: "فن التفاصيل", description: "نهتم بأدق التفاصيل التي تصنع الكمال، من اختيار الألوان والخطوط إلى تطبيق الهوية على مختلف المنصات، لأننا ندرك أنها تحدث فرقاً حقيقياً.", image: "/images/gallery-2.webp" },
  { id: 3, title: "الشراكة", subtitle: "نعمل معكم، وليس لكم", description: "نحن لا نعتبر أنفسنا مجرد مزودي خدمة، بل شركاء نجاح. نستمع بعناية، ونتفاعل بشغف، ونعمل يداً بيد لتحقيق رؤيتكم.", image: "/images/gallery-3.webp" },
  { id: 4, title: "الإبداع الهادف", subtitle: "فن ذو غاية", description: "إبداعنا ليس عشوائياً، بل هو موجه لخدمة أهداف استراتيجية واضحة. نصمم بجمال، ونفكر بذكاء، لنضمن تحقيق نتائج ملموسة.", image: "/images/gallery-4.webp" }
];
const processSteps = [
  { step: "01", title: "الاستكشاف والتحليل", subtitle: "نغوص في أعماق علامتك", description: "نبدأ بالاستماع لقصتك وفهم أهدافك. نحلل السوق والمنافسين لنحدد نقاط القوة والفرص التي سنبني عليها استراتيجيتنا البصرية." },
  { step: "02", title: "بناء المفهوم الإبداعي", subtitle: "نرسم ملامح الهوية", description: "نترجم الأفكار والرؤى إلى مفاهيم بصرية ملموسة. في هذه المرحلة، تتشكل الألوان والخطوط والرموز التي ستكون لغة علامتك الخاصة." },
  { step: "03", title: "التصميم والتنفيذ", subtitle: "نحول الأفكار إلى واقع", description: "نصمم كافة عناصر الهوية بدقة، من الشعار إلى التطبيقات المختلفة، مع ضمان تجربة بصرية متكاملة ومتناغمة عبر جميع المنصات." },
  { step: "04", title: "التسليم والدعم", subtitle: "شراكة مستمرة", description: "نسلمك ملفاً متكاملاً لهويتك مع دليل استخدام شامل، ونبقى شركاء لك لتقديم الدعم والمشورة لضمان نجاح هويتك على المدى الطويل." }
];

export default function ModernAboutPage() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [activeValue, setActiveValue] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((section: HTMLElement) => {
                gsap.from(section.querySelectorAll('.anim-element'), {
                    opacity: 0, y: 60, duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: section, start: 'top 85%' }
                });
            });
            gsap.to(".floating-image-1", { y: -100, scrollTrigger: { trigger: ".hero-section", scrub: 1 } });
            gsap.to(".floating-image-2", { y: -150, scrollTrigger: { trigger: ".hero-section", scrub: 1 } });
            gsap.to(".floating-image-3", { y: -50, scrollTrigger: { trigger: ".hero-section", scrub: 1 } });

            // GSAP ScrollTriggers to update the active state for the Tracing Beam
            ourValues.forEach(item => {
                ScrollTrigger.create({
                    trigger: `#value-${item.id}`,
                    start: 'top center',
                    end: 'bottom center',
                    onToggle: (self: ScrollTrigger) => self.isActive && setActiveValue(item.id),
                });
            });

        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen bg-[#1B1B1D] text-white overflow-hidden" >
            {/* Hero Section */}
            <section className="relative py-32 px-4 hero-section section-reveal">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="floating-image-1 absolute top-20 left-20 w-32 h-32 rounded-2xl overflow-hidden opacity-60 hidden lg:block"><img src="/images/gallery-1.webp" alt="" className="w-full h-full object-cover" /></div>
                        <div className="floating-image-2 absolute top-40 right-32 w-40 h-40 rounded-2xl overflow-hidden opacity-80 hidden lg:block"><img src="/images/gallery-2.webp" alt="" className="w-full h-full object-cover" /></div>
                        <div className="floating-image-3 absolute bottom-20 right-20 w-24 h-32 rounded-2xl overflow-hidden opacity-50 hidden lg:block"><img src="/images/gallery-3.webp" alt="" className="w-full h-full object-cover" /></div>
                        <div className="text-center relative z-10">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white anim-element">نصنع هويات تتنفس بالإبداع</h1>
                            <p className="text-xl md:text-2xl text-[#D1D1D1] max-w-4xl mx-auto leading-relaxed mb-8 anim-element">نحن استوديو تصميم متخصص في بناء العلامات التجارية. لا نكتفي بتصميم الشعارات، بل نصنع بصمات بصرية متكاملة تروي قصة علامتك، وتخلق تواصلاً عميقاً ومؤثراً مع جمهورك.</p>
                            <div className="inline-flex items-center gap-2 text-[#D1D1D1] text-sm anim-element"><span>مقرنا مكة،</span><span>ونخدم العالم بشغف</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section with Tracing Beam */}
            <section className="py-32 px-4 section-reveal">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-16 anim-element">
                        <div className="flex items-center gap-4 mb-4"><Heart className="w-6 h-6 text-light-gray/80" /><span className="text-light-gray font-medium">قيمنا</span></div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white">المبادئ التي توجهنا</h2>
                    </div>
                    <TracingBeam>
                        <div className="space-y-24">
                            {ourValues.map((item) => (
                                <div key={item.id} id={`value-${item.id}`}>
                                    <h3 className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${activeValue === item.id ? 'text-white' : 'text-light-gray/60'}`}>{item.title}</h3>
                                    <p className={`text-sm mb-4 italic transition-colors duration-300 ${activeValue === item.id ? 'text-white/70' : 'text-light-gray/40'}`}>{item.subtitle}</p>
                                    <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${activeValue === item.id ? 'text-light-gray' : 'text-light-gray/60'}`}>{item.description}</p>
                                    {item.image && (
                                        <div className="w-full max-w-lg rounded-2xl overflow-hidden mt-6 shadow-2xl shadow-black/50">
                                            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </TracingBeam>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-6 section-reveal">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 text-[#D1D1D1] font-medium mb-8 anim-element">⚡ منهجية عملنا</div>
                    </div>
                    <div className="relative">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 800 1200"><path d="M100 100 Q 300 200 400 400 T 600 600 Q 700 700 500 900 T 300 1100" stroke="#D1D1D1" strokeWidth="1" strokeOpacity="0.3" fill="none" strokeDasharray="5,5" /></svg>
                        <div className="relative grid gap-16 lg:gap-32">
                            {processSteps.map((step, index) => (
                                <div key={step.step} className={`anim-element flex flex-col lg:flex-row items-start gap-8 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                                    <div className={`max-w-md text-center lg:text-right ${index % 2 !== 0 ? 'lg:text-left' : ''}`}>
                                        <div className={`flex items-center justify-center lg:justify-start gap-4 mb-4 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                                            <div className="w-12 h-12 rounded-full border border-[#D1D1D1]/40 flex items-center justify-center"><span className="text-[#D1D1D1] font-bold">{step.step}</span></div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-[#D1D1D1]/60 text-sm mb-4 italic">{step.subtitle}</p>
                                        <p className="text-[#D1D1D1] leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 px-6 section-reveal">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white anim-element">من يقف خلف سُود؟</h2>
                    <div className="relative anim-element">
                        <ScrollReveal
                            textClassName='text-xl md:text-2xl lg:text-3xl leading-loose text-white/80'
                            baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={8}
                            rotationEnd={"bottom center"} wordAnimationEnd={"bottom center"}
                        >
                            نحن فريق متكامل من المفكرين الاستراتيجيين، والمصممين المبدعين، ورواة القصص البصرية. يجمعنا شغف مشترك بتحويل الأفكار إلى واقع ملموس، وإيمان عميق بأن العمل الجماعي هو سر تقديم حلول استثنائية. كل فرد فينا يضيف خبرة فريدة ورؤية مختلفة، وهذا المزيج هو ما يمكننا من ابتكار هويات بصرية لا تُنسى.
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}