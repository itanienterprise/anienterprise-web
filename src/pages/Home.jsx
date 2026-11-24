import { useEffect, useRef, useCallback } from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import Advantage from '../components/Advantage'
import GlobalNetwork from '../components/GlobalNetwork'
import Partners from '../components/Partners'
import './Home.css'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about-us', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'advantage', label: 'Advantage' },
  { id: 'service-area', label: 'Global Network' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Contact' }, // Handled by Footer at the bottom
]

// Helper to detect mobile / tablet mode
const isMobileMode = () => {
  if (typeof window === 'undefined') return false
  const width = window.visualViewport?.width || window.innerWidth
  return (
    width <= 1024 ||
    window.innerWidth <= 1024 ||
    (window.matchMedia && window.matchMedia('(max-width: 1024px)').matches)
  )
}

export default function Home() {
  const isAnimating = useRef(false)
  const lastTransitionTime = useRef(0)
  const lastWheelTime = useRef(0)
  const touchStartY = useRef(0)

  // Find the next section below the current viewport top
  const getNextSectionIndex = useCallback(() => {
    for (let i = 0; i < SECTIONS.length; i++) {
      const el = document.getElementById(SECTIONS[i].id)
      if (!el) continue
      const rect = el.getBoundingClientRect()
      if (rect.top > 30) {
        return i
      }
    }
    return SECTIONS.length - 1
  }, [])

  const scrollToSection = useCallback((targetIndex) => {
    if (targetIndex < 0 || targetIndex >= SECTIONS.length) return
    const targetId = SECTIONS[targetIndex].id
    const targetEl = document.getElementById(targetId)
    if (!targetEl) return

    isAnimating.current = true
    lastTransitionTime.current = Date.now()

    let targetTop
    if (targetIndex === SECTIONS.length - 1) {
      // For footer at the bottom, scroll to the page bottom
      targetTop = document.documentElement.scrollHeight - window.innerHeight
    } else {
      targetTop = Math.round(targetEl.getBoundingClientRect().top + window.scrollY)
    }

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    })

    setTimeout(() => {
      isAnimating.current = false
    }, 700)
  }, [])

  // In-page hash anchor clicks (e.g. Explore products link)
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const targetId = href.replace('#', '')
      const targetIdx = SECTIONS.findIndex((s) => s.id === targetId)
      if (targetIdx !== -1) {
        e.preventDefault()
        scrollToSection(targetIdx)
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [scrollToSection])

  // Mouse wheel scroll listener
  useEffect(() => {
    const handleWheel = (e) => {
      // In mobile mode only: allow natural continuous scrolling, no section lock
      if (isMobileMode()) {
        return
      }

      // Don't intercept scroll inside modals or interactive overlays
      if (
        e.target.closest(
          '.products-catalog-modal, .products-catalog-modal-overlay, .catalog-products-grid, [data-no-scroll-snap]'
        )
      ) {
        return
      }

      const isDown = e.deltaY > 0

      // When scrolling UP: allow natural, continuous scrolling without section lock
      if (!isDown) {
        isAnimating.current = false
        return
      }

      // Scrolling DOWN: advance section-by-section
      e.preventDefault()

      const now = Date.now()

      // Block rapid wheel events during active transition
      if (isAnimating.current || now - lastTransitionTime.current < 650) {
        lastWheelTime.current = now
        return
      }

      // Absorb trackpad momentum inertia (< 85ms between events)
      const timeSinceLastWheel = now - lastWheelTime.current
      lastWheelTime.current = now

      if (now - lastTransitionTime.current < 950 && timeSinceLastWheel < 85) {
        return
      }

      // Ignore micro-trackpad jitter
      if (Math.abs(e.deltaY) < 14) {
        return
      }

      const nextIdx = getNextSectionIndex()
      scrollToSection(nextIdx)
    }

    const handleTouchStart = (e) => {
      // In mobile mode or on touch screens: allow natural touch scrolling
      if (isMobileMode() || 'ontouchstart' in window || navigator.maxTouchPoints > 0) return

      if (
        e.target.closest(
          '.products-catalog-modal, .products-catalog-modal-overlay, .catalog-products-grid, [data-no-scroll-snap]'
        )
      ) {
        return
      }
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      // In mobile mode or on touch screens: allow natural touch scrolling
      if (isMobileMode() || 'ontouchstart' in window || navigator.maxTouchPoints > 0) return

      if (
        e.target.closest(
          '.products-catalog-modal, .products-catalog-modal-overlay, .catalog-products-grid, [data-no-scroll-snap]'
        )
      ) {
        return
      }

      const now = Date.now()
      if (isAnimating.current || now - lastTransitionTime.current < 650) return

      const touchEndY = e.changedTouches[0].clientY
      const diffY = touchStartY.current - touchEndY

      // Swiping UP (scrolling DOWN): advance to next section
      if (diffY > 40) {
        const nextIdx = getNextSectionIndex()
        scrollToSection(nextIdx)
      }
      // Swiping DOWN (scrolling UP): natural continuous scrolling (no section lock)
    }

    const handleKeyDown = (e) => {
      // In mobile mode only: allow natural keyboard scrolling
      if (isMobileMode()) return

      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return
      if (document.querySelector('.products-catalog-modal-overlay')) return

      const now = Date.now()
      if (isAnimating.current || now - lastTransitionTime.current < 650) return

      // Keyboard Down / PageDown: advance to next section
      if (['ArrowDown', 'PageDown'].includes(e.key) || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault()
        const nextIdx = getNextSectionIndex()
        scrollToSection(nextIdx)
      }
      // ArrowUp / PageUp: allow default natural scrolling up (no section lock)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [getNextSectionIndex, scrollToSection])

  return (
    <main className="home-flow-wrapper">
      <Hero />
      <AboutUs />
      <Products />
      <Advantage />
      <GlobalNetwork />
      <Partners />
    </main>
  )
}
