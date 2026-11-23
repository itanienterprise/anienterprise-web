import React, { useState, useMemo } from 'react'
import './GlobalNetwork.css'
import { WORLD_MAP_VIEWBOX, WORLD_MAP_INNER_HTML } from './worldMapData'
import { CountryFlag } from './CountryFlags'
import AdvantageVectors from './AdvantageVectors'

const BANGLADESH = {
  id: 'bd',
  name: 'Bangladesh',
  title: 'Bangladesh Central Import Hub',
  city: 'Chattogram & Dhaka',
  x: 621.1,
  y: 465.3,
  ports: 'Port of Chattogram, Mongla Seaport, Hili & Benapole Land Ports',
  annualVolume: '520,000+ Metric Tons',
}

const GLOBAL_ORIGINS = [
  {
    id: 'us',
    code: 'us',
    name: 'United States',
    region: 'North America',
    phone: '+1 800 246 8920',
    primaryCommodity: 'Milling Wheat, Soybeans & Yellow Corn',
    ports: 'New Orleans / US Gulf → Chattogram',
    transitTime: '28–32 Days (Panamax)',
    volume: '85,000+ MT',
    x: 193.3,
    y: 419.0,
    pinX: 193.3,
    pinY: 345.0,
    ctrlX: 400,
    ctrlY: 330,
    defaultCard: true,
    transitDuration: 4.8,
  },
  {
    id: 'ca',
    code: 'ca',
    name: 'Canada',
    region: 'North America',
    phone: '+1 604 555 0199',
    primaryCommodity: 'CWRS High-Protein Wheat, Canola & Yellow Peas',
    ports: 'Vancouver Grain Elevators → Chattogram',
    transitTime: '24–28 Days (Bulk Carrier)',
    volume: '110,000+ MT',
    x: 209.7,
    y: 347.0,
    pinX: 209.7,
    pinY: 285.0,
    ctrlX: 415,
    ctrlY: 280,
    defaultCard: false,
    transitDuration: 4.5,
  },
  {
    id: 'gb',
    code: 'gb',
    name: 'United Kingdom',
    region: 'Europe & Middle East',
    phone: '+44 330 818 1120',
    primaryCommodity: 'Direct Trade Finance & Bulk Feed Grains',
    ports: 'London / Liverpool → Chattogram',
    transitTime: '20–24 Days (Ocean Bulk)',
    volume: '45,000+ MT',
    x: 401.7,
    y: 382.0,
    pinX: 401.7,
    pinY: 325.0,
    ctrlX: 510,
    ctrlY: 350,
    defaultCard: true,
    transitDuration: 3.8,
  },
  {
    id: 'fr',
    code: 'fr',
    name: 'France',
    region: 'Europe & Middle East',
    phone: '+33 1 42 68 55 00',
    primaryCommodity: 'Milling Wheat, Feed Barley & Rapeseed',
    ports: 'Rouen / Le Havre → Chattogram',
    transitTime: '22–26 Days (Bulk Vessel)',
    volume: '50,000+ MT',
    x: 410.8,
    y: 406.0,
    pinX: 428.0,
    pinY: 350.0,
    ctrlX: 516,
    ctrlY: 375,
    defaultCard: false,
    transitDuration: 4.0,
  },
  {
    id: 'ae',
    code: 'ae',
    name: 'United Arab Emirates',
    region: 'Europe & Middle East',
    phone: '+971 4 360 8800',
    primaryCommodity: 'Middle East Transshipment & Bulk Sugar',
    ports: 'Jebel Ali / Dubai → Chattogram',
    transitTime: '10–12 Days (Container / Bulk)',
    volume: '60,000+ MT',
    x: 534.4,
    y: 467.2,
    pinX: 534.0,
    pinY: 415.0,
    ctrlX: 577,
    ctrlY: 440,
    defaultCard: false,
    transitDuration: 3.2,
  },
  {
    id: 'in',
    code: 'in',
    name: 'India',
    region: 'Asia & Pacific',
    phone: '+91 33 2248 1000',
    primaryCommodity: 'Non-Basmati Rice, Red Lentils & Spices',
    ports: 'Hili, Benapole, Bhomra & Sonamoszid Land Ports',
    transitTime: '2–4 Days (Direct Rail / Truck)',
    volume: '140,000+ MT',
    x: 590.0,
    y: 470.0,
    pinX: 580.0,
    pinY: 415.0,
    ctrlX: 605,
    ctrlY: 455,
    defaultCard: false,
    transitDuration: 2.4,
  },
  {
    id: 'th',
    code: 'th',
    name: 'Thailand',
    region: 'Asia & Pacific',
    phone: '+66 2 287 4000',
    primaryCommodity: 'Parboiled Rice, Tapioca & Agri By-products',
    ports: 'Bangkok / Laem Chabang → Chattogram',
    transitTime: '5–7 Days (Direct Feeder)',
    volume: '40,000+ MT',
    x: 650.2,
    y: 493.7,
    pinX: 646.0,
    pinY: 442.0,
    ctrlX: 640,
    ctrlY: 468,
    defaultCard: false,
    transitDuration: 2.8,
  },
  {
    id: 'vn',
    code: 'vn',
    name: 'Vietnam',
    region: 'Asia & Pacific',
    phone: '+84 28 3829 1100',
    primaryCommodity: '5% & 25% Broken Rice & Raw Cashews',
    ports: 'Ho Chi Minh Port → Chattogram',
    transitTime: '6–8 Days (Vessel Transit)',
    volume: '55,000+ MT',
    x: 661.2,
    y: 485.2,
    pinX: 668.0,
    pinY: 428.0,
    ctrlX: 646,
    ctrlY: 460,
    defaultCard: false,
    transitDuration: 3.0,
  },
  {
    id: 'cn',
    code: 'cn',
    name: 'Hong Kong / China',
    region: 'Asia & Pacific',
    phone: '+852 2852 3000',
    primaryCommodity: 'Maritime Supply Chain, Trade Logistics & Agro Feed',
    ports: 'Hong Kong Hub → Chattogram',
    transitTime: '8–10 Days (Sea Freight)',
    volume: '35,000+ MT',
    x: 665.0,
    y: 445.0,
    pinX: 688.0,
    pinY: 395.0,
    ctrlX: 643,
    ctrlY: 440,
    defaultCard: false,
    transitDuration: 3.2,
  },
  {
    id: 'au',
    code: 'au',
    name: 'Australia',
    region: 'Asia & Pacific',
    phone: '+61 2 9200 4500',
    primaryCommodity: 'Desi Chickpeas, Premium Milling Wheat & Barley',
    ports: 'Brisbane / Melbourne → Chattogram',
    transitTime: '16–19 Days (Bulk Vessel)',
    volume: '95,000+ MT',
    x: 718.5,
    y: 614.8,
    pinX: 725.0,
    pinY: 560.0,
    ctrlX: 675,
    ctrlY: 515,
    defaultCard: false,
    transitDuration: 4.2,
  },
  {
    id: 'br',
    code: 'br',
    name: 'Brazil',
    region: 'South America',
    phone: '+55 11 3040 2200',
    primaryCommodity: 'High-Protein Soybeans, Raw Cane Sugar & Corn',
    ports: 'Port of Santos / Paranaguá → Chattogram',
    transitTime: '30–34 Days (Panamax Bulk)',
    volume: '130,000+ MT',
    x: 275.0,
    y: 569.3,
    pinX: 275.0,
    pinY: 515.0,
    ctrlX: 450,
    ctrlY: 530,
    defaultCard: false,
    transitDuration: 5.2,
  },
  {
    id: 'ar',
    code: 'ar',
    name: 'Argentina',
    region: 'South America',
    phone: '+54 11 5272 0000',
    primaryCommodity: 'Soybean Meal, Corn, Wheat & Sunflower Oil',
    ports: 'Up-River Ports (Rosario / San Lorenzo) & Bahia Blanca → Chattogram',
    transitTime: '32–36 Days (Panamax Bulk)',
    volume: '115,000+ MT',
    x: 266.0,
    y: 622.0,
    pinX: 236.0,
    pinY: 605.0,
    ctrlX: 450,
    ctrlY: 560,
    defaultCard: false,
    transitDuration: 5.4,
  },
]

export default function GlobalNetwork() {
  const [activeCountryId, setActiveCountryId] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [showHubDetails, setShowHubDetails] = useState(false)

  const regions = ['All', 'North America', 'Europe & Middle East', 'Asia & Pacific', 'South America']

  const activeOrigin = useMemo(() => {
    if (!activeCountryId) return null
    return GLOBAL_ORIGINS.find((c) => c.id === activeCountryId)
  }, [activeCountryId])

  return (
    <section id="service-area" className="global-section" aria-label="Global Service Area">
      {/* Thematic Company Vector Graphics Background */}
      <AdvantageVectors />

      <div className="global-container">
        {/* Top Header Area - Matches other sections */}
        <div className="global-header">
          <div className="global-badge">
            <span className="global-badge-dot" />
            <span className="global-badge-text">SERVICE AREA</span>
          </div>

          <h2 className="global-title">
            We are <span className="global-title-accent">Global</span>
          </h2>

          <p className="global-subtitle">
            Direct maritime routes and cross-border customs corridors connecting 12+ key agricultural
            origins worldwide directly into Bangladesh.
          </p>

          {/* Region Filter Buttons */}
          <div className="global-region-tabs" role="tablist" aria-label="Filter trade regions">
            {regions.map((region) => {
              const count =
                region === 'All'
                  ? GLOBAL_ORIGINS.length
                  : GLOBAL_ORIGINS.filter((c) => c.region === region).length
              const isActive = selectedRegion === region

              return (
                <button
                  key={region}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`global-region-tab ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedRegion(region)
                    setActiveCountryId(null)
                  }}
                >
                  <span className="region-tab-name">{region}</span>
                  <span className="region-tab-count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Center Stage: The Interactive World Map */}
        <div className="global-map-stage">
          <div className="global-map-card">
            <svg
              className="global-map-svg"
              viewBox={WORLD_MAP_VIEWBOX}
              preserveAspectRatio="xMidYMid meet"
              aria-label="Interactive World Trade Map connecting to Bangladesh"
            >
              <defs>
                {/* Radial Glow Filter for illuminated routes */}
                <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Drop shadow for pins */}
                <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.18" />
                </filter>

                {/* Linear Gradients for Route Arcs */}
                <linearGradient id="route-grad-default" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="route-grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                </linearGradient>

                {/* Arrowhead marker pointing to Bangladesh */}
                <marker
                  id="route-arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ea580c" opacity="0.9" />
                </marker>
              </defs>

              {/* Base World Map Landmasses */}
              <g
                className="world-map-landmass"
                dangerouslySetInnerHTML={{ __html: WORLD_MAP_INNER_HTML }}
              />

              {/* -------------------------------------------------------------
                  Connecting Lines from Countries to Bangladesh
                  ------------------------------------------------------------- */}
              <g className="map-routes-layer">
                {GLOBAL_ORIGINS.map((country) => {
                  const isVisible =
                    selectedRegion === 'All' || selectedRegion === country.region
                  const isHighlighted = activeCountryId === country.id
                  const isDimmed = activeCountryId && activeCountryId !== country.id

                  const arcPath = `M ${country.x.toFixed(1)} ${country.y.toFixed(
                    1
                  )} Q ${country.ctrlX} ${country.ctrlY} ${BANGLADESH.x.toFixed(
                    1
                  )} ${BANGLADESH.y.toFixed(1)}`

                  return (
                    <g
                      key={`route-${country.id}`}
                      className={`route-group ${isVisible ? 'visible' : 'hidden'} ${
                        isHighlighted ? 'highlighted' : ''
                      } ${isDimmed ? 'dimmed' : ''}`}
                    >
                      {/* Underlying soft glowing stroke */}
                      <path
                        d={arcPath}
                        fill="none"
                        stroke={isHighlighted ? '#f97316' : '#ea580c'}
                        strokeWidth={isHighlighted ? '4.5' : '2'}
                        strokeOpacity={isHighlighted ? '0.5' : isVisible ? '0.18' : '0.04'}
                        strokeLinecap="round"
                      />

                      {/* Animated dashed main arc path */}
                      <path
                        id={`arc-${country.id}`}
                        d={arcPath}
                        fill="none"
                        stroke={isHighlighted ? 'url(#route-grad-active)' : 'url(#route-grad-default)'}
                        strokeWidth={isHighlighted ? '2.8' : isVisible ? '1.5' : '0.8'}
                        strokeDasharray={isHighlighted ? '6 4' : '4 4'}
                        strokeLinecap="round"
                        className="route-flow-line"
                        filter={isHighlighted ? 'url(#route-glow)' : undefined}
                      />

                      {/* Moving light pulse traveling into Bangladesh */}
                      {isVisible && (
                        <>
                          <circle r="3" fill="#ea580c" className="route-particle-core">
                            <animateMotion
                              path={arcPath}
                              dur={`${country.transitDuration}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="6" fill="#f97316" opacity="0.35" className="route-particle-halo">
                            <animateMotion
                              path={arcPath}
                              dur={`${country.transitDuration}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </>
                      )}
                    </g>
                  )
                })}
              </g>

              {/* -------------------------------------------------------------
                  Country Pins & Markers with Flags (Matching User Screenshot)
                  ------------------------------------------------------------- */}
              <g className="map-pins-layer">
                {GLOBAL_ORIGINS.map((country) => {
                  const isVisible =
                    selectedRegion === 'All' || selectedRegion === country.region
                  const isHighlighted = activeCountryId === country.id
                  const isDefaultCard = country.defaultCard || isHighlighted

                  return (
                    <g
                      key={`pin-${country.id}`}
                      className={`country-pin-group ${country.id} ${
                        isVisible ? 'visible' : 'hidden'
                      } ${isHighlighted ? 'active' : ''}`}
                      onMouseEnter={() => setActiveCountryId(country.id)}
                      onMouseLeave={() => setActiveCountryId(null)}
                      onClick={() =>
                        setActiveCountryId((prev) => (prev === country.id ? null : country.id))
                      }
                      tabIndex={0}
                      role="button"
                      aria-label={`${country.name} trade route details`}
                    >
                      {/* Vertical Pin Pole Stem (Brand orange vertical line) */}
                      <line
                        x1={country.x}
                        y1={country.y}
                        x2={country.pinX}
                        y2={country.pinY}
                        stroke="#ea580c"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />

                      {/* Base origin dot on country landmass */}
                      <circle
                        cx={country.x}
                        cy={country.y}
                        r="2.8"
                        fill="#ea580c"
                        stroke="#ffffff"
                        strokeWidth="1.2"
                      />

                      {/* Card / Pin Badge */}
                      {isDefaultCard ? (
                        /* Expanded Pill/Card matching the US card in screenshot */
                        <g
                          transform={`translate(${country.pinX - 16}, ${
                            country.pinY - 26
                          })`}
                          filter="url(#pin-shadow)"
                          className="pin-card-group"
                        >
                          {/* Card Background Container */}
                          <rect
                            x="0"
                            y="0"
                            width="112"
                            height="30"
                            rx="5"
                            fill="#ffffff"
                            stroke="#e2e8f0"
                            strokeWidth="1"
                            className="pin-card-bg"
                          />
                          {/* Left Flag in rounded badge */}
                          <g transform="translate(4, 4)">
                            <foreignObject width="22" height="22">
                              <CountryFlag code={country.code} size={22} />
                            </foreignObject>
                          </g>
                          {/* Country Title */}
                          <text
                            x="32"
                            y="13"
                            fontSize="8"
                            fontWeight="700"
                            fill="#0f172a"
                            fontFamily="Plus Jakarta Sans, sans-serif"
                          >
                            {country.name}
                          </text>
                          {/* Phone / Subtitle matching screenshot */}
                          <text
                            x="32"
                            y="23"
                            fontSize="6.8"
                            fontWeight="500"
                            fill="#64748b"
                            fontFamily="Plus Jakarta Sans, sans-serif"
                          >
                            {country.phone}
                          </text>
                        </g>
                      ) : (
                        /* Compact Flag Pin matching UK/France/Thailand in screenshot */
                        <g
                          transform={`translate(${country.pinX - 12}, ${
                            country.pinY - 24
                          })`}
                          filter="url(#pin-shadow)"
                          className="pin-compact-group"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                            rx="5"
                            fill="#ffffff"
                            stroke="#e2e8f0"
                            strokeWidth="1"
                            className="pin-compact-bg"
                          />
                          <g transform="translate(3, 3)">
                            <foreignObject width="18" height="18">
                              <CountryFlag code={country.code} size={18} />
                            </foreignObject>
                          </g>
                        </g>
                      )}
                    </g>
                  )
                })}
              </g>

              {/* -------------------------------------------------------------
                  Bangladesh Destination Terminal (Central Hub with Pulsing Beacon)
                  ------------------------------------------------------------- */}
              <g
                className="bangladesh-hub-group"
                transform={`translate(${BANGLADESH.x}, ${BANGLADESH.y})`}
                onMouseEnter={() => setShowHubDetails(true)}
                onMouseLeave={() => setShowHubDetails(false)}
                onClick={() => setShowHubDetails((prev) => !prev)}
                tabIndex={0}
                role="button"
                aria-label="Bangladesh Central Import Hub details"
              >
                {/* Sonar Beacon expanding rings */}
                <circle cx="0" cy="0" r="4" className="beacon-pulse-ring ring-1" />
                <circle cx="0" cy="0" r="4" className="beacon-pulse-ring ring-2" />
                <circle cx="0" cy="0" r="4" className="beacon-pulse-ring ring-3" />

                {/* Central Target Node */}
                <circle
                  cx="0"
                  cy="0"
                  r="5.5"
                  fill="#059669"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="beacon-core-node"
                />

                {/* Vertical Stem down to the Bangladesh Hub Badge */}
                <line x1="0" y1="0" x2="0" y2="18" stroke="#059669" strokeWidth="1.5" />

                {/* Destination Hub Pill Badge */}
                <g
                  transform="translate(-46, 18)"
                  filter="url(#pin-shadow)"
                  className="bangladesh-hub-badge"
                >
                  <rect
                    x="0"
                    y="0"
                    width="92"
                    height="22"
                    rx="11"
                    fill="#0f172a"
                    stroke="#10b981"
                    strokeWidth="1.2"
                  />
                  <g transform="translate(5, 3)">
                    <foreignObject width="16" height="16">
                      <CountryFlag code="bd" size={16} />
                    </foreignObject>
                  </g>
                  <text
                    x="27"
                    y="14"
                    fontSize="7.6"
                    fontWeight="800"
                    fill="#ffffff"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    letterSpacing="0.04em"
                  >
                    BANGLADESH
                  </text>
                </g>
              </g>
            </svg>

            {/* Floating Live Route / Hub Detail Panel (on hover or click) */}
            {activeOrigin && (
              <div className="global-route-flyout" role="dialog" aria-label="Route details">
                <button
                  type="button"
                  className="flyout-close-btn"
                  onClick={() => setActiveCountryId(null)}
                  aria-label="Close route details"
                >
                  ✕
                </button>

                <div className="flyout-header">
                  <div className="flyout-flag-wrap">
                    <CountryFlag code={activeOrigin.code} size={32} />
                  </div>
                  <div>
                    <span className="flyout-region-badge">{activeOrigin.region}</span>
                    <h3 className="flyout-country-title">{activeOrigin.name}</h3>
                  </div>
                </div>

                <div className="flyout-body">
                  <div className="flyout-row">
                    <span className="flyout-label">Commodities:</span>
                    <span className="flyout-value highlight">{activeOrigin.primaryCommodity}</span>
                  </div>

                  <div className="flyout-stats-grid">
                    <div className="flyout-stat">
                      <span className="stat-label">Transit Time</span>
                      <span className="stat-value">{activeOrigin.transitTime}</span>
                    </div>
                    <div className="flyout-stat">
                      <span className="stat-label">Annual Volume</span>
                      <span className="stat-value">{activeOrigin.volume}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bangladesh Central Hub Detail Flyout */}
            {showHubDetails && !activeOrigin && (
              <div className="global-route-flyout hub-flyout" role="dialog" aria-label="Bangladesh Hub details">
                <button
                  type="button"
                  className="flyout-close-btn"
                  onClick={() => setShowHubDetails(false)}
                  aria-label="Close hub details"
                >
                  ✕
                </button>

                <div className="flyout-header">
                  <div className="flyout-flag-wrap">
                    <CountryFlag code="bd" size={32} />
                  </div>
                  <div>
                    <span className="flyout-region-badge green">CENTRAL DESTINATION TERMINAL</span>
                    <h3 className="flyout-country-title">{BANGLADESH.title}</h3>
                  </div>
                </div>

                <div className="flyout-body">
                  <div className="flyout-row">
                    <span className="flyout-label">Land Customs Stations:</span>
                    <span className="flyout-value">Hili, Benapole, Bhomra &amp; Sonamoszid Land Ports</span>
                  </div>

                  <div className="flyout-stats-grid">
                    <div className="flyout-stat">
                      <span className="stat-label">Annual Volume</span>
                      <span className="stat-value">{BANGLADESH.annualVolume}</span>
                    </div>
                    <div className="flyout-stat">
                      <span className="stat-label">Sourcing Origins</span>
                      <span className="stat-value">12+ Global Nations</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
