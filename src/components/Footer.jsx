import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div className="footer__text">
            <span style={{ fontSize: '1.1rem', fontWeight: 800, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              &lt;AKS /&gt;
            </span>
          </div>

          <p className="footer__text">
            Crafted with <span>♥</span> by <span>Aparajita K Singh</span> · {year}
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="https://github.com/aparajitaks"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.3rem', opacity: 0.6, transition: 'opacity 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
            >🐙</a>
            <a
              href="https://www.linkedin.com/in/aparajitaksingh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.3rem', opacity: 0.6, transition: 'opacity 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
            >💼</a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#2d3748', fontFamily: 'var(--font-mono)' }}>
            Built with React · Three.js · Framer Motion · Deployed on Vercel
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
