import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const questions = [
  {
    question: 'Who can participate?',
    answer: 'Anyone curious about cybersecurity can join. Students, developers, designers, and first-time CTF players are all welcome.',
  },
  {
    question: 'Can I participate as an individual?',
    answer: 'Yes. You can play solo or create a team of up to five participants before registration closes.',
  },
  {
    question: 'Do I need prior CTF experience?',
    answer: 'No. The challenge tracks include approachable entry points, and every challenge is designed to reward careful thinking and learning.',
  },
  {
    question: 'Is this a real competition?',
    answer: 'ZERO DAY 2026 is a fictional frontend demonstration event. The registration and secret protocol are interactive UI features only.',
  },
]

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0)

  function toggleQuestion(index) {
    setOpenQuestion(openQuestion === index ? -1 : index)
  }

  return (
    <section className="content-section faq-section" id="faq">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-kicker">07 / KNOWLEDGE BASE</p>
          <h2>Questions?<br />We anticipated them.</h2>
        </div>
        <p className="section-summary">Still curious? Open a channel and reach the event team.</p>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index

          return (
            <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
              <button
                className="faq-question"
                type="button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={isOpen}
              >
                <span>
                  <small>0{index + 1}</small>
                  {item.question}
                </span>
                <ChevronDown size={20} />
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
