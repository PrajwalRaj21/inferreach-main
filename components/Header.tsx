export default function Header() {
  return (
    <header>
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-icon">▶</span> InferReach
        </div>
        <nav>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className="btn-outline">Get Started</a>
        </nav>
      </div>
    </header>
  )
}