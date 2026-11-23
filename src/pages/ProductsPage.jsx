import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { COMMODITY_PRODUCTS } from '../data/productsData'
import './ProductsPage.css'

const CATEGORIES = [
  'All Products',
  'Pulses & Dal',
  'Grains & Bran',
  'Fresh & Dried Fruits',
  'Vegetables & Spices',
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Filter products based on category and live search
  const filteredProducts = useMemo(() => {
    return COMMODITY_PRODUCTS.filter((prod) => {
      // Category Filter
      let matchesCategory = true
      if (selectedCategory === 'Pulses & Dal') {
        matchesCategory = prod.category === 'Pulses & Dal'
      } else if (selectedCategory === 'Grains & Bran') {
        matchesCategory =
          prod.category === 'Essential Grain' ||
          prod.category === 'Staple Grain' ||
          prod.category === 'Feed & Agro By-Products'
      } else if (selectedCategory === 'Fresh & Dried Fruits') {
        matchesCategory =
          prod.category === 'Fresh Fruits' || prod.category === 'Fresh & Dried Fruits'
      } else if (selectedCategory === 'Vegetables & Spices') {
        matchesCategory =
          prod.category === 'Fresh Vegetables' ||
          prod.category === 'Spices & Aromatics' ||
          prod.category === 'Oilseeds & Nuts'
      }

      if (!matchesCategory) return false

      // Search Query Filter
      if (!searchQuery.trim()) return true
      const query = searchQuery.toLowerCase()
      return (
        prod.name.toLowerCase().includes(query) ||
        prod.banglaName.toLowerCase().includes(query) ||
        prod.subtitle.toLowerCase().includes(query) ||
        prod.spec.toLowerCase().includes(query) ||
        prod.origins.toLowerCase().includes(query)
      )
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="products-page-wrapper">
      <Navbar variant="solid" />

      <main className="products-page-container">
        {/* Header Section */}
        <header className="prod-header">
          <div className="prod-badge">
            <img
              src="/images/ani-gold-emblem.png"
              alt="AniEnterprise Emblem"
              className="prod-badge-icon"
            />
            <span className="prod-badge-text">Official Trade Catalogue</span>
          </div>

          <h1 className="prod-title">
            <span className="title-dark">Global Agricultural </span>
            <span className="title-orange">Commodities</span>
          </h1>

          <p className="prod-subtitle">
            Direct origin bulk agricultural imports supplying Bangladesh’s leading flour mills, feed
            factories, food processors, and wholesale trade hubs with uncompromised quality.
          </p>
        </header>

        {/* Filter & Search Toolbar */}
        <section className="prod-toolbar" aria-label="Product Search and Filter Bar">
          <div className="toolbar-top-row">
            <div className="search-input-wrap">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search commodities by name, বাংলা নাম, origin or specs (e.g. Wheat, মশুর, Canada)..."
                className="prod-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                {cat === 'All Products' && (
                  <span className="filter-count-badge">{COMMODITY_PRODUCTS.length}</span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Products Cards Grid */}
        <section className="products-cards-grid" aria-label="Available Agricultural Products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((prod) => (
              <article key={prod.id} className="product-item-card">
                {/* Full-Card Photo Background */}
                <div className="product-card-bg-wrap">
                  <img
                    src={prod.image}
                    alt={`${prod.name} (${prod.banglaName})`}
                    className="product-card-bg-img"
                    loading="lazy"
                  />
                  <div className="product-card-shade" />
                </div>

                {/* Top Badges */}
                <div className="product-card-top-bar">
                  <span className="card-number-badge">#{prod.number}</span>
                  <span className="card-category-tag">{prod.category}</span>
                </div>

                {/* Overlay Content at Bottom */}
                <div className="product-card-body">
                  <div className="product-names-row">
                    <h2 className="product-name-en">{prod.name}</h2>
                    <span className="product-name-bn">{prod.banglaName}</span>
                  </div>

                  <p className="product-subtitle">{prod.subtitle}</p>

                  <div className="product-card-actions">
                    <button
                      type="button"
                      className="btn-card-quickview"
                      onClick={() => setSelectedProduct(prod)}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      <span>Specifications</span>
                    </button>

                    <Link to="/contact" className="btn-card-inquire">
                      <span>Order Quote</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="no-products-found">
              <h3 className="no-prod-title">No commodities matched "{searchQuery}"</h3>
              <p className="no-prod-desc">
                Try searching by common terms like "Lentils", "Wheat", "Dal", or select "All Products".
              </p>
              <button
                type="button"
                className="filter-pill-btn active"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Products')
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Detailed Product Specifications Modal */}
      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="product-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="product-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close specifications popup"
            >
              ✕
            </button>

            <div className="product-modal-img-col">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="product-modal-img"
              />
            </div>

            <div className="product-modal-info">
              <span className="modal-category-tag">{selectedProduct.category}</span>
              <div className="modal-title-row">
                <h3 className="modal-name-en">{selectedProduct.name}</h3>
                <span className="modal-name-bn">{selectedProduct.banglaName}</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                {selectedProduct.subtitle}
              </p>

              <div className="modal-specs-table">
                <div className="spec-row">
                  <span className="spec-key">Quality Specs</span>
                  <span className="spec-val">{selectedProduct.spec}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Harvest Origins</span>
                  <span className="spec-val">{selectedProduct.origins}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Packaging Types</span>
                  <span className="spec-val">25kg / 50kg PP Bags, Bulk Liner &amp; Break-Bulk</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Discharge Ports</span>
                  <span className="spec-val">Chattogram, Mongla, Benapole, Hili</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Compliance</span>
                  <span className="spec-val">Phytosanitary &amp; SGS Certified</span>
                </div>
              </div>

              <div className="modal-action-row">
                <Link to="/contact" className="btn-card-inquire" style={{ width: '100%', padding: '0.85rem' }}>
                  <span>Order Quote For This Commodity</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
