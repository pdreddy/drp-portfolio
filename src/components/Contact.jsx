import { motion } from 'framer-motion'

const LINKS = [
  { icon:'📧', label:'Email',         value:'damodhara.palavali@gmail.com',      href:'mailto:damodhara.palavali@gmail.com', color:'#38bdf8' },
  { icon:'💼', label:'LinkedIn',      value:'linkedin.com/in/damwi',             href:'https://www.linkedin.com/in/damwi/',  color:'#60a5fa' },
  { icon:'🎓', label:'Google Scholar',value:'scholar.google.com',                href:'https://scholar.google.com/',         color:'#fb923c' },
  { icon:'🔬', label:'ResearchGate',  value:'researchgate.net/profile/Palavali', href:'https://www.researchgate.net/',       color:'#34d399' },
  { icon:'🔷', label:'IEEE Profile',  value:'ieeexplore.ieee.org',               href:'https://ieeexplore.ieee.org/',        color:'#a78bfa' },
]

const stagger = { hidden:{}, show:{ transition:{ staggerChildren:0.07 } } }
const slideIn = {
  hidden: { opacity:0,x:-16 },
  show:   { opacity:1,x:0,transition:{ duration:0.45,ease:'easeOut' } },
}

export default function Contact() {
  return (
    <section id="contact" style={{ background:'var(--bg)',padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,7rem)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-eyebrow mb-4 reveal">Get in Touch</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <h2 className="text-section reveal mb-4" style={{ color:'var(--text)' }}>
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="reveal reveal-d1 mb-10"
              style={{ color:'var(--text2)',fontSize:'1.05rem',lineHeight:1.75,maxWidth:'480px' }}>
              Open to research collaborations, speaking engagements, advisory roles,
              and discussions about AI security and zero trust architecture.
            </p>

            <motion.div className="flex flex-col gap-3"
              variants={stagger} initial="hidden" whileInView="show"
              viewport={{ once:true,amount:0.1 }}>
              {LINKS.map(l => (
                <motion.a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  variants={slideIn}
                  className="flex items-center gap-4 p-4 rounded-2xl border no-underline"
                  style={{ background:'var(--surface)',borderColor:'var(--border)',color:'inherit' }}
                  whileHover={{ x:6,borderColor:`${l.color}50`,background:`${l.color}08`,transition:{duration:0.2} }}
                  whileTap={{ scale:0.99 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background:`${l.color}12`,border:`1px solid ${l.color}30` }}>
                    {l.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text3)',
                                  letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'2px' }}>
                      {l.label}
                    </div>
                    <div style={{ fontFamily:'var(--font-body)',fontSize:'0.88rem',fontWeight:500,
                                  color:'var(--text)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>
                      {l.value}
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                    style={{ color:'var(--text3)',flexShrink:0 }}>
                    <path d="M3 11L11 3M11 3H6M11 3v5" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: CTA card */}
          <motion.div className="rounded-3xl p-8 border relative overflow-hidden"
            style={{ background:'linear-gradient(135deg,rgba(56,189,248,0.05),rgba(167,139,250,0.05) 50%,rgba(52,211,153,0.05))',
                     borderColor:'var(--border2)' }}
            initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true,amount:0.2 }}
            transition={{ duration:0.6,ease:[0.25,0.46,0.45,0.94] }}
            whileHover={{ boxShadow:'0 24px 64px rgba(56,189,248,0.1)',transition:{duration:0.3} }}>
            <div className="pointer-events-none absolute"
              style={{ top:-40,right:-40,width:180,height:180,borderRadius:'50%',
                       background:'radial-gradient(circle,rgba(56,189,248,0.12),transparent 70%)' }} />
            <div className="pointer-events-none absolute"
              style={{ bottom:-30,left:-30,width:140,height:140,borderRadius:'50%',
                       background:'radial-gradient(circle,rgba(167,139,250,0.1),transparent 70%)' }} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background:'rgba(56,189,248,0.1)',border:'1px solid rgba(56,189,248,0.25)' }}>🤝</div>
              <h3 style={{ fontFamily:'var(--font-display)',fontSize:'1.6rem',fontWeight:700,
                           color:'var(--text)',letterSpacing:'-0.03em',lineHeight:1.2,marginBottom:'12px' }}>
                Advancing Secure<br />AI Systems
              </h3>
              <p style={{ color:'var(--text2)',fontSize:'0.92rem',lineHeight:1.75,marginBottom:'2rem' }}>
                With 16+ years securing government healthcare at scale, I bring deep expertise in AI-driven
                security architecture — from theoretical research to production deployments protecting millions.
              </p>
              <motion.a href="mailto:damodhara.palavali@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm no-underline"
                style={{ fontFamily:'var(--font-display)',background:'var(--accent)',color:'#050c18',
                         boxShadow:'0 0 24px rgba(56,189,248,0.3)',letterSpacing:'-0.01em' }}
                whileHover={{ y:-3,boxShadow:'0 0 44px rgba(56,189,248,0.5)',transition:{duration:0.2} }}
                whileTap={{ scale:0.97 }}>
                Send a Message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <div className="mt-6 p-4 rounded-xl border"
                style={{ background:'var(--surface)',borderColor:'var(--border)' }}>
                <p style={{ fontFamily:'var(--font-mono)',fontSize:'0.7rem',color:'var(--text3)',lineHeight:1.8 }}>
                  <span style={{ color:'var(--text2)',fontWeight:600 }}>Current focus: </span>
                  Agentic AI security frameworks for critical infrastructure &amp; AI-powered zero trust
                  for multi-state MMIS platforms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
