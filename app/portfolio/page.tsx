import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "أعمالنا السابقة | سُود براندينق",
  description: "تصفح مجموعة مختارة من مشاريع العلامات التجارية التي صممّاها، واطّلع على قصص كل هوية بصرية.",
}

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "شركة تقنية ناشئة",
      client: "تك إنوفيشن",
      category: "هوية بصرية متكاملة",
      description: "هوية بصرية حديثة لشركة ناشئة في مجال التقنية المالية",
      challenge: "إنشاء هوية تعكس الابتكار والثقة في القطاع المالي",
      solution: "تصميم شعار ديناميكي مع نظام ألوان يجمع بين الاحترافية والحداثة",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["شعار", "هوية بصرية", "تطبيقات رقمية"],
      year: "2024",
    },
    {
      id: 2,
      title: "مطعم فاخر",
      client: "مذاق الأصالة",
      category: "شعار + هوية",
      description: "تصميم شعار وهوية بصرية لمطعم يقدم المأكولات التراثية بلمسة عصرية",
      challenge: "الموازنة بين التراث والحداثة في التصميم",
      solution: "شعار يجمع بين الخط العربي التقليدي والتصميم المعاصر",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["شعار", "هوية بصرية", "مطبوعات"],
      year: "2024",
    },
    {
      id: 3,
      title: "متجر أزياء",
      client: "أناقة عصرية",
      category: "سوشيال ميديا",
      description: "حملة سوشيال ميديا متكاملة لمتجر أزياء نسائية راقية",
      challenge: "إنشاء محتوى بصري يجذب الفئة المستهدفة ويعكس أناقة العلامة",
      solution: "قوالب متسقة مع لوحة ألوان أنثوية راقية وتصوير احترافي",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["سوشيال ميديا", "تصوير", "قوالب"],
      year: "2024",
    },
    {
      id: 4,
      title: "عيادة طبية",
      client: "مركز الشفاء الطبي",
      category: "هوية بصرية",
      description: "هوية بصرية شاملة لمركز طبي متخصص في طب الأسرة",
      challenge: "إنشاء هوية تبعث على الثقة والراحة للمرضى",
      solution: "تصميم يجمع بين الاحترافية الطبية والدفء الإنساني",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["شعار", "هوية بصرية", "لافتات"],
      year: "2023",
    },
    {
      id: 5,
      title: "شركة استشارات",
      client: "رؤى للاستشارات",
      category: "هوية بصرية متكاملة",
      description: "هوية بصرية لشركة استشارات إدارية ومالية",
      challenge: "التعبير عن الخبرة والاحترافية في مجال الاستشارات",
      solution: "تصميم متوازن يعكس الجدية والإبداع في الحلول",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["شعار", "هوية بصرية", "مطبوعات"],
      year: "2023",
    },
    {
      id: 6,
      title: "كافيه متخصص",
      client: "قهوة الحرفيين",
      category: "شعار + تطبيقات",
      description: "هوية بصرية لكافيه متخصص في القهوة المحمصة يدوياً",
      challenge: "إبراز الطابع الحرفي والجودة العالية للقهوة",
      solution: "تصميم يجمع بين البساطة والدفء مع لمسات حرفية",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["شعار", "تغليف", "لافتات"],
      year: "2023",
    },
  ]

  const categories = ["الكل", "هوية بصرية", "شعار", "سوشيال ميديا", "تطبيقات"]

  return (
    <div className="min-h-screen bg-[#1B1B1D] text-[#F5F5F7]" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#FFC107] text-black text-lg px-4 py-2">معرض الأعمال</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">قصص نجاح بصرية</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              تصفح مجموعة مختارة من مشاريعنا واكتشف كيف حولنا الأفكار إلى هويات بصرية مؤثرة
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-[#FFC107] hover:bg-[#FFDB5C] text-black"
                    : "border-[#2F2F33] text-[#B0B0B8] hover:border-[#FFC107] hover:text-[#FFC107]"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="bg-[#252528] border-[#2F2F33] overflow-hidden hover:border-[#FFC107] transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#FFC107] text-black">{item.category}</Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="border-[#F5F5F7] text-[#F5F5F7]">
                      {item.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F7] mb-1">{item.title}</h3>
                    <p className="text-[#2DD4BF] text-sm">{item.client}</p>
                  </div>
                  <p className="text-[#B0B0B8] text-sm leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-[#1B1B1D] text-[#B0B0B8] text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-[#FFC107] hover:text-[#FFDB5C] p-0 h-auto font-semibold"
                    asChild
                  >
                    <Link href={`/portfolio/${item.id}`}>
                      عرض التفاصيل <ArrowLeft className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "مشروع مكتمل" },
              { number: "30+", label: "عميل راضي" },
              { number: "3", label: "سنوات خبرة" },
              { number: "100%", label: "رضا العملاء" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#FFC107]">{stat.number}</div>
                <div className="text-[#B0B0B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">مستعد لتكون التالي؟</h2>
            <p className="text-xl text-[#B0B0B8] leading-relaxed">دعنا نضيف قصة نجاحك إلى معرض أعمالنا</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="/contact">ابدأ مشروعك الآن</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-black px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/services">تعرف على خدماتنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
