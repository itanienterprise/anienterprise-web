import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { COMMODITY_PRODUCTS } from '../data/productsData'
import './Products.css'

// 7 Symmetrical Arc Positions in Fan Arc Arena
const ARC_SLOTS = [
  { rotation: -49, xOffset: -635, yOffset: 232, zIndex: 1 },
  { rotation: -35, xOffset: -430, yOffset: 92, zIndex: 2 },
  { rotation: -18, xOffset: -220, yOffset: 24, zIndex: 3 },
  { rotation: 0, xOffset: 0, yOffset: 0, zIndex: 5 },
  { rotation: 18, xOffset: 220, yOffset: 24, zIndex: 3 },
  { rotation: 35, xOffset: 430, yOffset: 92, zIndex: 2 },
  { rotation: 49, xOffset: 635, yOffset: 232, zIndex: 1 },
]

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0) // Start at item 0 (Lentils)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [catalogFilter, setCatalogFilter] = useState('All')

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % COMMODITY_PRODUCTS.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + COMMODITY_PRODUCTS.length) % COMMODITY_PRODUCTS.length)
  }

  // Swipe handling for mobile card navigation
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const diffX = touchStartX.current - e.changedTouches[0].clientX
    const diffY = touchStartY.current - e.changedTouches[0].clientY
    // Trigger if horizontal swipe is intentional without locking vertical scrolling
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
      if (diffX > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  // Close catalog modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCatalogOpen) {
        setIsCatalogOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCatalogOpen])

  // Filter products for the full catalogue modal
  const filteredCatalogProducts = COMMODITY_PRODUCTS.filter((product) => {
    if (catalogFilter === 'All') return true
    if (catalogFilter === 'Pulses & Dal') return product.category === 'Pulses & Dal'
    if (catalogFilter === 'Grains & Bran')
      return product.category === 'Essential Grain' || product.category === 'Staple Grain' || product.category === 'Feed & Agro By-Products'
    if (catalogFilter === 'Fresh Fruits')
      return product.category === 'Fresh Fruits' || product.category === 'Fresh & Dried Fruits'
    if (catalogFilter === 'Vegetables & Spices')
      return product.category === 'Fresh Vegetables' || product.category === 'Spices & Aromatics' || product.category === 'Oilseeds & Nuts'
    return true
  })

  const displayMetric = '520,480 MT'
  const displaySubtitle = 'Total Volume of Essential Agro Commodities Supplied Nationwide'
  const displayParagraph =
    'From multi-country port terminals directly to domestic mills, processors, and wholesale markets, AniEnterprise guarantees sanitary compliance, moisture preservation, and prompt logistics for high-volume orders.'


  return (
    <section id="products" className="products-section">
      <div className="products-container">
        {/* Top Header Badge & Titles */}
        <div className="products-header">
          <div className="products-top-row">
            <div className="products-badge">
              <img
                src="/images/ani-gold-emblem.png"
                alt="AniEnterprise Emblem"
                className="products-badge-icon"
              />
              <span className="products-badge-text">Our Products & Commodities</span>
            </div>
          </div>

          <h2 className="products-title">
            <span className="title-dark">More than </span>
            <span className="title-highlight">500,000 Metric Tons</span>
            <span className="title-dark"> supplied nationwide</span>
          </h2>

          <p className="products-header-subtitle">
            AniEnterprise connects prime agricultural origins with Bangladesh’s leading mills, food
            manufacturers, and wholesale markets through transparent, multi-port logistics.
          </p>
        </div>

        {/* The Arched / Fan Cards Arena */}
        <div
          className="products-fan-arena"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="cards-arc-wrapper">
            {COMMODITY_PRODUCTS.map((card, index) => {
              const count = COMMODITY_PRODUCTS.length
              let diff = index - activeIndex
              if (diff > Math.floor(count / 2)) diff -= count
              if (diff < -Math.floor(count / 2)) diff += count

              const isVisible = diff >= -3 && diff <= 3
              const slotIndex = isVisible ? diff + 3 : diff < -3 ? 0 : 6
              const slot = ARC_SLOTS[slotIndex]

              const rot = isVisible ? slot.rotation : diff < -3 ? -60 : 60
              const x = isVisible ? slot.xOffset : diff < -3 ? -820 : 820
              const y = isVisible ? slot.yOffset : 300
              const z = isVisible ? slot.zIndex : 0

              return (
                <div
                  key={card.id}
                  className={`arc-card-item ${isVisible ? 'card-visible' : 'card-hidden-offscreen'}`}
                  onClick={() => isVisible && setActiveIndex(index)}
                  style={{
                    '--rot': `${rot}deg`,
                    '--x': `${x}px`,
                    '--y': `${y}px`,
                    '--z': z,
                    '--card-bg': card.gradient,
                    '--shadow-color': card.shadowColor,
                    '--card-opacity': isVisible ? 1 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                    cursor: isVisible ? 'pointer' : 'default',
                  }}
                  aria-label={`${card.name} - ${card.spec}`}
                >
                  <div className="arc-card-inner">
                    {/* Realistic Product Image Layer */}
                    <div className="card-photo-container">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="card-product-img"
                        loading="lazy"
                      />
                      <div className="card-photo-shade" />
                    </div>



                    {/* Main Card Content: Only Product Name */}
                    <div className="card-body-content">
                      <div className="commodity-card-content">
                        <div className="commodity-main-title">{card.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Under-Arc Showcase: Big Stat, Subtitle & Descriptive Paragraph */}
          <div className="arc-center-showcase">
            <div className="arc-big-metric">
              {displayMetric}
            </div>

            <div className="arc-metric-subtitle">
              {displaySubtitle}
            </div>

            <p className="arc-metric-desc">
              {displayParagraph}
            </p>
          </div>
        </div>

        {/* Bottom Actions Row: Left Slider, See All Button, Right Slider */}
        <div className="products-actions-row">
          <button
            type="button"
            className="fan-slider-btn prev"
            onClick={handlePrev}
            aria-label="Previous Commodity Card"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 19 8 12 15 5" />
            </svg>
          </button>

          <Link
            to="/products"
            className="about-glass-btn products-glass-btn"
            aria-label="View all 23 products on the dedicated products page"
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
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
            <span>See All 23 Products</span>
          </Link>

          <button
            type="button"
            className="fan-slider-btn next"
            onClick={handleNext}
            aria-label="Next Commodity Card"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 5 16 12 9 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full 23-Product Catalog Modal */}
      {isCatalogOpen && (
        <div
          className="catalog-modal-backdrop"
          onClick={() => setIsCatalogOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="catalog-modal-title"
        >
          <div className="catalog-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="catalog-modal-header">
              <div className="catalog-header-text">
                <div className="catalog-badge">Full Commodity Portfolio</div>
                <h3 id="catalog-modal-title" className="catalog-modal-title">
                  All 23 Agro Commodities &amp; Products
                </h3>
                <p className="catalog-modal-desc">
                  Direct international port terminals, high-protein quality assurance, and bulk delivery across Bangladesh.{' '}
                  <Link to="/products" style={{ color: '#ea580c', fontWeight: 700, textDecoration: 'underline', marginLeft: '6px' }}>
                    Open Dedicated Page →
                  </Link>
                </p>
              </div>
              <button
                type="button"
                className="catalog-close-btn"
                onClick={() => setIsCatalogOpen(false)}
                aria-label="Close product catalogue"
              >
                ✕
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="catalog-filter-bar">
              {[
                { label: 'All Products (23)', value: 'All' },
                { label: 'Pulses & Dal (7)', value: 'Pulses & Dal' },
                { label: 'Grains & Bran (4)', value: 'Grains & Bran' },
                { label: 'Fresh Fruits (6)', value: 'Fresh Fruits' },
                { label: 'Vegetables & Spices (6)', value: 'Vegetables & Spices' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  className={`catalog-tab-btn ${catalogFilter === tab.value ? 'active' : ''}`}
                  onClick={() => setCatalogFilter(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="catalog-products-grid">
              {filteredCatalogProducts.map((p) => (
                <div
                  key={p.id}
                  className="catalog-item-card"
                  style={{
                    '--item-gradient': p.gradient,
                    '--item-shadow': p.shadowColor,
                  }}
                >
                  {/* Catalog Photo Banner */}
                  <div className="catalog-item-img-wrap">
                    <img src={p.image} alt={p.name} className="catalog-item-img" loading="lazy" />
                    <span className="catalog-item-num-badge">#{p.number}</span>
                  </div>

                  <div className="catalog-item-header">
                    <span className="catalog-item-cat">{p.category}</span>
                    <span className="catalog-item-origin">Origins: {p.origins}</span>
                  </div>
                  <div className="catalog-item-name">{p.name}</div>
                  <div className="catalog-item-bangla">{p.banglaName}</div>
                  <div className="catalog-item-sub">{p.subtitle}</div>
                  <div className="catalog-item-spec">{p.spec}</div>
                  <a
                    href="#contact"
                    className="catalog-inquire-btn"
                    onClick={() => setIsCatalogOpen(false)}
                  >
                    <span>Inquire Bulk Order</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
