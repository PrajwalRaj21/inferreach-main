'use client'

import { useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

import Services from '@/components/Services'
import WhatYouGet from '@/components/WhatYouGet'
import HowItWorks from '@/components/HowItWorks'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href')
        if (!href || href === '#') return
        e.preventDefault()
        try {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        } catch {}
      })
    })
  }, [])

  return (
    <>
      <LoadingScreen />
      <Header />
      <Hero />
    
      <Services />
      <WhatYouGet />
      <HowItWorks />
      
      <WhoThisIsFor />
      <Guarantee />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}