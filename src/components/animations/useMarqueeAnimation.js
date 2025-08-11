import { gsap } from 'gsap'
import { useEffect } from 'react'
export const useMarqueeAnimation = (marqueeRef, marqueeContentRef) => {
  useEffect(() => {
    if (!marqueeRef.current || !marqueeContentRef.current) return

    const ctx = gsap.context(() => {
      const contentWidth = marqueeContentRef.current.scrollWidth / 2
      const duration = contentWidth / 75 // Adjust speed (pixels per second)

      gsap.to(marqueeContentRef.current, {
        x: -contentWidth,
        duration: duration,
        ease: "none",
        repeat: -1
      })

      // Add a slight wobble effect for more dynamism
      const imgs = marqueeRef.current
        ? Array.from(marqueeRef.current.querySelectorAll('img')).filter(Boolean)
        : []
      if (imgs.length > 0) {
        gsap.to(imgs, {
          y: () => gsap.utils.random(-3, 3),
          duration: () => gsap.utils.random(1.5, 3),
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        })
      }
    }, marqueeRef)

    return () => ctx.revert()
  }, [])
}