import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { impactStats } from '../data.js'

function CountUp({ target, suffix, color, inView }) {
  const count = useMotionValue(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) {
          const display = target % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toString()
          ref.current.textContent = display + suffix
        }
      },
    })
    return controls.stop
  }, [inView, target, suffix, count])

  return (
    <span ref={ref} className="impact-value" style={{ color }}>
      0{suffix}
    </span>
  )
}

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="impact" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Impact</span>
        <h2 className="section-title">Research Impact</h2>
        <p className="section-desc">
          Measurable outcomes from 16+ years of applied research in government healthcare systems.
        </p>
      </motion.div>

      <div className="impact-grid">
        {impactStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="impact-card glass"
            style={{ '--card-color-dim': stat.color + '18' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
          >
            <CountUp
              target={stat.number}
              suffix={stat.suffix}
              color={stat.color}
              inView={inView}
            />
            <span className="impact-label">{stat.label}</span>
            <span className="impact-sub">{stat.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
