import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    icon: '🛡️',
    title: 'SkillProof',
    subtitle: 'Full Stack Skill Verification Platform',
    description:
      'A full-stack platform enabling users to submit projects and receive AI-powered skill verification scores. Features role-based access control, JWT authentication, and a responsive, intuitive UI.',
    tech: ['React', 'Node.js', 'REST APIs', 'JWT', 'MySQL', 'Prisma'],
    features: ['JWT Authentication', 'Role-Based Access', 'AI Scoring Engine', 'Responsive UI'],
    github: 'https://github.com/aparajitaks/skillproof',
    demo: 'https://skillproof-z6aj.vercel.app/',
    color: '#6366f1',
  },
  {
    num: '02',
    icon: '🖐️',
    title: 'Gesture Control System',
    subtitle: 'Real-Time Gesture Recognition',
    description:
      'A real-time gesture recognition system that translates hand movements into system commands using computer vision. Features WebSocket streaming for live visualization in the browser.',
    tech: ['OpenCV', 'MediaPipe', 'FastAPI', 'React', 'WebSockets', 'Python'],
    features: ['Real-Time Tracking', 'WebSocket Streaming', 'Live Visualization', 'System Control'],
    github: 'https://github.com/aparajitaks/gesture-control-system',
    demo: 'https://gesture-control-system.vercel.app/',
    color: '#22d3ee',
  },
  {
    num: '03',
    icon: '💊',
    title: 'Drug Response ML Dashboard',
    subtitle: 'Machine Learning Prediction Dashboard',
    description:
      'An end-to-end ML pipeline for predicting drug responses using patient data. Includes model training, interactive data visualizations, CSV processing, and a Streamlit-powered live dashboard.',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit', 'Plotly', 'NumPy'],
    features: ['ML Pipeline', 'Prediction Dashboard', 'CSV Processing', 'Interactive Charts'],
    github: 'https://github.com/aparajitaks/Drug_Response_ML',
    demo: 'https://drugresponseml.streamlit.app/',
    color: '#a78bfa',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="bg-orb bg-orb-2" style={{ opacity: 0.12 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">projects.featured</p>
          <h2 className="section-title">What I've Built</h2>
          <div className="glow-divider" />
          <p className="section-subtitle">
            A showcase of full-stack development, machine learning, and computer vision projects
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              className="glass-card project-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ '--project-color': project.color }}
            >
              {/* Top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px',
                background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                borderRadius: '0 0 4px 4px',
              }} />

              <div className="project-card__header" style={{ position: 'relative' }}>
                <div className="project-card__icon" style={{ background: `linear-gradient(135deg, ${project.color}aa, ${project.color}55)` }}>
                  {project.icon}
                </div>
                <span className="project-card__num">{project.num}</span>
              </div>

              <div>
                <h3 className="project-card__title">{project.title}</h3>
                <p style={{ fontSize: '0.78rem', color: project.color, fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                  {project.subtitle}
                </p>
              </div>

              <p className="project-card__desc">{project.description}</p>

              {/* Feature chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.features.map((f) => (
                  <span key={f} style={{
                    padding: '0.2rem 0.6rem',
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}35`,
                    borderRadius: '50px',
                    fontSize: '0.72rem',
                    color: project.color,
                    fontWeight: 500,
                  }}>
                    ✓ {f}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="project-card__actions">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(99,102,241,0.15)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  🐙 View Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, opacity: 0.9 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ flex: 1, justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.82rem' }}
                >
                  🚀 Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
