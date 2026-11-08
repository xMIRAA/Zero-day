import { Binary, KeyRound, Network, ScanSearch, Search } from 'lucide-react'

const challengeTracks = [
  {
    number: '01',
    icon: Search,
    title: 'Web Exploitation',
    description: 'Find the cracks in web applications before an attacker does.',
    skills: 'HTTP / XSS / SQL',
    accent: 'green',
  },
  {
    number: '02',
    icon: KeyRound,
    title: 'Cryptography',
    description: 'Decode the hidden message and break the strongest ciphers.',
    skills: 'CIPHERS / HASHES / RSA',
    accent: 'blue',
  },
  {
    number: '03',
    icon: ScanSearch,
    title: 'Digital Forensics',
    description: 'Reconstruct the incident from the artifacts left behind.',
    skills: 'PCAP / MEMORY / OSINT',
    accent: 'green',
  },
  {
    number: '04',
    icon: Binary,
    title: 'Reverse Engineering',
    description: 'Look beneath the surface and understand what the binary hides.',
    skills: 'ASSEMBLY / DEBUGGING / ELF',
    accent: 'blue',
  },
  {
    number: '05',
    icon: Network,
    title: 'Network Security',
    description: 'Trace the signal, map the threat, and secure the network.',
    skills: 'TCP/IP / TRAFFIC / IDS',
    accent: 'green',
  },
]

function Challenges() {
  return (
    <section className="content-section challenges-section" id="challenges">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-kicker">02 / SELECT YOUR VECTOR</p>
          <h2>Five ways in.</h2>
        </div>
        <p className="section-summary">
          Every track is a new attack surface. Choose your entry point and
          follow the signal to the flag.
        </p>
      </div>

      <div className="challenge-grid">
        {challengeTracks.map(({ number, icon: Icon, title, description, skills, accent }) => (
          <article className={`challenge-card challenge-${accent}`} key={title}>
            <div className="challenge-card-top">
              <span className="challenge-number">{number}</span>
              <Icon size={25} strokeWidth={1.5} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <span className="challenge-skills">{skills}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Challenges
