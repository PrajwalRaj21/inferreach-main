'use client'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Ready to fix your GTM data?</h2>
        <p className="section-subtitle">
          Book a free 30‑min audit. No commitment, just insights.
        </p>

        <div className="contact-cta">
          <a
            href="https://cal.com/inferreach/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book My Free Audit →
          </a>
        </div>

        <p className="contact-note">
          Or email us directly at{' '}
          <a href="mailto:hello@inferreach.com" className="contact-email">
            hello@inferreach.com
          </a>
        </p>
      </div>
    </section>
  )
}