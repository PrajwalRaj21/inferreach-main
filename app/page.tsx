'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })

    // Simple form validation
    const form = document.querySelector('.contact-form')
    if (form) {
      form.addEventListener('submit', (e) => {
        const email = form.querySelector('input[name="email"]') as HTMLInputElement | null
        if (email && !email.value.includes('@')) {
          e.preventDefault()
          alert('Please enter a valid email address.')
        }
      })
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}