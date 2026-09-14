import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | InferReach',
  description: 'Terms governing the use of InferReach services.',
}

export default function Terms() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <Link href="/" className="legal-back">← Back to home</Link>

        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last updated: September 14, 2026</p>

        <div className="legal-body">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of InferReach&rsquo;s website
            and services. By using our site or engaging our services, you agree to these Terms.
          </p>

          <h2>1. Services</h2>
          <p>
            InferReach provides GTM (Go-To-Market) data engineering consulting services, including
            data audits, CRM cleanup, pipeline automation, and related work. Specific deliverables
            and pricing are outlined in individual proposals or statements of work.
          </p>

          <h2>2. Engagement & Payment</h2>
          <ul>
            <li>All engagements begin with a written proposal or statement of work.</li>
            <li>Payment terms are 50% upfront, 50% on completion unless otherwise agreed.</li>
            <li>Invoices are due within 14 days of receipt.</li>
            <li>Late payments may incur a 2% monthly fee.</li>
          </ul>

          <h2>3. Client Responsibilities</h2>
          <p>To deliver our services effectively, you agree to:</p>
          <ul>
            <li>Provide timely access to the necessary systems, data, and tools</li>
            <li>Designate a point of contact for coordination</li>
            <li>Review and provide feedback on deliverables within a reasonable timeframe</li>
          </ul>

          <h2>4. Confidentiality</h2>
          <p>
            We will treat all client data and business information as confidential. We will not
            disclose your information to third parties without your consent, except as required by
            law. This obligation survives the end of our engagement.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All deliverables produced specifically for you (reports, automations, dashboards, code)
            become your property upon full payment. Our internal tools, frameworks, and know-how
            remain our property.
          </p>

          <h2>6. Guarantees & Refunds</h2>
          <p>
            Our free audit is provided at no cost and no obligation. Paid engagements are subject
            to the terms in the applicable statement of work. We stand behind our work — if a
            deliverable does not meet the agreed specification, we will revise it at no additional
            cost.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, InferReach&rsquo;s total liability under any
            engagement is limited to the fees paid for that engagement. We are not liable for
            indirect, incidental, or consequential damages.
          </p>

          <h2>8. No Warranty</h2>
          <p>
            Our services are provided &ldquo;as is.&rdquo; While we aim for high quality, we make no
            warranties about specific business outcomes such as revenue increases or lead conversion.
          </p>

          <h2>9. Termination</h2>
          <p>
            Either party may terminate an engagement with 14 days&rsquo; written notice. Fees for work
            completed up to the termination date remain payable.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in which InferReach is
            registered. Any disputes will be resolved in the courts of that jurisdiction.
          </p>

          <h2>11. Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use of our services after changes
            constitutes acceptance of the new Terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions? Email us at{' '}
            <a href="mailto:hello@inferreach.com" className="legal-link">hello@inferreach.com</a>.
          </p>
        </div>
      </div>
    </main>
  )
}