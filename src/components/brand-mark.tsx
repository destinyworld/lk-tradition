type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lk-seal" x1="8" x2="58" y1="4" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B2A35" />
          <stop offset="1" stopColor="#43151F" />
        </linearGradient>
        <linearGradient id="lk-foil" x1="16" x2="49" y1="13" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D89B" />
          <stop offset="1" stopColor="#C0914B" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#lk-seal)" />
      <rect
        x="5.5"
        y="5.5"
        width="53"
        height="53"
        rx="14.5"
        stroke="url(#lk-foil)"
        strokeOpacity=".72"
      />
      <path
        d="M32 11.5L34.1 16.7L39.3 14.6L37.2 19.8L42.5 22L37.2 24.1L39.3 29.4L34.1 27.2L32 32.5L29.9 27.2L24.7 29.4L26.8 24.1L21.5 22L26.8 19.8L24.7 14.6L29.9 16.7L32 11.5Z"
        fill="url(#lk-foil)"
        fillOpacity=".45"
      />
      <text
        x="32"
        y="46"
        fill="url(#lk-foil)"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="21"
        fontWeight="600"
        letterSpacing="-2"
        textAnchor="middle"
      >
        LK
      </text>
      <circle cx="32" cy="52" r="1.2" fill="#F3D89B" />
    </svg>
  );
}
