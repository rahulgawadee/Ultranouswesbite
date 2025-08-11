import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Spacebook - Business Accounting dashboard design',
    subtext: 'Web Design · SaaS Dashboard',
    category: 'finance'
  },
  {
    img: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Mimo - Mobile Learning App UI',
    subtext: 'Mobile App · EdTech',
    category: 'education'
  },
  {
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Door2Day - Delivery Platform',
    subtext: 'Web App · Logistics',
    category: 'logistics'
  },
  {
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'HouseMade - Smart Home Tablet UI',
    subtext: 'Tablet UI · IoT',
    category: 'iot'
  },
  {
    img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Neocoin - Crypto Wallet',
    subtext: 'Fintech · Mobile App',
    category: 'crypto'
  },
  {
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Krispy - Food Ordering Website',
    subtext: 'Web Design · Ecommerce',
    category: 'food'
  },
]

const GREEN = '#008000'

export default function ProjectShowcase() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const titleRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Add card to ref array
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  // Load images and initialize animations
  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const promises = caseStudies.map((cs) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.src = cs.img
          img.onload = resolve
          img.onerror = resolve
        })
      })
      
      await Promise.all(promises)
      setImagesLoaded(true)
    }
    
    loadImages()

    // Remove the scroll-to-section logic
    // gsap.to(window, {
    //   scrollTo: sectionRef.current,
    //   duration: 1,
    //   ease: "power2.inOut",
    // })

    // Set up ScrollTrigger defaults
    ScrollTrigger.defaults({
      markers: false,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Card animations and scroll-triggered index
  useEffect(() => {
    if (!cardsRef.current.length || !imagesLoaded) return

    cardsRef.current.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      })

      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [imagesLoaded])

  // Custom cursor handlers
  useEffect(() => {
    if (!showCursor) return
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [showCursor])

  // Staggered letter animation for the title
  useEffect(() => {
    const animatedText = titleRef.current
    if (animatedText) {
      // Split text into spans for staggered animation
      const text = animatedText.textContent
      animatedText.innerHTML = text
        .split("")
        .map((char, idx) =>
          char === " "
            ? `<span style="display:inline-block;width:0.5em"></span>`
            : `<span>${char}</span>`
        )
        .join("")

      gsap.from(animatedText.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: animatedText,
          start: "top 85%",
          end: "top 35%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
      })
    }
    // Clean up
    return () => {
      if (animatedText) {
        animatedText.innerHTML = animatedText.textContent
      }
    }
  }, [])

  // Format index as 01, 02, etc.
  const formatIndex = (i) => (i + 1).toString().padStart(2, '0')

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white px-6 sm:px-8 lg:px-12 min-h-screen"
    >
      {/* Custom "View" cursor */}
      {showCursor && (
        <div
          style={{
            position: 'fixed',
            left: cursorPos.x,
            top: cursorPos.y,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: 50,
            background: GREEN,
            color: '#fff',
            borderRadius: '50%',
            width: 70,
            height: 70,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: 1,
            boxShadow: '0 4px 24px 0 rgba(0,128,0,0.15)',
            transition: 'opacity 0.2s',
            opacity: 0.95,
            mixBlendMode: 'difference'
          }}
        >
          View
        </div>
      )}
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div className="mb-6 md:mb-0">
            <h2
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-2 animated-text"
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              Selected Projects
            </h2>
         
          </div>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-bold text-sm md:text-base shadow-lg hover:bg-indigo-700 transition-colors hover:shadow-xl"
          >
            Start your project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="text-gray-400 mt-4 grid grid-cols-1 gap-4 md:grid-cols-12">
          <p className="text-base md:col-span-4 lg:col-start-2 text-center">
            <span className="inline sm:hidden">{caseStudies.length}</span> 
          </p>
          <p className="text-lg md:col-span-8 lg:col-span-7 font-semibold">
            A curated selection of client projects and innovative solutions delivered with technical excellence and creative insight.
          </p>
        </div>

        {imagesLoaded ? (
          <div className="relative mt-12 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div
              className="sticky top-12 col-span-5 hidden md:flex h-fit w-full overflow-hidden items-center justify-start"
              style={{
                color: "#000",
                fontWeight: 900,
                fontSize: "11vw",
                lineHeight: 1,
                marginLeft: "0.5vw",
                letterSpacing: "-0.04em",
                textShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              <span className="relative -tracking-wider">{formatIndex(activeIndex)}.</span>
            </div>
            <aside className="relative col-span-full flex flex-col space-y-10 md:col-span-7">
              {caseStudies.map((cs, i) => (
                <div
                  key={i}
                  ref={addToCardsRef}
                  className="group p-0 work-card transition-all duration-300"
                  style={{
                    background: '#fff',
                    borderRadius: 0,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(0,128,0,0.06)',
                    transform: 'translateZ(0)',
                    cursor: showCursor ? 'none' : 'pointer',
                    position: 'relative',
                    minHeight: 440,
                    height: 520,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                  onMouseEnter={() => setShowCursor(true)}
                  onMouseLeave={() => setShowCursor(false)}
                >
                  <div className="relative overflow-hidden" style={{ height: 320 }}>
                    <img
                      src={cs.img}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ borderRadius: 0, height: '100%' }}
                    />
                    <div className="absolute inset-0 pointer-events-none transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-10" />
                  </div>
                  <div className="pt-6 pb-4 px-6 flex flex-col">
                    <h3 className="font-bold text-3xl md:text-4xl text-gray-900 mb-2">{cs.title}</h3>
                    <p className="text-gray-500 text-base mb-2">{cs.subtext}</p>
                    <span
                      className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium rounded-full w-fit mb-2"
                      style={{ color: "#008000", background: '#f6fff6' }}
                    >
                      {cs.category}
                    </span>
                    <a 
                      href="#" 
                      className="mt-2 inline-flex items-center text-indigo-600 font-medium text-base hover:text-indigo-800 transition-colors"
                    >
                      View case study
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-400">Loading projects...</div>
          </div>
        )}
      </div>
    </section>
  )
}