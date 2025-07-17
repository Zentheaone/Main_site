"use client"

import { Check } from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const pricingData = [
  {
    category: "AI Chatbot Solutions",
    tiers: [
      {
        name: "Basic Chatbot",
        price: "₹10k - ₹25k",
        description: "Doc-trained bots for FAQ & simple queries",
        features: [
          "PDF / FAQ-based Training",
          "Embed Widget Integration",
             "Rule-based or Contextual Chatbot",
          "Basic Analytics",
        ],
      }, {
        name: "LLM-Powered Chatbot",
        price: "₹50k - ₹2L+",
        description: "Smart AI chatbots with personalization & deep learning",
        features: [
          "Everything in ML Chatbot",
          "Gemini/GPT/Ollama Integration",
          "Vector DB + RAG Pipeline",
          "User Memory + Token Billing",
        ],
        popular: true,
      },
      {
        name: "ML Chatbot",
        price: "₹30k - ₹50k",
        description: "Intent-aware bots using lightweight ML models",
        features: [
          "Everything in Basic",
          "Intent Classification",
          "Custom Dataset Support",
          "Simple Personalization",
        ],
      },
     
    ],
  },
  {
    category: "App & Web Development",
    tiers: [
      {
        name: "Starter Web/App",
        price: "₹15k - ₹25k",
        description: "Landing pages and MVPs for early-stage startups",
        features: [
          "Responsive Web Design",
          "Basic CMS & SEO",
          "Static or Single Page App",

        ],
      },
      {
        name: "Growth Web/App",
        price: "₹30k - ₹50k",
        description: "Full websites or small apps with backend integration",
        features: [
          "Everything in Starter",
          "Auth + Admin Panel",
          "Payment / API Integration",
          "Hosting"

        ],
        popular: true,
      },
      {
        name: "Premium SaaS Platform",
        price: "₹60k - ₹1L+",
        description: "End-to-end platform with dashboards and scalable backend",
        features: [
          "Everything in Growth",
          "Custom Features & Microservices",
          "CI/CD Deployment ",
          "Hosting"
        ],
      },
    ],
  },
  {
    category: "Specialized Services",
    tiers: [
      {
        name: "SEO Services",
        price: "₹15k - ₹50k/month",
        description: "Improve visibility and rank higher on search engines",
        features: [
          "Technical SEO Audit",
          "On-page Optimization",
          "Monthly Performance Reports",
        ],
      },
      {
        name: "Software Rescue",
        price: "₹20k - ₹80k",
        description: "Fix broken or outdated apps & improve performance",
        features: [
          "Code Audit & Refactor",
          "UI/UX Overhaul",
          "Bug Fixing & Optimization",
        ],
      },
      {
        name: "Power BI Dashboard Site",
        price: "₹15k - ₹1.5L+",
        description: "Embed Power BI dashboards into your business website",
        features: [
          "Embed Authenticated Power BI Reports",
          "Responsive Frontend & Login",
          "Basic Hosting + Analytics",
        ],
      },
    ],
  },
];




export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card animations with bounce effect
      gsap.utils.toArray(".pricing-card").forEach((card: any, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
            rotationY: -15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Hover animations
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="py-20 px-6 animate-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-300 font-semibold mb-4 tracking-wide">TRANSPARENT PRICING</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Choose Your Investment</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Flexible pricing based on complexity, tech stack, and your vision. Custom quotes available after discovery
            calls.
          </p>
        </div>

        {pricingData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">{category.category}</h3>

            <div className={`grid gap-8 ${category.tiers.length === 1 ? "max-w-2xl mx-auto" : "md:grid-cols-3"}`}>
              {category.tiers.map((tier, tierIndex) => (
                <div
                  key={tierIndex}
                  className={`pricing-card relative backdrop-blur-lg border rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                    tier.popular
                      ? "bg-slate-700/60 border-purple-400/60 shadow-lg shadow-purple-500/20"
                      : "bg-slate-800/40 border-slate-600/30 hover:bg-slate-700/50 hover:border-purple-500/30"
                  } ${tier.custom ? "border-2 border-gradient-to-r from-purple-500 to-pink-500" : ""}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {tier.price}
                    </div>
                    <p className="text-slate-300 text-sm">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
<a href="#contact">
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg"
                        : "border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white"
                    }`}
                  >
                    {tier.custom ? "Get Custom Quote" : "Get Started"}
                  </button></a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
