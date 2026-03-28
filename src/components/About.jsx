import { motion } from 'framer-motion'

const TAGS = [
  'Agentic AI','Zero Trust','Behavioral Biometrics','Federated Learning',
  'MMIS Systems','Cloud-Native','Microservices','SSA / Login.gov',
  'Healthcare IT','CNN-LSTM','FedRAMP','DevSecOps',
]

const METRICS = [
  ['16+','Years Experience'],['9+','MMIS Systems'],
  ['8+','Publications'],['500K+','Users Impacted'],
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
                With 16+ years of experience building mission-critical government systems, I specialize in the intersection of
                artificial intelligence and cybersecurity — engineering intelligent frameworks that protect sensitive data at
                scale while enabling secure, scalable innovation.
              </p>

              <p>
                I have implemented secure authentication and federated identity systems across large-scale enterprise platforms,
                deployed Zero Trust architectures across{' '}
                <strong style={{ color:'var(--text)' }}>multi-state healthcare systems</strong>, and engineered advanced behavioral
                biometric solutions achieving{' '}
                <strong style={{ color:'var(--accent)' }}>99.5% authentication accuracy</strong>.
              </p>

              <p>
                My research focuses on agentic AI, federated learning, and privacy-preserving machine learning — designing adaptive,
                autonomous security systems that strengthen modern healthcare and cloud-native ecosystems.
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
