import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Hero() {
    const reduced = useReducedMotion()

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center"
            style={{
                padding: 'clamp(6rem,14vw,10rem) clamp(1.5rem,8vw,7rem)',
                background: 'var(--bg)'
            }}
        >
            <div className="max-w-6xl mx-auto w-full">

                {/* NAME */}
                <motion.h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.8rem,6vw,4.2rem)',
                        fontWeight: 800,
                        color: 'var(--text)',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        letterSpacing: '-0.03em'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}
                >
                    Damodhara Reddy Palavali
                </motion.h1>

                {/* MICRO HEADLINE */}
                <motion.h2
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem,2vw,1.6rem)',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginBottom: '0.8rem'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Securing Healthcare Systems at Scale with AI & Zero Trust
                </motion.h2>

                {/* 🔥 TAGLINE */}
                <motion.p
                    style={{
                        maxWidth: '720px',
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(1rem,1.6vw,1.1rem)',
                        color: 'var(--text2)',
                        lineHeight: 1.85
                    }}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>
            Healthcare AI & Cloud Cybersecurity Expert
          </span>{' '}
                    advancing{' '}
                    <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
            Zero Trust architectures
          </span>{' '}
                    with{' '}
                    <span style={{ color: '#a78bfa', fontWeight: 600 }}>
            Agentic AI
          </span>{' '}
                    — building secure, scalable systems that{' '}
                    <span style={{ color: '#34d399', fontWeight: 600 }}>
            protect millions
          </span>{' '}
                    across government healthcare and enterprise platforms.
                    <br /><br />
                    Backed by{' '}
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>
            16+ years of experience
          </span>{' '}
                    and{' '}
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>
            12 peer-reviewed publications
          </span>.
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                    style={{ marginTop: '2.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.a
                        href="#publications"
                        style={{
                            padding: '12px 22px',
                            background: 'var(--accent)',
                            color: '#050c18',
                            borderRadius: '10px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            fontFamily: 'var(--font-display)',
                            boxShadow: '0 0 24px rgba(56,189,248,0.35)'
                        }}
                        whileHover={{
                            y: -3,
                            boxShadow: '0 0 40px rgba(56,189,248,0.55)'
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        View Publications →
                    </motion.a>

                    <motion.a
                        href="#contact"
                        style={{
                            padding: '12px 22px',
                            borderRadius: '10px',
                            border: '1px solid var(--border2)',
                            color: 'var(--text)',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontFamily: 'var(--font-display)'
                        }}
                        whileHover={{
                            y: -3,
                            borderColor: 'var(--accent)',
                            color: 'var(--accent)'
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                {/* STATS */}
                <motion.div
                    style={{
                        marginTop: '3.5rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px,1fr))',
                        gap: '20px'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    {[
                        { value: '16+', label: 'Years Experience' },
                        { value: '12+', label: 'Publications' },
                        { value: '100K+', label: 'Article Views' },
                        { value: '10+', label: 'Citations' }
                    ].map((s, i) => (
                        <div key={i}>
                            <div
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '2rem',
                                    fontWeight: 800,
                                    color: 'var(--accent)'
                                }}
                            >
                                {s.value}
                            </div>
                            <div
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.7rem',
                                    color: 'var(--text3)',
                                    letterSpacing: '0.08em'
                                }}
                            >
                                {s.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}