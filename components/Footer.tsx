import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={28} />
          <span>&copy; 2026 InferReach. Built for revenue teams.</span>
        </div>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:hello@inferreach.com">hello@inferreach.com</a>
        </div>
      </div>
    </footer>
  )
}