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
    href: "https://instagram.com", // Replace with your Instagram link
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
          {/* Logo and Description */}
          {/* <div className="md:col-span-2 space-y-4">
            <p className="text-[#B0B0B8] max-w-md">مساحة مُشبعة بالفن. نصمم هويات بصرية تحكي قصتك بصمتٍ جميل.</p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://instagram.com/sooddes" target="_blank">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/profile.pdf" target="_blank">
                  <Download className="h-5 w-5 ml-2" />
                  تحميل البروفايل
                </Link>
              </Button>
            </div>
          </div> */}

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F7]">روابط سريعة</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-[#B0B0B8] hover:text-orange-200 transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="block text-[#B0B0B8] hover:text-orange-200 transition-colors">
                عن سُود
              </Link>
              <Link href="/services" className="block text-[#B0B0B8] hover:text-orange-200 transition-colors">
                خدماتنا
              </Link>
              <Link href="/portfolio" className="block text-[#B0B0B8] hover:text-orange-200 transition-colors">
                المعرض
              </Link>
            </div>
 
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F7]">تواصل معنا</h3>
            <div className="space-y-2 text-[#B0B0B8]">
              <p>مكة المكرمة، السعودية</p>
              <p>sooddes@example.com</p>
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
