"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "-=0.4",
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        )

      // Enhanced floating animation with rotation
      gsap.to(heroRef.current, {
        y: -15,
        rotation: 0.5,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Animate individual letters in title
      gsap.fromTo(
        titleRef.current?.children || [],
        { opacity: 0, y: 20, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1,
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="vision" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div ref={heroRef} className="text-center max-w-6xl mx-auto">
        <p ref={subtitleRef} className="text-purple-300 text-lg font-semibold mb-6 tracking-wide">
          Next-Generation SaaS Solutions for Modern Businesses
        </p>

        <h1 ref={titleRef} className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="text-white">Transform Your </span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Business.</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
            Scale with AI.
          </span>
          <br />
          <span className="text-white">Lead the Future.</span>
        </h1>

        <p className="text-xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          ZentheaOne crafts intelligent SaaS platforms, AI-powered applications, and cutting-edge web solutions that
          transform how businesses operate. From custom chatbots to enterprise dashboards, we build the technology that
          drives tomorrow's success stories.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <a href="#contact">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl btn-hover">
            🚀 Start Your Project
          </button></a>
           <a href="#services">
          <button className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            💡 Explore Solutions
          </button></a>
        </div>
      </div>
    </section>
  )
}
