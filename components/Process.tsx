import { Phone, Search, FileText, Settings, Rocket } from 'lucide-react'

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 border-t border-[#1a2127] bg-[#0d1115]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow">how it works</p>
          <h2 className="section-title">From messy CRM to revenue engine</h2>
          <p className="section-subtitle mx-auto mt-4">
            A proven process that starts with a free consultation and ends with a fully automated GTM machine.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-6 text-center">
            <div className="bg-amber/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-amber" />
            </div>
            <div className="text-xs font-mono text-amber mb-2">Step 1</div>
            <h4 className="font-display font-semibold text-base mb-2">Discovery Call</h4>
            <p className="text-[#8b96a3] text-sm leading-relaxed">15‑min chat to understand your GTM data setup and pain points.</p>
          </div>

          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-6 text-center">
            <div className="bg-amber/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-amber" />
            </div>
            <div className="text-xs font-mono text-amber mb-2">Step 2</div>
            <h4 className="font-display font-semibold text-base mb-2">Mini‑Audit (Free)</h4>
            <p className="text-[#8b96a3] text-sm leading-relaxed">2‑hour review of your CRM. We find 3 quick wins – no obligation.</p>
          </div>

          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-6 text-center">
            <div className="bg-amber/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-amber" />
            </div>
            <div className="text-xs font-mono text-amber mb-2">Step 3</div>
            <h4 className="font-display font-semibold text-base mb-2">Full Audit</h4>
            <p className="text-[#8b96a3] text-sm leading-relaxed">5‑day deep dive. 10‑page report with 5–10 actionable fixes. $2,000.</p>
          </div>

          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-6 text-center">
            <div className="bg-amber/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-amber" />
            </div>
            <div className="text-xs font-mono text-amber mb-2">Step 4</div>
            <h4 className="font-display font-semibold text-base mb-2">Implementation</h4>
            <p className="text-[#8b96a3] text-sm leading-relaxed">We clean your CRM, build workflows, and set up automations.</p>
          </div>

          <div className="bg-[#10161b] border border-[#1a2127] rounded-2xl p-6 text-center">
            <div className="bg-amber/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-6 h-6 text-amber" />
            </div>
            <div className="text-xs font-mono text-amber mb-2">Step 5</div>
            <h4 className="font-display font-semibold text-base mb-2">Retainer</h4>
            <p className="text-[#8b96a3] text-sm leading-relaxed">Ongoing management. Weekly health checks and quarterly strategy.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#8b96a3] text-base mb-5">Start with a free mini‑audit – no commitment required.</p>
          <a href="https://cal.com/inferreach/30min" target="_blank" className="btn-primary">
            Book your free call →
          </a>
        </div>
      </div>
    </section>
  )
}