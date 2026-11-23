import React from 'react'

export default function AdvantageVectors() {
  return (
    <div className="advantage-bg-vectors" aria-hidden="true">
      <svg
        className="advantage-bg-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Golden Amber Wheat Gradient */}
          <linearGradient id="wheat-gold" x1="0%" y1="100%" x2="40%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.12" />
          </linearGradient>

          {/* Soft Topographic Contour Gradient */}
          <linearGradient id="contour-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </linearGradient>

          {/* Maritime Blue/Slate Gradient */}
          <linearGradient id="maritime-grad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
          </linearGradient>

          {/* Trade Link Flow Gradient */}
          <linearGradient id="trade-flow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
          </linearGradient>

          {/* Grain Seed Pattern Definition */}
          <g id="wheat-kernel">
            <path
              d="M0,0 C6,-9 16,-9 18,0 C16,9 6,9 0,0 Z"
              fill="url(#wheat-gold)"
              stroke="#ea580c"
              strokeWidth="1.2"
              strokeOpacity="0.25"
            />
            {/* Awn / beard line extending from the tip */}
            <line
              x1="18"
              y1="0"
              x2="32"
              y2="-6"
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
          </g>
        </defs>

        {/* =================================================================
            LEFT SIDE: Agricultural Grain Fields, Wheat Sheaves & Topography
            ================================================================= */}
        <g className="advantage-vector-left" transform="translate(20, 60)">
          {/* Rolling Farmland Topographic Contour Curves */}
          <path
            d="M-40,240 C60,190 140,280 240,210 C320,160 380,240 460,200"
            stroke="url(#contour-grad)"
            strokeWidth="1.6"
            strokeDasharray="6 4"
            className="vector-contour-1"
          />
          <path
            d="M-40,310 C80,260 170,360 280,290 C360,240 420,310 500,270"
            stroke="url(#contour-grad)"
            strokeWidth="1.4"
            className="vector-contour-2"
          />
          <path
            d="M-40,380 C50,340 160,430 290,360 C380,310 440,380 520,340"
            stroke="url(#contour-grad)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d="M-40,460 C90,420 200,510 320,440 C410,390 480,450 540,420"
            stroke="url(#contour-grad)"
            strokeWidth="1"
          />

          {/* Primary Wheat Stalk (Curving stem with golden spikelets) */}
          <g transform="translate(60, 160)">
            {/* Stem / Rachis */}
            <path
              d="M30,520 Q55,300 110,80"
              stroke="#ea580c"
              strokeWidth="2.4"
              strokeOpacity="0.22"
              strokeLinecap="round"
            />

            {/* Alternating Wheat Kernels along the stem */}
            <use href="#wheat-kernel" transform="translate(108, 80) rotate(-35)" />
            <use href="#wheat-kernel" transform="translate(103, 115) scale(1,-1) rotate(45)" />
            <use href="#wheat-kernel" transform="translate(96, 150) rotate(-40)" />
            <use href="#wheat-kernel" transform="translate(88, 185) scale(1,-1) rotate(50)" />
            <use href="#wheat-kernel" transform="translate(79, 225) rotate(-45)" />
            <use href="#wheat-kernel" transform="translate(69, 265) scale(1,-1) rotate(55)" />
            <use href="#wheat-kernel" transform="translate(59, 310) rotate(-50)" />
            <use href="#wheat-kernel" transform="translate(49, 355) scale(1,-1) rotate(60)" />
            <use href="#wheat-kernel" transform="translate(41, 400) rotate(-55)" />
            <use href="#wheat-kernel" transform="translate(35, 445) scale(1,-1) rotate(65)" />
          </g>

          {/* Secondary Shorter Wheat Stalk */}
          <g transform="translate(130, 240)">
            <path
              d="M10,440 Q40,260 85,70"
              stroke="#f59e0b"
              strokeWidth="1.8"
              strokeOpacity="0.18"
              strokeLinecap="round"
            />
            <use href="#wheat-kernel" transform="translate(83, 70) rotate(-28)" />
            <use href="#wheat-kernel" transform="translate(77, 105) scale(1,-1) rotate(38)" />
            <use href="#wheat-kernel" transform="translate(70, 140) rotate(-32)" />
            <use href="#wheat-kernel" transform="translate(61, 180) scale(1,-1) rotate(42)" />
            <use href="#wheat-kernel" transform="translate(50, 220) rotate(-36)" />
            <use href="#wheat-kernel" transform="translate(39, 265) scale(1,-1) rotate(46)" />
            <use href="#wheat-kernel" transform="translate(28, 310) rotate(-40)" />
          </g>

          {/* Subtle Technical Agro Stamp / Watermark */}
          <g transform="translate(40, 100)" opacity="0.3">
            <circle cx="50" cy="50" r="46" stroke="#ea580c" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="0.8" />
            <text
              x="50"
              y="46"
              textAnchor="middle"
              fontSize="7.5"
              fontWeight="700"
              letterSpacing="0.15em"
              fill="#ea580c"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              AGRO SOURCING
            </text>
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="6"
              fontWeight="600"
              letterSpacing="0.1em"
              fill="#64748b"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              DIRECT HARVEST
            </text>
          </g>
        </g>

        {/* =================================================================
            CENTER BACKDROP: Trans-Global Trade & Supply Chain Pathways
            ================================================================= */}
        <g className="advantage-vector-center">
          {/* Sweeping Geodesic Supply Arc 1 */}
          <path
            d="M 120,440 Q 800,180 1480,480"
            stroke="url(#trade-flow)"
            strokeWidth="1.8"
            strokeDasharray="8 6"
            className="vector-supply-flow"
          />
          {/* Sweeping Geodesic Supply Arc 2 */}
          <path
            d="M 180,560 Q 800,320 1420,580"
            stroke="url(#trade-flow)"
            strokeWidth="1.4"
            strokeDasharray="4 8"
          />

          {/* Trade Network Junction Nodes */}
          <g transform="translate(380, 280)" opacity="0.35">
            <circle cx="0" cy="0" r="4" fill="#ea580c" />
            <circle cx="0" cy="0" r="9" stroke="#ea580c" strokeWidth="1" strokeDasharray="2 2" />
          </g>
          <g transform="translate(790, 220)" opacity="0.45">
            <circle cx="0" cy="0" r="4.5" fill="#f59e0b" />
            <circle cx="0" cy="0" r="11" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
          </g>
          <g transform="translate(1220, 310)" opacity="0.35">
            <circle cx="0" cy="0" r="4" fill="#059669" />
            <circle cx="0" cy="0" r="9" stroke="#059669" strokeWidth="1" strokeDasharray="2 2" />
          </g>
        </g>

        {/* =================================================================
            RIGHT SIDE: Maritime Container Vessel, Port Crane & Navigation
            ================================================================= */}
        <g className="advantage-vector-right" transform="translate(1080, 80)">
          {/* Nautical Navigation Compass Rose */}
          <g transform="translate(340, 160)" opacity="0.25">
            <circle cx="0" cy="0" r="82" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 3" />
            <circle cx="0" cy="0" r="68" stroke="#0f172a" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="52" stroke="#ea580c" strokeWidth="0.8" strokeDasharray="2 2" />

            {/* Compass Rose 8-Pointed Star */}
            <polygon points="0,-68 8,-16 0,0 -8,-16" fill="#ea580c" />
            <polygon points="0,68 8,16 0,0 -8,16" fill="#ea580c" opacity="0.6" />
            <polygon points="68,0 16,8 0,0 16,-8" fill="#ea580c" opacity="0.8" />
            <polygon points="-68,0 -16,8 0,0 -16,-8" fill="#ea580c" opacity="0.6" />
            {/* Diagonals */}
            <polygon points="44,-44 14,-6 0,0 6,-14" fill="#f59e0b" opacity="0.5" />
            <polygon points="-44,44 -14,6 0,0 -6,14" fill="#f59e0b" opacity="0.4" />
            <polygon points="44,44 6,14 0,0 14,6" fill="#f59e0b" opacity="0.5" />
            <polygon points="-44,-44 -6,-14 0,0 -14,-6" fill="#f59e0b" opacity="0.4" />

            {/* Cardinal Letters */}
            <text x="0" y="-73" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0f172a">N</text>
            <text x="76" y="3" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0f172a">E</text>
            <text x="0" y="81" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0f172a">S</text>
            <text x="-76" y="3" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0f172a">W</text>
          </g>

          {/* Port Gantry Crane Vector (Unloading Bulk Grains) */}
          <g transform="translate(180, 260)" stroke="url(#maritime-grad)" strokeLinecap="round">
            {/* Vertical gantry leg towers */}
            <line x1="20" y1="260" x2="60" y2="120" strokeWidth="1.6" />
            <line x1="80" y1="260" x2="60" y2="120" strokeWidth="1.6" />
            <line x1="20" y1="260" x2="80" y2="260" strokeWidth="2" />
            {/* Cross braces */}
            <line x1="28" y1="230" x2="72" y2="180" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="72" y1="230" x2="28" y2="180" strokeWidth="1" strokeDasharray="3 3" />
            {/* Horizontal boom arm over the ship */}
            <line x1="20" y1="120" x2="220" y2="120" strokeWidth="2.4" />
            <line x1="60" y1="120" x2="90" y2="60" strokeWidth="1.8" />
            <line x1="90" y1="60" x2="190" y2="120" strokeWidth="1.2" />
            {/* Hoist cable & spreader */}
            <line x1="140" y1="120" x2="140" y2="175" strokeWidth="1.2" strokeDasharray="2 2" />
            <rect x="130" y="175" width="20" height="7" rx="1.5" fill="#ea580c" fillOpacity="0.15" stroke="#ea580c" strokeWidth="1" />
          </g>

          {/* Modern Bulk Cargo Container Vessel Vector */}
          <g transform="translate(60, 420)">
            {/* Ship Bow Wave & Oceanic Swells */}
            <path
              d="M-60,110 C20,95 80,125 160,105 C240,85 310,120 400,100"
              stroke="#ea580c"
              strokeWidth="1.4"
              strokeOpacity="0.2"
            />
            <path
              d="M-20,125 C60,110 130,135 220,118 C300,102 360,130 440,115"
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity="0.16"
              strokeDasharray="5 3"
            />

            {/* Vessel Hull */}
            <path
              d="M40,95 L310,95 L350,68 L320,45 L100,45 L70,70 Z"
              fill="url(#maritime-grad)"
              stroke="#0f172a"
              strokeWidth="1.4"
              strokeOpacity="0.25"
            />
            {/* Waterline Stripe */}
            <line x1="55" y1="85" x2="335" y2="85" stroke="#ea580c" strokeWidth="1.6" strokeOpacity="0.4" />

            {/* Stacked Cargo Container Blocks (Agro Bulk Consignments) */}
            <g stroke="#0f172a" strokeWidth="1" strokeOpacity="0.22" fill="#ffffff" fillOpacity="0.5">
              {/* Row 1 */}
              <rect x="108" y="26" width="32" height="17" rx="1" />
              <rect x="144" y="26" width="32" height="17" rx="1" fill="#ea580c" fillOpacity="0.1" />
              <rect x="180" y="26" width="32" height="17" rx="1" />
              <rect x="216" y="26" width="32" height="17" rx="1" fill="#f59e0b" fillOpacity="0.1" />
              <rect x="252" y="26" width="32" height="17" rx="1" />

              {/* Row 2 */}
              <rect x="126" y="8" width="32" height="17" rx="1" fill="#ea580c" fillOpacity="0.08" />
              <rect x="162" y="8" width="32" height="17" rx="1" />
              <rect x="198" y="8" width="32" height="17" rx="1" fill="#059669" fillOpacity="0.08" />
              <rect x="234" y="8" width="32" height="17" rx="1" />
            </g>

            {/* Bridge Superstructure & Radar Mast */}
            <polygon points="76,45 96,45 96,8 84,8 76,24" fill="#ffffff" fillOpacity="0.7" stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.25" />
            <line x1="86" y1="8" x2="86" y2="-8" stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.3" />
            <line x1="80" y1="-3" x2="92" y2="-3" stroke="#ea580c" strokeWidth="1" strokeOpacity="0.4" />
          </g>

          {/* Geographic Seaport Coordinates Stamp */}
          <g transform="translate(190, 580)" opacity="0.32">
            <text
              x="0"
              y="0"
              fontSize="7.5"
              fontWeight="700"
              letterSpacing="0.16em"
              fill="#0f172a"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              PORT OF CHATTOGRAM · DEEPWATER TERMINAL
            </text>
            <text
              x="0"
              y="12"
              fontSize="6.5"
              fontWeight="600"
              letterSpacing="0.12em"
              fill="#ea580c"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              22° 19' N · 91° 49' E · VESSEL LOGISTICS
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}
