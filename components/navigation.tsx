"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن سُود" },
  { href: "/services", label: "خدماتنا" },
  { href: "/portfolio", label: "المعرض" },
  { href: "/testimonials", label: "آراء العملاء" },
  { href: "/contact", label: "تواصل معنا" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1B1B1D]/95 backdrop-blur-sm border-b border-[#2F2F33]" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#FFC107]">
            سُود
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#FFC107] ${
                  pathname === item.href ? "text-[#FFC107]" : "text-[#F5F5F7]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="bg-[#2DD4BF] hover:bg-[#2DD4BF]/80 text-black font-semibold" asChild>
              <Link href="/contact">تعاون معنا</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1B1B1D] border-[#2F2F33]">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-[#FFC107] ${
                      pathname === item.href ? "text-[#FFC107]" : "text-[#F5F5F7]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="bg-[#2DD4BF] hover:bg-[#2DD4BF]/80 text-black font-semibold w-full"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">تعاون معنا</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
