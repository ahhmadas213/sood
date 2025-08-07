import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Users, Palette, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "عن سُود | استوديو براندينق من مكة",
  description: "تعرف على رؤية وقيم استوديو سُود، من يقف خلف العلامة، وكيف نصنع هويات بصرية تحمل طابعك الخاص.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "الأصالة",
      description: "نُظهر جوهر كل علامة بكل صدق.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "الدقة",
      description: "نهتم بالتفاصيل التي تُحدث الفرق.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "التفاعل",
      description: "نصغي لنُترجم رؤى عملائنا إلى شكل بصري.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "الإبداع الهادئ",
      description: "فن يعبر بصمت، لكنه يُحفر.",
    },
  ]

  const whyChooseUs = [
    "تصميم مخصص بدقة.",
    "تجربة تواصل سلسة.",
    "ملف تعريفي قابل للتحميل.",
    "دعم ما بعد التسليم.",
  ]

  return (
    <div className="min-h-screen bg-almost-black text-[#F5F5F7]" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#FFC107] text-black text-lg px-4 py-2">من نحن</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">سُود ليست مجرد استوديو</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              هي مساحة تُشبَع بالفن، نفسّره في كل تفصيل من تفاصيل هويتك. نعمل على دمج الإبداع مع الهدف لنصنع علامات تُحفر في الذاكرة.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2DD4BF]">رؤيتنا</h2>
            <p className="text-xl md:text-2xl text-[#F5F5F7] leading-relaxed">
              أن تُصبح العلامات التي نعمل معها مرآة لما يميزها، وهوية بصريّة لا تُشبه أحداً.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">قيمنا</h2>
            <p className="text-xl text-[#B0B0B8] max-w-2xl mx-auto">المبادئ التي توجه عملنا وتشكل هويتنا</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#252528] border-[#2F2F33] hover:border-[#FFC107] transition-colors">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-[#FFC107] flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#F5F5F7]">{value.title}</h3>
                  <p className="text-[#B0B0B8]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">من يقف خلف سُود</h2>
            <Card className="bg-almost-black border-[#2F2F33] p-8">
              <CardContent className="space-y-6">
                <div className="w-32 h-32 bg-[#FFC107] rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">س</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F5F5F7] mb-2">أحمد</h3>
                  <p className="text-[#B0B0B8] mb-4">مصمم علامات يدمج البساطة بالتفرّد</p>
                  <p className="text-[#F5F5F7] leading-relaxed">
                    نحن فريق من المصممين والمبدعين الذين يتشاركون شغفًا بتحويل الأفكار إلى هويات بصرية مؤثرة. كل مشروع بالنسبة لنا هو فرصة لخلق شيء فريد لا يُنسى.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">لماذا تختارنا؟</h2>
              <p className="text-xl text-[#B0B0B8]">ما يميز تجربة العمل معنا</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-[#2DD4BF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <p className="text-lg text-[#F5F5F7]">{reason}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button
                    size="lg"
                    variant="outline"
                    className="border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-black px-8 py-4 text-lg bg-transparent"
                    asChild
                >
                    <Link href="/profile">
                        <Download className="ml-2 h-5 w-5" />
                        تحميل الملف التعريفي
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">مستعد لبناء هويتك؟</h2>
            <p className="text-xl text-[#B0B0B8] leading-relaxed">دعنا نتعرف على قصتك ونحولها إلى هوية بصرية مميزة</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="/book">ابدأ مشروعك</Link>
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