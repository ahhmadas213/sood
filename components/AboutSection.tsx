import React from 'react'
import ScrollFloat from './ScrollFloat/ScrollFloat'
import { Button } from './ui/button'
import Link from 'next/link'
// 1. IMPORT THE NEW ICONS
import { ArrowLeft, Instagram, Twitter, Ghost } from 'lucide-react'
import { FaInstagram, FaXTwitter, FaSnapchat } from "react-icons/fa6";

// Array for social links for easier management
const socialLinks = [
  {
    href: "https://twitter.com", // Replace with your X link
    icon: <FaXTwitter className="h-6 w-6 text-almost-black/80" />,
    ariaLabel: "X (formerly Twitter) profile",
  },
  {
    href: "https://instagram.com", // Replace with your Instagram link
    icon: <FaInstagram className="h-6 w-6 text-almost-black/80" />,
    ariaLabel: "Instagram profile",
  },
  {
    href: "https://snapchat.com", // Replace with your Snapchat link
    icon: <FaSnapchat className="h-6 w-6 text-almost-black/80" />,
    ariaLabel: "Snapchat profile",
  },
]

function AboutSection() {
  return (
    <section className="bg-almost-black">
      <div className="py-20 px-4 rounded-t-[4rem] bg-light-gray">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8 text-center md:text-right">
            
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=5%'
              scrollEnd='bottom bottom-=60%'
              stagger={0.06}
              containerClassName="md:min-h-[150px] " // Ensure container has height for trigger
              textClassName="text-almost-black !text-4xl md:!text-7xl font-bold"
            >
              نُصيغ الإبداع إلى هوية           
            </ScrollFloat>
            
            <p className="md:text-xl text-almost-black/70 leading-relaxed max-w-3xl mx-auto md:mx-0">
              سُود هو استوديو براندينق من مكة المكرمة يعيد تعريف العلامات بصوتٍ بصري واضح، رقيق، وجذاب. نؤمن بأن كل علامة
              لها قصة تستحق أن تُروى بشكل مميز.
            </p>

            {/* 2. RESPONSIVE CONTAINER FOR BUTTON AND SOCIALS */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              
              {/* 3. BIGGER, STYLED BUTTON */}
              <Button 
                size="lg" 
                className="h-auto bg-almost-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-almost-black/80 transition-colors duration-300 w-full sm:w-auto" 
                asChild
              >
                <Link href="/about">
                  تعرف أكثر <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              
              {/* 4. MODERN SOCIAL ICONS */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.ariaLabel}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="p-4 bg-almost-black/5 rounded-2xl hover:bg-almost-black/10 transition-colors duration-300"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection