const timelineEvents = [
  {
    date: '01 OCT 2026',
    title: 'Registration opens',
    description: 'Create your team profile and receive your event briefing.',
    status: 'OPEN',
  },
  {
    date: '20 NOV 2026',
    title: 'Registration closes',
    description: 'Final call for squads before the challenge environment is locked.',
    status: 'UPCOMING',
  },
  {
    date: '28 NOV 2026',
    title: 'Competition day',
    description: 'Twenty-four hours of flags, clues, collaboration, and breakthroughs.',
    status: 'UPCOMING',
  },
  {
    date: '29 NOV 2026',
    title: 'Award ceremony',
    description: 'The scoreboard closes and we celebrate the teams who made the impact.',
    status: 'UPCOMING',
  },
]

function Timeline() {
  return (
    <section className="content-section timeline-section" id="timeline">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-kicker">04 / MISSION LOG</p>
          <h2>Mark your calendar.</h2>
        </div>
        <p className="section-summary">All dates are fictional and presented for this demonstration event.</p>
      </div>

      <div className="timeline-list">
        {timelineEvents.map((event, index) => (
          <article className="timeline-item" key={event.title}>
            <span className="timeline-index">0{index + 1}</span>
            <time>{event.date}</time>
            <div className="timeline-copy">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
            <span className={`timeline-status ${event.status === 'OPEN' ? 'is-open' : ''}`}>
              {event.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Timeline
