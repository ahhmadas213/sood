
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "تحميل الملف التعريفي | سُود براندينق",
  description: "احصل على نسخة من ملفنا التعريفي لاستكشاف خدماتنا وأعمالنا بشكل أوسع.",
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-almost-black text-[#F5F5F7] flex items-center justify-center" dir="rtl">
      <div className="container mx-auto px-4 py-20">
        <Card className="bg-[#252528] border-[#2F2F33] max-w-2xl mx-auto text-center">
          <CardContent className="p-12 space-y-8">
            <Badge className="bg-[#FFC107] text-black text-lg px-4 py-2">ملفنا التعريفي</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">هويتنا بين يديك</h1>
            <p className="text-xl text-[#B0B0B8] leading-relaxed">
              احصل على نسخة جاهزة للمشاركة أو الإحالة. ملف يُظهر هويتنا، خدماتنا، وأبرز الأعمال التي نفخر بها.
            </p>
            <Button
              size="lg"
              className="bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-black font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/sood-profile.pdf" target="_blank">
                <Download className="ml-2 h-5 w-5" />
                تحميل PDF
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
