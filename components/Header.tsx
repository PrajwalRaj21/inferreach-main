import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Logo size={32} className="logo-mark" />
          <span className="logo-text">InferReach</span>
        </Link>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn-outline">Get Started</a>
        </nav>
      </div>
    </header>
  )
}