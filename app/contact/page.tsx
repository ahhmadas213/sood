"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Instagram, MapPin, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    description: "",
    timeline: "",
    budget: "",
    contact_method: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const services = [
    "تصميم شعار",
    "بناء هوية بصرية متكاملة",
    "تصميمات سوشيال ميديا",
    "تجديد هوية موجودة",
    "استشارة براندينق",
    "أخرى",
  ]

  const workSteps = [
    {
      step: "01",
      title: "تواصل أو احجز",
      description: "املأ النموذج أو تواصل معنا مباشرة",
    },
    {
      step: "02",
      title: "جلسة استكشاف",
      description: "نتعرف على مشروعك وأهدافك بالتفصيل",
    },
    {
      step: "03",
      title: "تنفيذ التصميم",
      description: "نبدأ العمل على تصميم هويتك البصرية",
    },
    {
      step: "04",
      title: "التسليم والدعم",
      description: "نسلم المشروع مع الدعم المستمر",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1B1B1D] text-[#F5F5F7] flex items-center justify-center" dir="rtl">
        <Card className="bg-[#252528] border-[#2F2F33] max-w-md mx-4">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#2DD4BF] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F5F5F7] mb-2">تم إرسال طلبك بنجاح!</h2>
              <p className="text-[#B0B0B8]">شكراً لك! سنعود إليك خلال 24 ساعة عمل.</p>
            </div>
            <Button
              className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold w-full"
              onClick={() => setIsSubmitted(false)}
            >
              إرسال طلب آخر
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1B1B1D] text-[#F5F5F7]" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#2DD4BF] text-black text-lg px-4 py-2">تعاون معنا</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">ابدأ تعاونك مع سُود</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              نحن نؤمن بأن أفضل العلامات تنشأ من تعاون حقيقي. اختر طريقك للتواصل
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#252528] border-[#2F2F33]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#F5F5F7]">احجز استشارة أو أرسل طلب مشروع</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#F5F5F7]">
                        الاسم الكامل *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-[#1B1B1D] border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#F5F5F7]">
                        البريد الإلكتروني *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-[#1B1B1D] border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#F5F5F7]">
                      اسم العلامة/المشروع *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-[#1B1B1D] border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-[#F5F5F7]">
                      نوع الخدمة المطلوبة *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-[#1B1B1D] border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]">
                        <SelectValue placeholder="اختر الخدمة" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1B1B1D] border-[#2F2F33]">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="text-[#F5F5F7] focus:bg-[#252528]">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-[#F5F5F7]">
                      وصف مختصر للمشروع *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="bg-[#1B1B1D] border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107] min-h-[120px]"
                      placeholder="أخبرنا عن مشروعك، أهدافك، والرؤية التي تريد تحقيقها..."
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-[#F5F5F7]">
                        الإطار الزمني المفضل
                      </Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="bg-[#1B1B1D] border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]">
                          <SelectValue placeholder="اختر الإطار الزمني" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1B1B1D] border-[#2F2F33]">
                          <SelectItem value="urgent" className="text-[#F5F5F7] focus:bg-[#252528]">
                            عاجل (أسبوع)
                          </SelectItem>
                          <SelectItem value="normal" className="text-[#F5F5F7] focus:bg-[#252528]">
                            عادي (2-3 أسابيع)
                          </SelectItem>
                          <SelectItem value="flexible" className="text-[#F5F5F7] focus:bg-[#252528]">
                            مرن (شهر أو أكثر)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact_method" className="text-[#F5F5F7]">
                        وسيلة التواصل المفضلة
                      </Label>
                      <Select
                        value={formData.contact_method}
                        onValueChange={(value) => handleInputChange("contact_method", value)}
                      >
                        <SelectTrigger className="bg-[#1B1B1D] border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]">
                          <SelectValue placeholder="اختر وسيلة التواصل" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1B1B1D] border-[#2F2F33]">
                          <SelectItem value="email" className="text-[#F5F5F7] focus:bg-[#252528]">
                            البريد الإلكتروني
                          </SelectItem>
                          <SelectItem value="whatsapp" className="text-[#F5F5F7] focus:bg-[#252528]">
                            واتساب
                          </SelectItem>
                          <SelectItem value="phone" className="text-[#F5F5F7] focus:bg-[#252528]">
                            مكالمة هاتفية
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold w-full"
                  >
                    <Send className="ml-2 h-5 w-5" />
                    أرسل الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Process */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-[#252528] border-[#2F2F33]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#F5F5F7]">معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="h-5 w-5 text-[#FFC107]" />
                  <div>
                    <p className="text-[#F5F5F7] font-medium">البريد الإلكتروني</p>
                    <p className="text-[#B0B0B8]">sooddes@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Instagram className="h-5 w-5 text-[#FFC107]" />
                  <div>
                    <p className="text-[#F5F5F7] font-medium">إنستغرام</p>
                    <Link href="https://instagram.com/sooddes" className="text-[#2DD4BF] hover:text-[#2DD4BF]/80">
                      @sooddes
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MapPin className="h-5 w-5 text-[#FFC107]" />
                  <div>
                    <p className="text-[#F5F5F7] font-medium">الموقع</p>
                    <p className="text-[#B0B0B8]">مكة المكرمة، السعودية</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Process */}
            <Card className="bg-[#252528] border-[#2F2F33]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#F5F5F7]">خطوات العمل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {workSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F7] font-semibold">{step.title}</h3>
                      <p className="text-[#B0B0B8] text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Download Profile */}
            <Card className="bg-[#1B1B1D] border-[#2F2F33]">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-lg font-bold text-[#F5F5F7]">تحميل ملفنا التعريفي</h3>
                <p className="text-[#B0B0B8] text-sm">
                  احصل على نسخة جاهزة للمشاركة أو الإحالة. ملف يُظهر هويتنا، خدماتنا، وأبرز الأعمال.
                </p>
                <Button
                  variant="outline"
                  className="border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-black w-full bg-transparent"
                  asChild
                >
                  <Link href="/profile.pdf" target="_blank">
                    تحميل PDF
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
