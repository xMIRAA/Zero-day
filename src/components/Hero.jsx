import { ArrowDownRight, ArrowRight, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'

const eventDate = new Date('2026-11-28T09:00:00')

function getTimeRemaining() {
  const difference = Math.max(eventDate.getTime() - Date.now(), 0)

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function Countdown() {
  const [time, setTime] = useState(getTimeRemaining)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const countdownItems = [
    { label: 'DAYS', value: time.days },
    { label: 'HRS', value: time.hours },
    { label: 'MIN', value: time.minutes },
    { label: 'SEC', value: time.seconds },
  ]

  return (
    <div className="countdown" aria-label="Time until the competition starts">
      {countdownItems.map((item) => (
        <div className="countdown-item" key={item.label}>
          <strong>{String(item.value).padStart(2, '0')}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function Hero({ onRegister }) {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-backdrop" aria-hidden="true"></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Terminal size={15} />
              <span>SYS://EVENT_STATUS = OPEN</span>
            </p>
            <h1>
              Break the code.
              <span>Defend the future.</span>
            </h1>
            <p className="hero-description">
              ZERO DAY is a hands-on capture the flag experience for curious minds
              ready to test the limits of security, creativity, and teamwork.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#challenges">
                Explore challenges <ArrowRight size={17} />
              </a>
              <button className="button button-ghost" type="button" onClick={onRegister}>
                Register now <ArrowDownRight size={17} />
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-label visual-label-top">ENCRYPTED // 01</div>
            <div className="hero-art">
              <div className="orbital-ring ring-one"></div>
              <div className="orbital-ring ring-two"></div>
              <div className="shield">
                <span>ZD</span>
              </div>
              <span className="visual-node node-one"></span>
              <span className="visual-node node-two"></span>
              <span className="visual-node node-three"></span>
            </div>
            <div className="visual-label visual-label-bottom">SECURE THE SURFACE</div>
          </div>
        </div>

        <div className="hero-footer">
          <div className="countdown-label">
            <span className="status-dot"></span>
            <span>COUNTDOWN TO LAUNCH</span>
          </div>
          <Countdown />
          <p className="hero-note">28 NOV 2026 / 09:00 UTC</p>
        </div>
      </section>
    </main>
  )
}

export default Hero
