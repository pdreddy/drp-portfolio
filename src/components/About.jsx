import { motion } from 'framer-motion'

const TAGS = [
  'Artificial Intelligence in Cybersecurity',
  'Agentic AI',
  'Zero Trust Architecture',
  'Behavioral Biometrics',
  'Federated Learning',
  'Privacy-Preserving Machine Learning',
  'AI-Driven Threat Detection',
  'Cloud-Native Security',
  'Microservices Security',
  'Healthcare Data Security',
  'Explainable AI (XAI)',
  'DevSecOps','Continuous Authentication',
  'Anomaly Detection Systems',
  'Cyber Threat Intelligence',
  'Secure AI Systems',
  'Identity and Access Management (IAM)','Distributed Systems Security',
  'Autonomous Security Systems',
  'AI Security Governance',
  'Federated AI Systems',
  'Deep Learning for Cybersecurity',
  'Trustworthy AI',
]

const METRICS = [
  ['16+','Years in Software Engineering'],
  ['9+','Large-Scale Systems'],
  ['8+','Peer-Reviewed Publications'],
  ['500K+','Users Impacted'],
]
const stagger = { animate: { transition: { staggerChildren: 0.08 } } }
const fadeUp = {
  initial: { opacity:0,y:22 },
  animate: { opacity:1,y:0,transition:{ duration:0.55,ease:[0.25,0.46,0.45,0.94] } },
}

export default function About() {
  return (
    <section id="about" style={{ background:'var(--bg2)',padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,7rem)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-eyebrow mb-4 reveal">Who I Am</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <h2 className="text-section reveal mb-6" style={{ color:'var(--text)' }}>
              Securing the Future of<br />
              <span className="gradient-text">Healthcare with AI</span>
            </h2>
            <div className="reveal reveal-d1 space-y-4"
                 style={{ color:'var(--text2)',fontFamily:'var(--font-body)',fontSize:'1.02rem',lineHeight:1.75 }}>

              <p>
                Damodhara Reddy Palavali is a Software Engineer and IEEE Senior Member with 16+ years of experience in
                cloud-native architectures, microservices, and secure large-scale enterprise and government systems.

                His research focuses on <strong>Artificial Intelligence in Cybersecurity</strong>,
                <strong>Zero Trust Architecture</strong>, <strong>Federated Learning</strong>,
                <strong>Agentic AI Systems</strong>, and <strong>Privacy-Preserving Machine Learning</strong>.

                He has contributed to large-scale healthcare and distributed systems, including Medicaid Management Information Systems (MMIS),
                impacting millions of users across the United States.

                His recent work explores <strong>AI-driven threat detection</strong>,
                <strong>behavioral biometrics for continuous authentication</strong>,
                and <strong>autonomous security frameworks for cloud-native environments</strong>.

                He is an active contributor to IEEE conferences and research communities, focusing on scalable, secure, and intelligent systems.
              </p>
            </div>

            {/* Tags */}
            <motion.div className="flex flex-wrap gap-2 mt-8"
              variants={stagger} initial="initial" whileInView="animate"
              viewport={{ once:true,amount:0.2 }}>
              {TAGS.map(t => (
                <motion.span key={t} variants={fadeUp}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium border"
                  style={{ fontFamily:'var(--font-mono)',background:'rgba(56,189,248,0.05)',
                           borderColor:'rgba(56,189,248,0.18)',color:'var(--accent)',letterSpacing:'0.04em' }}
                  whileHover={{ y:-2,background:'rgba(56,189,248,0.12)',borderColor:'rgba(56,189,248,0.4)',
                                transition:{duration:0.15} }}>
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: metric cards */}
          <motion.div className="grid grid-cols-2 gap-4"
            variants={stagger} initial="initial" whileInView="animate"
            viewport={{ once:true,amount:0.2 }}>
            {METRICS.map(([num, label]) => (
              <motion.div key={label} variants={fadeUp}
                className="grad-border card-glow p-6"
                style={{ border:'1px solid var(--border)' }}
                whileHover={{ y:-5,boxShadow:'0 20px 48px rgba(56,189,248,0.12)',transition:{duration:0.2} }}>
                <div className="gradient-text mb-1"
                  style={{ fontFamily:'var(--font-display)',fontSize:'2.8rem',fontWeight:700,
                           lineHeight:1,letterSpacing:'-0.04em' }}>
                  {num}
                </div>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'0.72rem',color:'var(--text3)',
                              letterSpacing:'0.1em',textTransform:'uppercase',marginTop:'6px' }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
