import { Crown, Medal, Trophy } from 'lucide-react'

const prizes = [
  {
    place: '01',
    label: 'FIRST ACCESS',
    amount: 'LKR 150,000',
    icon: Trophy,
    accent: 'gold',
  },
  {
    place: '02',
    label: 'SECOND SIGNAL',
    amount: 'LKR 75,000',
    icon: Medal,
    accent: 'silver',
  },
  {
    place: '03',
    label: 'THIRD VECTOR',
    amount: 'LKR 40,000',
    icon: Crown,
    accent: 'bronze',
  },
]

function Prizes() {
  return (
    <section className="content-section prizes-section" id="prizes">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-kicker">05 / THE PAYLOAD</p>
          <h2>Earn your place<br />in the logs.</h2>
        </div>
        <p className="section-summary">Recognition, bragging rights, and a prize pool worth chasing.</p>
      </div>

      <div className="prize-grid">
        {prizes.map(({ place, label, amount, icon: Icon, accent }) => (
          <article className={`prize-card prize-${accent}`} key={place}>
            <div className="prize-topline">
              <span>RANK // {place}</span>
              <Icon size={26} strokeWidth={1.5} />
            </div>
            <p>{label}</p>
            <strong>{amount}</strong>
            <span className="prize-caption">CASH PRIZE / LKR</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Prizes
