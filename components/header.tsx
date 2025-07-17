"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-purple-900/95 backdrop-blur-lg border-b border-purple-700/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            ZentheaOne
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Vision", "Philosophy", "Services", "Pricing", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-purple-100 hover:text-white transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
