
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "آراء العملاء | سُود براندينق",
  description: "شاهد ما يقوله عملاؤنا عن تجاربهم في بناء وتصميم هوياتهم البصرية معنا.",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      text: "سُود فهموا رؤيتنا قبل أن نعبر عنها. الهوية كانت دقيقة وتحدثت عنا بطريقة لم نتوقعها. كانوا شركاء حقيقيين في كل خطوة.",
      author: "أحمد المالكي",
      company: "شركة تقنية ناشئة",
      image: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      text: "تعامل احترافي ونتيجة تفوق التوقعات. أصبحت هويتنا البصرية نقطة قوة حقيقية بفضل إبداعهم واهتمامهم بالتفاصيل.",
      author: "فاطمة السعيد",
      company: "متجر أزياء راقية",
      image: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      text: "الدقة في المواعيد والوضوح في التواصل جعلت التجربة سلسة ومثمرة. الهوية التي صمموها لنا كانت انطلاقة قوية في السوق.",
      author: "خالد عبد العزيز",
      company: "استشارات إدارية",
      image: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      text: "لم أتوقع هذا المستوى من الإبداع. لقد حولوا فكرتي المجردة إلى هوية بصرية تتحدث عن نفسها. شكراً لفريق سُود.",
      author: "نورة الشهري",
      company: "علامة تجارية شخصية",
      image: "/placeholder-user.jpg",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-almost-black text-[#F5F5F7]" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#FFC107] text-black text-lg px-4 py-2">آراء العملاء</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">تجارب فريدة يرويها شركاؤنا</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              كلمات من عملائنا الذين وثقوا بنا. كل رأي يمثل قصة نجاح وتعاون نفخر به.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#252528] border-[#2F2F33] p-8 space-y-6 flex flex-col justify-between"
              >
                <Quote className="h-12 w-12 text-[#FFC107] opacity-20" />
                <p className="text-lg text-[#F5F5F7] leading-relaxed flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F7]">{testimonial.author}</h3>
                    <p className="text-[#B0B0B8]">{testimonial.company}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#FFC107]" fill="#FFC107" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">هل تريد أن تكون صوتك التالي هنا؟</h2>
            <p className="text-xl text-[#B0B0B8] leading-relaxed">
              نحن متحمسون لسماع قصة علامتك والمساهمة في نجاحها.
            </p>
            <Button
              size="lg"
              className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
