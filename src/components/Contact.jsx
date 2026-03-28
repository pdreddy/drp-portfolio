import { motion } from 'framer-motion'

const LINKS = [
  {
    label: 'Email',
    value: 'damodharapalavali@gmail.com',
    showValue: true,
    href: 'mailto:damodharapalavali@gmail.com',
    color: '#ea4335',
    bg: 'rgba(234,67,53,0.08)',
    border: 'rgba(234,67,53,0.22)',
    icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" fill="#EA4335" fillOpacity="0.15" stroke="#EA4335" strokeWidth="1.5"/>
          <path d="M2 6L12 13L22 6" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'View Profile',
    showValue: false,
    href: 'https://www.linkedin.com/in/damodharap/',
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.08)',
    border: 'rgba(10,102,194,0.22)',
    icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <rect width="24" height="24" rx="4" fill="#0A66C2" fillOpacity="0.15"/>
          <path d="M7.5 9H5V19H7.5V9Z" fill="#0A66C2"/>
          <circle cx="6.25" cy="6.25" r="1.5" fill="#0A66C2"/>
          <path d="M19 19H16.5V14C16.5 12.9 15.6 12 14.5 12C13.4 12 12.5 12.9 12.5 14V19H10V9H12.5V10.4C13.1 9.5 14.2 9 15.3 9C17.4 9 19 10.6 19 12.7V19Z" fill="#0A66C2"/>
        </svg>
    ),
  },
  {
    label: 'Google Scholar',
    value: 'View Publications',
    showValue: false,
    href: 'https://scholar.google.com/citations?user=gbBDbl4AAAAJ&hl=en&authuser=2',
    color: '#4285f4',
    bg: 'rgba(66,133,244,0.08)',
    border: 'rgba(66,133,244,0.22)',
    icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <rect width="24" height="24" rx="4" fill="#4285F4" fillOpacity="0.12"/>
          <text x="12" y="16.5" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="bold" fill="#4285F4">S</text>
          <path d="M6 8L12 4L18 8V10H6V8Z" fill="#4285F4" fillOpacity="0.7"/>
          <circle cx="12" cy="15" r="3.5" fill="#4285F4" fillOpacity="0.0" stroke="#4285F4" strokeWidth="1.4"/>
          <path d="M12 11.5V18.5M8.5 15H15.5" stroke="#4285F4" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
    ),
  },
  {
    label: 'ResearchGate',
    value: 'View Research',
    showValue: false,
    href: 'https://www.researchgate.net/profile/Damodhara-Reddy-Palavali/research',
    color: '#00d0af',
    bg: 'rgba(0,208,175,0.08)',
    border: 'rgba(0,208,175,0.22)',
    icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <rect width="24" height="24" rx="4" fill="#00D0AF" fillOpacity="0.12"/>
          <text x="5" y="17" fontFamily="Georgia, serif" fontSize="14" fontWeight="900" fill="#00D0AF">R</text>
          <text x="13" y="17" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="#00D0AF" fillOpacity="0.7">G</text>
        </svg>
    ),
  },
  {
    label: 'IEEE Xplore',
    value: 'View Author Page',
    showValue: false,
    href: 'https://ieeexplore.ieee.org/author/315152596090113',
    color: '#00629b',
    bg: 'rgba(0,98,155,0.08)',
    border: 'rgba(0,98,155,0.22)',
    icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <rect width="24" height="24" rx="4" fill="#00629B" fillOpacity="0.12"/>
          <text x="12" y="15.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="900" fill="#00629B" letterSpacing="0.5">IEEE</text>
          <rect x="4" y="17" width="16" height="1.5" rx="0.75" fill="#00629B" fillOpacity="0.5"/>
          <rect x="4" y="5.5" width="16" height="1.5" rx="0.75" fill="#00629B" fillOpacity="0.5"/>
        </svg>
    ),
  },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const slideIn = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const pulseRing = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.1, 0.4],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Contact() {
  return (
      <section
          id="contact"
          style={{
            background: 'var(--bg)',
            padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,7rem)',
            position: 'relative',
            overflow: 'hidden',
          }}
      >
        {/* Ambient background glows */}
        <div
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 60% 50% at 15% 80%, rgba(56,189,248,0.045) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 85% 20%, rgba(167,139,250,0.04) 0%, transparent 70%)',
            }}
        />

        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-eyebrow mb-4 reveal">Get in Touch</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ── LEFT COLUMN ── */}
            <div>
              <h2 className="text-section reveal mb-4" style={{ color: 'var(--text)' }}>
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p
                  className="reveal reveal-d1 mb-10"
                  style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '480px' }}
              >
                Open to research collaborations, speaking engagements, advisory roles,
                and discussions about AI security and zero trust architecture.
              </p>

              <motion.div
                  className="flex flex-col gap-3"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
              >
                {LINKS.map(l => (
                    <motion.a
                        key={l.label}
                        href={l.href}
                        target={l.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        variants={slideIn}
                        className="flex items-center gap-4 no-underline"
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: '16px',
                          padding: '14px 18px',
                          color: 'inherit',
                          transition: 'border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s',
                        }}
                        whileHover={{
                          x: 5,
                          borderColor: l.border,
                          background: l.bg,
                          boxShadow: `0 4px 24px ${l.color}18`,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.985 }}
                    >
                      {/* Icon bubble */}
                      <div
                          style={{
                            width: 44, height: 44, borderRadius: 12,
                            background: l.bg,
                            border: `1.5px solid ${l.border}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}
                      >
                        {l.icon}
                      </div>

                      {/* Text */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                            style={{
                              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                              color: l.color, letterSpacing: '0.13em',
                              textTransform: 'uppercase', marginBottom: 3, fontWeight: 600,
                            }}
                        >
                          {l.label}
                        </div>
                        {l.showValue ? (
                            <div
                                style={{
                                  fontFamily: 'var(--font-body)', fontSize: '0.86rem',
                                  fontWeight: 500, color: 'var(--text)',
                                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                }}
                            >
                              {l.value}
                            </div>
                        ) : (
                            <div
                                style={{
                                  fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                                  color: 'var(--text3)', letterSpacing: '0.05em',
                                }}
                            >
                              Click to open ↗
                            </div>
                        )}
                      </div>

                      {/* Arrow */}
                      <svg
                          width="13" height="13" viewBox="0 0 14 14" fill="none"
                          style={{ color: 'var(--text3)', flexShrink: 0, opacity: 0.6 }}
                      >
                        <path
                            d="M3 11L11 3M11 3H6M11 3v5"
                            stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN — CTA card ── */}
            <motion.div
                className="rounded-3xl border relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg,rgba(56,189,248,0.05),rgba(167,139,250,0.05) 50%,rgba(52,211,153,0.05))',
                  borderColor: 'var(--border2)',
                  padding: '2.25rem',
                }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ boxShadow: '0 28px 72px rgba(56,189,248,0.1)', transition: { duration: 0.3 } }}
            >
              {/* Decorative glows */}
              <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.13),transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle,rgba(167,139,250,0.1),transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Animated availability badge */}
                <div
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
                      borderRadius: 999, padding: '5px 12px', marginBottom: '1.5rem',
                    }}
                >
                <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
                  <motion.span
                      style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        background: '#34d399', display: 'block',
                      }}
                      variants={pulseRing}
                      animate="animate"
                  />
                  <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'block' }} />
                </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#34d399', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Available for Collaboration
                </span>
                </div>

                <h3
                    style={{
                      fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 700,
                      color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 12,
                    }}
                >
                  Advancing Secure<br />AI Systems
                </h3>

                <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                  With 16+ years securing government and enterprise systems at scale, I bring deep expertise
                  in AI-driven security architecture — from theoretical research to production deployments
                  protecting millions.
                </p>

                {/* Expertise chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.75rem' }}>
                  {['Agentic AI Security', 'Zero Trust', 'Behavioral Biometrics', 'Federated Learning', 'Healthcare AI'].map(tag => (
                      <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                            color: 'var(--text3)', background: 'var(--surface)',
                            border: '1px solid var(--border)', borderRadius: 999,
                            padding: '4px 10px', letterSpacing: '0.05em',
                          }}
                      >
                    {tag}
                  </span>
                  ))}
                </div>

                <motion.a
                    href="mailto:damodharapalavali@gmail.com"
                    className="inline-flex items-center gap-2 no-underline"
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem',
                      background: 'var(--accent)', color: '#050c18',
                      padding: '12px 24px', borderRadius: 12,
                      boxShadow: '0 0 28px rgba(56,189,248,0.3)', letterSpacing: '-0.01em',
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                    }}
                    whileHover={{ y: -3, boxShadow: '0 0 48px rgba(56,189,248,0.55)', transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.97 }}
                >
                  Send a Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>

                {/* Current focus strip */}
                <div
                    style={{
                      marginTop: '1.5rem', padding: '14px 16px', borderRadius: 12,
                      background: 'var(--surface)', border: '1px solid var(--border)',
                    }}
                >
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text3)', lineHeight: 1.85, margin: 0 }}>
                    <span style={{ color: 'var(--text2)', fontWeight: 600 }}>Current focus: </span>
                    Agentic AI security frameworks for critical infrastructure &amp; AI-powered zero trust
                    for multi-state MMIS platforms.
                  </p>
                </div>

                {/* Quick-links row */}
                <div style={{ display: 'flex', gap: 10, marginTop: '1.25rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/damodharap/', color: '#0a66c2' },
                    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=gbBDbl4AAAAJ&hl=en&authuser=2', color: '#4285f4' },
                    { label: 'IEEE', href: 'https://ieeexplore.ieee.org/author/315152596090113', color: '#00629b' },
                  ].map(q => (
                      <motion.a
                          key={q.label}
                          href={q.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600,
                            color: q.color, letterSpacing: '0.08em', textTransform: 'uppercase',
                            background: `${q.color}10`, border: `1px solid ${q.color}30`,
                            borderRadius: 8, padding: '6px 12px', textDecoration: 'none',
                          }}
                          whileHover={{ background: `${q.color}20`, borderColor: `${q.color}60`, y: -1, transition: { duration: 0.15 } }}
                      >
                        {q.label} ↗
                      </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
  )
}