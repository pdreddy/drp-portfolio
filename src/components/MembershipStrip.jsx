import { memberships } from '../data.js'
export default function MembershipStrip(){return <section className="membership-strip" aria-labelledby="memberships-title"><div className="shell"><p className="eyebrow" id="memberships-title">Professional Memberships</p><div>{memberships.map(m=><p key={m.name}><strong>{m.name}</strong><span>{m.tier}</span></p>)}</div></div></section>}
