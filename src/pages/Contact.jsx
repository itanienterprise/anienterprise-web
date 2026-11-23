import { useState } from 'react'
import Navbar from '../components/Navbar'
import './Contact.css'

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Strategic Hub Locations (Moved from About Page)
  const locations = [
    {
      id: 0,
      title: 'Corporate Headquarters',
      tag: 'Head Office',
      address: 'H.M Tower Rangpur Road, Borogola, Bogura - 5800, Bangladesh',
      details:
        'Central trade command, financial administration, and international procurement contract management desk.',
      image: '/images/branch-bogura.jpg',
    },
    {
      id: 1,
      title: 'Chattogram Maritime Port Terminal Desk',
      tag: 'Sea Logistics',
      address: 'Agrabad Commercial Area, Chattogram Seaport Corridor, Bangladesh',
      details:
        'Vessel discharge management, bulk cargo stevedoring, and containerized agro-produce customs dispatch.',
      image: '/images/advantage-port.jpg',
    },
    {
      id: 2,
      title: 'Hili & Benapole Border Customs Hubs',
      tag: 'Land Ports',
      address: 'Hili Land Port, Dinajpur & Benapole Customs Station, Jashore',
      details:
        'Express overland agricultural clearing desks connecting regional rail and highway cargo networks.',
      image: '/images/advantage-warehouse.jpg',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="contact-page-wrapper">
      <Navbar variant="solid" />

      <main className="contact-page-container">
        {/* Main Header */}
        <header className="contact-header">
          <div className="contact-badge">
            <img
              src="/images/ani-gold-emblem.png"
              alt="AniEnterprise Emblem"
              className="contact-badge-icon"
            />
            <span className="contact-badge-text">Get In Touch &amp; Trade Desks</span>
          </div>

          <h1 className="contact-title">
            <span className="title-dark">Connect with </span>
            <span className="title-orange">AniEnterprise</span>
          </h1>

          <p className="contact-subtitle">
            Direct trade procurement, bulk commodity contracting, and regional port clearance
            assistance across Bangladesh and international origins.
          </p>
        </header>

        {/* 4 Direct Contact Channels */}
        <section className="contact-cards-grid" aria-label="Direct Contact Channels">
          <div className="contact-channel-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="channel-label">Corporate Office</h3>
            <address className="channel-val">
              H.M Tower Rangpur Road, Borogola, Bogura - 5800, Bangladesh.
            </address>
          </div>

          <div className="contact-channel-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="channel-label">Trade Hotline</h3>
            <div className="channel-val">
              <a href="tel:+8802588813057">+88 02588813057</a>
              <a href="tel:+8801713706160">+8801713 706160</a>
            </div>
          </div>

          <div className="contact-channel-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="channel-label">Email Inquiries</h3>
            <div className="channel-val">
              <a href="mailto:contact@anienterprises.com.bd">contact@anienterprises.com.bd</a>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Procurement &amp; Tenders</span>
            </div>
          </div>

          <div className="contact-channel-card">
            <div className="channel-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="channel-label">Trading Hours</h3>
            <div className="channel-val">
              <span>Sat – Thu: 10:30 AM – 7:30 PM (BST)</span>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Friday: Port Desks on Standby</span>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            1. THE SETTING: "Where Is This Business?" (MOVED FROM ABOUT)
            ========================================================================== */}
        <section className="contact-setting-section" aria-label="Strategic Office Locations and Port Desks">
          <div className="setting-sec-header">
            <div className="contact-badge">
              <span className="contact-badge-text">Operational Stations</span>
            </div>

            <h2 className="setting-sec-title">
              <span className="title-dark">Where Is This </span>
              <span className="title-orange">Business?</span>
            </h2>

            <p className="setting-sec-subtitle">
              Headquartered in Northern Bangladesh’s agricultural heartland, with operational desks
              stationed at primary seaports and land customs border stations.
            </p>
          </div>

          <div className="setting-layout">
            <div className="setting-locations-list">
              {locations.map((loc, idx) => (
                <div
                  key={loc.title}
                  className={`setting-location-card ${activeLocation === idx ? 'active' : ''}`}
                  onClick={() => setActiveLocation(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveLocation(idx)}
                >
                  <div className="setting-pin-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="setting-card-body">
                    <div className="setting-card-top">
                      <h3 className="setting-card-title">{loc.title}</h3>
                      <span className="setting-card-tag">{loc.tag}</span>
                    </div>
                    <address className="setting-card-address">{loc.address}</address>
                  </div>
                </div>
              ))}
            </div>

            <div className="setting-preview-card">
              <img
                src={locations[activeLocation].image}
                alt={locations[activeLocation].title}
                className="setting-preview-img"
              />
              <div className="setting-preview-overlay" />
              <div className="setting-preview-caption">
                <span className="contact-badge-text" style={{ color: '#fbbf24', textTransform: 'uppercase' }}>
                  {locations[activeLocation].tag}
                </span>
                <h3 className="setting-preview-title">{locations[activeLocation].title}</h3>
                <p className="setting-preview-desc">{locations[activeLocation].details}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. THE CREDITS CTA CARD (MOVED FROM ABOUT)
            ========================================================================== */}
        <section className="credits-section" id="contact-cta" aria-label="The Credits and Call to Action">
          <div className="credits-floating-card">
            <div className="credits-content">
              <div className="credits-badge">
                <img
                  src="/images/ani-gold-emblem.png"
                  alt="AniEnterprise"
                  style={{ width: 14, height: 14, objectFit: 'contain' }}
                />
                <span>The Credits</span>
              </div>
              <h2 className="credits-title">
                Ready to Anchor Your Bulk Agricultural Procurement?
              </h2>
              <p className="credits-desc">
                Partner with AniEnterprise for competitive international freight rates, verified
                grading standards, and guaranteed delivery to your mills and factories.
              </p>
            </div>

            <div className="credits-actions">
              <a href="#inquiry-form" className="credits-btn-primary">
                <span>Request Bulk Quotation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="tel:+8802588813057" className="credits-btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Trade Desk</span>
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. BULK COMMODITY INQUIRY FORM
            ========================================================================== */}
        <section className="contact-inquiry-box" id="inquiry-form" aria-label="Trade Inquiry Form">
          <div className="inquiry-header">
            <h2 className="inquiry-title">Send a Direct Trade Inquiry</h2>
            <p className="inquiry-subtitle">
              Fill in your specifications below. Our trade dispatch desk will respond with current
              origin pricing, container availability, and transit schedules.
            </p>
          </div>

          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem', background: '#ecfdf5', borderRadius: 16, border: '1px solid #6ee7b7' }}>
              <h3 style={{ color: '#065f46', fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                ✓ Inquiry Transmitted Successfully
              </h3>
              <p style={{ color: '#047857', margin: 0, fontSize: '0.92rem' }}>
                Thank you. Our bulk commodity desk has received your request and will contact you promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="inquiry-form-grid">
              <div>
                <label className="form-label" htmlFor="contact-name">Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Kazi Mahbubur Rahman"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label" htmlFor="contact-company">Company / Factory / Mill Name *</label>
                <input
                  id="contact-company"
                  type="text"
                  required
                  placeholder="e.g. Meghna Flour Mills Ltd."
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label" htmlFor="contact-email">Corporate Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="procurement@company.com"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp *</label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="+880 17XX XXXXXX"
                  className="form-input"
                />
              </div>

              <div className="form-group-full">
                <label className="form-label" htmlFor="contact-commodity">Commodity of Interest *</label>
                <select id="contact-commodity" className="form-select" required defaultValue="">
                  <option value="" disabled>Select Bulk Agro Commodity</option>
                  <option value="wheat">Milling Wheat (Canadian / Australian / Black Sea)</option>
                  <option value="lentils">Red Lentils / Masoor Dal (Whole &amp; Split)</option>
                  <option value="chickpeas">Chickpeas / Garbanzo Beans (Kabuli &amp; Desi)</option>
                  <option value="yellow-peas">Yellow Peas &amp; Yellow Pea Bran</option>
                  <option value="corn">Yellow Maize / Poultry Corn</option>
                  <option value="wheat-bran">Pelleted Wheat Bran &amp; Agro Byproducts</option>
                  <option value="fresh-produce">Imported Fresh Fruits &amp; Produce</option>
                  <option value="other">Other / Custom Bulk Cargo</option>
                </select>
              </div>

              <div className="form-group-full">
                <label className="form-label" htmlFor="contact-message">Order Volume &amp; Destination Port / Mill Details *</label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Specify target tonnage (e.g. 5,000 MT), preferred delivery port (Chattogram, Mongla, Hili, Benapole), and delivery timeline..."
                  className="form-textarea"
                />
              </div>

              <div className="form-submit-row">
                <button type="submit" className="form-submit-btn">
                  <span>Transmit Trade Inquiry</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  )
}
