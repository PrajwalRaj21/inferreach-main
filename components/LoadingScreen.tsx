'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'

const STATUS_MESSAGES = [
  'Initializing pipeline',
  'Connecting to CRM',
  'Syncing records',
  'Almost ready',
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem('inferreach_loaded') === 'true') {
      setHidden(true)
      return
    }

    // Progress bar animation (1.8s)
    const start = performance.now()
    const duration = 1800

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.floor(eased * 100))

      if (t < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setFading(true), 200)
        setTimeout(() => {
          setHidden(true)
          sessionStorage.setItem('inferreach_loaded', 'true')
        }, 900)
      }
    }
    requestAnimationFrame(tick)

    // Cycle status messages every 500ms
    const statusInterval = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length)
    }, 500)

    return () => clearInterval(statusInterval)
  }, [])

  if (hidden) return null

  return (
    <div className={`loading-screen ${fading ? 'is-fading' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <Logo size={64} />
        </div>
        <h1 className="loading-brand">InferReach</h1>
        <div className="loading-bar-wrap">
          <div className="loading-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-meta">
          <span className="loading-status">{STATUS_MESSAGES[statusIndex]}</span>
          <span className="loading-percent">{progress}%</span>
        </div>
      </div>
    </div>
  )
}