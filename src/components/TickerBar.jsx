const TICKER = [
  'Agentic AI','✦','Zero Trust Architecture','✦','Behavioral Biometrics','✦',
  'Federated Learning','✦','Healthcare Security','✦','IEEE Senior Member','✦',
  'IETE Fellow','✦','CNN-LSTM Auth','✦',
  'Agentic AI','✦','Zero Trust Architecture','✦','Behavioral Biometrics','✦',
  'Federated Learning','✦','Healthcare Security','✦','IEEE Senior Member','✦',
  'IETE Fellow','✦','CNN-LSTM Auth','✦',
]

export default function TickerBar() {
  return (
    <div
      className="ticker-wrap w-full border-t py-3"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderColor: 'var(--border)',
        background: 'var(--surface)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="ticker">
        {TICKER.map((t, i) => (
          <span
            key={i}
            className="px-6 text-xs font-medium whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-mono)',
              color: t === '✦' ? 'var(--accent)' : 'var(--text3)',
              letterSpacing: '0.1em',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
