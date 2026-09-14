export default function WhoThisIsFor() {
  const fits = [
    'B2B SaaS companies between $1M and $20M ARR',
    'Sales teams of 5–50 reps using Salesforce or HubSpot',
    'You suspect your CRM data is messy but don\'t have time to fix it',
    'You\'ve invested in tools (Clay, Apollo, Outreach) but they aren\'t firing',
    'You want a data engineer but don\'t need a full-time one',
  ]
  const notFits = [
    'Enterprise companies with an in-house data team',
    'Early-stage startups without a defined sales process',
    'Companies looking for a one-off data cleanup and nothing else',
  ]
  return (
    <section className="who-for">
      <div className="container">
        <h2 className="section-title">Who this is for</h2>
        <p className="section-subtitle">We work best with a specific type of team.</p>
        <div className="who-grid">
          <div className="who-col who-yes">
            <h3>Perfect fit</h3>
            <ul>
              {fits.map((item) => (
                <li key={item}>
                  <span className="icon-yes">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="who-col who-no">
            <h3>Not a fit</h3>
            <ul>
              {notFits.map((item) => (
                <li key={item}>
                  <span className="icon-no">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}