import { useState } from 'react'
import './AboutUs.css'

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('about')

  const stats = [
    {
      id: 'work',
      number: '200+',
      label: 'We deliver great work always',
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      trend: (
        <svg width="34" height="14" viewBox="0 0 34 14" fill="none">
          <path
            d="M1 10h24l7-4"
            stroke="#d97706"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'experience',
      number: '10+',
      label: 'Experience you can count on',
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="3" ry="3" />
          <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
          <line x1="12" y1="12" x2="12" y2="12.01" />
        </svg>
      ),
      trend: (
        <svg width="34" height="14" viewBox="0 0 34 14" fill="none">
          <path
            d="M1 12l11-8 8 5 11-7"
            stroke="#d97706"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 2h4v4"
            stroke="#d97706"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'awards',
      number: '20+',
      label: 'Award-Winning Work, Trusted Results',
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      ),
      trend: (
        <svg width="34" height="14" viewBox="0 0 34 14" fill="none">
          <path
            d="M1 10c9-2 15-8 30-8"
            stroke="#d97706"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M27 2h4v4"
            stroke="#d97706"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'clients',
      number: '5K+',
      label: 'We have happy Clients worldwide',
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      trend: (
        <svg width="34" height="14" viewBox="0 0 34 14" fill="none">
          <path
            d="M1 9c7 6 13-6 19 0s8-4 13-7"
            stroke="#0284c7"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        {/* Top Header Badge, Title & Subtitle */}
        <div className="about-header">
          <div className="about-badge">
            <img
              src="/images/ani-gold-emblem.png"
              alt="AniEnterprise Emblem"
              className="about-badge-icon"
            />
            <span className="about-badge-text">About Us</span>
          </div>

          <h2 className="about-title">
            <span className="about-title-dark">Learn </span>
            <span className="about-title-orange">About</span>
            <span className="about-title-dark"> us</span>
          </h2>

          <p className="about-subtitle">
            From multi-country farms to local wholesale markets—delivering high-grade rice,
            lentils, wheat, and farm-fresh produce through seamless sea and land port logistics.
          </p>
        </div>

        {/* Content Row: Custom Shaped Visual Left, Dynamic Tabbed Content Right */}
        <div className="about-main-layout">
          {/* Left Column: Visual Container (Pure Logo in default tab, Team Photo in Mission/Vision) */}
          <div className="about-visual-column">
            {activeTab === 'about' ? (
              <div className="about-standalone-logo-wrap tab-fade-in">
                <div className="about-standalone-logo-glow" />
                <img
                  src="/images/ani-gold-emblem.png"
                  alt="AniEnterprise Official Emblem"
                  className="about-standalone-logo-img"
                />
              </div>
            ) : (
              <div className="about-photo-wrapper tab-fade-in" key={activeTab}>
                <svg
                  className="about-photo-svg"
                  viewBox="0 0 640 510"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label={
                    activeTab === 'mission'
                      ? 'AniEnterprise Agricultural Grain & Food Commodity Supply'
                      : 'AniEnterprise Farm-Fresh Fruits & Produce Trade'
                  }
                >
                  <defs>
                    <clipPath id="aboutShapeCutout">
                      <path d="M 10 42 A 32 32 0 0 1 42 10 L 340 10 C 370 10 370 65 400 65 L 598 65 A 32 32 0 0 1 630 97 L 630 468 A 32 32 0 0 1 598 500 L 400 500 C 370 500 370 445 340 445 L 42 445 A 32 32 0 0 1 10 413 L 10 42 Z" />
                    </clipPath>
                  </defs>

                  <image
                    href={
                      activeTab === 'mission'
                        ? '/images/about-mission.jpg'
                        : '/images/about-vision.jpg'
                    }
                    x="10"
                    y="10"
                    width="620"
                    height="490"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#aboutShapeCutout)"
                  />

                  {/* Crisp signature dark border frame for photo */}
                  <path
                    d="M 10 42 A 32 32 0 0 1 42 10 L 340 10 C 370 10 370 65 400 65 L 598 65 A 32 32 0 0 1 630 97 L 630 468 A 32 32 0 0 1 598 500 L 400 500 C 370 500 370 445 340 445 L 42 445 A 32 32 0 0 1 10 413 L 10 42 Z"
                    fill="none"
                    stroke="#1e232d"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Panel (Stats / Mission / Vision) & Glassmorphic Action Buttons */}
          <div className="about-content-column">
            {/* Display Area: Dynamically switches content right here */}
            <div className="about-display-area">
              {activeTab === 'about' && (
                <div className="about-stats-grid tab-fade-in">
                  {stats.map((item) => (
                    <div key={item.id} className="about-stat-card">
                      <div className="about-stat-top-row">
                        <div className="about-stat-header">
                          <div className="about-stat-icon-box">{item.icon}</div>
                          <span className="about-stat-number">{item.number}</span>
                        </div>
                        {item.trend && (
                          <div className="about-stat-trend">{item.trend}</div>
                        )}
                      </div>
                      <p className="about-stat-label">{item.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="about-statement-card tab-fade-in">
                  <div className="statement-header">
                    <div className="statement-badge">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                      <span>Our Mission</span>
                    </div>
                    <h3 className="statement-title">
                      Our Purpose &amp; Commitment
                    </h3>
                  </div>

                  <p className="statement-desc statement-desc-direct">
                    Our mission is to fortify Bangladesh’s food security and empower the country's
                    milling, poultry, and food processing industries by establishing a direct,
                    resilient bridge between international agricultural hubs and the domestic
                    market. We are dedicated to procuring essential staples—from staple wheat and
                    high-protein lentils like red lentils, mung dal, chick peas, black matpe, and
                    khesari dal, to crucial agro-byproducts such as wheat bran, yellow pea bran, and
                    in-shell groundnuts, alongside farm-fresh fruits and seasonal
                    vegetables—directly from trusted global growers. By exercising rigorous
                    oversight over sanitary standards, phytosanitary certifications, and rapid
                    clearance through Bangladesh's primary maritime container terminals and land
                    ports, we eliminate supply bottlenecks and preserve batch integrity. We strive to
                    be the most dependable procurement partner for feed millers, wholesale
                    distributors, and food manufacturers nationwide, consistently delivering
                    uncompromised bulk commodities with transparent trade operations, competitive
                    value, and steadfast reliability at scale.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="about-statement-card tab-fade-in">
                  <div className="statement-header">
                    <div className="statement-badge">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>Our Vision</span>
                    </div>
                    <h3 className="statement-title">
                      Shaping the Future of Agricultural Trade
                    </h3>
                  </div>

                  <p className="statement-desc statement-desc-direct">
                    To stand as Bangladesh’s most reliable bridge between global agricultural
                    origins and domestic enterprise, pioneering excellence in international commodity
                    sourcing and port logistics. We envision a connected trade network where poultry
                    farms, feed mills, industrial processors, and wholesale merchants experience
                    uninterrupted access to the world’s harvest. Through transparent operations,
                    unwavering quality standards, and resilient multi-border clearing capabilities,
                    our goal is to anchor national food stability and set the benchmark for
                    cross-border agro commerce.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Actions Row: Centered across the full page */}
        <div className="about-actions-row">
          <button
            type="button"
            className={`about-glass-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <span>More About Us</span>
          </button>

          <button
            type="button"
            className={`about-glass-btn ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
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
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <span>Mission</span>
          </button>

          <button
            type="button"
            className={`about-glass-btn ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
          >
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
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Vision</span>
          </button>
        </div>
      </div>
    </section>
  )
}
