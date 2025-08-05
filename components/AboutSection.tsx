import React from 'react'
import ScrollFloat from './ScrollFloat/ScrollFloat'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

function AboutSection() {
  return (

    <section className="bg-[#1B1B1D] ">
  <div className="py-20 px-4 rounded-t-[4rem] bg-[#D1D1D1] flex items-center justify-center md:min-h-[60vh]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=5%'
                  scrollEnd='bottom bottom-=60%'
                  stagger={0.06}
                  
                  textClassName="text-[#1B1B1D] text-5xl md:text-7xl font-bold"
                >
                  نُصغّي الإبداع إلى هوية           
              </ScrollFloat>
            <p className="md:text-xl  text-[#1B1B1D]/70 leading-relaxed">
              سُود هو استوديو براندينق من مكة المكرمة يعيد تعريف العلامات بصوتٍ بصري واضح، رقيق، وجذاب. نؤمن بأن كل علامة
              لها قصة تستحق أن تُروى بشكل مميز.
            </p>
            <Button variant="link" className="text-[#FFC107] hover:text-[#FFDB5C] text-lg" asChild>
              <Link href="/about">
                تعرف أكثر <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        </div>

      </section>

  )
}

export default AboutSection