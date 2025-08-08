import { Button } from "@/components/ui/button"
import { Instagram, Download, Loader } from "lucide-react"
import Link from "next/link"
import { FaInstagram, FaXTwitter, FaSnapchat } from "react-icons/fa6";

// Array for social links for easier management
const socialLinks = [
  {
    href: "https://twitter.com", // Replace with your X link
    icon: <FaXTwitter className="h-6 w-6 text-light-gray/80" />,
    ariaLabel: "X (formerly Twitter) profile",
  },
  {
    href: "https://www.instagram.com/sooddes/", // Replace with your Instagram link
    icon: <FaInstagram className="h-6 w-6 text-light-gray/80" />,
    ariaLabel: "Instagram profile",
  },
  {
    href: "https://snapchat.com", // Replace with your Snapchat link
    icon: <FaSnapchat className="h-6 w-6 text-light-gray/80" />,
    ariaLabel: "Snapchat profile",
  },
]

export function Footer() {
  return (
    <footer className="bg-almost-black  py-12" >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F7]">روابط سريعة</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-light-gray hover:text-light-gray/70 transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="block text-light-gray hover:text-light-gray/70 transition-colors">
                عن سُود
              </Link>
              <Link href="/services" className="block text-light-gray hover:text-light-gray/70 transition-colors">
                خدماتنا
              </Link>
              <Link href="/portfolio" className="block text-light-gray hover:text-light-gray/70 transition-colors">
                المعرض
              </Link>
              <Link href="/testimonials" className="block text-light-gray hover:text-light-gray/70 transition-colors">
                آراء العملاء
              </Link>
            </div>
 
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F7]">تواصل معنا</h3>
            <div className="space-y-2 text-[#B0B0B8]">
              <p>مكة المكرمة، السعودية</p>
              <p>projects@sooddesign.com</p>
              <p>@sooddes</p>
            </div>
                                 {/* 4. MODERN SOCIAL ICONS */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.ariaLabel}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="p-4 bg-light-gray/5 rounded-2xl hover:bg-light-gray/10 transition-colors duration-300"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
          </div>
        </div>

        <div className=" mt-8 pt-8 text-center overflow-hidden flex items-center justify-center md:flex-row gap-3  flex-col ">
          <p className="text-light-gray/30 flex items-center gap-3 text-7xl  md:text-[15rem] font-bold ">SOOD</p>
          <p className="text-[#B0B0B8]">© 2025 سُود. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
