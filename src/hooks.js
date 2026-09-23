import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    // Use rAF to ensure DOM layout is complete before observing
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    })
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])
}
