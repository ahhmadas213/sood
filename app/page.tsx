'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/Hero"
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat"
import AboutSection from "@/components/AboutSection"
import OurServicesSection from "@/components/OurServicesSection"

export default function HomePage() {


  const portfolioItems = [
    {
      title: "شركة تقنية ناشئة",
      description: "هوية بصرية متكاملة لشركة ناشئة في التقانة",
      category: "هوية بصرية",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "مطعم فاخر",
      description: "تصميم شعار وهوية بصرية لمطعم راقي",
      category: "شعار + هوية",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "متجر أزياء",
      description: "حملة سوشيال ميديا متكاملة",
      category: "سوشيال ميديا",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "عيادة طبية",
      description: "هوية بصرية شاملة للقطاع الصحي",
      category: "هوية بصرية",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const testimonials = [
    {
      text: "سُود فهموا رؤيتنا قبل أن نعبر عنها. الهوية كانت دقيقة وتحدثت عنا بطريقة لم نتوقعها.",
      author: "أحمد المالكي",
      company: "شركة ناشئة في التقنية",
      rating: 5,
    },
    {
      text: "تعامل احترافي ونتيجة تفوق التوقعات. أصبحت هويتنا البصرية نقطة قوة حقيقية.",
      author: "فاطمة السعيد",
      company: "متجر أزياء راقية",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen  text-white" >
      {/* Hero Section */}
      <Hero/>

     <AboutSection/>
      {/* Services Section */}
      <OurServicesSection/>

      {/* Portfolio Section */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">معرض الأعمال</h2>
            <p className="text-xl text-[#B0B0B8] max-w-2xl mx-auto">مجموعة مختارة من مشاريعنا المميزة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="bg-[#252528] border-[#2F2F33] overflow-hidden hover:border-[#FFC107] transition-colors group"
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#F5F5F7]">{item.title}</h3>
                  <p className="text-[#B0B0B8]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black bg-transparent"
              asChild
            >
              <Link href="/portfolio">كل الأعمال</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 px-4 bg-[#252528]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">آراء العملاء</h2>
            <p className="text-xl text-[#B0B0B8] max-w-2xl mx-auto">كلمات من من عملوا معنا</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#1B1B1D] border-[#2F2F33]">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-[#2DD4BF] mb-4" />
                  <p className="text-[#F5F5F7] mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-[#F5F5F7]">{testimonial.author}</p>
                    <p className="text-[#B0B0B8]">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="link" className="text-[#2DD4BF] hover:text-[#2DD4BF]/80 text-lg" asChild>
              <Link href="/testimonials">
                اقرأ المزيد <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">لنُبدع معاً</h2>
            <p className="text-xl text-[#B0B0B8] leading-relaxed">
              سواء كنت بدايةً جديدة، أو تريد تجديد صورتك، نحن هنا لنُعيّن هويتك البصرية في المكان الصحيح.
            </p>
            <Button
              size="lg"
              className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold px-12 py-6 text-xl"
              asChild
            >
              <Link href="/contact">احجز استشارة</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
