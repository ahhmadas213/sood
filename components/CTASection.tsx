import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowBigLeft, ArrowLeft } from 'lucide-react'

function CTASection() {
  return (
    <section className="bg-almost-black text-white py-20 px-4 overflow-hidden rounded-t-[4rem]">
      <div className="container mx-auto">
        <div
          className="flex flex-col md:flex-row items-center justify-between rounded-3xl p-8 gap-10"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0) 70%), url('/cta-image.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Text Content */}  
          <div className="text-right md:max-w-[50%] space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              نبدأ من رؤيتك ونبنيها معاً
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-white">
              التصميم الجيد لا يأتي من طرف واحد، بل من حوار مشترك، واستماع حقيقي، وترجمة للأفكار إلى هوية تنبض بما تمثله.
              نحن لا نقدم خدمة، بل ندخل شراكة معك.
            </p>
            <p className="text-sm text-[#D1D1D1] mb-5">
              نعمل جنبًا إلى جنب معك لصياغة تجربة بصرية متكاملة تعكسك، وتخاطب جمهورك، وتُبقي أثرك واضحاً.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 bg-orange-300 hover:bg-orange-200 transition-all text-almost-black text-base duration-300 sm:text-xl md:text-2xl font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-md"
              >
                ابدأ رحلتك معنا
                <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10 p-1.5 sm:p-2 bg-white text-almost-black rounded-full flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
