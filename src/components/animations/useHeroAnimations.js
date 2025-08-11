import { gsap } from 'gsap'
import { useEffect } from 'react'
export const useHeroAnimations = ({
  heroRef,
  textAnimationRef,
  paraRef,
  buttonsRef
}) => {
  useEffect(() => {
    if (!textAnimationRef.current) return

    const texts = gsap.utils.toArray('.hero_animation_text').filter(Boolean)
    if (!texts || texts.length === 0) return // Only proceed if texts exist

    const ctx = gsap.context(() => {
      gsap.set(texts, { y: 30, opacity: 0, scale: 0.95 })
      gsap.set(texts[0], { y: 0, opacity: 1, scale: 1 })

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      
      texts.forEach((text, i) => {
        const nextIndex = (i + 1) % texts.length
        
        tl.to(text, {
          y: -30,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          ease: "power2.inOut"
        }, `+=1.5`)
        tl.to(texts[nextIndex], {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.2)"
        }, "<0.3")
      })
    }, textAnimationRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!paraRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(paraRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 1.2,
          duration: 0.8,
          ease: "power2.out"
        }
      )
    }, paraRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!buttonsRef.current || !Array.isArray(buttonsRef.current) || buttonsRef.current.length === 0) return

    const ctx = gsap.context(() => {
      buttonsRef.current.forEach(button => {
        if (!button) return
        const hoverBg = button.querySelector('.bp_hover-bg, .bm_hover-bg-stroke')
        const primaryIcon = button.querySelector('.bp_icon:not(.ab)')
        const altIcon = button.querySelector('.bp_icon.ab')

        if (hoverBg) {
          gsap.set(hoverBg, { scaleX: 0, transformOrigin: 'left center' })
          
          button.addEventListener('mouseenter', () => {
            gsap.to(hoverBg, {
              scaleX: 1,
              duration: 0.4,
              ease: "power2.out"
            })
          })
          
          button.addEventListener('mouseleave', () => {
            gsap.to(hoverBg, {
              scaleX: 0,
              duration: 0.4,
              ease: "power2.out"
            })
          })
        }

        if (primaryIcon && altIcon) {
          gsap.set(altIcon, { x: 8, opacity: 0 })
          
          button.addEventListener('mouseenter', () => {
            gsap.to(primaryIcon, {
              x: -8,
              opacity: 0,
              duration: 0.2,
              ease: "power1.in"
            })
            gsap.to(altIcon, {
              x: 0,
              opacity: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
              delay: 0.1
            })
          })
          
          button.addEventListener('mouseleave', () => {
            gsap.to(primaryIcon, {
              x: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power1.out"
            })
            gsap.to(altIcon, {
              x: 8,
              opacity: 0,
              duration: 0.2,
              ease: "power1.in"
            })
          })
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])
}