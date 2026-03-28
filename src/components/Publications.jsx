import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { publications } from '../data.js'

const stagger = { hidden:{}, show:{ transition:{ staggerChildren:0.07 } } }
const item = {
  hidden: { opacity:0,y:20 },
  show:   { opacity:1,y:0,transition:{ duration:0.5,ease:[0.25,0.46,0.45,0.94] } },
}

const PUB_LINK_COLORS = {
  'IEEE Xplore':'#60a5fa', 'ResearchGate':'#34d399',
  'Google Scholar':'#fb923c', 'PDF':'#a78bfa',
}

function PubLinks({ pub }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {Object.entries(PUB_LINK_COLORS).map(([label, color]) => {
        const href = { 'IEEE Xplore':pub.ieee,'ResearchGate':pub.researchgate,
                       'Google Scholar':pub.scholar,'PDF':pub.pdf }[label]
        return (
          <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border no-underline"
            style={{ fontFamily:'var(--font-mono)',color,borderColor:`${color}30`,
                     background:`${color}08`,letterSpacing:'0.05em' }}
            whileHover={{ y:-2,background:`${color}18`,borderColor:`${color}55`,transition:{duration:0.15} }}
            whileTap={{ scale:0.97 }}>
            ↗ {label}
          </motion.a>
        )
      })}
    </div>
  )
}

export default function Publications() {
  const navigate = useNavigate()

  return (
    <section id="publications" style={{ background:'var(--bg2)',padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,7rem)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-eyebrow mb-4 reveal">Peer-Reviewed Work</p>
        <h2 className="text-section reveal mb-4" style={{ color:'var(--text)' }}>Publications</h2>
        <p className="reveal reveal-d1 mb-12"
          style={{ color:'var(--text2)',fontSize:'1.05rem',maxWidth:'560px',lineHeight:1.7 }}>
          8+ IEEE and international journal publications spanning AI security, zero trust,
          federated learning, and healthcare informatics.
        </p>

        <motion.div className="flex flex-col gap-4"
          variants={stagger} initial="hidden" whileInView="show"
          viewport={{ once:true,amount:0.05 }}>
          {publications.map((pub, i) => (
            <motion.div key={i} variants={item}
              className="card-glow p-7 rounded-2xl border"
              style={{ background:'var(--surface)',borderColor:'var(--border)',
                       display:'grid',gridTemplateColumns:'1fr auto',gap:'1.5rem',alignItems:'start' }}
              whileHover={{ y:-4,boxShadow:'0 16px 48px rgba(56,189,248,0.1)',
                            borderColor:'rgba(56,189,248,0.25)',transition:{duration:0.2} }}>
              <div>
                <p style={{ fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--accent)',
                            letterSpacing:'0.15em',marginBottom:'8px' }}>
                  PAPER #{pub.num}
                </p>
                <h3 className="text-card mb-2"
                  style={{ color:'var(--text)',fontFamily:'var(--font-display)',lineHeight:1.3,cursor:'pointer' }}
                  onClick={() => navigate(`/publications/${pub.num}`)}>
                  {pub.title}
                </h3>
                <p style={{ color:'var(--text2)',fontSize:'0.875rem',lineHeight:1.7,fontFamily:'var(--font-body)' }}>
                  {pub.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <motion.button onClick={() => navigate(`/publications/${pub.num}`)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border"
                    style={{ fontFamily:'var(--font-mono)',color:'var(--accent)',
                             borderColor:'rgba(56,189,248,0.25)',background:'rgba(56,189,248,0.06)',
                             letterSpacing:'0.06em',cursor:'pointer' }}
                    whileHover={{ y:-2,background:'rgba(56,189,248,0.12)',transition:{duration:0.15} }}
                    whileTap={{ scale:0.97 }}>
                    View Details →
                  </motion.button>
                  <PubLinks pub={pub} />
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-lg text-xs font-medium border flex-shrink-0"
                style={{ fontFamily:'var(--font-mono)',background:'rgba(56,189,248,0.06)',
                         borderColor:'rgba(56,189,248,0.2)',color:'var(--accent)' }}>
                {pub.year}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
