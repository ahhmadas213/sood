'use client'
import React from 'react'
import Image from 'next/image'
import CurvedLoop from './CurvedLoop/CurvedLoop'
import CircularText from './CircularText/CircularText'
import Link from 'next/link'
import { ArrowBigLeft, MoveLeft } from 'lucide-react'
import CircularGallery from './CircularGallery/CircularGallery'
import useMediaQuery from '@/hooks/useMediaQuery'

const GalleryItems = [
      {
        image: `/images/gallery-1.webp`,
        text: ""
      },
      {
        image: `/images/gallery-2.webp`,
        text: ""
      },
      {
        image: `/images/gallery-3.webp`,
        text: ""
      },
      {
        image: `/images/gallery-4.webp`,
        text: ""
      },
      {
        image: `/images/gallery-5.webp`,
        text: ""
      },
      {
        image: `/images/gallery-6.webp`,
        text: ""
      },
      {
        image: `/images/gallery-7.webp`,
        text: ""
      },
      {
        image: `/images/gallery-8.webp`,
        text: ""
      },
    ];

function Hero() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/hero-gradieant-background.png"
          alt="Hero Background"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1B1B1D] z-[1] pointer-events-none"></div>
        
        <div className=" md:pt-50 pt-30  mx-auto text-center relative z-10 p-8 flex flex-col min-h-screen">
          <div className=" space-y-8 flex flex-col flex-grow">
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold leading-tight text-white">
              سُود
              <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white inline-block mx-4 overflow-hidden rounded-full rounded-br-none align-middle'>
                <Image
                  src="/hero-text-image.jpeg"
                  alt="Sood text image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              مساحة مُشبعة بالفن
            </h1>
            <p className="text-base sm:text-lg md:text-3xl font-light text-[#D1D1D1]  mx-auto leading-relaxed">
              نحو هوية بصرية تروى قصتك بصمتٍ جميل. نصمم للعلامات التي لا تُنسى.
            </p>
            {/* two shapse */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-center items-stretch flex-grow mt-10">
 
              {/* shape one */}
              <div className='col-span-1 relative w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl  p-6 '>

                <div className='overflow-hidden hidden md:block '>
                <CircularText
                      text="IDENTITY*BRANDING*CREATIVE"
                      onHover="speedUp"
                      spinDuration={20}
                      
                      className="text-base !text-orange-300 "
                    />
                  </div>
                  <div className='mt-8 text-right'>
                    
                    <div className='flex items-center text-right font-bold text-xl  gap-2 mt-2 justify-start'>
                      <h2 className=''>عن سُود</h2>
                      <div className='w-1/2 h-[1px] bg-white'></div>
                    </div>
                    <p className='font-light mt-8'>
                      سُود مساحة إبداعية من مكة، نصوغ علامتك بأسلوب فريد وأصيل.
                    </p>
                  </div>

                  <div className='mt-4 flex items-center gap-4'>
                    <Link href="/" className='p-3 bg-white/50 w-fit rounded-2xl '>
                        <MoveLeft />

                    </Link>

                    <p className='text-xs'>
                      نحن نصمم الهويات البصرية التي تتحدث بصمت، وتُحفر في الذاكرة
                    </p>

              
                </div>
              </div>

              {/* second */}
              <div className='col-span-1 md:col-span-2 w-full h-full bg-[#D1D1D1] backdrop-blur-sm min-h-60 rounded-3xl'>
                <CircularGallery items={GalleryItems}  scrollSpeed={0.3} bend={isSmallScreen ? 1 : 3}  textColor="#ffffff" borderRadius={0.1} scrollEase={0.02}/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero