export default function WhatYouGet() {
  const deliverables = [
    'Full CRM data quality audit (duplicates, gaps, stale records)',
    'Enrichment gap analysis with provider recommendations',
    'Tool integration map (Salesforce ↔ marketing ↔ sales engagement)',
    'Interviews with 2–3 of your sales reps',
    '10-page written report with 5–10 specific fixes',
    'Prioritized roadmap with effort + impact estimates',
    'Live walkthrough call to review findings',
    '30-day follow-up check-in',
  ]
  return (
    <section className="what-you-get">
      <div className="container">
        <h2 className="section-title">What you actually get</h2>
        <p className="section-subtitle">
          Every GTM Data Health Check includes these deliverables — no surprises.
        </p>
        <div className="deliverables-grid">
          {deliverables.map((item) => (
            <div key={item} className="deliverable-item">
              <span className="check">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}