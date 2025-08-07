// Add 'use client' at the top for hooks and interactivity
'use client'

import React, { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 1. IMPORT HOOKS, ICONS, AND CAROUSEL
// ===================================
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Instagram, Twitter, Ghost, Link2, ArrowLeft, ArrowRight } from 'lucide-react'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// 2. DATA STRUCTURE & TYPE DEFINITION
// ===================================
type SocialLink = {
  type: 'instagram' | 'x' | 'snapchat' | 'website';
  url: string;
};

interface Testimonial {
  name: string;
  quote: string;
  logo: string;
  socials: SocialLink[];
}

const testimonialsData: Testimonial[] = [
  {
    name: 'متجر بيري',
    quote: 'كان العمل معهم تجربة فريدة. لقد فهموا رؤيتنا تمامًا وحولوها إلى هوية بصرية تتحدث عنا. الدقة والإبداع في كل تفصيلة.',
    logo: '/images/gallery-1.webp',
    socials: [
      { type: 'instagram', url: 'https://instagram.com' },
      { type: 'website', url: 'https://example.com' },
    ],
  },
  {
    name: 'مؤسسة إعمار',
    quote: 'سرعة في الإنجاز واحترافية عالية. قدموا لنا تصميمات تجاوزت توقعاتنا وساهمت في تعزيز علامتنا التجارية في السوق.',
    logo: '/images/gallery-2.webp',
    socials: [{ type: 'x', url: 'https://twitter.com' }],
  },
  {
    name: 'كافيه "لحظة"',
    quote: 'أبدعوا في تصميم هوية الكافيه بالكامل، من الشعار إلى قائمة الطعام. أصبح المكان يتمتع بشخصية فريدة وجذابة بفضلهم.',
    logo: '/images/gallery-3.webp',
    socials: [
      { type: 'snapchat', url: 'https://snapchat.com' },
      { type: 'instagram', url: 'https://instagram.com' },
    ],
  },
];

const SocialIcon = ({ type }: { type: SocialLink['type'] }) => {
  const iconProps = { className: "w-5 h-5 text-gray-500 group-hover:text-almost-black transition-colors" };
  switch (type) {
    case 'instagram': return <Instagram {...iconProps} />;
    case 'x': return <Twitter {...iconProps} />;
    case 'snapchat': return <Ghost {...iconProps} />;
    case 'website': return <Link2 {...iconProps} />;
    default: return null;
  }
};


// 3. MAIN TESTIMONIALS SECTION COMPONENT
// ======================================
const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    loop: true,
    direction: 'rtl', 
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.section-header-anim'), {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', stagger: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white text-almost-black" dir="rtl">
      <div className="container mx-auto">
        {/* --- Header --- */}
        <div className="flex justify-between items-center mb-12 section-header-anim">
          <div>
            <span className="px-4 py-2 text-sm border border-almost-black/30 rounded-full">آراء عملائنا</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-8">ماذا يقولون عنا</h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={scrollPrev} aria-label="Previous testimonial" className="p-3 border cursor-pointer border-almost-black/30 rounded-2xl hover:bg-almost-black hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={scrollNext} aria-label="Next testimonial" className="p-3 border cursor-pointer border-almost-black/30 rounded-2xl hover:bg-almost-black hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- Embla Carousel with Fade Mask--- */}
        {/* THIS IS THE KEY CHANGE */}
        <div 
          className="overflow-hidden -mx-4 px-4 [mask-image:linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]" 
          ref={emblaRef}
        >
          <div className="flex">
            {testimonialsData.map((testimonial, index) => (
              // Added right padding to create space between cards
              <div key={index} className="flex-[0_0_95%] sm:flex-[0_0_85%] md:flex-[0_0_65%] lg:flex-[0_0_55%] min-w-0 pr-4">
                <div className="bg-slate-50 rounded-3xl flex flex-col md:flex-row h-full overflow-hidden min-h-[420px]">
                  
                  <div className="relative w-full min-h-[200px] rounded-3xl overflow-hidden md:min-h-0 md:w-1/2 flex-shrink-0">
                    <Image 
                      src={testimonial.logo} 
                      alt={`${testimonial.name} logo`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="w-full p-5 flex items-center justify-center  md:w-1/2 ">
                    <div className='flex flex-col bg-white p-5 rounded-3xl  justify-center text-center md:text-right'>
                     <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <h4 className="font-bold text-almost-black">{testimonial.name}</h4>
                    </div>
                  
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;