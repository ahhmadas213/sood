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
      title: "تصميم شعارات",
      subtitle: "رمز يحكيك",
      description: "نبتكر رمزاً يحمل جوهر علامتك، بسيطاً، مميزاً، ويسرد قصتك دون أن يقول الكثير.",
      features: ["بحث بصري أولي", "مفاهيم متعددة", "صياغات نهائية متعددة (نسخ)", "دليل استخدام الشعار (نسخة مختصرة)"],
      color: "#FFC107",
    },
    {
      icon: <Layers className="h-12 w-12" />,
      title: "بناء هوية بصرية",
      subtitle: "لغة بصرية متكاملة",
      description: "نُحوّل علامتك إلى تجربة بصرية متكاملة: ألوان، خطوط، صوت، ونغم بصري متسق يعبر عنك في كل نقطة تواصل.",
      features: [
        "دليل هوية (لوحة ألوان، خطوط، أنماط)",
        "تطبيقات: بطاقات، أغلفة، تواصل اجتماعي",
        "نسخ للـ Visual Assets",
        "دليل استخدام شامل",
      ],
      color: "#2DD4BF",
    },
    {
      icon: <Share2 className="h-12 w-12" />,
      title: "تصميمات السوشيال",
      subtitle: "تواصل بصري يجذب العين",
      description: "محتوى بصري يجذب ويُمضي برؤيتك إلى جمهورك، بصيغة متسقة مع هويتك.",
      features: [
        "ستوري/بوست",
        "قوالب قابلة لإعادة الاستخدام",
        "تناغم مع الحملة الموسمية أو إطلاق",
        "محتوى متسق مع الهوية",
      ],
      color: "#FFC107",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1B1B1D] text-[#F5F5F7]" dir="rtl">
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
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-4">
                      <div style={{ color: service.color }}>{service.icon}</div>
                      <h2 className="text-4xl md:text-5xl font-bold">{service.title}</h2>
                      <p className="text-xl text-[#B0B0B8]">{service.subtitle}</p>
                    </div>

                    <p className="text-lg text-[#F5F5F7] leading-relaxed">{service.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[#F5F5F7]">ما يتضمنه العرض:</h3>
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
                      <Link href="/contact">ابدأ مشروعك</Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Card className="bg-[#1B1B1D] border-[#2F2F33] overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-[#252528] to-[#1B1B1D] flex items-center justify-center">
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">خطوات العمل</h2>
            <p className="text-xl text-[#B0B0B8] max-w-2xl mx-auto">عملية واضحة ومنظمة لضمان أفضل النتائج</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "تواصل أو احجز", description: "نبدأ بفهم احتياجاتك ورؤيتك" },
              { step: "02", title: "جلسة استكشاف", description: "نتعمق في تفاصيل مشروعك وأهدافك" },
              { step: "03", title: "تنفيذ التصميم", description: "نبدع الحلول البصرية المناسبة" },
              { step: "04", title: "التسليم والدعم", description: "نسلم العمل مع الدعم المستمر" },
            ].map((process, index) => (
              <Card key={index} className="bg-[#1B1B1D] border-[#2F2F33] text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl font-bold text-[#FFC107]">{process.step}</div>
                  <h3 className="text-xl font-bold text-[#F5F5F7]">{process.title}</h3>
                  <p className="text-[#B0B0B8]">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
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
                <Link href="/contact">احجز استشارة مجانية</Link>
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
