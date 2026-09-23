import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { matchProfileQuestion, profileCategories, profileKnowledge, unknownProfileResponse } from '../profile.js'

const prompts = [
  'What does he work on?',
  'What is his Zero Trust experience?',
  'What has he built at enterprise scale?',
  'Show me his research.',
  'What does he write about?',
  'Where has he spoken?',
  'What technologies does he use?',
  'How can I contact him?',
]

function ResponsePanel({ category, question }) {
  const response = category === 'unknown' ? unknownProfileResponse : profileKnowledge[category]
  if (!response) return null

  return (
    <section className="profile-response" aria-live="polite" aria-labelledby="response-title">
      <div className="response-context">
        <span>Profile response</span>
        {question && <p>“{question}”</p>}
      </div>
      <p className="eyebrow">{response.eyebrow}</p>
      <h2 id="response-title">{response.title}</h2>
      <p className="response-summary">{response.summary}</p>

      {response.stats && (
        <div className="response-stats">
          {response.stats.map((stat) => <span key={stat}>{stat}</span>)}
        </div>
      )}

      {response.items && (
        <div className="response-items">
          {response.items.map((item, index) => (
            <article key={`${item.title}-${index}`}>
              {item.meta && <p>{item.meta}</p>}
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      )}

      {response.contacts && (
        <div className="response-contacts">
          {response.contacts.map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}>
              {label} {label !== 'Email' && <Icon name="external" size={13} />}
            </a>
          ))}
        </div>
      )}

      {response.links && (
        <div className="response-links">
          {response.links.map(({ label, to }) => (
            <Link key={to} to={to}>{label} <Icon name="arrow" size={14} /></Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default function ProfileExplorer() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [submittedQuestion, setSubmittedQuestion] = useState('')
  const [promptIndex, setPromptIndex] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined
    const timer = window.setInterval(() => setPromptIndex((index) => (index + 1) % prompts.length), 4500)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target
      const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable
      if (event.key === '/' && !isTyping) {
        event.preventDefault()
        inputRef.current?.focus()
      }
      if (event.key === 'Escape' && document.activeElement === inputRef.current) inputRef.current.blur()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const selectCategory = (category) => {
    setActiveCategory(category)
    setSubmittedQuestion('')
    setQuery('')
  }

  const submitQuestion = (event) => {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    setActiveCategory(matchProfileQuestion(trimmed))
    setSubmittedQuestion(trimmed)
  }

  return (
    <div className="profile-explorer" id="explore">
      <form className="question-form" onSubmit={submitQuestion} role="search">
        <label htmlFor="profile-question">Ask about my work</label>
        <div className="question-control">
          <Icon name="book" size={18} />
          <input
            ref={inputRef}
            id="profile-question"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={prompts[promptIndex]}
            autoComplete="off"
          />
          <span className="keyboard-hint" aria-hidden="true">/</span>
          <button type="submit" aria-label="Search public profile"><Icon name="arrow" size={17} /></button>
        </div>
      </form>

      <div className="quick-actions" aria-label="Explore profile topics">
        {profileCategories.map(({ id, label }) => (
          <button key={id} type="button" aria-pressed={activeCategory === id} onClick={() => selectCategory(id)}>{label}</button>
        ))}
      </div>

      {activeCategory
        ? <ResponsePanel category={activeCategory} question={submittedQuestion} />
        : <p className="explorer-note">Choose a topic or ask a question. Responses use verified public profile information only.</p>
      }
    </div>
  )
}
