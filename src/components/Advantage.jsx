import React from 'react'
import './Advantage.css'

export default function Advantage({
  title = 'The AniEnterprise Advantage',
  subtitle = 'Powering domestic food processors, mills, and wholesale markets with direct global sourcing, certified sanitary quality, and resilient port-to-market logistics.',
}) {
  const advantages = [
    {
      id: 'global-origin',
      tag: 'Direct Origin',
      title: 'Direct Global Origin Sourcing',
      image: '/images/advantage-origin.jpg',
      imageAlt: 'Golden grain harvest fields with combine harvesters',
      description:
        'Direct procurement agreements with primary growers and grain elevators across Canada, Australia, India, and South America—eliminating intermediary markups and ensuring uncompromised bulk volume.',
      feature: 'Direct grower & elevator contracts',
      icon: (
        <svg
          className="advantage-card-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      id: 'port-logistics',
      tag: 'Port Clearance',
      title: 'Streamlined Port-to-Market Supply',
      image: '/images/advantage-port.jpg',
      imageAlt: 'Deep seaport terminal with cargo container ship and cranes',
      description:
        'Vessel-level handling and break-bulk logistics through Hili, Benapole, Bhomra, Sonamoszid, Chattogram and regional land ports, ensuring swift customs discharge and rapid delivery to domestic milling hubs.',
      feature: 'Hili, Benapole, Bhomra & land ports',
      icon: (
        <svg
          className="advantage-card-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 17l2.5 3h15l2.5-3-4-1H6L2 17z" />
          <rect x="6" y="9" width="4" height="6" rx="0.5" />
          <rect x="11" y="9" width="4" height="6" rx="0.5" />
          <rect x="16" y="11" width="3" height="4" rx="0.5" />
          <path d="M17.5 11V6h2v5" />
          <path d="M4 22c2-0.5 4-0.5 6 0s4 0.5 6 0 4-0.5 6 0" />
        </svg>
      ),
    },
    {
      id: 'quality-assurance',
      tag: 'Sanitary Standards',
      title: 'Strict Sanitary & Moisture Standards',
      image: '/images/advantage-quality.jpg',
      imageAlt: 'Agricultural food testing laboratory with grain moisture tester',
      description:
        'Every cargo consignment undergoes comprehensive lab inspection, moisture testing, and certified phytosanitary clearance to safeguard protein density and prevent post-harvest spoilage.',
      feature: 'Phytosanitary & lab-grade certified',
      icon: (
        <svg
          className="advantage-card-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 9" />
        </svg>
      ),
    },
    {
      id: 'b2b-fulfillment',
      tag: 'B2B Trade',
      title: 'Trusted Industrial B2B Partner',
      image: '/images/advantage-warehouse.jpg',
      imageAlt: 'High-volume agro commodity distribution warehouse with bagged grains',
      description:
        'Supplying feed millers, poultry integrators, food manufacturers, and wholesale commodity traders nationwide with high-volume contracts, consistent grading, and transparent trade terms.',
      feature: 'High-volume contract fulfillment',
      icon: (
        <svg
          className="advantage-card-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 17L13 19C13.6 19.6 14.5 19.6 15.1 19L19.2 14.9C19.8 14.3 19.8 13.4 19.2 12.8L17 10.6" />
          <path d="M13.8 13.8L15.4 15.4C16 16 16.9 16 17.5 15.4L18.8 14.1" />
          <path d="M3 11.2L7 7.2C7.8 6.4 9 6.4 9.8 7.2L12 9.4C12.8 10.2 14 10.2 14.8 9.4L16.2 8C17 7.2 17 6 16.2 5.2L15 4" />
          <path d="M2.5 11.8L5.2 14.5C6 15.3 7.2 15.3 8 14.5L9.5 13" />
          <path d="M18.8 9.2L21.2 11.6C22 12.4 22 13.6 21.2 14.4L19.5 16.1" />
        </svg>
      ),
    },
  ]

  return (
    <section id="advantage" className="advantage-section" aria-label="Company Advantages">
      <div className="advantage-container">
        {/* Top Header Area */}
        <div className="advantage-header">
          <div className="advantage-badge">
            <span className="advantage-badge-dot" />
            <span className="advantage-badge-text">Why Choose AniEnterprise</span>
          </div>

          <h2 className="advantage-title">{title}</h2>

          <p className="advantage-subtitle">{subtitle}</p>
        </div>

        {/* Center 4 Cards Grid Showcase with Center Alignment */}
        <div className="advantage-cards-wrapper">
          <div className="advantage-grid">
            {advantages.map((item, index) => (
              <article
                key={item.id}
                className="advantage-card"
                style={{ '--card-index': index }}
              >
                <div className="advantage-card-glow" />

                {/* Top Media Banner */}
                <div className="advantage-card-media">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="advantage-card-img"
                    loading="lazy"
                  />
                  <div className="advantage-media-overlay" />

                  {/* Top-Center Category Tag */}
                  <span className="advantage-media-tag">{item.tag}</span>
                </div>

                {/* Card Body: Centered Icon, Title, Description & Bottom Feature */}
                <div className="advantage-card-body">
                  {/* Floating Centered Icon Pill bridging image & text */}
                  <div className="advantage-body-icon-box" title={item.tag}>
                    {item.icon}
                  </div>

                  <h3 className="advantage-card-title">{item.title}</h3>
                  <p className="advantage-card-desc">{item.description}</p>

                  {/* Bottom Centered Feature Badge */}
                  <div className="advantage-card-feature">
                    <span className="advantage-feature-bullet">✦</span>
                    <span className="advantage-feature-text">{item.feature}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
