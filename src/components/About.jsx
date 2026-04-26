import { motion } from 'framer-motion'

/* 🔥 TAGS (FULL WIDTH CLOUD) */
const TAGS = [
  'Agentic AI',
  'Zero Trust Architecture',
  'Healthcare AI Security',
  'Federated Learning',
  'Behavioral Biometrics',
  'Cloud-Native Security',
  'Microservices Security',
  'Privacy-Preserving ML',
  'Explainable AI (XAI)',
  'DevSecOps',
  'Continuous Authentication',
  'Cyber Threat Intelligence',
]

/* 📊 METRICS */
const METRICS = [
  ['16+','Years Experience'],
  ['9+','Enterprise Systems'],
  ['12+','Publications'],
  ['500K+','Users Impacted'],
]

const stagger = { animate: { transition: { staggerChildren: 0.08 } } }

const fadeUp = {
  initial: { opacity:0,y:22 },
  animate: { opacity:1,y:0,transition:{ duration:0.55 } },
}

export default function About() {
  return (
      <section
          id="about"
          style={{
            background:'var(--bg2)',
            padding:'clamp(3.25rem,7vw,5.5rem) clamp(1.5rem,8vw,7rem)'
          }}
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <p className="text-eyebrow mb-4">Who I Am</p>

          {/* TEXT SECTION */}
          <div className="max-w-3xl">
            <h2
                className="text-section mb-6"
                style={{ color:'var(--text)' }}
            >
              Securing the Future of <br />
              <span className="gradient-text">
              Healthcare with AI & Zero Trust
            </span>
            </h2>

            <div
                style={{
                  color:'var(--text2)',
                  fontFamily:'var(--font-body)',
                  fontSize:'1.05rem',
                  lineHeight:1.8
                }}
            >

              <p>
              <span style={{ color:'var(--text)', fontWeight:600 }}>
                Damodhara Reddy Palavali
              </span>{' '}
                is a{' '}
                <span style={{ fontWeight:600 }}>
                Healthcare AI and Cloud Cybersecurity expert
              </span>{' '}
                with over{' '}
                <span style={{ color:'var(--text)', fontWeight:600 }}>
                16 years of experience
              </span>{' '}
                designing and securing large-scale enterprise and government systems.
              </p>

              <p style={{ marginTop:'1rem' }}>
                His work focuses on advancing{' '}
                <span style={{ color:'var(--accent)', fontWeight:600 }}>
                Zero Trust architectures
              </span>{' '}
                using{' '}
                <span style={{ color:'#a78bfa', fontWeight:600 }}>
                Agentic AI
              </span>{' '}
                to build intelligent, autonomous security systems for modern cloud environments.
              </p>

              <p style={{ marginTop:'1rem' }}>
                He has contributed to large-scale healthcare platforms including{' '}
                <strong>Medicaid Management Information Systems (MMIS)</strong>,
                impacting{' '}
                <span style={{ color:'#34d399', fontWeight:600 }}>
                hundreds of thousands of users
              </span>{' '}
                across the United States.
              </p>

              <p style={{ marginTop:'1rem' }}>
                His contributions span{' '}
                <strong>AI-driven threat detection</strong>,{' '}
                <strong>behavioral biometrics</strong>,{' '}
                <strong>continuous authentication</strong>, and{' '}
                <strong>privacy-preserving machine learning</strong>.
              </p>

              <p style={{ marginTop:'1rem' }}>
                He is an active contributor to{' '}
                <span style={{ color:'var(--text)', fontWeight:600 }}>
                IEEE conferences and global research communities
              </span>, with{' '}
                <span style={{ fontWeight:600 }}>
                12+ peer-reviewed publications
              </span>{' '}
                focused on scalable and secure AI systems.
              </p>

            </div>
          </div>

          {/* 🔥 FULL WIDTH TAG CLOUD */}
          <motion.div
              className="mt-12"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once:true }}
          >

            <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text3)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '14px'
                }}
            >
              Expertise
            </p>

            <div className="flex flex-wrap gap-3">
              {TAGS.map(t => (
                  <motion.span
                      key={t}
                      variants={fadeUp}
                      className="px-4 py-2 rounded-xl text-xs font-medium border"
                      style={{
                        fontFamily:'var(--font-mono)',
                        background:'rgba(56,189,248,0.05)',
                        borderColor:'rgba(56,189,248,0.18)',
                        color:'var(--accent)'
                      }}
                      whileHover={{
                        y:-3,
                        background:'rgba(56,189,248,0.12)',
                        borderColor:'rgba(56,189,248,0.4)'
                      }}
                  >
                    {t}
                  </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 📊 METRICS */}
          <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once:true }}
          >
            {METRICS.map(([num, label]) => (
                <motion.div
                    key={label}
                    variants={fadeUp}
                    className="card-glow p-6 rounded-xl border"
                    style={{
                      border:'1px solid var(--border)',
                      background:'var(--surface)'
                    }}
                    whileHover={{
                      y:-5,
                      boxShadow:'0 20px 48px rgba(56,189,248,0.12)'
                    }}
                >
                  <div
                      style={{
                        fontFamily:'var(--font-display)',
                        fontSize:'2.4rem',
                        fontWeight:700,
                        color:'var(--accent)'
                      }}
                  >
                    {num}
                  </div>

                  <div
                      style={{
                        fontFamily:'var(--font-mono)',
                        fontSize:'0.7rem',
                        color:'var(--text3)',
                        letterSpacing:'0.1em',
                        marginTop:'6px'
                      }}
                  >
                    {label}
                  </div>
                </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
  )
}