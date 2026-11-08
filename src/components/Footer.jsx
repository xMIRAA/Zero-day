import { BriefcaseBusiness, ExternalLink, Mail, MessageCircle } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <a className="footer-brand" href="#home">ZERO DAY<span>2026</span></a>
          <p>Break the Code. Defend the Future.</p>
        </div>
        <div className="footer-organization" id="footer">
          <span className="footer-label">PRESENTED BY</span>
          <img
            className="organization-logo organization-logo-footer"
            src="/assets/branding/ieee-cs-ucsc-white.png"
            alt="IEEE Computer Society, University of Colombo School of Computing Student Branch Chapter"
          />
        </div>
        <div className="footer-contact">
          <span className="footer-label">OPEN CHANNEL</span>
          <a href="mailto:hello@zeroday.example">hello@zeroday.example</a>
          <span>Colombo / Sri Lanka</span>
        </div>
        <div className="social-links">
          <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /></a>
          <a href="https://discord.com" aria-label="Discord" target="_blank" rel="noreferrer"><MessageCircle size={18} /></a>
          <a href="mailto:hello@zeroday.example" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ZERO DAY / DEMONSTRATION EVENT</span>
        <span>NO SYSTEM IS UNBREAKABLE</span>
      </div>
    </footer>
  )
}

export default Footer
