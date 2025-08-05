import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/Header"
import { Footer } from "@/components/footer"
import { Noto_Kufi_Arabic } from "next/font/google"
import "./globals.css"

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "سُود | استوديو براندينق إبداعي من مكة",
  description:
    "سُود - مساحة مُشبعة بالفن؛ استوديو براندينق من مكة يبتكر هويات بصرية متميزة تعكس جوهر علامتك. شاهد أعمالنا وتعاون معنا.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>

      </head>
      <body className={`font-arabic antialiased ${notoKufiArabic.className}`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
