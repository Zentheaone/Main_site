"use client"

import { MessageSquare, Trophy, User, Eye } from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered Customer Engagement",
    description:
      "Conversational AI and chatbots that understand your customers, offer instant support, and boost engagement around the clock with natural interactions.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Trophy,
    title: "Scalable SaaS Architecture",
    description:
      "Cloud-native platforms engineered for scale. From MVP to enterprise, our solutions grow with your business and user base seamlessly.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: User,
    title: "Custom Web & Mobile Applications",
    description:
      "Branded digital products tailored to your needs. Whether it's responsive websites or mobile apps, we deliver high-performance experiences.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Eye,
    title: "Data-Driven Business Intelligence",
    description:
      "Turn data into decisions. Our embedded analytics and reporting dashboards give you clarity, control, and real-time insights.",
    color: "from-orange-500 to-red-500",
  },
];


export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for cards
      gsap.utils.toArray(".feature-card").forEach((card: any, index) => {
        gsap.to(card, {
          y: -30,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        })
      })

      // Magnetic effect on hover
      gsap.utils.toArray(".feature-card").forEach((card: any) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          gsap.to(card, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.3,
            ease: "power2.out",
          })
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          })
        }

        card.addEventListener("mousemove", handleMouseMove)
        card.addEventListener("mouseleave", handleMouseLeave)
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-20 px-6 animate-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-300 font-semibold mb-4 tracking-wide">OUR EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Why Choose ZentheaOne?</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            We combine cutting-edge technology with business acumen to deliver solutions that don't just work—they
            excel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card animate-card bg-slate-800/40 backdrop-blur-lg border border-slate-600/30 rounded-2xl p-8 hover:bg-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
