export default function FAQ() {
  const faqs = [
    {
      q: 'How long does a typical engagement take?',
      a: 'The initial audit takes 5 days. Implementation ranges from 1–3 weeks depending on scope. Most clients see their first results within the first week.'
    },
    {
      q: 'Do you work with our existing tools?',
      a: 'Yes. We work with Salesforce, HubSpot, Clay, Apollo, Outreach, and virtually every major GTM tool. We plug into what you already use — no forced migrations.'
    },
    {
      q: 'What if we don\'t have a data team?',
      a: 'That\'s exactly who we built InferReach for. We handle the technical work and train your team to maintain it after we\'re done. No data engineer required on your side.'
    },
    {
      q: 'How do you measure success?',
      a: 'We define success upfront in your audit: cleaner data (dedupe %, field completion %), faster pipeline velocity, and more qualified leads per rep. Every engagement ends with a metrics report.'
    },
    {
      q: 'Is the free audit really free?',
      a: 'Yes. A 30-minute call + a 2-hour review of your CRM. We identify 3 quick wins you can act on immediately — whether or not you hire us.'
    },
  ]
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle">Everything you need to know before booking a call.</p>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-question">
                {item.q}
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}