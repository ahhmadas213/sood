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
import LatestProjects from "@/components/LatestProjects"
import TestimonialsSection from "@/components/TestimonialsSection"
import CTASection from "@/components/CTASection"

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
      <LatestProjects/>
      {/* Testimonials Section */}
      <TestimonialsSection/>
      
      {/* CTA Section */}
     <CTASection/>
    </div>
  )
}
