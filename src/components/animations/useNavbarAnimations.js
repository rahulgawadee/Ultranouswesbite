import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const useNavbarAnimations = () => {
  const navBannerRef = useRef(null)
  const navLogoRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const dropdownRef = useRef(null)
  const navLinksRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner drop-in with more advanced animation
      if (navBannerRef.current) {
        gsap.fromTo(navBannerRef.current,
          { 
            yPercent: -100, 
            opacity: 0,
            rotationX: 15
          },
          { 
            yPercent: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
            delay: 0.4
          }
        )
      }

      // Logo animation (scale and fade)
      if (navLogoRef.current) {
        gsap.fromTo(navLogoRef.current,
          {
            scale: 0.8,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
            delay: 0.6
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const closeBanner = () => {
    gsap.to(navBannerRef.current, {
      yPercent: -100,
      opacity: 0,
      rotationX: 15,
      duration: 0.4,
      ease: "power1.in",
      onComplete: () => {
        navBannerRef.current.style.display = 'none'
      }
    })
  }

  const toggleMobileMenu = (isOpen) => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        onStart: () => {
          mobileMenuRef.current.style.display = 'block'
          document.body.style.overflow = 'hidden'
        }
      })
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          mobileMenuRef.current.style.display = 'none'
          document.body.style.overflow = 'auto'
        }
      })
    }
  }

  const toggleDropdown = (isOpen) => {
    if (isOpen) {
      const tl = gsap.timeline()
      tl.to(dropdownRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      tl.from(dropdownRef.current.querySelectorAll('a'), {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power1.out"
      }, "<0.1")
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power1.in"
      })
    }
  }

  const setupNavLinkHovers = () => {
    navLinksRef.current.forEach(link => {
      const underline = link.querySelector('span:last-child')
      
      link.addEventListener('mouseenter', () => {
        gsap.to(underline, {
          scaleX: 1,
          transformOrigin: "right center",
          duration: 0.4,
          ease: "power2.out"
        })
      })
      
      link.addEventListener('mouseleave', () => {
        gsap.to(underline, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.4,
          ease: "power2.out"
        })
      })
    })
  }

  return {
    navBannerRef,
    navLogoRef,
    mobileMenuRef,
    dropdownRef,
    navLinksRef,
    closeBanner,
    toggleMobileMenu,
    toggleDropdown,
    setupNavLinkHovers
  }
}