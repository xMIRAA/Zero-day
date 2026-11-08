import { Flag, Laptop, UsersRound } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UsersRound,
    title: 'Build your squad',
    description: 'Register solo or team up with up to four curious problem-solvers.',
  },
  {
    number: '02',
    icon: Laptop,
    title: 'Take the challenge',
    description: 'Solve realistic security puzzles across five different attack surfaces.',
  },
  {
    number: '03',
    icon: Flag,
    title: 'Capture the flag',
    description: 'Submit your flags, climb the live scoreboard, and defend your lead.',
  },
]

function HowItWorks() {
  return (
    <section className="content-section process-section" id="how-it-works">
      <div className="section-heading">
        <p className="section-kicker">03 / THE PROTOCOL</p>
        <h2>Three steps.<br />One objective.</h2>
      </div>
      <div className="process-grid">
        {steps.map(({ number, icon: Icon, title, description }) => (
          <article className="process-step" key={number}>
            <div className="process-step-top">
              <span>{number}</span>
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
