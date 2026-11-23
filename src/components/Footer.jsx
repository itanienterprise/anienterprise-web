import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer id="contact" className="site-footer" aria-label="Contact and Footer">
      {/* Ambient Top Glow Line */}
      <div className="footer-glow-line" />

      <div className="footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Overview */}
          <div className="footer-col footer-col-brand">
            <Link
              to="/"
              className="footer-brand"
              onClick={scrollToTop}
            >
              <img
                src="/images/ani-gold-emblem.png"
                alt="AniEnterprise Emblem"
                className="footer-brand-logo"
              />
              <span className="footer-brand-name">AniEnterprise</span>
            </Link>

            <p className="footer-tagline">
              Connecting global agricultural harvest origins with industrial food processors,
              flour mills, and bulk wholesale commodity markets across Bangladesh and beyond.
            </p>

            <div className="footer-status-badge">
              <span className="footer-status-dot" />
              <span className="footer-status-text">Trade Desk & Bulk Orders Open</span>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Contact Information</h4>
            <p className="footer-contact-note">
              Reach out to our trade procurement team for bulk commodity inquiries and quotations.
            </p>

            <div className="footer-contact-items">
              {/* Address */}
              <div className="footer-contact-item">
                <span className="footer-icon-box" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Corporate Office</span>
                  <address className="footer-contact-value">
                    H.M Tower Rangpur Road, Borogola, Bogura - 5800 Bangladesh.
                  </address>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-item">
                <span className="footer-icon-box" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Email Inquiries</span>
                  <a href="mailto:contact@anienterprises.com.bd" className="footer-contact-link">
                    contact@anienterprises.com.bd
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="footer-contact-item">
                <span className="footer-icon-box" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Hotline & Trade Desk</span>
                  <a href="tel:+8802588813057" className="footer-contact-link">
                    +88 02588813057
                  </a>
                  <a href="tel:+8801713706160" className="footer-contact-link">
                    +8801713 706160
                  </a>
                </div>
              </div>

              {/* Trading Hours */}
              <div className="footer-contact-item">
                <span className="footer-icon-box" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Office Hours</span>
                  <span className="footer-contact-value">
                    Sat – Thu: 10:30 AM – 7:30 PM (BST)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {CURRENT_YEAR} <span className="footer-highlight">AniEnterprise</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
