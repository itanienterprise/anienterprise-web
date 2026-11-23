import { useState } from 'react'
import Navbar from '../components/Navbar'
import './About.css'

export default function About() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Toggle visibility of sections (set to true when ready)
  const showCharacters = false
  const showTestimonials = false

  // Team Characters
  const teamMembers = [
    {
      name: 'Engr. Md. Riyad Ahmed',
      role: 'Founder & Managing Director',
      category: 'Executive Leadership',
      avatar: '/images/avatar1.jpg',
      bio: 'Pioneered AniEnterprise’s direct origin sourcing model, establishing direct relationships with North American, Australian, and Asian grain elevators.',
      credentials: 'B.Sc. Engineering | 12+ Yrs Trade Experience',
    },
    {
      name: 'Tariqul Islam',
      role: 'Head of Global Grain Procurement',
      category: 'Origin Trading',
      avatar: '/images/avatar2.jpg',
      bio: 'Manages international forward contracts for Canadian red lentils, Australian milling wheat, and South American yellow corn.',
      credentials: 'Commodity Trading Specialist | Chicago Board of Trade Liaison',
    },
    {
      name: 'Shamsul Alam',
      role: 'Director of Seaport & Land Port Operations',
      category: 'Logistics Command',
      avatar: '/images/avatar3.jpg',
      bio: 'Oversees discharge and rapid customs clearances at Chattogram Port, Mongla, Benapole, and Hili land port customs corridors.',
      credentials: 'Port Operations Master | 15+ Yrs Customs Brokerage',
    },
    {
      name: 'Dr. Farhana Yasmin',
      role: 'Head of Phytosanitary & Quality Assurance',
      category: 'Inspection & Lab',
      avatar: '/images/avatar4.jpg',
      bio: 'Directs accredited pre-shipment sampling, laboratory moisture verification, and food safety compliance for industrial feed and flour mills.',
      credentials: 'Ph.D. Food Science & Agronomy | ISO 22000 Lead Auditor',
    },
  ]

  // Timeline for Conflict / History
  const milestones = [
    {
      year: '2014',
      title: 'The Challenge & The Spark',
      desc: 'Founded to fix broken domestic supply lines where millers suffered 30%+ middleman markups and erratic commodity moisture decay.',
    },
    {
      year: '2017',
      title: 'Direct Origin Elevator Agreements',
      desc: 'Secured exclusive primary grower contracts in Canada, Australia, and India, bypassing speculative multi-tier brokerage.',
    },
    {
      year: '2021',
      title: 'Cross-Border Port Velocity Network',
      desc: 'Formed dedicated break-bulk and container clearance corridors across Hili, Benapole, and Chattogram deep sea berths.',
    },
    {
      year: 'Present',
      title: 'National Food Security Pillar',
      desc: 'Now moving over 520,000+ Metric Tons annually, fueling Bangladesh’s premier flour mills, feed factories, and wholesale markets.',
    },
  ]

  // Solutions for The Resolution
  const solutions = [
    {
      title: 'Direct Origin Elevator Procurement',
      desc: 'Bypassing speculative brokers by contracting directly with vetted farmer cooperatives across Canada, Australia, India, and the Americas.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: 'Multi-Border Customs & Port Velocity',
      desc: 'Dedicated vessel handling teams at Chattogram Seaport combined with express bonded land transit through Hili and Benapole.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 17l2.5 3h15l2.5-3-4-1H6L2 17z" />
          <rect x="6" y="9" width="4" height="6" rx="0.5" />
          <line x1="8" y1="9" x2="8" y2="5" />
          <line x1="16" y1="9" x2="16" y2="5" />
        </svg>
      ),
    },
    {
      title: 'Phytosanitary & Lab Certified Purity',
      desc: 'Independent SGS & Bureau Veritas verified purity, guaranteed protein percentages, and zero tolerance for mold or moisture excess.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      title: 'Just-In-Time Silo & Mill Delivery',
      desc: 'Strategic buffer storage warehouses along major highway arteries, ensuring domestic flour and feed mills never face shutdown.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18v-8a2 2 0 0 0-2-2h-3V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4H5a2 2 0 0 0-2 2v8z" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      ),
    },
  ]

  // Dialogue Testimonials
  const testimonials = [
    {
      quote:
        'AniEnterprise eliminated our wheat supply disruptions. Vessel demurrage used to strangle our mills; now deliveries arrive with laboratory-verified moisture on exact schedule.',
      author: 'Kazi Mahbubur Rahman',
      company: 'Managing Director, Meghna Flour Mills Consortium',
      avatar: '/images/client-avatar-1.jpg',
    },
    {
      quote:
        'Their yellow pea bran and Australian pulse imports are clean, consistent, and competitively priced. We consider AniEnterprise our foremost strategic supply partner.',
      author: 'Shahidul Hoque Chowdhury',
      company: 'Procurement Director, Northern Feed & Agro Industries',
      avatar: '/images/client-avatar-2.jpg',
    },
    {
      quote:
        'A rare trade partner that understands port dynamics inside out. From customs declaration to bonded clearance, they handle high tonnage without delay.',
      author: 'Captain Anisur Rahman',
      company: 'Executive Director, Bengal Maritime Logistics',
      avatar: '/images/client-avatar-3.jpg',
    },
  ]

  // 5 Operational Branches (Bogura positioned in the center)
  const branches = [
    {
      name: 'Chattogram',
      role: 'Seaport Logistics Terminal',
      image: '/images/branch-chattogram.jpg',
    },
    {
      name: 'Benapole',
      role: 'Land Port Customs Corridor',
      image: '/images/branch-benapole.jpg',
    },
    {
      name: 'Bogura',
      role: 'Corporate HQ & Trade Desk',
      image: '/images/branch-bogura.jpg',
    },
    {
      name: 'Hili',
      role: 'North Border Clearing Desk',
      image: '/images/branch-hili.jpg',
    },
    {
      name: 'Bhomra',
      role: 'Land Port Customs Desk',
      image: '/images/branch-bhomra.jpg',
    },
  ]

  return (
    <div className="about-page-wrapper">
      <Navbar variant="solid" />

      <main className="about-page-container">
        {/* ==========================================================================
            TOP SHOWCASE (ABOUT US HERO, STATS, PILLARS, & BRANCHES)
            ========================================================================== */}
        <section className="top-showcase-section" aria-label="About AniEnterprise Overview">
          {/* Main Top Header */}
          <div className="top-showcase-header">
            <div className="about-sec-badge">
              <img
                src="/images/ani-gold-emblem.png"
                alt="AniEnterprise Emblem"
                className="about-sec-badge-icon"
              />
              <span className="about-sec-badge-text">About AniEnterprise</span>
            </div>
            <h1 className="top-showcase-title-main">ABOUT US</h1>
          </div>

          {/* Two-Column Intro & Media Collage */}
          <div className="top-intro-grid">
            <div className="top-intro-narrative">
              <h2 className="top-intro-heading">
                Introduction to the Foremost Global Agricultural &amp; Commodity Trade
              </h2>
              <p className="top-intro-desc">
                So every agro enterprise, flour mill, and feed manufacturer can operate with total
                confidence. Backed by years of experience and multiple strategic border branches,
                we are committed to consistency, reliability, and customer satisfaction, making us a
                trusted national destination for premium agricultural commodities.
              </p>
              <p className="top-intro-desc">
                At AniEnterprise, we are passionate about empowering domestic food security at every
                level. With a comprehensive portfolio of bulk milling wheat, red lentils, chickpeas,
                yellow corn, wheat bran, and farm-fresh produce, we proudly serve industrial processors,
                wholesale merchants, and domestic distributors alike. Our carefully vetted shipments
                are sourced directly from global growers for certified quality, durability, and
                peak nutritional performance.
              </p>
            </div>

            {/* Photo Collage Showcase (Pure Image Field) */}
            <div className="top-media-collage">
              <div className="top-media-main-card">
                <img
                  src="/images/about-intro-hero.jpg"
                  alt="AniEnterprise Global Agricultural Commodity Sourcing and Grain Logistics"
                  className="top-media-main-img"
                />
              </div>

              {/* Floating Overlapping Photo Card */}
              <div className="top-media-floating-card">
                <img
                  src="/images/about-floating-card.jpg"
                  alt="Quality Hand Inspection of Grain Harvest"
                  className="top-media-floating-img"
                />
              </div>
            </div>
          </div>

          {/* Horizontal Elongated Stats Pill Bar */}
          <div className="top-stats-pill-bar">
            <div className="top-stat-col">
              <span className="top-stat-num">520K+</span>
              <span className="top-stat-label">Metric Tons Annual Bulk Volume</span>
            </div>
            <div className="top-stat-col">
              <span className="top-stat-num">10+</span>
              <span className="top-stat-label">Years of Proven Trade Experience</span>
            </div>
            <div className="top-stat-col">
              <span className="top-stat-num">5,000+</span>
              <span className="top-stat-label">Industrial Clients &amp; Wholesale Partners</span>
            </div>
          </div>

          {/* ==========================================================================
              MESSAGE FROM MANAGING DIRECTOR (AFTER STATS) - Named "md desk"
              Hidden by request; can be unhidden anytime
              ========================================================================== */}
          <div className="md-message-section md-desk mddesk" id="md-desk" data-name="md desk" aria-label="Message from Managing Director">
            <div className="md-message-layout">
              {/* Left Column: Narrative, Handwritten Quote & Signature */}
              <div className="md-message-content">
                <div className="md-badge-wrap">
                  <div className="about-sec-badge">
                    <img
                      src="/images/ani-gold-emblem.png"
                      alt="AniEnterprise Emblem"
                      className="about-sec-badge-icon"
                    />
                    <span className="about-sec-badge-text">Managing Director's Desk</span>
                  </div>
                </div>

                <h2 className="md-message-title">
                  <span>Message from our </span>
                  <span className="title-orange">Managing Director</span>
                </h2>

                <p className="md-handwriting-quote">
                  “Building trust with every grain, fueling national prosperity with every shipment.”
                </p>

                <p className="md-message-p">
                  Welcome to <strong>AniEnterprise</strong>. From our inception, our guiding purpose has
                  been clear: to bridge the vast distances between the world’s most fertile harvest
                  fields and Bangladesh’s rapidly evolving industrial food processors, flour mills, and
                  poultry feed manufacturers.
                </p>

                <p className="md-message-p">
                  International commodity trade requires more than just logistics—it demands
                  <strong> steadfast integrity, precision laboratory grading, and relentless accountability</strong>.
                  Whether discharging Panamax vessels at Chattogram Port or coordinating cross-border
                  customs at Hili and Benapole, our team works tirelessly to safeguard your supply
                  resilience and deliver uncompromised value.
                </p>

                <p className="md-message-p">
                  We are deeply grateful to our clients, growers, and trade partners across five
                  continents. Together, we are building a more secure and nourished future.
                </p>

                {/* Handwritten Signature Block */}
                <div className="md-signature-block">
                  <div className="md-handwritten-signature">Anil Kumar Poddar</div>
                  <span className="md-sign-role">Managing Director, AniEnterprise</span>
                </div>
              </div>

              {/* Right Column: Managing Director Photo (Full Height with Smooth Fade) */}
              <div className="md-photo-column">
                <div className="md-photo-card">
                  <img
                    src="/images/anil-kumar-poddar.jpg"
                    alt="Anil Kumar Poddar - Managing Director, AniEnterprise"
                    className="md-photo-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Three Feature Pillar Cards (Quality, Variety, Trust) - Under Managing Director Message */}
          <div className="top-features-row">
            <div className="top-feature-card quality">
              <div className="top-feature-icon-badge orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="top-feature-body">
                <h3 className="top-feature-title">Quality</h3>
                <p className="top-feature-text">
                  Our commitment to quality ensures every grain, pulse, and produce lot performs
                  strictly to laboratory specifications and food safety standards.
                </p>
              </div>
            </div>

            <div className="top-feature-card variety">
              <div className="top-feature-icon-badge blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div className="top-feature-body">
                <h3 className="top-feature-title">Variety</h3>
                <p className="top-feature-text">
                  A multi-origin portfolio encompassing Canadian wheat, Australian lentils, Indian
                  staples, and farm-fresh produce tailored to domestic industrial requirements.
                </p>
              </div>
            </div>

            <div className="top-feature-card trust">
              <div className="top-feature-icon-badge dark">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="top-feature-body">
                <h3 className="top-feature-title">Trust</h3>
                <p className="top-feature-text">
                  Transparent contracts, vessel demurrage mitigation, and dedicated port dispatchers
                  ensure your supplies land on budget and on schedule every time.
                </p>
              </div>
            </div>
          </div>

          {/* OUR BRANCHES Section */}
          <div className="top-branches-section">
            <h2 className="top-branches-title">OUR BRANCHES</h2>
            <p className="top-branches-subtitle">
              With branches across the region, we make it easy for you to access our products and
              services, providing convenience and quality wherever you go.
            </p>

            <div className="top-branches-grid">
              {branches.map((branch) => (
                <div key={branch.name} className="top-branch-card">
                  <div className="top-branch-img-box">
                    <img
                      src={branch.image}
                      alt={`AniEnterprise ${branch.name} branch`}
                      className="top-branch-img"
                      loading="lazy"
                    />
                  </div>
                  <span className="top-branch-name">{branch.name}</span>
                  <span className="top-branch-role">{branch.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ==========================================================================
            1. TOP: VALUES & MISSION (MINI-MANIFESTO)
            ========================================================================== */}
        <section className="manifesto-section" aria-label="Values and Mini-Manifesto">
          <div className="about-sec-header">
            <div className="about-sec-badge">
              <img
                src="/images/ani-gold-emblem.png"
                alt="AniEnterprise Emblem"
                className="about-sec-badge-icon"
              />
              <span className="about-sec-badge-text">Values &amp; Mini-Manifesto</span>
            </div>

            <h1 className="about-sec-title">
              <span className="title-dark">The Creed That Fuels </span>
              <span className="title-orange">Our Journey</span>
            </h1>

            <p className="about-sec-subtitle">
              We stand as the vital link between the world’s most fertile harvest basins and
              Bangladesh’s thriving domestic milling, feed, and food manufacturing industries.
            </p>
          </div>

          <div className="manifesto-box">
            <blockquote className="manifesto-lead">
              “To ensure no mill stands idle and no community faces scarcity by delivering
              <span className="manifesto-lead-highlight"> uncompromised bulk agricultural commodities </span>
              with radical origin transparency, certified purity, and resilient port-to-market speed.”
            </blockquote>

            <div className="manifesto-values-grid">
              <div className="manifesto-value-card">
                <div className="manifesto-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h2 className="manifesto-value-title">Origin Transparency</h2>
                <p className="manifesto-value-text">
                  Direct grain elevator contracting eliminates speculative markups and assures single-origin traceability.
                </p>
              </div>

              <div className="manifesto-value-card">
                <div className="manifesto-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h2 className="manifesto-value-title">National Food Security</h2>
                <p className="manifesto-value-text">
                  Maintaining steady reserve lines of milling wheat, lentils, corn, and staples against global price shocks.
                </p>
              </div>

              <div className="manifesto-value-card">
                <div className="manifesto-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h2 className="manifesto-value-title">Logistics Velocity</h2>
                <p className="manifesto-value-text">
                  Rapid vessel discharge and expedited border clearances reduce demurrage penalties to industry lows.
                </p>
              </div>

              <div className="manifesto-value-card">
                <div className="manifesto-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <h2 className="manifesto-value-title">Uncompromising Quality</h2>
                <p className="manifesto-value-text">
                  Strict moisture, protein, and phytosanitary grading guaranteed through third-party certified labs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. THE CHARACTERS (WHO IS BEHIND THIS BRAND?) - HIDDEN FOR NOW
            ========================================================================== */}
        {showCharacters && (
          <section className="characters-section" aria-label="The Characters Behind AniEnterprise">
            <div className="about-sec-header">
              <div className="about-sec-badge">
                <span className="about-sec-badge-text">The Characters</span>
              </div>

              <h2 className="about-sec-title">
                <span className="title-dark">Who Is Behind </span>
                <span className="title-orange">This Brand?</span>
              </h2>

              <p className="about-sec-subtitle">
                Meet the commodity trading experts, logistics commanders, and quality inspectors
                driving AniEnterprise’s global operations day in and day out.
              </p>
            </div>

            <div className="characters-grid">
              {teamMembers.map((member) => (
                <article key={member.name} className="character-card">
                  <div className="character-img-wrap">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="character-img"
                      loading="lazy"
                    />
                    <span className="character-badge-floating">{member.category}</span>
                  </div>
                  <div className="character-info">
                    <h3 className="character-name">{member.name}</h3>
                    <span className="character-role">{member.role}</span>
                    <p className="character-bio">{member.bio}</p>
                    <a
                      href="#contact"
                      className="character-link"
                      title={`Connect with ${member.name}`}
                    >
                      <span>Connect with Team</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ==========================================================================
            3. THE CONFLICT (WHY DID WE START THIS COMPANY?)
            ========================================================================== */}
        <section className="conflict-section" aria-label="The Conflict and Origins">
          <div className="about-sec-header">
            <div className="about-sec-badge">
              <span className="about-sec-badge-text">The Conflict</span>
            </div>

            <h2 className="about-sec-title">
              <span className="title-dark">Why Did We Start </span>
              <span className="title-orange">This Company?</span>
            </h2>

            <p className="about-sec-subtitle">
              The agro-import industry was plagued by speculative broker layers, unpredictable
              shipment delays, and quality degradation. We set out to rewrite the rules.
            </p>
          </div>

          <div className="conflict-layout">
            <div className="conflict-visual-wrap">
              <img
                src="/images/advantage-origin.jpg"
                alt="Agricultural grain harvest fields"
                className="conflict-main-img"
              />
              <div className="conflict-floating-card">
                <div className="conflict-floating-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <div className="conflict-floating-stat">10+ Years</div>
                  <div className="conflict-floating-label">Overcoming market volatility with resilient supply</div>
                </div>
              </div>
            </div>

            <div className="conflict-narrative">
              <p className="conflict-story-p">
                A decade ago, Bangladeshi flour millers, feed producers, and food manufacturers
                faced severe market pain: <strong>uncontrollable grain price volatility</strong>,
                arbitrary cargo rejections due to excessive container humidity, and extortionate
                demurrage fees at congested ports.
              </p>
              <p className="conflict-story-p">
                We realized the root conflict was intermediary hoarding and detached paper trading.
                AniEnterprise was born out of a relentless passion to establish <strong>hands-on origin sourcing</strong>,
                putting our inspectors directly at foreign farm elevators and chartered sea vessels.
              </p>

              <div className="conflict-timeline">
                {milestones.map((item) => (
                  <div key={item.year} className="conflict-milestone">
                    <div className="milestone-dot" />
                    <div className="milestone-year">{item.year}</div>
                    <h3 className="milestone-title">{item.title}</h3>
                    <p className="milestone-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            4. THE RESOLUTION (WHAT PROBLEM DO WE SOLVE? HOW?)
            ========================================================================== */}
        <section className="resolution-section" aria-label="The Resolution and Value Proposition">
          <div className="about-sec-header">
            <div className="about-sec-badge">
              <span className="about-sec-badge-text">The Resolution</span>
            </div>

            <h2 className="about-sec-title">
              <span className="title-dark">What Problem Do We Solve? </span>
              <span className="title-orange">How?</span>
            </h2>

            <p className="about-sec-subtitle">
              We replace supply uncertainty with predictable bulk pricing, certified grain purity,
              and dedicated port-to-factory multi-border logistics.
            </p>
          </div>

          <div className="resolution-layout">
            <div className="resolution-left-card">
              <div>
                <span className="resolution-badge">Definitive Value Proposition</span>
                <h3 className="resolution-val-title">
                  Guaranteed Supply Integrity From Origin Elevator To Domestic Mill Gate
                </h3>
                <p className="resolution-val-desc">
                  By controlling contracting, phytosanitary certifications, charter shipping, and
                  bonded land port clearing in-house, AniEnterprise eliminates third-party risks
                  and passes maximum cost savings to industrial clients.
                </p>
              </div>

              <div className="resolution-proof-grid">
                <div className="proof-item">
                  <span className="proof-num">520K+</span>
                  <span className="proof-label">Metric Tons Annual Volume</span>
                </div>
                <div className="proof-item">
                  <span className="proof-num">100%</span>
                  <span className="proof-label">Origin Quality Certified</span>
                </div>
                <div className="proof-item">
                  <span className="proof-num">99.4%</span>
                  <span className="proof-label">On-Time Port Discharges</span>
                </div>
                <div className="proof-item">
                  <span className="proof-num">5,000+</span>
                  <span className="proof-label">Satisfied Wholesale Clients</span>
                </div>
              </div>
            </div>

            <div className="resolution-solutions-list">
              {solutions.map((sol) => (
                <div key={sol.title} className="solution-card">
                  <div className="solution-icon-box">{sol.icon}</div>
                  <div className="solution-content">
                    <h3 className="solution-title">{sol.title}</h3>
                    <p className="solution-desc">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            5. THE SEQUEL (WHAT IS OUR VISION FOR THE FUTURE?)
            ========================================================================== */}
        <section className="sequel-section" aria-label="The Sequel - Vision for the Future">
          <div className="about-sec-header">
            <div className="about-sec-badge">
              <span className="about-sec-badge-text">The Sequel</span>
            </div>

            <h2 className="about-sec-title">
              <span className="title-dark">What Is Our Vision </span>
              <span className="title-orange">For The Future?</span>
            </h2>

            <p className="about-sec-subtitle">
              Pioneering tomorrow’s sustainable, technology-driven agro trade corridors to fortify
              food security across South Asia.
            </p>
          </div>

          <div className="sequel-layout">
            <div className="sequel-narrative">
              <h3 className="sequel-pov">
                “We envision a frictionless South Asian agricultural grid where trade barriers vanish
                and <span className="sequel-pov-highlight">nutritional abundance is guaranteed.</span>”
              </h3>

              <p className="sequel-p">
                As global climate variability intensifies and geopolitical trade dynamics evolve,
                AniEnterprise is strategically investing in the infrastructure of tomorrow. We are
                expanding automated bulk grain terminals, cold-chain storage facilities, and
                algorithmic commodity forecasting.
              </p>

              <div className="sequel-pillars">
                <div className="sequel-pillar-item">
                  <span className="sequel-check">✓</span>
                  <div className="sequel-pillar-text">
                    <strong>Green Multimodal Transit:</strong> Shifting bulk cargo to fuel-efficient
                    coastal vessels and electrified rail corridors to cut freight emissions by 35%.
                  </div>
                </div>

                <div className="sequel-pillar-item">
                  <span className="sequel-check">✓</span>
                  <div className="sequel-pillar-text">
                    <strong>Predictive AI Commodity Modeling:</strong> Giving domestic millers
                    actionable harvest yield projections to lock in contracts before price surges.
                  </div>
                </div>

                <div className="sequel-pillar-item">
                  <span className="sequel-check">✓</span>
                  <div className="sequel-pillar-text">
                    <strong>Cold-Chain &amp; Fresh Produce Corridors:</strong> Specialized reefer
                    networks to minimize post-harvest fruit and vegetable spoilage nationwide.
                  </div>
                </div>
              </div>
            </div>

            <div className="sequel-visual-wrap">
              <img
                src="/images/about-vision.jpg"
                alt="AniEnterprise future agricultural vision"
                className="sequel-img"
              />
              <div className="sequel-floating-tag">
                <span className="sequel-tag-dot" />
                <span>2030 Sustainability Target Active</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            6. THE DIALOGUE (WHAT DO WE SOUND LIKE? VIDEO & VOICES)
            ========================================================================== */}
        <section className="dialogue-section" aria-label="The Dialogue - Video Feature">
          <div className="about-sec-header">
            <div className="about-sec-badge">
              <span className="about-sec-badge-text">The Dialogue</span>
            </div>

            <h2 className="about-sec-title">
              <span className="title-dark">What Do We </span>
              <span className="title-orange">Sound Like?</span>
            </h2>

            <p className="about-sec-subtitle">
              Authentic, grounded, and industry-proven. Watch our operational documentary exploring
              the voyage of bulk commodities from global harvest origins to Bangladesh ports.
            </p>
          </div>

          <div className={`dialogue-layout ${!showTestimonials ? 'dialogue-layout-single' : ''}`}>
            {/* Left: Video Showcase Card */}
            <div className="dialogue-video-card">
              <img
                src="/images/slider-ocean-freight.jpg"
                alt="Bulk cargo vessel in transit"
                className="dialogue-video-thumbnail"
              />
              <div className="dialogue-video-overlay" />

              <button
                type="button"
                className="dialogue-play-center"
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Play About Us documentary video"
              >
                <div className="play-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span className="play-label">Watch Documentary (03:45)</span>
              </button>

              <div className="dialogue-video-bottom">
                <span className="dialogue-video-tag">Documentary Feature</span>
                <h3 className="dialogue-video-headline">
                  The Journey of the Harvest: From Global Elevators to Bangladesh Ports
                </h3>
              </div>
            </div>

            {/* Right: Voices from the Field (Testimonials - Hidden for now) */}
            {showTestimonials && (
              <div className="dialogue-voices-column">
                {testimonials.map((t) => (
                  <div key={t.author} className="voice-card">
                    <div className="voice-quote-mark">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="voice-quote-text">“{t.quote}”</p>
                    <div className="voice-author-row">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="voice-avatar"
                        loading="lazy"
                      />
                      <div className="voice-author-info">
                        <span className="voice-author-name">{t.author}</span>
                        <span className="voice-author-org">{t.company}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Video Modal Preview */}
      {isVideoModalOpen && (
        <div
          className="about-video-modal-overlay"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="about-video-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="about-video-modal-close"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close video preview"
            >
              ✕
            </button>
            <div className="about-video-modal-body">
              <div style={{ marginBottom: '1.5rem', color: '#fbbf24' }}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                AniEnterprise: Inside Global Agro Logistics
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 540, margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                A cinematic look into our bulk vessel stevedoring at Chattogram Seaport, phytosanitary
                inspections at grain elevators, and multi-border road transit to Bangladesh flour &amp; feed mills.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button
                  type="button"
                  className="credits-btn-primary"
                  onClick={() => setIsVideoModalOpen(false)}
                >
                  Return to Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
