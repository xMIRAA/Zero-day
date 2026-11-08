import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar({ onRegister }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Zero Day home">
        <span className="brand-mark">ZD</span>
        <span>
          <strong>ZERO DAY</strong>
          <small>CTF HACKATHON 2026</small>
        </span>
      </a>
      <a className="organization-logo-link" href="#footer" onClick={closeMenu}>
        <img
          className="organization-logo organization-logo-nav"
          src="/assets/branding/ieee-cs-ucsc-white.png"
          alt="IEEE Computer Society, University of Colombo School of Computing Student Branch Chapter"
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        id="main-navigation"
        className={`main-navigation ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="nav-links">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <button className="button button-small button-outline" type="button" onClick={() => { closeMenu(); onRegister() }}>
          Register
        </button>
      </nav>
    </header>
  )
}

export default Navbar
