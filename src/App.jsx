import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Extras from './components/Extras'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* ── App-level Error Boundary ── */
class AppErrorBoundary extends React.Component {
  state = { hasError: false, error: null }
  static getDerivedStateFromError(error) { return { hasError: true, error } }
  componentDidCatch(err, info) { console.error('App Error:', err, info) }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: '#050814', color: '#818cf8', fontFamily: 'monospace',
          gap: '1rem', padding: '2rem', textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem' }}>⚠️</div>
          <h2>Something went wrong</h2>
          <pre style={{ fontSize: '0.75rem', color: '#64748b', maxWidth: '600px', whiteSpace: 'pre-wrap' }}>
            {this.state.error?.message}
          </pre>
          <button onClick={() => window.location.reload()}
            style={{ padding: '0.75rem 2rem', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const cursorRef = useRef(null)

  // Set theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Cursor glow
  useEffect(() => {
    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  // Mark loaded after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AppErrorBoundary>
      {/* Cursor glow */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.08s linear, top 0.08s linear',
        }}
      />

      {/* Loader overlay */}
      {!isLoaded && (
        <div style={{
          position: 'fixed', inset: 0, background: '#050814',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', zIndex: 99999, gap: '1.5rem',
        }}>
          <div style={{
            fontSize: '3rem', fontWeight: 800,
            background: 'linear-gradient(135deg, #818cf8, #a78bfa, #22d3ee)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', fontFamily: "'Space Grotesk', sans-serif",
          }}>
            &lt;AKS /&gt;
          </div>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            border: '3px solid rgba(99,102,241,0.2)',
            borderTopColor: '#818cf8', borderRightColor: '#a78bfa',
            animation: 'appSpin 0.9s linear infinite',
          }} />
          <style>{`@keyframes appSpin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Main content — always rendered, just hidden during load */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(p => !p)} />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Certifications />
          <Extras />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AppErrorBoundary>
  )
}
