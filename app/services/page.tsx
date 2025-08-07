import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Palette, Layers, Share2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "خدمات براندينق احترافية | سُود",
  description:
    "استكشف خدماتنا في تصميم الشعارات، بناء الهوية البصرية، وتصميمات السوشيال لتقديم صورة متكاملة عن علامتك.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: "تصميم الهوية البصرية",
      subtitle: "لغة بصرية متكاملة",
      description: "نحوّل رؤية علامتك إلى تجربة بصرية متكاملة تشمل الألوان، الخطوط، الأنماط، والتطبيقات لتعبر عنك بدقة وجمال.",
      features: ["دليل هوية شامل", "تصميم تطبيقات بصرية", "إرشادات استخدام العلامة"],
      link: "/services/branding",
      color: "#FFC107",
    },
    {
      icon: <Layers className="h-12 w-12" />,
      title: "أستراتيجية العلامة التجارية",
      subtitle: "نرسم ملامح علامتك",
      description: "نرسم ملامح علامتك من الداخل للخارج؛ نحدد رؤيتها، رسالتها، وقيمها لتصبح أكثر وضوحاً وقوة في السوق.",
      features: ["جلسات استكشافية", "تحليل تنافسي", "تحديد نبرة الصوت"],
      link: "/services/strategy",
      color: "#2DD4BF",
    },
    {
      icon: <Share2 className="h-12 w-12" />,
      title: "الرسوم التجريدية والهندسية",
      subtitle: "فن يعزز هويتك",
      description: "نبتكر تركيبات فنية مستوحاة من الأشكال الهندسية والتجريدية لتعزيز هوية علامتك بأسلوب معاصر وأنيق.",
      features: ["تصاميم فريدة", "استخدامات متعددة", "أسلوب فني معاصر"],
      link: "/services/illustration",
      color: "#FFC107",
    },
  ]

  return (
    <div className="min-h-screen bg-almost-black text-[#F5F5F7]" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#2DD4BF] text-black text-lg px-4 py-2">خدماتنا</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">حلول براندينق متكاملة</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              نقدم خدمات تصميم شاملة تحول رؤيتك إلى هوية بصرية قوية ومؤثرة
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`${index % 2 === 1 ? "bg-[#252528]" : ""} py-16 px-4 rounded-3xl`}>
              <div className="max-w-6xl mx-auto">
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-4">
                      <div style={{ color: service.color }}>{service.icon}</div>
                      <h2 className="text-4xl md:text-5xl font-bold">{service.title}</h2>
                      <p className="text-xl text-[#B0B0B8]">{service.subtitle}</p>
                    </div>

                    <p className="text-lg text-[#F5F5F7] leading-relaxed">{service.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[#F5F5F7]">ما تتضمنه الخدمة:</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 space-x-reverse">
                            <CheckCircle className="h-5 w-5 text-[#2DD4BF] flex-shrink-0" />
                            <span className="text-[#F5F5F7]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold px-8 py-4"
                      asChild
                    >
                      <Link href={service.link}>اعرف المزيد</Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Card className="bg-almost-black border-[#2F2F33] overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-[#252528] to-almost-black flex items-center justify-center">
                          <div style={{ color: service.color }} className="opacity-20">
                            {service.icon}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">مستعد لبدء مشروعك؟</h2>
            <p className="text-xl text-[#B0B0B8] leading-relaxed">
              اختر الخدمة التي تناسبك ودعنا نحول رؤيتك إلى واقع بصري مميز
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="/book">احجز استشارة مجانية</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-black px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/portfolio">شاهد أعمالنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}