export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="badge">GTM Data Engineering</span>
          <h1>Turn your messy CRM into a revenue engine</h1>
          <p>
            We clean your data, automate your outreach, and build the infrastructure
            your GTM team needs to close deals faster.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Book a Free Audit</a>
            <a href="#services" className="btn-secondary">Learn More →</a>
          </div>
          <div className="trust-badge">
            <span>⭐ 5.0</span> • <span>15+ companies served</span> • <span>2x pipeline growth avg.</span>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-graphic">
            <div className="chart"></div>
            <div className="chart"></div>
            <div className="chart"></div>
          </div>
        </div>
      </div>
    </section>
  )
}