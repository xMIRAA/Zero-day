const sponsors = [
  { name: 'UCSC', detail: 'CYBER LAB' },
  { name: 'DIALOG', detail: 'DIGITAL PARTNER' },
  { name: 'FИTI', detail: 'INNOVATION LAB' },
  { name: 'virtusa', detail: 'TECH PARTNER' },
  { name: 'hSenid', detail: 'MOBILE SYSTEMS' },
  { name: 'GOOGLE', detail: 'CLOUD SUPPORT' },
]

function Sponsors() {
  return (
    <section className="content-section sponsors-section" id="sponsors">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-kicker">06 / THE NETWORK</p>
          <h2>Powered by<br />the curious.</h2>
        </div>
        <p className="section-summary">
          Placeholder identities for the teams helping make this demonstration event possible.
        </p>
      </div>
      <div className="sponsor-grid">
        {sponsors.map((sponsor) => (
          <div className="sponsor-card" key={sponsor.name}>
            <strong>{sponsor.name}</strong>
            <span>{sponsor.detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sponsors
