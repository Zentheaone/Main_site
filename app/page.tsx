"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Philosophy from "@/components/philosophy"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize GSAP animations
      const ctx = gsap.context(() => {
        // Create floating particles effect
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement("div")
          particle.className = "fixed w-2 h-2 bg-purple-400/20 rounded-full pointer-events-none"
          particle.style.left = Math.random() * 100 + "%"
          particle.style.top = Math.random() * 100 + "%"
          document.body.appendChild(particle)

          gsap.to(particle, {
            y: -100,
            x: Math.random() * 200 - 100,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            ease: "power1.out",
            delay: Math.random() * 2,
          })
        }

        // Animate sections on scroll with enhanced effects
        gsap.utils.toArray(".animate-section").forEach((section: any) => {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 60,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })

        // Enhanced card animations
        gsap.utils.toArray(".animate-card").forEach((card: any, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 40,
              scale: 0.9,
              rotationY: -15,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })

        // Parallax effect for background elements
        gsap.to(".bg-parallax", {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".bg-parallax",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      }, mainRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <main
      ref={mainRef}
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4c1d95 50%, #581c87 75%, #3b0764 100%)",
      }}
    >
      <div className="bg-parallax fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10"></div>
      </div>
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
