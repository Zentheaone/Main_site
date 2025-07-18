"use client"

import { useState } from "react"
import { Mail, MessageCircle, ExternalLink } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" }
    let isValid = true

    if (!form.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Name must contain only letters"
      isValid = false
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Invalid email format"
      isValid = false
    }

    if (!form.message.trim()) {
      newErrors.message = "Vision is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfLVAjuyhM1SVcj87nz3SrfJ5D15EP8LVx-Wn3dzRJBXCaseQ/formResponse"
    const formData = new FormData()
    formData.append("entry.1456556936", form.name)
    formData.append("entry.239219392", form.email)
    formData.append("entry.1096982249", form.message)

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })

      alert("Your vision has been sent successfully!")
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Submission failed:", error)
      alert("Something went wrong. Please try again later.")
    }
  }

  return (
    <section id="contact" className="py-20 px-6 animate-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-300 font-semibold mb-4 tracking-wide">CONNECT WITH THE FUTURE</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let's Build Tomorrow Together</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Whether you're envisioning an AI chatbot, a quantum dashboard, or a revolutionary platform that doesn't
            exist yet— reach out. We're always listening to the whispers of innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-card bg-purple-800/30 backdrop-blur-lg border border-purple-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Your Vision</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-purple-200 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Visionary Leader"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-purple-900/50 border border-purple-600 rounded-lg text-white placeholder-purple-400 focus:border-pink-400 focus:outline-none transition-colors"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-purple-200 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="future@yourcompany.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-purple-900/50 border border-purple-600 rounded-lg text-white placeholder-purple-400 focus:border-pink-400 focus:outline-none transition-colors"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-purple-200 font-medium mb-2">Your Vision</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project, dream, or revolutionary idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-purple-900/50 border border-purple-600 rounded-lg text-white placeholder-purple-400 focus:border-pink-400 focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Your Vision
              </button>
            </form>
          </div>

          <div className="animate-card bg-purple-800/30 backdrop-blur-lg border border-purple-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Instant Connection</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:hello@zenthea.one" className="text-purple-300 hover:text-white transition-colors">
                    hello@zenthea.one
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/919360215471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    WhatsApp Portal
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Santhana's Digital Realm</p>
                  <a
                    href="https://sakhiv.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Visit Portfolio
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Vimal's Innovation Hub</p>
                  <a
                    href="https://vk-develops.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Visit Portfolio
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-purple-900/50 rounded-lg">
              <p className="text-purple-300 italic text-sm">
                "In the quantum realm of possibilities, every message is a potential universe of collaboration."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
