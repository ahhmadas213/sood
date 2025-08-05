import { Button } from "@/components/ui/button"
import { Instagram, Download } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#252528] border-t border-[#2F2F33] py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-3xl font-bold text-[#FFC107]">
              سُود
            </Link>
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
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F7]">روابط سريعة</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-[#B0B0B8] hover:text-[#FFC107] transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="block text-[#B0B0B8] hover:text-[#FFC107] transition-colors">
                عن سُود
              </Link>
              <Link href="/services" className="block text-[#B0B0B8] hover:text-[#FFC107] transition-colors">
                خدماتنا
              </Link>
              <Link href="/portfolio" className="block text-[#B0B0B8] hover:text-[#FFC107] transition-colors">
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
          </div>
        </div>

        <div className="border-t border-[#2F2F33] mt-8 pt-8 text-center">
          <p className="text-[#B0B0B8]">© 2025 سُود. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
