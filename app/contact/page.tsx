"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Instagram, MapPin, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-almost-black text-[#F5F5F7] flex items-center justify-center" dir="rtl">
        <Card className="bg-[#252528] border-[#2F2F33] max-w-md mx-4">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#2DD4BF] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F5F5F7] mb-2">تم إرسال رسالتك بنجاح!</h2>
              <p className="text-[#B0B0B8]">شكراً لك! سنعود إليك خلال 24 ساعة عمل.</p>
            </div>
            <Button
              className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold w-full"
              onClick={() => setIsSubmitted(false)}
            >
              إرسال رسالة أخرى
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
            <Badge className="bg-[#2DD4BF] text-black text-lg px-4 py-2">تواصل معنا</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">نحن هنا لمساعدتك</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B8] leading-relaxed">
              لديك سؤال أو فكرة مشروع؟ لا تتردد في التواصل معنا.
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
                <CardTitle className="text-2xl font-bold text-[#F5F5F7]">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#F5F5F7]">
                        الاسم
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
                        البريد
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
                    <Label htmlFor="message" className="text-[#F5F5F7]">
                      الرسالة
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-almost-black border-[#2F2F33] text-[#F5F5F7] focus:border-[#FFC107] min-h-[120px]"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#FFC107] hover:bg-[#FFDB5C] text-black font-semibold w-full"
                  >
                    <Send className="ml-2 h-5 w-5" />
                    إرسال
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-[#252528] border-[#2F2F33]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#F5F5F7]">معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="h-5 w-5 text-[#FFC107]" />
                  <div>
                    <p className="text-[#F5F5F7] font-medium">بريد إلكتروني</p>
                    <p className="text-[#B0B0B8]">sood@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Instagram className="h-5 w-5 text-[#FFC107]" />
                  <div>
                    <p className="text-[#F5F5F7] font-medium">إنستغرام</p>
                    <Link href="#" className="text-[#2DD4BF] hover:text-[#2DD4BF]/80">
                      @sood.studio
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MapPin className="h-5 w-5 text-[#FFC107]" />
                  <div>
                    <p className="text-[#F5F5F7] font-medium">الموقع</p>
                    <p className="text-[#B0B0B8]">مكة المكرمة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}