import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | InferReach',
  description: 'How InferReach collects, uses, and protects your data.',
}

export default function Privacy() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <Link href="/" className="legal-back">← Back to home</Link>

        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: September 14, 2026</p>

        <div className="legal-body">
          <p>
            InferReach (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what
            information we collect, how we use it, and the choices you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information in two ways:</p>
          <ul>
            <li>
              <strong>Information you provide directly:</strong> Your name, email address, company name,
              and any message you send us when you contact us or book a call.
            </li>
            <li>
              <strong>Information collected automatically:</strong> Basic analytics data such as your IP
              address, browser type, pages visited, and time on site. We use this to improve the website.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries and provide our services</li>
            <li>Send you information related to your request</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not sell your personal information to third parties. Ever.</p>

          <h2>3. Third-Party Services</h2>
          <p>
            We use third-party tools to operate our business, including Cal.com (for scheduling),
            Cloudflare (for hosting), and email providers. These services only receive information
            necessary to perform their function.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain your information for as long as needed to provide our services or comply with
            legal obligations. You can request deletion at any time.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>To exercise any of these rights, email us at the address below.</p>

          <h2>6. Cookies</h2>
          <p>
            We use essential cookies to make the site function. We do not use third-party tracking
            cookies.
          </p>

          <h2>7. Security</h2>
          <p>
            We take reasonable precautions to protect your information, including encryption in
            transit and restricted access. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be reflected in the
            &ldquo;last updated&rdquo; date above.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions? Email us at{' '}
            <a href="mailto:hello@inferreach.com" className="legal-link">hello@inferreach.com</a>.
          </p>
        </div>
      </div>
    </main>
  )
}