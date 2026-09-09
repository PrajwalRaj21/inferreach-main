export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Ready to fix your GTM data?</h2>
        <p className="section-subtitle">Book a free 30‑min audit. No commitment, just insights.</p>
        <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="company" placeholder="Company Name" required />
          </div>
          <div className="form-group">
            <textarea name="message" rows={4} placeholder="Tell us about your biggest data challenge..."></textarea>
          </div>
          <button type="submit" className="btn-primary">Book My Free Audit →</button>
        </form>
        <p className="contact-note">We'll reply within 24 hours. No spam, no sales pitch – just value.</p>
      </div>
    </section>
  )
}