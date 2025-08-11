import { useRef, useEffect } from 'react'
import { useMarqueeAnimation } from './animations/useMarqueeAnimation'

// SVG/icon components for logos
const NeocoinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    {/* ...icon paths... */}
    <circle cx="14" cy="14" r="13" stroke="#808080" strokeWidth="2" fill="none"/>
    <path d="M9 14h10M14 9v10" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const MimoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    {/* ...icon paths... */}
    <rect x="6" y="6" width="16" height="16" rx="4" stroke="#808080" strokeWidth="2" fill="none"/>
    <circle cx="14" cy="14" r="4" fill="#808080"/>
  </svg>
)
const HouseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    {/* ...icon paths... */}
    <path d="M4 14L14 6l10 8" stroke="#808080" strokeWidth="2" fill="none"/>
    <rect x="8" y="14" width="12" height="8" stroke="#808080" strokeWidth="2" fill="none"/>
  </svg>
)
const YIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28">
    <rect width="28" height="28" rx="6" fill="#e0e0e0"/>
    <path d="M8 8l6 8 6-8" stroke="#808080" strokeWidth="2" fill="none"/>
  </svg>
)
const DoorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="8" y="8" width="12" height="12" stroke="#808080" strokeWidth="2" fill="none"/>
    <rect x="13" y="16" width="2" height="4" fill="#808080"/>
  </svg>
)
// ...add more icons as needed...

const partners = [
  { name: 'Krispy', type: 'text', style: 'font-bold', icon: null },
  { name: 'neocoin', type: 'icon-text', icon: <NeocoinIcon /> },
  { name: 'MIMO', type: 'icon-text', icon: <MimoIcon /> },
  { name: 'off-white', type: 'text', style: 'font-normal', icon: null },
  { name: 'HouseMade', type: 'icon-text', icon: <HouseIcon />, style: 'font-bold' },
  { name: 'Y Combinator', type: 'icon-text', icon: <YIcon /> },
  { name: 'door2day', type: 'icon-text', icon: <DoorIcon />, style: 'font-bold' },
  // ...add more as needed...
]

export default function Marquee() {
  const marqueeRef = useRef(null)
  const marqueeContentRef = useRef(null)
  useMarqueeAnimation(marqueeRef, marqueeContentRef)

  // --- Begin: Auto-scroll effect ---
  useEffect(() => {
    const marquee = marqueeContentRef.current
    if (!marquee) return
    let frameId
    let pos = 0

    const animate = () => {
      pos -= 1 // speed (px/frame)
      // Reset position for infinite loop
      if (Math.abs(pos) >= marquee.scrollWidth / 2) {
        pos = 0
      }
      marquee.style.transform = `translateX(${pos}px)`
      frameId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frameId)
  }, [])
  // --- End: Auto-scroll effect ---

  return (
    <section
      ref={marqueeRef}
      className="bg-white py-12 md:py-16 overflow-hidden"
      style={{ fontFamily: 'Satoshi, sans-serif' }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-center mb-10"
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 500,
            fontSize: '18px',
            color: '#1a1a1a',
            letterSpacing: 0.01,
          }}
        >
          Trusted by 500+ global companies
        </h2>
        <div className="relative">
          <div
            ref={marqueeContentRef}
            className="flex items-center whitespace-nowrap"
            style={{
              gap: '64px',
              minHeight: 64,
              filter: 'grayscale(1)',
            }}
          >
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={partner.name + '-' + idx}
                className="flex items-center justify-center"
                style={{
                  minWidth: 120,
                  gap: 12,
                  color: '#808080',
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: partner.style === 'font-bold' ? 700 : 400,
                  fontSize: 20,
                  letterSpacing: 0.01,
                }}
              >
                {partner.icon && (
                  <span className="mr-2 flex items-center">{partner.icon}</span>
                )}
                <span
                  className={partner.style || ''}
                  style={{
                    color: '#808080',
                    fontWeight: partner.style === 'font-bold' ? 700 : 400,
                  }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          {/* Optional: gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-24 h-full pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #fff 80%, transparent)',
              zIndex: 10,
            }}
          />
          <div className="absolute top-0 right-0 w-24 h-full pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #fff 80%, transparent)',
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </section>
  )
}