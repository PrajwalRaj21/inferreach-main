export default function CTA() {
  return (
    <section className="py-20 md:py-28 border-t border-[#1a2127] bg-gradient-to-b from-[#0a0d10] to-[#0d1115]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">ready to fix your GTM data?</p>
          <h2 className="section-title">Let's build your revenue engine</h2>
          <p className="section-subtitle mx-auto mt-4">
            Book a free 15‑minute consultation. We'll identify 3 quick wins for your GTM data — no obligation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://cal.com/inferreach/30min" target="_blank" className="btn-primary">
              Book your free call →
            </a>
            <a href="mailto:hello@inferreach.com" className="btn-ghost">
              ✉️ hello@inferreach.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}