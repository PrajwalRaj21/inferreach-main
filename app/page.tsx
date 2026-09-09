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
    document.querySelectorAll('a[href^="#"]').forEach((anchor: HTMLAnchorElement) => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: MouseEvent) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Simple form validation
    const form = document.querySelector('.contact-form') as HTMLFormElement | null;
    if (form) {
      form.addEventListener('submit', function (this: HTMLFormElement, e: Event) {
        const email = this.querySelector('input[name="email"]') as HTMLInputElement | null;
        if (email && !email.value.includes('@')) {
          e.preventDefault();
          alert('Please enter a valid email address.');
        }
      });
    }
  }, []);

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