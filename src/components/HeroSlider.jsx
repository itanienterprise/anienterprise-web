import { useState, useEffect } from 'react'
import './HeroSlider.css'

const EXPORT_SERVICES = [
  {
    id: 1,
    title: 'Global Container Shipping',
    image: '/images/slider-container-shipping.jpg',
  },
  {
    id: 2,
    title: 'Imported Fresh Fruits & Harvest',
    image: '/images/slider-global-harvest.jpg',
  },
  {
    id: 3,
    title: 'Ocean Freight Logistics',
    image: '/images/slider-ocean-freight.jpg',
  },
  {
    id: 4,
    title: 'Truck Freight Logistics',
    image: '/images/slider-truck.jpg',
  },
  {
    id: 5,
    title: 'Air Cargo Express',
    image: '/images/slider-air-cargo.jpg',
  },
  {
    id: 6,
    title: 'Smart Warehousing',
    image: '/images/slider-warehouse.jpg',
  },
]

export default function HeroSlider({ activeBgIndex = 0, onSelectSlide }) {
  const [prevActiveBg, setPrevActiveBg] = useState(activeBgIndex)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setVisibleCards(1)
      } else if (window.innerWidth <= 768) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, EXPORT_SERVICES.length - visibleCards)

  if (activeBgIndex !== prevActiveBg) {
    setPrevActiveBg(activeBgIndex)
    if (activeBgIndex < currentIndex) {
      setCurrentIndex(activeBgIndex)
    } else if (activeBgIndex > currentIndex + visibleCards - 1) {
      setCurrentIndex(Math.min(activeBgIndex - (visibleCards - 1), maxIndex))
    }
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  // Calculate percentage shift based on visible cards
  const offsetPercentage =
    visibleCards === 3
      ? currentIndex * 36.5
      : visibleCards === 2
        ? currentIndex * 52.5
        : currentIndex * 104

  return (
    <div className="tour-slider-wrapper">
      <div className="tour-slider-main">
        {/* Viewport for slider cards */}
        <div className="tour-cards-viewport">
          <div
            className="tour-cards-track"
            style={{
              transform: `translateX(-${offsetPercentage}%)`,
            }}
          >
            {EXPORT_SERVICES.map((item, index) => (
              <div
                key={item.id}
                className={`tour-card ${activeBgIndex === index ? 'active' : ''}`}
                onClick={() => onSelectSlide?.(index)}
                title={item.title}
              >
                <div className="tour-card-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="tour-card-img"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Navigation Button */}
        <button
          type="button"
          className="slider-arrow-btn next"
          onClick={handleNext}
          aria-label="Next services"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="slider-dots-container">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`slider-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
