'use client'

import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(`✅ Thank you! We'll notify you at ${email} when we launch.`)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md bg-[#10161b] border border-[#212a31] text-text placeholder:text-text-dim outline-none focus:border-amber transition-colors min-w-[200px]"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Notify me'}
        </button>
      </form>

      {message && (
        <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-500' : 'text-teal'}`}>
          {message}
        </p>
      )}
    </div>
  )
}