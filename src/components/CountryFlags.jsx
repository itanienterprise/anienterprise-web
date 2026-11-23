import React from 'react'

export function FlagUS({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of United States"
    >
      <defs>
        <clipPath id="flag-clip-us">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-us)">
        <rect width="36" height="36" fill="#b91c1c" />
        <path
          d="M0,5.5 h36 M0,11 h36 M0,16.5 h36 M0,22 h36 M0,27.5 h36 M0,33 h36"
          stroke="#ffffff"
          strokeWidth="2.75"
        />
        <rect width="18" height="19" fill="#1e3a8a" />
        <circle cx="4.5" cy="4.5" r="1.1" fill="#ffffff" />
        <circle cx="9" cy="4.5" r="1.1" fill="#ffffff" />
        <circle cx="13.5" cy="4.5" r="1.1" fill="#ffffff" />
        <circle cx="6.75" cy="8.5" r="1.1" fill="#ffffff" />
        <circle cx="11.25" cy="8.5" r="1.1" fill="#ffffff" />
        <circle cx="4.5" cy="12.5" r="1.1" fill="#ffffff" />
        <circle cx="9" cy="12.5" r="1.1" fill="#ffffff" />
        <circle cx="13.5" cy="12.5" r="1.1" fill="#ffffff" />
        <circle cx="6.75" cy="16" r="1.1" fill="#ffffff" />
        <circle cx="11.25" cy="16" r="1.1" fill="#ffffff" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagUK({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of United Kingdom"
    >
      <defs>
        <clipPath id="flag-clip-uk">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-uk)">
        <rect width="36" height="36" fill="#00247d" />
        <path d="M0,0 L36,36 M36,0 L0,36" stroke="#ffffff" strokeWidth="6" />
        <path d="M0,0 L36,36 M36,0 L0,36" stroke="#cf142b" strokeWidth="2.8" />
        <path d="M18,0 V36 M0,18 H36" stroke="#ffffff" strokeWidth="9.5" />
        <path d="M18,0 V36 M0,18 H36" stroke="#cf142b" strokeWidth="5.5" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagFrance({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of France"
    >
      <defs>
        <clipPath id="flag-clip-fr">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-fr)">
        <rect x="0" width="12" height="36" fill="#002654" />
        <rect x="12" width="12" height="36" fill="#ffffff" />
        <rect x="24" width="12" height="36" fill="#ce1126" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagThailand({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Thailand"
    >
      <defs>
        <clipPath id="flag-clip-th">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-th)">
        <rect width="36" height="36" fill="#a51931" />
        <rect y="6" width="36" height="24" fill="#f4f5f8" />
        <rect y="11.5" width="36" height="13" fill="#2d2a4a" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagVietnam({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Vietnam"
    >
      <defs>
        <clipPath id="flag-clip-vn">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-vn)">
        <rect width="36" height="36" fill="#da251d" />
        <polygon
          points="18,7 21.5,15.5 30.5,15.5 23.5,20.5 26,29 18,24 10,29 12.5,20.5 5.5,15.5 14.5,15.5"
          fill="#ffff00"
        />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagHongKong({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Hong Kong"
    >
      <defs>
        <clipPath id="flag-clip-hk">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-hk)">
        <rect width="36" height="36" fill="#de2910" />
        <circle cx="18" cy="18" r="4.2" fill="#ffffff" />
        <circle cx="18" cy="10.5" r="3.4" fill="#ffffff" />
        <circle cx="25" cy="15" r="3.4" fill="#ffffff" />
        <circle cx="22.5" cy="24" r="3.4" fill="#ffffff" />
        <circle cx="13.5" cy="24" r="3.4" fill="#ffffff" />
        <circle cx="11" cy="15" r="3.4" fill="#ffffff" />
        <circle cx="18" cy="18" r="2.2" fill="#de2910" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagCanada({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Canada"
    >
      <defs>
        <clipPath id="flag-clip-ca">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-ca)">
        <rect width="36" height="36" fill="#ffffff" />
        <rect x="0" width="9" height="36" fill="#d80027" />
        <rect x="27" width="9" height="36" fill="#d80027" />
        <polygon
          points="18,8 19.5,13 23,12 21,16 24,18 20.5,20 21.5,23 18.5,21.5 18,27 17.5,21.5 14.5,23 15.5,20 12,18 15,16 13,12 16.5,13"
          fill="#d80027"
        />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagAustralia({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Australia"
    >
      <defs>
        <clipPath id="flag-clip-au">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-au)">
        <rect width="36" height="36" fill="#00008b" />
        {/* Canton mini UK */}
        <g transform="scale(0.5)">
          <rect width="36" height="36" fill="#00247d" />
          <path d="M0,0 L36,36 M36,0 L0,36" stroke="#ffffff" strokeWidth="6" />
          <path d="M0,0 L36,36 M36,0 L0,36" stroke="#cf142b" strokeWidth="3" />
          <path d="M18,0 V36 M0,18 H36" stroke="#ffffff" strokeWidth="9" />
          <path d="M18,0 V36 M0,18 H36" stroke="#cf142b" strokeWidth="5" />
        </g>
        <circle cx="26" cy="10" r="1.3" fill="#ffffff" />
        <circle cx="31" cy="16" r="1.3" fill="#ffffff" />
        <circle cx="22" cy="18" r="1.3" fill="#ffffff" />
        <circle cx="28" cy="22" r="1.3" fill="#ffffff" />
        <circle cx="26" cy="29" r="1.8" fill="#ffffff" />
        <circle cx="9" cy="27" r="2.2" fill="#ffffff" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagArgentina({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Argentina"
    >
      <defs>
        <clipPath id="flag-clip-ar">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-ar)">
        <rect y="0" width="36" height="12" fill="#75aadb" />
        <rect y="12" width="36" height="12" fill="#ffffff" />
        <rect y="24" width="36" height="12" fill="#75aadb" />
        <circle cx="18" cy="18" r="3.2" fill="#f6b40e" stroke="#85340a" strokeWidth="0.4" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagBrazil({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Brazil"
    >
      <defs>
        <clipPath id="flag-clip-br">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-br)">
        <rect width="36" height="36" fill="#009b3a" />
        <polygon points="18,6 32,18 18,30 4,18" fill="#fedf00" />
        <circle cx="18" cy="18" r="6.5" fill="#002776" />
        <path d="M12,17.5 Q18,15.5 24,19.5" stroke="#ffffff" strokeWidth="1.2" fill="none" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagIndia({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of India"
    >
      <defs>
        <clipPath id="flag-clip-in">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-in)">
        <rect y="0" width="36" height="12" fill="#ff9933" />
        <rect y="12" width="36" height="12" fill="#ffffff" />
        <rect y="24" width="36" height="12" fill="#138808" />
        <circle cx="18" cy="18" r="4.2" stroke="#000080" strokeWidth="1" fill="none" />
        <circle cx="18" cy="18" r="1.3" fill="#000080" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagUAE({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of United Arab Emirates"
    >
      <defs>
        <clipPath id="flag-clip-ae">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-ae)">
        <rect y="0" width="36" height="12" fill="#00732f" />
        <rect y="12" width="36" height="12" fill="#ffffff" />
        <rect y="24" width="36" height="12" fill="#000000" />
        <rect x="0" y="0" width="10" height="36" fill="#ff0000" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function FlagBangladesh({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-label="Flag of Bangladesh"
    >
      <defs>
        <clipPath id="flag-clip-bd">
          <circle cx="18" cy="18" r="17" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip-bd)">
        <rect width="36" height="36" fill="#006a4e" />
        <circle cx="16" cy="18" r="8" fill="#f42a41" />
      </g>
      <circle cx="18" cy="18" r="17" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function CountryFlag({ code, size = 28, className = '' }) {
  switch (code?.toLowerCase()) {
    case 'us':
      return <FlagUS size={size} className={className} />
    case 'gb':
    case 'uk':
      return <FlagUK size={size} className={className} />
    case 'fr':
      return <FlagFrance size={size} className={className} />
    case 'th':
      return <FlagThailand size={size} className={className} />
    case 'vn':
      return <FlagVietnam size={size} className={className} />
    case 'hk':
    case 'cn':
      return <FlagHongKong size={size} className={className} />
    case 'ca':
      return <FlagCanada size={size} className={className} />
    case 'au':
      return <FlagAustralia size={size} className={className} />
    case 'ar':
      return <FlagArgentina size={size} className={className} />
    case 'br':
      return <FlagBrazil size={size} className={className} />
    case 'in':
      return <FlagIndia size={size} className={className} />
    case 'ae':
      return <FlagUAE size={size} className={className} />
    case 'bd':
      return <FlagBangladesh size={size} className={className} />
    default:
      return null
  }
}
