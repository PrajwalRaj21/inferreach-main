'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0d10]/80 backdrop-blur-md border-b border-[#1a2127]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <svg className="text-amber w-6 h-6" viewBox="0 0 26 26" fill="none">
              <circle cx="4" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="4" cy="21" r="2.2" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="22" cy="13" r="2.4" fill="currentColor"/>
              <path d="M6 5.5H12C15 5.5 15 13 18.5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M6 20.5H12C15 20.5 15 13 18.5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <span className="font-display font-semibold text-lg tracking-tight">Inferreach</span>
          </Link>

          <a
            href="mailto:hello@inferreach.com"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">hello@inferreach.com</span>
          </a>
        </div>
      </div>
    </header>
  )
}