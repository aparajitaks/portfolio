import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orb */}
      <div className="bg-orb bg-orb-2" />

      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="section-tag" variants={fadeUp} custom={0}>about.me</motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>Who Am I?</motion.h2>
          <div className="glow-divider" />
        </motion.div>

        <div className="about__grid">
          {/* Avatar side */}
          <motion.div
            className="about__avatar-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__avatar">
              👩‍💻
            </div>
            <div className="about__badges">
              <div className="about__badge">🧠 AI / ML</div>
              <div className="about__badge">⚛️  React Dev</div>
              <div className="about__badge">🎵 Singer</div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="about__text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={fadeUp} custom={0}>Aparajita K Singh</motion.h3>

            <motion.p variants={fadeUp} custom={1}>
              Computer Science student with experience in full-stack web development using
              React.js, Node.js, Prisma, and MySQL, along with hands-on work in machine
              learning and AI-based projects including NLP, model training, and prediction
              dashboards.
            </motion.p>

            <motion.p variants={fadeUp} custom={2}>
              I thrive at the intersection of creativity and engineering — whether that's
              building real-time gesture-controlled systems, crafting elegant UIs, or
              training ML models to uncover patterns from data.
            </motion.p>

            <motion.div className="about__info-grid" variants={fadeUp} custom={3}>
              {[
                { label: 'Degree',    value: 'BTech CSE (AI & ML)' },
                { label: 'Institute', value: 'Newton School of Technology' },
                { label: 'Location',  value: 'Pune, India' },
                { label: 'CGPA',      value: '8.0 / 10' },
                { label: 'Email',     value: 'aparajita.singh@adypu.edu.in' },
                { label: 'Phone',     value: '+91 9579926020' },
              ].map((item) => (
                <div key={item.label} className="about__info-item">
                  <strong>{item.label}:</strong>
                  <span style={{ color: '#94a3b8' }}>{item.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                📬 Get In Touch
              </a>
              <a
                href="https://github.com/aparajitaks"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                🐙 GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
