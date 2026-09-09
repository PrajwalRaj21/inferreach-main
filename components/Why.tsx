import { Database, TrendingUp, Users, Zap } from 'lucide-react'

export default function Why() {
  return (
    <section id="why" className="py-20 md:py-28 border-t border-[#1a2127]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow">why inferreach</p>
          <h2 className="section-title">Where GTM meets data engineering</h2>
          <p className="section-subtitle mx-auto mt-4">
            We combine technical rigor with a revenue‑first mindset. The result: a GTM machine that actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-8">
            <div className="bg-amber/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
              <Database className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2.5">Data Engineering Expertise</h3>
            <p className="text-[#8b96a3] text-sm leading-relaxed">Deep skills in cleaning, transforming, and unifying data across your entire GTM stack.</p>
          </div>

          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-8">
            <div className="bg-amber/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2.5">Revenue-Focused Mindset</h3>
            <p className="text-[#8b96a3] text-sm leading-relaxed">We build systems that directly increase pipeline velocity, win rates, and revenue.</p>
          </div>

          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-8">
            <div className="bg-amber/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2.5">GTM Native</h3>
            <p className="text-[#8b96a3] text-sm leading-relaxed">We speak sales and marketing. We build solutions revenue teams actually use.</p>
          </div>

          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-8">
            <div className="bg-amber/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
              <Zap className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2.5">Speed & Agility</h3>
            <p className="text-[#8b96a3] text-sm leading-relaxed">5‑day audits. 2‑week implementations. You see results—fast.</p>
          </div>
        </div>
      </div>
    </section>
  )
}