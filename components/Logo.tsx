interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="InferReach logo"
    >
      {/* Rounded dark square background */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="#0f1317"
        stroke="#1f262e"
        strokeWidth="1.5"
      />

      {/* Small amber dot (top-right) */}
      <circle cx="52" cy="13" r="2.6" fill="#ffb454" />

      {/* Lowercase "i" — dot */}
      <circle cx="22" cy="26" r="3.4" fill="#ffb454" />

      {/* Lowercase "i" — stem */}
      <rect x="19" y="33" width="6" height="18" rx="1.2" fill="#ffb454" />

      {/* Uppercase "R" */}
      <path
        d="M33 51 V22 H44 C49.5 22 52 25 52 29.5 C52 33.5 50.2 36.2 47 37.2 L52.5 51 H46.5 L41.5 38.2 H38.5 V51 H33 Z M38.5 26.5 V34 H43.5 C45.8 34 47 32.8 47 30.3 C47 27.8 45.8 26.5 43.5 26.5 H38.5 Z"
        fill="#ffb454"
      />
    </svg>
  )
}