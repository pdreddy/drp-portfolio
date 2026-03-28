import { motion } from 'framer-motion'
import { researchAreas } from '../data.js'

const stagger = { hidden:{}, show:{ transition:{ staggerChildren:0.09 } } }
const card = {
  hidden: { opacity:0,y:26 },
  show:   { opacity:1,y:0,transition:{ duration:0.55,ease:[0.25,0.46,0.45,0.94] } },
}

export default function Research() {
  return (
    <section id="research" style={{ background:'var(--bg)',padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,7rem)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-eyebrow mb-4 reveal">Focus Areas</p>
        <h2 className="text-section reveal mb-4" style={{ color:'var(--text)' }}>
          Research <span className="gradient-text">Domains</span>
        </h2>
        <p className="reveal reveal-d1 mb-12"
          style={{ color:'var(--text2)',fontSize:'1.05rem',maxWidth:'560px',lineHeight:1.7 }}>
          Advancing the frontier of AI-powered security and privacy in critical
          government and healthcare infrastructure.
        </p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger} initial="hidden" whileInView="show"
          viewport={{ once:true,amount:0.1 }}>
          {researchAreas.map((area, i) => (
            <motion.div key={i} variants={card}
              className="grad-border card-glow p-7"
              style={{ border:'1px solid var(--border)',position:'relative',overflow:'hidden' }}
              whileHover={{ y:-6,boxShadow:`0 20px 48px ${area.color}20`,
                            borderColor:`${area.color}40`,transition:{duration:0.22} }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background:`${area.color}15`,border:`1px solid ${area.color}35` }}>
                {area.icon}
              </div>
              <h3 className="text-card mb-3" style={{ color:'var(--text)',fontFamily:'var(--font-display)' }}>
                {area.title}
              </h3>
              <p style={{ color:'var(--text2)',fontSize:'0.875rem',lineHeight:1.7,fontFamily:'var(--font-body)' }}>
                {area.desc}
              </p>
              <div className="absolute bottom-5 right-5 w-2 h-2 rounded-full"
                style={{ background:area.color,opacity:0.5 }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
