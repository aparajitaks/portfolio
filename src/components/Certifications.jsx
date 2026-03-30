import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  {
    icon: '🐍',
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera — University of Michigan',
    url: 'https://www.coursera.org/learn/python',
    color: '#6366f1',
  },
  {
    icon: '🤖',
    title: 'Generative AI for Everyone',
    issuer: 'Coursera — DeepLearning.AI',
    url: 'https://www.coursera.org/learn/generative-ai-for-everyone',
    color: '#a78bfa',
  },
  {
    icon: '🧠',
    title: 'AI for Everyone',
    issuer: 'Coursera — DeepLearning.AI',
    url: 'https://www.coursera.org/learn/ai-for-everyone',
    color: '#22d3ee',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ position: 'relative' }}>
      <div className="bg-orb bg-orb-2" style={{ opacity: 0.1 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">certifications[]</p>
          <h2 className="section-title">Credentials</h2>
          <div className="glow-divider" />
          <p className="section-subtitle">Verified learning from top global institutions</p>
        </motion.div>

        <div className="certs__grid">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: `0 12px 40px ${cert.color}30` }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                borderRadius: '12px 12px 0 0',
              }} />

              <div
                className="cert-card__icon"
                style={{ background: `linear-gradient(135deg, ${cert.color}aa, ${cert.color}44)` }}
              >
                {cert.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div className="cert-card__title">{cert.title}</div>
                <div className="cert-card__issuer" style={{ color: cert.color }}>{cert.issuer}</div>
                <div className="cert-card__link">
                  <span>🔗</span> View Certificate
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    style={{ display: 'inline-block' }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Badge strip */}
        <motion.div
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {['Coursera', 'DeepLearning.AI', 'University of Michigan'].map((badge) => (
            <div
              key={badge}
              style={{
                padding: '0.5rem 1.25rem',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '50px',
                fontSize: '0.82rem',
                color: '#94a3b8',
                fontFamily: 'var(--font-mono)',
              }}
            >
              ✓ {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
