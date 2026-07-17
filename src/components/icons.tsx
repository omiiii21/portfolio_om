import React from 'react'

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number }

function createIcon(children: React.ReactNode, displayName: string) {
  const Icon: React.FC<IconProps> = ({ size = 20, ...props }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
  Icon.displayName = displayName
  return Icon
}

export const ArrowUpRight = createIcon(
  <>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </>,
  'ArrowUpRight',
)

export const ArrowDown = createIcon(
  <>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </>,
  'ArrowDown',
)

export const Mail = createIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
  'Mail',
)

export const Github = createIcon(
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
  'Github',
)

export const Linkedin = createIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5.94 5.94 0 0 1 16 8z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </>,
  'Linkedin',
)

export const FileText = createIcon(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </>,
  'FileText',
)

export const Download = createIcon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </>,
  'Download',
)

export const ExternalLink = createIcon(
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </>,
  'ExternalLink',
)

export const Quote = createIcon(
  <>
    <path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4" />
    <path d="M20 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4" />
  </>,
  'Quote',
)

export const Target = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </>,
  'Target',
)

export const Layers = createIcon(
  <>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </>,
  'Layers',
)

export const Zap = createIcon(
  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  'Zap',
)

export const BarChart = createIcon(
  <>
    <path d="M6 20v-4" />
    <path d="M12 20V10" />
    <path d="M18 20V4" />
  </>,
  'BarChart',
)

export const BookOpen = createIcon(
  <>
    <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
    <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
  </>,
  'BookOpen',
)

export const Dumbbell = createIcon(
  <>
    <path d="M4 9v6" />
    <path d="M7 6v12" />
    <path d="M17 6v12" />
    <path d="M20 9v6" />
    <path d="M7 12h10" />
  </>,
  'Dumbbell',
)

export const TrendingUp = createIcon(
  <>
    <path d="m22 7-8.5 8.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </>,
  'TrendingUp',
)

export const GraduationCap = createIcon(
  <>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12.5V17c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5" />
  </>,
  'GraduationCap',
)

export const Radar = createIcon(
  <>
    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
    <path d="M4 6h.01" />
    <path d="M2.29 9.62a10 10 0 1 0 19.02-1.27" />
    <path d="M16.24 7.76a6 6 0 1 0-8.01 8.91" />
    <path d="M12 18h.01" />
    <path d="M17.99 11.66a6 6 0 0 1-2.22 4.75" />
    <circle cx="12" cy="12" r="2" />
    <path d="m13.41 10.59 5.66-5.66" />
  </>,
  'Radar',
)

export const OrderBook = createIcon(
  <>
    <path d="M3 6h7" />
    <path d="M3 10h5" />
    <path d="M3 14h8" />
    <path d="M3 18h4" />
    <path d="M21 6h-7" />
    <path d="M21 10h-5" />
    <path d="M21 14h-8" />
    <path d="M21 18h-4" />
  </>,
  'OrderBook',
)

export const Menu = createIcon(
  <>
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </>,
  'Menu',
)

export const Close = createIcon(
  <path d="M18 6 6 18M6 6l12 12" />,
  'Close',
)

export const Sun = createIcon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </>,
  'Sun',
)

export const Moon = createIcon(
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  'Moon',
)

export const Check = createIcon(
  <path d="M20 6 9 17l-5-5" />,
  'Check',
)

export const MapPin = createIcon(
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>,
  'MapPin',
)

export const Send = createIcon(
  <>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </>,
  'Send',
)
