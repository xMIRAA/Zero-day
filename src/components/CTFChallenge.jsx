import { AlertTriangle, CheckCircle2, LockKeyhole, Terminal, X } from 'lucide-react'
import { useState } from 'react'

const SECRET_FLAG = 'ZERO{defend_the_future}'

function CTFChallenge({ isOpen, onClose, onAccessGranted }) {
  const [flag, setFlag] = useState('')
  const [message, setMessage] = useState('')
  const [isGranted, setIsGranted] = useState(false)
  const [isClueVisible, setIsClueVisible] = useState(false)

  function checkFlag(event) {
    event.preventDefault()

    if (flag.trim() === SECRET_FLAG) {
      setIsGranted(true)
      setMessage('')
      onAccessGranted()
      return
    }

    setMessage('ACCESS DENIED // That flag does not match the signal.')
  }

  function closeChallenge() {
    setFlag('')
    setMessage('')
    setIsGranted(false)
    setIsClueVisible(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="protocol-backdrop" role="presentation" onMouseDown={closeChallenge}>
      <section
        className={`protocol-modal ${isGranted ? 'protocol-granted' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="protocol-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="protocol-close" type="button" onClick={closeChallenge} aria-label="Close protocol">
          <X size={18} />
        </button>
        <div className="protocol-header">
          <span><Terminal size={16} /> SECRET ACCESS PROTOCOL</span>
          <span>NODE: ZD-2026</span>
        </div>

        {!isGranted ? (
          <>
            <div className="protocol-terminal">
              <p><span className="terminal-green">system@zeroday</span>:~$ initiate_registration</p>
              <p className="terminal-muted">A hidden route protects the registration gateway.</p>
              <p className="terminal-muted">Hint: the signal is rotated, not broken.</p>
              <p className="terminal-code">MREB&#123;qrsraq_gur_shgher&#125;</p>
              <p><span className="terminal-green">system@zeroday</span>:~$ _</p>
            </div>
            <div className="protocol-clue">
              <button
                className="clue-button"
                type="button"
                onClick={() => setIsClueVisible(!isClueVisible)}
                aria-expanded={isClueVisible}
              >
                {isClueVisible ? 'Hide clue' : 'Reveal clue'}
              </button>
              {isClueVisible && (
                <p>
                  Decode the line above with <strong>ROT13</strong>: move every
                  letter 13 places through the alphabet. Keep the braces and
                  underscores unchanged.
                </p>
              )}
            </div>
            <form className="flag-form" onSubmit={checkFlag}>
              <label htmlFor="secret-flag">ENTER THE FLAG</label>
              <div className="flag-input-row">
                <input
                  id="secret-flag"
                  value={flag}
                  onChange={(event) => setFlag(event.target.value)}
                  placeholder="....{...}"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button className="button button-primary" type="submit">Submit</button>
              </div>
              {message && <p className="protocol-error"><AlertTriangle size={15} />{message}</p>}
            </form>
            <p className="protocol-disclaimer">
              <LockKeyhole size={14} /> Frontend demonstration only. This flag is not securely protected.
            </p>
          </>
        ) : (
          <div className="access-granted">
            <CheckCircle2 size={54} />
            <p className="access-label">ACCESS GRANTED</p>
            <h2>Welcome to the inside.</h2>
            <p>Your route is clear. Continue to the demonstration registration form.</p>
            <a className="button button-primary" href="#registration" onClick={closeChallenge}>
              Open registration
            </a>
          </div>
        )}
      </section>
    </div>
  )
}

export default CTFChallenge
