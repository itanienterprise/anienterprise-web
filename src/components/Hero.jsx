import { useState, useEffect } from 'react'
import './Hero.css'
import HeroSlider from './HeroSlider'
import Navbar from './Navbar'

const HERO_BACKGROUNDS = [
  '/images/slider-container-shipping.jpg',
  '/images/slider-global-harvest.jpg',
  '/images/slider-ocean-freight.jpg',
  '/images/slider-truck.jpg',
  '/images/slider-air-cargo.jpg',
  '/images/slider-warehouse.jpg',
]

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [prevBgIndex, setPrevBgIndex] = useState(null)
  // Preload initial slide 0 and prepare slide 1 for next transition to save initial bandwidth
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0, 1]))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((current) => {
        setPrevBgIndex(current)
        const next = (current + 1) % HERO_BACKGROUNDS.length
        setLoadedSlides((prev) => {
          const preloadedNext = (next + 1) % HERO_BACKGROUNDS.length
          if (prev.has(next) && prev.has(preloadedNext)) return prev
          const updated = new Set(prev)
          updated.add(next)
          updated.add(preloadedNext)
          return updated
        })
        return next
      })
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const handleSelectSlide = (index) => {
    if (index !== currentBgIndex) {
      setLoadedSlides((prev) => {
        const next = (index + 1) % HERO_BACKGROUNDS.length
        if (prev.has(index) && prev.has(next)) return prev
        const updated = new Set(prev)
        updated.add(index)
        updated.add(next)
        return updated
      })
      setPrevBgIndex(currentBgIndex)
      setCurrentBgIndex(index)
    }
  }

  const facilities = [
    ['Bulk Food Procurement', 'High-Volume Sourcing'],
    ['Wholesale Food Supply', 'B2B Agro Trade'],
    ['Direct Factory / Farm Sale'],
  ]

  const avatars = [
    '/images/avatar1.jpg',
    '/images/avatar2.jpg',
    '/images/avatar3.jpg',
    '/images/avatar4.jpg',
  ]

  return (
    <section className="hero-wrapper" id="home">
      {/* Background Slideshow with Lazy-Loaded Offscreen Slides */}
      <div className="hero-bg-slider-container">
        {HERO_BACKGROUNDS.map((src, index) => {
          let stateClass = 'inactive'
          if (index === currentBgIndex) {
            stateClass = 'current'
          } else if (index === prevBgIndex) {
            stateClass = 'previous'
          }

          const isLoaded = loadedSlides.has(index)
          if (!isLoaded && stateClass === 'inactive') {
            return null
          }

          return (
            <img
              key={src}
              src={src}
              alt="AniEnterprise Hero Background"
              className={`hero-bg-slide ${stateClass}`}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          )
        })}
      </div>
      <div className="hero-overlay" />

      {/* Top Navigation */}
      <Navbar variant="transparent" />

      {/* Main Hero Container */}
      <div className="hero-content">
        {/* Upper Row: Social Proof & Floating Glass Card */}
        <div className="hero-upper-row">
          {/* smallicon: 50K+ shipments delivered worldwide & avatars (Hidden by default; can be unhidden anytime) */}
          <div className="hero-social-proof smallicon" id="smallicon" data-name="smallicon">
            <div className="avatar-stack">
              {avatars.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Global Trade Partner ${index + 1}`}
                  className="avatar-item"
                />
              ))}
            </div>
            <p className="social-proof-text">
              50K+ shipments <br /> delivered worldwide
            </p>
          </div>

          <div className="hero-upper-right">
            <div className="glass-info-card">
              <h3 className="glass-info-title">Global Trade Hub</h3>
              <p className="glass-info-desc">
                Sourcing premium food commodities, grains, and perishables from verified global growers with guaranteed quality and border clearance.{' '}
                <a href="#products" className="glass-info-link">
                  Explore products
                </a>
              </p>
            </div>

            {/* Social Icons Strip */}
            <div className="social-vertical-strip" aria-label="Social links">
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61596283344481"
                className="social-icon-btn"
                aria-label="AniEnterprise Facebook Page"
                target="_blank"
                rel="noopener noreferrer"
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#linkedin" className="social-icon-btn" aria-label="LinkedIn">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#twitter" className="social-icon-btn" aria-label="Twitter">
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
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Center Headline */}
        <div className="hero-center-row">
          <h1 className="hero-main-title">
            <span className="hero-title-line">
              Your Trusted <span className="pill-badge">Gateway</span>
            </span>
            <span className="hero-title-line">
              For Global <span className="pill-badge accent">Food</span> Imports.
            </span>
          </h1>
        </div>

        {/* Bottom Row: Facilities & HeroSlider */}
        <div className="hero-bottom-row">
          {/* Facilities Left */}
          <div className="facilities-container">
            <h4 className="facilities-heading">Export & Import Solutions :</h4>
            <div className="facilities-tags-wrap">
              {facilities.map((row, rowIndex) => (
                <div key={rowIndex} className="facilities-tags-row">
                  {row.map((item) => (
                    <button key={item} type="button" className="facility-chip">
                      {item}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right: HeroSlider */}
          <div className="hero-bottom-right">
            <HeroSlider activeBgIndex={currentBgIndex} onSelectSlide={handleSelectSlide} />
          </div>
        </div>
      </div>
    </section>
  )
}
