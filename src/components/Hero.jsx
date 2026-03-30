import React, { useEffect, useState, useRef, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

/* ── Lazy-load the Three.js scene (avoids SSR/WebGL crashes) ── */
const ThreeScene = lazy(() => import('./ThreeScene'))

/* ── WebGL Error Boundary ── */
class WebGLBoundary extends React.Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(err) { console.warn('WebGL unavailable:', err.message) }
  render() {
    if (this.state.hasError) {
      // Fallback: show a CSS gradient instead
      return (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 60% 40%, rgba(99,102,241,0.25) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(167,139,250,0.15) 0%, transparent 50%)',
        }} />
      )
    }
    return this.props.children
  }
}

/* ── Custom typing hook ── */
function useTyping(phrases, speed = 75) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timer
    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx(i => i + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx(i => i - 1), speed / 2)
    } else {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % phrases.length)
    }
    setText(current.slice(0, charIdx))
    return () => clearTimeout(timer)
  }, [charIdx, deleting, phraseIdx, phrases, speed])

  return text
}

export default function Hero() {
  const typedText = useTyping(['Full Stack Developer', 'AI/ML Enthusiast', 'Problem Solver', 'Open Source Contributor'])

  const fadeItem = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] } }),
  }

  return (
    <section id="home" className="hero">
      {/* 3D Background — lazy loaded, isolated in error boundary */}
      <div className="hero__canvas">
        <WebGLBoundary>
          <Suspense fallback={
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 65% 40%, rgba(99,102,241,0.2) 0%, transparent 50%)',
            }} />
          }>
            <ThreeScene />
          </Suspense>
        </WebGLBoundary>
      </div>

      {/* Hero content */}
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__greeting" custom={0} variants={fadeItem}>
            Hello, I am
          </motion.p>

          <motion.h1 className="hero__name" custom={1} variants={fadeItem}>
            Aparajita K Singh
          </motion.h1>

          <motion.div className="hero__title" custom={2} variants={fadeItem}>
            <span style={{ color: '#94a3b8' }}>{typedText}</span>
            <span style={{ color: '#a78bfa', animation: 'heroBlink 1s step-end infinite' }}>|</span>
          </motion.div>

          <motion.p className="hero__desc" custom={3} variants={fadeItem}>
            BTech CSE (AI &amp; ML) student at Newton School of Technology, crafting
            full-stack experiences and intelligent systems — one commit at a time.
          </motion.p>

          <motion.div className="hero__cta" custom={4} variants={fadeItem}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <span>🚀</span> View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <span>💬</span> Contact Me
            </a>
          </motion.div>

          <motion.div className="hero__stats" custom={5} variants={fadeItem}>
            {[
              { value: '3+', label: 'Projects Built' },
              { value: '8.0', label: 'CGPA' },
              { value: '3+', label: 'Certifications' },
              { value: '∞', label: 'Curiosity Level' },
            ].map((s) => (
              <div key={s.label}>
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop 3D placeholder shown via CSS on hero__3d */}
        <div className="hero__3d" aria-hidden="true" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)', zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span style={{ fontSize: '0.7rem', color: '#475569', letterSpacing: '0.15em', fontFamily: 'monospace' }}>scroll</span>
        <div style={{
          width: '24px', height: '40px', border: '2px solid rgba(99,102,241,0.4)',
          borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <motion.div
            style={{ width: '3px', height: '8px', background: '#818cf8', borderRadius: '2px' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes heroBlink { 50% { opacity: 0; } }
      `}</style>
    </section>
  )
}
