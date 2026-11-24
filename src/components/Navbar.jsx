import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar({ variant = 'transparent' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const header = (
    <header className={`hero-header ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <Link to="/" className="hero-logo" onClick={() => setMobileMenuOpen(false)}>
        <img
          src="/images/ani-gold-emblem.png"
          alt="AniEnterprise Logo"
          className="hero-logo-emblem"
        />
        <span>AniEnterprise</span>
      </Link>

      {/* Desktop Navigation Links (Unchanged) */}
      <nav className="hero-nav" aria-label="Main Navigation">
        <ul className="hero-nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `hero-nav-link ${isActive ? 'hero-nav-link-active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Toggle Button (Hidden on Desktop) */}
      <button
        type="button"
        className={`mobile-nav-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileMenuOpen}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
    </header>
  )

  const drawer = (
    <div
      className={`mobile-nav-drawer-backdrop ${mobileMenuOpen ? 'is-visible' : ''}`}
      onClick={() => setMobileMenuOpen(false)}
      aria-hidden={!mobileMenuOpen}
    >
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-drawer-header">
          <Link to="/" className="hero-logo" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/images/ani-gold-emblem.png"
              alt="AniEnterprise Emblem"
              className="hero-logo-emblem"
            />
            <span>AniEnterprise</span>
          </Link>
          <button
            type="button"
            className="mobile-drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile Navigation">
          <ul className="mobile-drawer-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `mobile-drawer-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mobile-link-arrow"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-info">
            <span className="mobile-info-label">Head Office:</span>
            <p className="mobile-info-text">Borogola, Bogura, Bangladesh</p>
          </div>
          <a href="tel:+8801334768700" className="mobile-drawer-cta">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Trade Desk</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {variant === 'solid' ? (
        <div className="navbar-solid-bar">{header}</div>
      ) : (
        header
      )}
      {drawer}
    </>
  )
}
