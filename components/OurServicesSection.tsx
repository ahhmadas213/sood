// Add 'use client' at the top of the file
'use client'

import React, { useRef, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

// Import GSAP and ScrollTrigger
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the plugin
gsap.registerPlugin(ScrollTrigger);


// 1. UPDATED SERVICES CARD COMPONENT
// ===================================
interface ServicesCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  textLocation?: 'top' | 'bottom';
}

const ServicesCard = ({
  title,
  description,
  image,
  link,
  textLocation = 'bottom',
}: ServicesCardProps) => {
  const contentOrder = textLocation === 'top' ? 'flex-col-reverse' : 'flex-col';
  // Check if the card should have an "active" button state
  const isActive = textLocation === 'top';

  return (
    // Added a class for GSAP to target
    <div className="service-card">
      <Card className="bg-[#1C1C1E] border-none rounded-3xl overflow-hidden group transition-all duration-300 ease-in-out h-full">
        <CardContent className="p-0 h-full">
          <div className={`flex ${contentOrder} h-full`}>
            <div className="relative w-full rounded-3xl aspect-square overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out "
              />
            </div>
            <div className="my-6 flex justify-between items-end gap-4 text-right">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{title}</h3>
                <p className="text-[#A0A0A0] text-sm ">{description}</p>
              </div>
              <Link href={link} passHref>
                 {/* Conditional styling for the button */}
                <span className={`flex-shrink-0 flex items-center justify-center w-12 h-12 border rounded-2xl cursor-pointer transition-all duration-300
                  ${isActive 
                    ? 'bg-orange-200 border-orange-200' 
                    : 'border-[#3A3A3A] group-hover:border-orange-200 group-hover:bg-orange-200'}`
                }>
                  <ArrowUpRight className={`w-6 h-6 transition-colors duration-300
                    ${isActive 
                      ? 'text-black' 
                      : 'text-white group-hover:text-black'}`
                  }/>
                </span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// 2. SERVICES DATA ARRAY
// =========================
const services = [
  {
    title: "أستراتيجية العلامة التجارية",
    description: "نرسم ملامح علامتك من الداخل للخارج؛ نحدد رؤيتها، رسالتها، وقيمها لتصبح أكثر وضوحاً وقوة في السوق.",
    image: "/images/gallery-2.webp",
    link: "/services/strategy",
    textLocation: 'bottom',
  },
  {
    title: "تصميم الهوية البصرية",
    description: "نحوّل رؤية علامتك إلى تجربة بصرية متكاملة تشمل الألوان، الخطوط، الأنماط، والتطبيقات لتعبر عنك بدقة وجمال.",
    image: "/images/gallery-1.webp",
    link: "/services/branding",
    textLocation: 'top',
  },
  {
    title: "الرسوم التجريدية والهندسية",
    description: "نبتكر تركيبات فنية مستوحاة من الأشكال الهندسية والتجريدية لتعزيز هوية علامتك بأسلوب معاصر وأنيق.",
    image: "/images/gallery-3.webp",
    link: "/services/illustrations",
    textLocation: 'bottom',
  },
]

// 3. MAIN SECTION COMPONENT WITH GSAP ANIMATIONS
// ================================================
function OurServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use GSAP Context for safe cleanup
    const ctx = gsap.context(() => {
      // Animate the section header
      if (!sectionRef.current || !gridRef.current) return;
      gsap.from(sectionRef.current.querySelectorAll('.section-header-anim'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      // Animate the service cards
      gsap.from(gridRef.current.querySelectorAll('.service-card'), {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef); // Scope the context to the main section

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
     <section ref={sectionRef} className="py-20 px-4 text-right bg-almost-black overflow-hidden">
        <div className="container mx-auto">
          <div className="text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white section-header-anim">خدماتنا</h2>
            <p className="text-xl text-[#B0B0B8] max-w-2xl section-header-anim">
              نقدم حلول براندينق متكاملة تناسب احتياجاتك
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServicesCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                textLocation={service.textLocation as 'top' | 'bottom'}
              />
            ))}
          </div>

        </div>
      </section>
  )
}

export default OurServicesSection;  