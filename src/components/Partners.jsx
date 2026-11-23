import React, { useState } from 'react'
import './Partners.css'

const PARTNERS = [
  {
    id: 'maruti',
    name: 'Maruti International',
    logo: '/images/partner/partner-maruti.png',
    alt: 'Maruti International - A Symbol of Trust',
    tagline: 'A Symbol of Trust',
    category: 'Grain Export & Elevator Network',
    origin: 'India',
    description: 'Premier agro-commodity export house with direct grower partnerships and automated grain elevator terminals across India.',
  },
  {
    id: 'summit',
    name: 'Summit Commercial',
    logo: '/images/partner/sumcom-logo1.png',
    alt: 'Summit Commercial Logo',
    tagline: 'Global Commodity Trading Powerhouse',
    category: 'Institutional Bulk Commodity Trade',
    origin: 'Singapore / Global Hubs',
    description: 'Global institutional commodity trading partner supplying high-volume dry bulk agricultural commodities, pulses, and oilseeds.',
  },
  {
    id: 'saa',
    name: 'SAA EXIM Pvt. LTD.',
    logo: '/images/partner/partner-saa.png',
    alt: 'SAA EXIM Pvt. LTD. Logo',
    tagline: 'Export & Import Excellence',
    category: 'International Trade & EXIM Logistics',
    origin: 'South Asia & Global Corridors',
    description: 'Premier export-import enterprise and trade logistics partner orchestrating bulk agricultural shipments, customs bonded clearance, and cross-border container transit.',
  },
  {
    id: 'tufaah',
    name: 'Tufaah Agri Fresh Pvt Ltd',
    logo: '/images/partner/partner-tufaah-clean.png',
    fallbackLogo: '/images/partner/partner-tufaah.png',
    alt: 'Tufaah Agri Fresh - Farming Today for a Fresher Tomorrow',
    tagline: 'Farming Today for a Fresher Tomorrow',
    category: 'Fresh Produce & Cold-Chain Logistics',
    origin: 'Farm-Direct Orchards',
    description: 'Pioneering horticultural grower and packhouse operator supplying export-grade fresh apples, citrus, and seasonal perishables backed by temperature-controlled cold-chain transit.',
  },
]

const CLIENT_FEEDBACK = [
  {
    id: 1,
    name: 'Tariqul Islam',
    role: 'Managing Director',
    company: 'Bengal Roller Flour Mills',
    avatar: '/images/client-avatar-1.jpg',
    rating: 5,
    tag: 'Milling Wheat Procurement',
    quote:
      'AniEnterprise has consistently supplied our Narayanganj milling plants with certified Canadian and Indian wheat. Protein counts and moisture specifications consistently match testing certificates with zero shipment delays.',
    metrics: '60,000+ MT Annual Procurement',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'VP of Procurement',
    company: 'Meghna Agro & Feed Industries',
    avatar: '/images/client-avatar-2.jpg',
    rating: 5,
    tag: 'Yellow Maize & Oilseeds',
    quote:
      'In high-volume feed production, supply consistency is mission-critical. AniEnterprise’s expedited border customs clearance across Benapole and Hili land ports has eliminated downtime across our processing lines.',
    metrics: '99.4% On-Time Discharge',
  },
  {
    id: 3,
    name: 'Farhana Akhtar',
    role: 'Supply Chain Director',
    company: 'Chattogram Commodity Group',
    avatar: '/images/client-avatar-3.jpg',
    rating: 5,
    tag: 'Bulk Vessel Charters',
    quote:
      'Direct vessel allocations discharging into Chattogram port have drastically cut our demurrage exposure. Their transparent price hedging and sanitary compliance make them our most dependable agro partner.',
    metrics: 'Multi-Year Supply Alliance',
  },
  {
    id: 4,
    name: 'Al-Haj Shamsul Huda',
    role: 'Chairman',
    company: 'Huda Agro Wholesale & Food Trade',
    avatar: '/images/client-avatar-1.jpg',
    rating: 5,
    tag: 'Non-Basmati & Parboiled Rice',
    quote:
      'Sourcing premium non-basmati parboiled rice and food grains directly from primary mill elevators in India through AniEnterprise has given us an unmatched competitive edge across northern Bangladesh wholesale markets.',
    metrics: '45,000+ MT Grain Handled',
  },
  {
    id: 5,
    name: 'Kazi Tanvir Ahmed',
    role: 'Director of Sourcing',
    company: 'Northern Agro Processing Ltd.',
    avatar: '/images/client-avatar-2.jpg',
    rating: 5,
    tag: 'Fresh Produce & Cold-Chain',
    quote:
      'Temperature-controlled reefer transit for fresh apples and horticultural perishables has kept transit spoilage below 0.8%. Their origin pre-cooling and phytosanitary documentation are always impeccably handled.',
    metrics: '< 0.8% Transit Loss Rate',
  },
  {
    id: 6,
    name: 'Rezaul Karim Chowdhury',
    role: 'Head of Commercial Trade',
    company: 'Delta Edible Oils & Grains',
    avatar: '/images/client-avatar-3.jpg',
    rating: 5,
    tag: 'Pulses & Industrial Oilseeds',
    quote:
      'Their direct procurement contracts with international grain houses allow us to lock in hedge pricing before seasonal spikes. Truly institutional reliability with personal executive responsiveness.',
    metrics: 'Handymax Vessel Allocation',
  },
]

// Duplicate list twice for completely seamless, non-stop continuous 60fps loop
const CONTINUOUS_FEEDBACK = [
  ...CLIENT_FEEDBACK,
  ...CLIENT_FEEDBACK,
]

export default function Partners() {
  const [activePartner, setActivePartner] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="partners" className="partners-skyline-section" aria-label="Our Partners and Client Feedback">
      {/* Reduced-Opacity Skyline Background Photo Blended with Site Palette */}
      <div className="partners-bg-skyline" aria-hidden="true" />
      <div className="partners-skyline-overlay" aria-hidden="true" />

      <div className="partners-skyline-container">
        {/* Top Header: Themed Pill Badge + Rich Gradient Accent Title */}
        <header className="partners-skyline-header">
          <div className="partners-badge">
            <span className="partners-badge-dot" />
            <span className="partners-badge-text">STRATEGIC ALLIANCES &amp; CLIENT TRUST</span>
          </div>

          <h2 className="partners-title">
            Our Trusted <span className="partners-title-accent">Global Partners</span>
          </h2>

          <p className="partners-subtitle">
            Direct procurement partnerships with premier international growers, certified grain elevator networks,
            and global logistics titans powering our nationwide supply chain.
          </p>
        </header>

        {/* Floating Pure-White Logo Banner (Reference Layout) */}
        <div className="partners-white-card" role="region" aria-label="Partners Directory">
          <div className="partners-logos-row">
            {PARTNERS.map((partner) => {
              const isActive = activePartner?.id === partner.id

              return (
                <div
                  key={partner.id}
                  className={`partner-logo-col ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActivePartner(partner)}
                  onMouseLeave={() => setActivePartner(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${partner.name} - ${partner.category}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActivePartner(isActive ? null : partner)
                    }
                  }}
                >
                  <div className="partner-logo-wrapper">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className={`partner-logo-img partner-img-${partner.id}`}
                      onError={(e) => {
                        if (partner.fallbackLogo) e.currentTarget.src = partner.fallbackLogo
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Micro identity hover pill with signature amber accent */}
                  <div className="partner-micro-info">
                    <span className="partner-micro-name">{partner.name}</span>
                    <span className="partner-micro-cat">{partner.category}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* trustedby: Client Feedback Showcase / Testimonials (Hidden by request; can be unhidden anytime) */}
        <div className="partners-feedback-block trustedby" id="trustedby" data-name="trustedby" aria-label="Client Testimonials Stream">
          <div className="feedback-section-header">
            <h3 className="feedback-section-title">
              Trusted by Leading <span className="feedback-title-accent">Milling &amp; Agro Enterprises</span>
            </h3>
          </div>

          {/* Continuous Infinite Marquee Viewport */}
          <div
            className="feedback-marquee-viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`feedback-marquee-track ${isPaused ? 'paused' : ''}`}>
              {CONTINUOUS_FEEDBACK.map((item, index) => (
                <article key={`${item.id}-marquee-${index}`} className="feedback-card">
                  <div className="feedback-card-top">
                    <div className="feedback-stars" aria-label={`${item.rating} out of 5 stars`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="star-icon">★</span>
                      ))}
                    </div>
                  </div>

                  <blockquote className="feedback-quote">
                    “{item.quote}”
                  </blockquote>

                  <div className="feedback-card-bottom">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="feedback-avatar-img"
                      loading="lazy"
                    />
                    <div className="feedback-author-info">
                      <h4 className="feedback-author-name">{item.name}</h4>
                      <p className="feedback-author-role">{item.role}</p>
                      <p className="feedback-author-company">{item.company}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
