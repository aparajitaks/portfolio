import React from 'react'
import { motion } from 'framer-motion'

const education = [
  {
    icon: '🎓',
    school: 'Newton School of Technology (ADYPU)',
    degree: 'BTech — Computer Science Engineering (AI & ML)',
    location: 'Pune, Maharastra',
    period: '2024 – 2028',
    score: 'CGPA: 8.0',
    scoreType: 'cgpa',
  },
  {
    icon: '🏫',
    school: 'Kendriya Vidyalaya Range Hills Khadki',
    degree: 'Class XII — Science Stream',
    location: 'Pune, Maharastra',
    period: '2022 – 2024',
    score: '73.4%',
    scoreType: 'percent',
  },
  {
    icon: '📚',
    school: 'Kendriya Vidyalaya Range Hills Khadki',
    degree: 'Class X — CBSE Board',
    location: 'Pune, Maharastra',
    period: '2020 – 2022',
    score: '88%',
    scoreType: 'percent',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15 }
  })
}

export default function Education() {
  return (
    <section id="education" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-orb bg-orb-1" style={{ width: 400, height: 400, opacity: 0.1 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="section-tag" variants={fadeUp} custom={0}>education.json</motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>Academic Journey</motion.h2>
          <div className="glow-divider" />
          <motion.p className="section-subtitle" variants={fadeUp} custom={2}>
            Building a strong foundation in computer science and artificial intelligence
          </motion.p>
        </motion.div>

        <div className="edu__timeline" style={{ maxWidth: '780px', margin: '0 auto' }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu__item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="edu__dot">{edu.icon}</div>
              <motion.div
                className="glass-card edu__card"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="edu__school">{edu.school}</div>
                <div className="edu__degree">{edu.degree}</div>
                <div className="edu__meta">
                  <span>📍 {edu.location}</span>
                  <span>📅 {edu.period}</span>
                  <span className="edu__score">{edu.score}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
