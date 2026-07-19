export default function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 236 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Adnan Ali"
    >
      <title>Adnan Ali</title>
      <defs>
        <linearGradient id="logoScreen" x1="18" y1="18" x2="48" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#102030" />
          <stop offset="1" stopColor="#0a121c" />
        </linearGradient>
        <linearGradient id="logoBody" x1="12" y1="20" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e2c3c" />
          <stop offset="1" stopColor="#121a26" />
        </linearGradient>
        <linearGradient id="logoSkin" x1="24" y1="36" x2="42" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0c2a4" />
          <stop offset="1" stopColor="#d99672" />
        </linearGradient>
        <linearGradient id="logoAccent" x1="66" y1="18" x2="160" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6d8fad" />
          <stop offset="1" stopColor="#8eabc4" />
        </linearGradient>
        <filter id="logoSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.4" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Mark */}
      <rect x="1" y="5" width="54" height="54" rx="15" fill="#0c1420" stroke="url(#logoAccent)" strokeWidth="1.4" />
      <rect x="1" y="5" width="54" height="54" rx="15" fill="url(#logoAccent)" opacity="0.08" />

      {/* Laptop */}
      <g filter="url(#logoSoft)">
        <rect x="11" y="18" width="34" height="23" rx="3.2" fill="url(#logoBody)" />
        <rect x="13.4" y="20.2" width="29.2" height="17.8" rx="1.8" fill="url(#logoScreen)" />
        {/* code lines on screen */}
        <rect x="16" y="23.5" width="12" height="1.4" rx="0.7" fill="#6d8fad" opacity="0.85" />
        <rect x="16" y="26.5" width="18" height="1.4" rx="0.7" fill="#8eabc4" opacity="0.7" />
        <rect x="16" y="29.5" width="9" height="1.4" rx="0.7" fill="#6d8fad" opacity="0.5" />
        <rect x="16" y="32.5" width="15" height="1.4" rx="0.7" fill="#a1a1aa" opacity="0.7" />
        {/* camera dot */}
        <circle cx="28" cy="19.2" r="0.7" fill="#6d8fad" opacity="0.65" />
        {/* hinge + base */}
        <path d="M10 41.2h36c1.4 0 2.3.7 2.3 1.5v.9c0 .4-.5.7-1.2.7H8.9c-.7 0-1.2-.3-1.2-.7v-.9c0-.8.9-1.5 2.3-1.5Z" fill="#162030" />
        <path d="M18 43.4h20c.5 0 .8.2.8.4s-.3.4-.8.4H18c-.5 0-.8-.2-.8-.4s.3-.4.8-.4Z" fill="#6d8fad" opacity="0.4" />
      </g>

      {/* Realistic hand resting on trackpad area */}
      <g filter="url(#logoSoft)">
        {/* forearm */}
        <path
          d="M34.5 44.2c1.8-3.4 5.2-5.2 8.8-4.6 1.6.3 2.8 1.5 3.2 3.1l.8 3.4c.2.9-.4 1.7-1.3 1.8l-8.4.9c-1.1.1-2-.7-2.1-1.8l-.1-.6c-.2-.8.1-1.6.9-2.2Z"
          fill="url(#logoSkin)"
        />
        {/* palm */}
        <path
          d="M29.8 39.6c2.4-1.8 5.8-1.6 7.8.6 1.3 1.4 1.6 3.3.9 5l-1.4 3.2c-.5 1.1-1.7 1.6-2.8 1.2l-4.6-1.7c-1.2-.4-1.8-1.8-1.3-3l1.4-5.3Z"
          fill="url(#logoSkin)"
        />
        {/* fingers */}
        <path d="M30.2 36.2c.2-1.5 1.4-2.5 2.6-2.3 1 .2 1.7 1.2 1.6 2.3l-.3 4.2c-.1.9-.9 1.5-1.8 1.3-.9-.2-1.5-1.1-1.4-2l.1-3.5Z" fill="#e8b090" />
        <path d="M33.4 34.8c.3-1.7 1.6-2.7 2.8-2.4 1.1.2 1.8 1.4 1.6 2.6l-.5 5.1c-.1 1-.9 1.6-1.8 1.4-1-.2-1.6-1.2-1.5-2.2l.2-4.5Z" fill="#f0c2a4" />
        <path d="M37 35.4c.4-1.6 1.7-2.5 2.9-2.1 1 .3 1.6 1.5 1.4 2.6l-.6 4.4c-.2.9-1 1.4-1.9 1.2-.9-.2-1.4-1.1-1.3-2l.1-4.1Z" fill="#e8b090" />
        <path d="M40.4 37c.5-1.3 1.6-2 2.6-1.6.9.3 1.3 1.3 1.1 2.2l-.5 3.2c-.2.7-.8 1.1-1.5.9-.8-.2-1.2-.9-1.1-1.6L40.4 37Z" fill="#d99672" />
        {/* thumb */}
        <path d="M28.6 42.2c-1.3-.2-2.2.8-2.1 1.9.1 1 1 1.7 2 1.6l2.4-.2c.8-.1 1.3-.8 1.2-1.5-.2-1.2-1.6-1.6-3.5-1.8Z" fill="#d99672" />
      </g>

      {/* Wordmark */}
      <text
        x="68"
        y="29"
        fill="#e8eef4"
        fontFamily="Sora, Arial, sans-serif"
        fontSize="23"
        fontWeight="700"
        letterSpacing="-0.6"
      >
        Adnan
      </text>
      <text
        x="68"
        y="46"
        fill="url(#logoAccent)"
        fontFamily="Sora, Arial, sans-serif"
        fontSize="10.5"
        fontWeight="600"
        letterSpacing="2"
      >
        ALI · ENGINEER
      </text>
    </svg>
  )
}
