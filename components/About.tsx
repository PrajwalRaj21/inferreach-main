export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-photo">
          <div className="photo-placeholder">
            <span>👤</span>
          </div>
        </div>
        <div className="about-content">
          <span className="badge">Founder</span>
          <h2 className="about-title">Built by a data engineer, for revenue teams</h2>
          <p>
            Hi, I'm <strong>[Your Name]</strong>. I started InferReach after watching too many B2B SaaS 
            companies lose deals to broken data — duplicate leads, missing fields, sync errors 
            between Salesforce and their outreach tools.
          </p>
          <p>
            I've spent years building data pipelines and automation systems. InferReach is my way 
            of bringing that engineering rigor to GTM teams that don't have a data engineer 
            on staff.
          </p>
          <div className="about-links">
            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
              LinkedIn →
            </a>
            <a href="mailto:hello@inferreach.com">
              hello@inferreach.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}