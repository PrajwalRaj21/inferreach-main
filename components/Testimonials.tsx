export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“InferReach cleaned our CRM in 3 days. Our sales team now actually uses it – and we closed 2 deals from the new leads they found.”</p>
            <div className="client">— Sarah K., VP Sales @ SaaSify</div>
          </div>
          <div className="testimonial-card">
            <p>“We were drowning in bad data. InferReach built us a Clay workflow that brought in 200 qualified leads in the first week. Unreal.”</p>
            <div className="client">— Mike T., Founder @ Finly</div>
          </div>
        </div>
      </div>
    </section>
  )
}