import { memberships, speakingActivities, speakingStatusLabels } from '../data.js'
import Icon from './Icon.jsx'

const NOT_RECORDED = 'Not yet recorded'

function Field({ label, value }) {
  return (
    <div className="activity-field">
      <dt>{label}</dt>
      <dd className={value ? undefined : 'is-missing'}>{value || NOT_RECORDED}</dd>
    </div>
  )
}

export default function SpeakingActivities() {
  return (
    <section className="section" aria-labelledby="activities-title">
      <div className="shell">
        <header className="section-heading reveal">
          <p className="eyebrow"><span aria-hidden="true">//</span> {speakingActivities.length} activities</p>
          <h2 id="activities-title">Speaking, reviewing &amp; judging</h2>
          <p className="section-intro">Each entry lists what is on record. Missing details are marked rather than filled in, and entries stay “Evidence link pending” until a direct link is added.</p>
        </header>
        <div className="card-grid card-grid--2">
          {speakingActivities.map((entry) => (
            <article className="card activity-card reveal" key={entry.id}>
              <div className="card-top">
                <span className="badge">{entry.kind}</span>
                <span className={`status-badge status-badge--${entry.status}`}>{speakingStatusLabels[entry.status]}</span>
              </div>
              <h3>{entry.event}</h3>
              {entry.recognition && <p className="recognition"><Icon name="award" size={16} /> {entry.recognition}</p>}
              <dl className="activity-fields">
                <Field label="Date" value={entry.date} />
                <Field label="Role" value={entry.role} />
                <Field label="Activity" value={entry.activity} />
                <Field label="Title" value={entry.title} />
              </dl>
              {entry.relatedWork?.length > 0 && (
                <div className="related-work">
                  <p>Related research record{entry.relatedWork.length > 1 ? 's' : ''}</p>
                  <ul>{entry.relatedWork.map((title) => <li key={title}>{title}</li>)}</ul>
                </div>
              )}
              {entry.evidence && (
                <div className="card-foot">
                  <a className="arrow-link" href={entry.evidence} target="_blank" rel="noreferrer">Evidence <Icon name="external" size={14} /></a>
                </div>
              )}
            </article>
          ))}
        </div>
        <ul className="membership-row reveal" aria-label="Professional memberships">
          {memberships.map(({ name, tier }) => (
            <li key={name}><strong>{name}</strong> <span>{tier}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
