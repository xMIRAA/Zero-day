import { Send } from 'lucide-react'
import { useState } from 'react'

function Registration({ isUnlocked, onOpenProtocol }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="content-section registration-section" id="registration">
      <div className="registration-panel">
        <div>
          <p className="section-kicker">08 / REGISTRATION NODE</p>
          <h2>Ready to enter<br />the arena?</h2>
          <p className="registration-copy">
            This is a demonstration form. No information is sent to a server or stored.
          </p>
        </div>
        {!isUnlocked ? (
          <div className="registration-locked">
            <p className="registration-lock-label">REGISTRATION LOCKED</p>
            <strong>Complete the Secret Access Protocol to continue.</strong>
            <p>The registration form is only available after the correct flag is submitted.</p>
            <button className="button button-outline" type="button" onClick={onOpenProtocol}>
              Initiate protocol
            </button>
          </div>
        ) : isSubmitted ? (
          <div className="registration-success">
            <Send size={22} />
            <strong>TRANSMISSION RECEIVED</strong>
            <p>Your demonstration registration has been recorded locally.</p>
          </div>
        ) : (
          <form className="registration-form" onSubmit={handleSubmit}>
            <label>
              <span>YOUR NAME</span>
              <input required type="text" placeholder="Ada Lovelace" />
            </label>
            <label>
              <span>EMAIL ADDRESS</span>
              <input required type="email" placeholder="you@example.com" />
            </label>
            <label>
              <span>TEAM NAME</span>
              <input required type="text" placeholder="Null Pointer" />
            </label>
            <button className="button button-primary" type="submit">Transmit registration <Send size={16} /></button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Registration
