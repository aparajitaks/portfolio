import React from 'react'
import { motion } from 'framer-motion'

const extras = [
  {
    emoji: '⚽',
    title: 'National-Level Football Player',
    desc: 'Competed at national level, demonstrating teamwork, discipline, and perseverance under pressure.',
    color: '#6366f1',
  },
  {
    emoji: '🎵',
    title: 'Classical Singer & Harmoniumist',
    desc: 'Passionate about Indian classical music — trained vocalist and harmonium performer with stage experience.',
    color: '#a78bfa',
  },
  {
    emoji: '👑',
    title: 'School Captain',
    desc: 'Served as School Captain — led events, mentored juniors, and represented the student body.',
    color: '#22d3ee',
  },
]

export default function Extras() {
  return (
    <section id="extras" className="section" style={{ position: 'relative' }}>
      <div className="bg-orb bg-orb-1" style={{ opacity: 0.08 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">life.beyond(code)</p>
          <h2 className="section-title">Beyond the Screen</h2>
          <div className="glow-divider" />
          <p className="section-subtitle">
            A well-rounded individual — athlete, artist, and leader
          </p>
        </motion.div>

        <div className="extras__grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {extras.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card extra-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 50px ${item.color}25` }}
            >
              {/* Animated top glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(circle at 50% 0%, ${item.color}12, transparent 60%)`,
                borderRadius: 'inherit',
                pointerEvents: 'none',
              }} />

              <span
                className="extra-card__emoji"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                {item.emoji}
              </span>

              <h3 className="extra-card__title">{item.title}</h3>
              <p className="extra-card__desc">{item.desc}</p>

              <div style={{
                marginTop: '1rem',
                width: '40px', height: '3px',
                background: `linear-gradient(90deg, ${item.color}, transparent)`,
                borderRadius: '2px',
                margin: '1rem auto 0',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
