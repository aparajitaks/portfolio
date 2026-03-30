import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python',     icon: '🐍' },
      { name: 'JavaScript', icon: '⚡' },
    ],
  },
  {
    title: 'Frameworks',
    icon: '⚛️',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js',  icon: '🟢' },
      { name: 'Express',  icon: '🚂' },
    ],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', icon: '🧠' },
      { name: 'NLP',              icon: '💬' },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL',   icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'NumPy',  icon: '🔢' },
      { name: 'OpenCV', icon: '�️' },
      { name: 'Canva',  icon: '🎨' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="bg-orb bg-orb-1" style={{ opacity: 0.1 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">skills.map()</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="glow-divider" />
          <p className="section-subtitle">Technologies and tools I work with to build things that matter</p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass-card skills__category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="skills__cat-header">
                <div className="skills__cat-icon">{cat.icon}</div>
                <span className="skills__cat-title">{cat.title}</span>
              </div>
              <div className="skills__items">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="skill-item__icon">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
