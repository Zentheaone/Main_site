"use client"

import { Bot, ShoppingCart, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Intelligent AI Chatbots",
    description:
      "Conversational AI custom-trained on your business data, available 24/7 to engage customers with natural, human-like understanding.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "Next-Gen E-commerce Platforms",
    description:
      "AI-enhanced Shopify and headless commerce solutions with predictive recommendations, smart search, and seamless UX.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboards",
    description:
      "Interactive business intelligence platforms that turn your data into decisions with real-time insights and intuitive visualizations.",
    color: "from-green-500 to-blue-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 animate-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-300 font-semibold mb-4 tracking-wide">WHAT WE CRAFT</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">AI-First. Future-Fast.</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Empowering tomorrow's leaders with today's most advanced solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-card bg-purple-800/30 backdrop-blur-lg border border-purple-700/50 rounded-2xl p-8 hover:bg-purple-700/40 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-purple-200 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
