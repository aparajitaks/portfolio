import React from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="loader-overlay"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated logo letters */}
      <motion.div
        style={{ display: 'flex', gap: '0.15rem', marginBottom: '1.5rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {'AKS'.split('').map((char, i) => (
          <motion.span
            key={i}
            style={{
              fontSize: '3rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #818cf8, #a78bfa, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <div className="loader-ring" />

      <motion.p
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        initializing portfolio...
      </motion.p>

      {/* Progress bar */}
      <motion.div
        style={{
          width: '200px', height: '2px',
          background: 'rgba(99,102,241,0.2)',
          borderRadius: '2px',
          marginTop: '0.5rem',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
            borderRadius: '2px',
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
