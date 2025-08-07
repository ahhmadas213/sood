
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
import { Send, CheckCircle, FileUp } from "lucide-react"

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    description: "",
    contact_method: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const services = [
    "تصميم الهوية البصرية",
    "أستراتيجية العلامة التجارية",
    "الرسوم التجريدية والهندسية",
    "استشارة براندينق",
    "أخرى",
  ]

  const workSteps = [
    {
      step: "01",
      title: "حجز أو تواصل",
      description: "املأ النموذج أو تواصل معنا مباشرة",
    },
    {
      step: "02",
      title: "جلسة استكشاف",
      description: "نتعرف على مشروعك وأهدافك بالتفصيل",
    },
    {
      step: "03",
      title: "تنفيذ المشروع",
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
      <div className="min-h-screen bg-almost-black text-[#F5F5F7] flex items-center justify-center" dir="rtl">
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
    <div className="min-h-screen bg-almost-black text-[#F5F5F7]" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#2DD4BF] text-black text-lg px-4 py-2">التعاون معنا</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">ابدأ رحلة علامتك مع سُود</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              نحن نؤمن بأن أفضل العلامات تنشأ من تعاون حقيقي. اختر طريقك للتواصل معنا.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#252528] border-[#2F2F33]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#F5F5F7]">نموذج الحجز</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#F5F5F7]">
                        الاسم الكامل
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-almost-black border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#F5F5F7]">
                        البريد الإلكتروني
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-almost-black border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#F5F5F7]">
                      اسم العلامة أو المشروع
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-almost-black border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-[#F5F5F7]">
                      نوع الخدمة
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-almost-black border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]">
                        <SelectValue placeholder="اختر الخدمة" />
                      </SelectTrigger>
                      <SelectContent className="bg-almost-black border-[#2F2F33]">
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
                      وصف المشروع
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="bg-almost-black border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107] min-h-[120px]"
                      placeholder="أخبرنا عن رؤيتك وأهدافك..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file" className="text-[#F5F5F7]">
                      ملف مرفق (اختياري)
                    </Label>
                    <div className="flex items-center justify-center w-full">
                        <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#2F2F33] border-dashed rounded-lg cursor-pointer bg-almost-black hover:bg-black">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FileUp className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <Input id="dropzone-file" type="file" className="hidden" />
                        </Label>
                    </div> 
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact_method" className="text-[#F5F5F7]">
                      وسيلة تواصل مفضلة
                    </Label>
                    <Select
                      value={formData.contact_method}
                      onValueChange={(value) => handleInputChange("contact_method", value)}
                    >
                      <SelectTrigger className="bg-almost-black border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107]">
                        <SelectValue placeholder="اختر وسيلة التواصل" />
                      </SelectTrigger>
                      <SelectContent className="bg-almost-black border-[#2F2F33]">
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

          {/* Work Process */}
          <div className="space-y-8">
            <Card className="bg-[#252528] border-[#2F2F33]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#F5F5F7]">خطوات التعاون</CardTitle>
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
          </div>
        </div>
      </div>
    </div>
  )
}
