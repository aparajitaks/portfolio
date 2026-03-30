import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Aparajita,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`
    )
    window.location.href = `mailto:aparajita.singh@adypu.edu.in?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">contact.init()</p>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <div className="glow-divider" />
          <p className="section-subtitle">
            Have a project idea or just want to say hi? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* ── Info column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#e2e8f0' }}>
              Get In Touch
            </h3>

            <div className="contact__info-cards">
              <a href="tel:+919579926020" className="contact__info-item">
                <div className="contact__info-icon">📞</div>
                <div>
                  <div className="contact__info-label">Phone</div>
                  <div className="contact__info-value">+91 9579926020</div>
                </div>
              </a>

              <a href="mailto:aparajita.singh@adypu.edu.in" className="contact__info-item">
                <div className="contact__info-icon">📧</div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-value">aparajita.singh@adypu.edu.in</div>
                </div>
              </a>

              <div className="contact__info-item" style={{ cursor: 'default' }}>
                <div className="contact__info-icon">📍</div>
                <div>
                  <div className="contact__info-label">Location</div>
                  <div className="contact__info-value">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>

            <p className="contact__social-title">Find me online</p>
            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/aparajitaksingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn"
                style={{ cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1.2rem' }}>💼</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/aparajitaks"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn"
                style={{ cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1.2rem' }}>🐙</span>
                GitHub
              </a>
            </div>

            {/* Availability badge */}
            <motion.div
              style={{
                marginTop: '2rem',
                padding: '1rem 1.25rem',
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.25)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div
                style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#34d399',
                  boxShadow: '0 0 0 3px rgba(52,211,153,0.2)',
                  animation: 'availPulse 2s infinite',
                }}
              />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399' }}>
                  Open to Opportunities
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  Internships &bull; Projects &bull; Collaborations
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.25rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '0.5rem' }}>
              I&apos;ll get back to you within 24 hours.
            </p>

            <div className="form__group">
              <label className="form__label" htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                className="form__input"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                className="form__input"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="form__textarea"
                name="message"
                rows={5}
                placeholder="Tell me about your project or just say hi!"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sent ? '✅ Message Sent!' : '🚀 Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @keyframes availPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(52,211,153,0.2); }
          50%       { box-shadow: 0 0 0 6px rgba(52,211,153,0.08); }
        }
      `}</style>
    </section>
  )
}
