"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 animate-section">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <p className="text-purple-300 font-semibold mb-4 tracking-wide">WHO WE ARE</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">The ZentheaOne Collective</h2>
        </div>

        <div className="bg-purple-800/30 backdrop-blur-lg border border-purple-700/50 rounded-2xl p-12 animate-card">
          <div className="space-y-6 text-lg text-purple-200 leading-relaxed">
            <p>
              ZentheaOne is where mindful innovation meets cutting-edge technology. We're a two-person powerhouse blending ancient clarity with futuristic vision.
            </p>

            <p>
              Our team brings together the calm focus of Zen and the brilliance of AI. We create human-centered solutions that feel intuitive, impactful, and alive.
            </p>

            <p>
              From intelligent chatbots and predictive dashboards to full-stack e-commerce platforms and educational SaaS tools—we build with purpose, not just code.
            </p>

            <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              We are ZentheaOne: where tranquility meets transformation, where vision becomes reality, and where two minds unite to shape the future of conscious technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
