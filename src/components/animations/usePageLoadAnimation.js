import { useEffect } from 'react'
import { gsap } from 'gsap'

export const usePageLoadAnimation = (mainWrapRef) => {
  useEffect(() => {
    if (!mainWrapRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(mainWrapRef.current,
        { 
          y: 60, 
          opacity: 0,
          skewY: 1
        },
        { 
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.2
        }
      )
    }, mainWrapRef)

    return () => ctx.revert()
  }, [])
}