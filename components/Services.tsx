export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">We bridge the gap between data and revenue.</p>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>CRM Data Cleanup</h3>
            <p>Deduplicate, enrich, and standardize your Salesforce or HubSpot data so your team actually trusts it.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Automated Prospecting</h3>
            <p>Build outbound engines with Clay, Apollo, and custom workflows that find and score your ideal leads.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3>GTM Dashboards</h3>
            <p>Real‑time visibility into pipeline velocity, deal risks, and rep performance – no more guessing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}