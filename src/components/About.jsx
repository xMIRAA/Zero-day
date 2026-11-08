import { Flag, Globe2, ShieldCheck, Users } from 'lucide-react'

const eventFacts = [
  { icon: Users, value: '500+', label: 'Participants' },
  { icon: Flag, value: '24 HRS', label: 'Of competition' },
  { icon: ShieldCheck, value: '5', label: 'Challenge tracks' },
  { icon: Globe2, value: '100%', label: 'Online event' },
]

function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-heading">
        <p className="section-kicker">01 / THE MISSION</p>
        <h2>Security is not a spectator sport.</h2>
      </div>
      <div className="about-content">
        <div className="about-intro">
          <p>
            ZERO DAY 2026 is a fictional, demonstration CTF hackathon built for
            people who want to understand how the digital world works — and how
            to protect it.
          </p>
          <p className="muted-copy">
            Work solo or assemble your best team. Follow the evidence, think
            laterally, and turn every vulnerability into a lesson.
          </p>
        </div>
        <div className="about-facts">
          {eventFacts.map(({ icon: Icon, value, label }) => (
            <div className="fact-card" key={label}>
              <Icon size={20} />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
