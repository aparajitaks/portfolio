import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Education',     href: '#education' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Certifications',href: '#certifications' },
  { label: 'Extras',        href: '#extras' },
  { label: 'Contact',       href: '#contact' },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = useCallback((href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleNav('#home') }}
          >
            &lt;AKS /&gt;
          </a>

          {/* Desktop links */}
          <ul className="navbar__links" role="navigation">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${active === link.href ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            {/* Theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Resume button — desktop */}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.82rem', display: 'none' }}
            />

            {/* Hamburger */}
            <button
              className="menu-btn"
              onClick={() => setMenuOpen(p => !p)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span style={ menuOpen ? { transform: 'rotate(45deg) translate(4px,4px)' } : {} } />
              <span style={ menuOpen ? { opacity: 0 } : {} } />
              <span style={ menuOpen ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {} } />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile nav drawer */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className={`mobile-nav__link ${active === link.href ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 30 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
          >
            {link.label}
          </motion.a>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button className="theme-toggle" onClick={toggleTheme} style={{ marginLeft: '0.5rem' }}>
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>
    </>
  )
}
