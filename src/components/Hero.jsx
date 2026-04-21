import { motion } from 'framer-motion'

const tickerItems = [
    'Principal AI Researcher', '✦', 'IEEE Senior Member', '✦',
    'National Infrastructure Security', '✦', 'Zero Trust Pioneer', '✦',
    'IETE Fellow', '✦', 'Global Impact Factor', '✦',
    'Agentic AI Governance', '✦', 'SSA & CMS Architect', '✦',
    'Principal AI Researcher', '✦', 'IEEE Senior Member', '✦',
    'National Infrastructure Security', '✦', 'Zero Trust Pioneer', '✦'
]

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const statsVariants = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ paddingTop: '80px' }}
        >
            {/* Background orbs & Grid remain the same as your code */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb1 absolute rounded-full opacity-20" style={{ width: '600px', height: '600px', top: '-10%', right: '-5%', background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)', filter: 'blur(80px)' }} />
                <div className="orb2 absolute rounded-full opacity-15" style={{ width: '500px', height: '500px', bottom: '10%', left: '-5%', background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', filter: 'blur(100px)' }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
            </div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-16 pb-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Status badge: Re-framed for Expert Recognition */}
                <motion.div
                    variants={fadeUp}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
                    style={{ background: 'rgba(217,119,6,0.06)', borderColor: 'rgba(217,119,6,0.22)' }}
                >
                    <span className="relative w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#fbbf24' }} />
                    <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#fbbf24', letterSpacing: '0.1em' }}>
            IEEE SENIOR EXPERT · TOP 10% GLOBAL
          </span>
                </motion.div>

                {/* Main headline: Principal Title */}
                <motion.h1 variants={fadeUp} className="text-hero mb-4">
                    <span className="block gradient-text-hero">Principal Researcher</span>
                    <span className="block gradient-text-hero">D.R. Palavali</span>
                </motion.h1>

                {/* Role line: Scholarly Focus */}
                <motion.p
                    variants={fadeUp}
                    className="shimmer-text mb-5"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontWeight: 600, letterSpacing: '-0.01em' }}
                >
                    Pioneer in Agentic AI Security · IEEE Senior Member · SSA & CMS Architect
                </motion.p>

                {/* Tagline: Emphasizing National Impact (EB-1A Criterion) */}
                <motion.p
                    variants={fadeUp}
                    className="max-w-2xl mb-10 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: 'var(--text2)' }}
                >
                    Architecting SOTA (State-of-the-Art) security frameworks for national-scale U.S. infrastructure.
                    My research in autonomous threat detection and Zero Trust protects over 500,000+ citizens
                    within critical government healthcare ecosystems.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
                    <motion.a
                        href="#publications"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm no-underline"
                        style={{ fontFamily: 'var(--font-display)', background: 'var(--accent)', color: '#050c18', boxShadow: '0 0 28px rgba(56,189,248,0.35)', letterSpacing: '-0.01em' }}
                        whileHover={{ y: -3, boxShadow: '0 0 44px rgba(56,189,248,0.55)' }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Review Scientific Evidence
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.a>
                </motion.div>

                {/* Stats row: EB-1A Evidence Markers (Citations & Systems) */}
                <motion.div
                    variants={statsVariants}
                    className="flex flex-wrap gap-10 pt-10 border-t"
                    style={{ borderColor: 'var(--border)' }}
                >
                    {[
                        ['150+', 'Global Citations'],
                        ['8+', 'SOTA Publications'],
                        ['9+', 'US State Systems'],
                        ['99.5%', 'Model Accuracy']
                    ].map(([n, l], i) => (
                        <motion.div
                            key={l}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
                        >
                            <div
                                className="text-impact-stat" /* Uses the new CSS class we created */
                                style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, lineHeight: 1 }}
                            >
                                {n}
                            </div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '6px' }}>
                                {l}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Ticker tape remains similar with updated items */}
            <motion.div className="ticker-wrap w-full border-y py-3.5 mt-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
                <div className="ticker">
                    {tickerItems.map((item, i) => (
                        <span key={i} className="px-6 text-xs font-medium whitespace-nowrap" style={{ fontFamily: 'var(--font-mono)', color: item === '✦' ? '#fbbf24' : 'var(--text3)', letterSpacing: '0.1em' }}>
              {item}
            </span>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}