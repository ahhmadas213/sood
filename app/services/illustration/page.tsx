
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Share2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "الرسوم التجريدية والهندسية | سُود براندينق",
  description: "نبتكر تركيبات فنية مستوحاة من الأشكال الهندسية والتجريدية لتعزيز هوية علامتك بأسلوب معاصر وأنيق.",
}

export default function IllustrationPage() {
  const features = [
    "تصاميم فنية مخصصة",
    "رسوم تجريدية فريدة",
    "أشكال هندسية مبتكرة",
    "استخدامات متعددة (ويب، مطبوعات، إلخ)",
    "أسلوب فني يعكس هوية العلامة",
    "ملفات المصدر قابلة للتعديل",
  ]

  return (
    <div className="min-h-screen bg-almost-black text-[#F5F5F7]" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#FFC107] text-black text-lg px-4 py-2">خدماتنا</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">الرسوم التجريدية والهندسية</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              نبتكر تركيبات فنية مستوحاة من الأشكال الهندسية والتجريدية لتعزيز هوية علامتك بأسلوب معاصر وأنيق.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">ماذا تشمل الخدمة؟</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-[#2DD4BF] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-lg text-[#F5F5F7]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">هل أنت مستعد لإضافة لمسة فنية فريدة لعلامتك؟</h2>
            <p className="text-xl text-[#B0B0B8] leading-relaxed">
              دعنا نساعدك في خلق تصاميم تعبر عنك.
            </p>
            <Button
              size="lg"
              className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/book">ابدأ مشروعك الآن</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
