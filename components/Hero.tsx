import LiveDashboard from './LiveDashboard'

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
            <span>🇺🇸 Remote-first</span> • <span>5-day audit turnaround</span> • <span>No contracts required</span>
          </div>
        </div>
        <div className="hero-image">
          <LiveDashboard />
        </div>
      </div>
    </section>
  )
}