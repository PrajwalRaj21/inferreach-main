'use client'

import { motion } from 'framer-motion'
import EmailForm from './EmailForm'

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="flex-1 flex items-center py-20">
      <div className="container-custom">
        <motion.p
          className="eyebrow"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          // real‑time data infrastructure
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Something{' '}
          <span className="text-amber italic">big</span>
          {' '}is coming.
        </motion.h1>

        <motion.p
          className="mt-5 text-lg sm:text-xl text-text-muted max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're building the control plane for streaming ingestion, transformation, and orchestration.
          <br />
          <span className="text-text font-medium">No more stitching tools together.</span>
        </motion.p>

        <motion.div
          className="mt-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-text-dim font-medium mb-3">
            Be the first to know when we launch:
          </p>
          <EmailForm />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap gap-6 text-sm text-text-muted border-t border-[#1a2127] pt-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="flex items-center gap-2">
            ✉️ <a href="mailto:hello@inferreach.com" className="text-text hover:text-amber transition-colors">hello@inferreach.com</a>
          </span>
          <span className="flex items-center gap-2">
            📅 <a href="https://cal.com/inferreach/30min" target="_blank" className="text-amber hover:text-amber/80 transition-colors font-medium">Book a free audit →</a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}