import { useRef, useEffect, useState } from 'react'

export default function HeroSection() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const rightColRef = useRef(null)
  const buttonsRef = useRef([])
  const animatedTextRef = useRef(null)
  const [animatedText, setAnimatedText] = useState('SaaS companies')

  // Animated text phrases
  const phrases = [
    'SaaS companies',
    'tech startups',
    'digital innovators',
    'growth-stage firms',
    'enterprise clients'
  ]

  // Staggered entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate main heading
          const heading = textRef.current?.querySelector('h1')
          if (heading) {
            heading.classList.add('animate-slide-up')
          }

          // Animate right column
          if (rightColRef.current) {
            rightColRef.current.classList.add('animate-slide-up-delay')
          }

          // Animate buttons
          buttonsRef.current.forEach((btn, idx) => {
            if (btn) {
              btn.classList.add(`animate-slide-up-btn${idx}`)
            }
          })
        }
      })
    })

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animated text cycling effect
  useEffect(() => {
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % phrases.length
      if (animatedTextRef.current) {
        animatedTextRef.current.classList.remove('opacity-100', 'translate-y-0')
        animatedTextRef.current.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-300')
        setTimeout(() => {
          setAnimatedText(phrases[idx])
          animatedTextRef.current.classList.remove('opacity-0', 'translate-y-5')
          animatedTextRef.current.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-500')
        }, 300)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(34,197,94,0.2)_0%,rgba(20,83,45,0.07)_60%,transparent_100%)] animate-[heroBgMove_8s_ease-in-out_infinite_alternate]" />
      </div>

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 sm:px-10 lg:px-20 xl:px-36 py-20 md:py-28 relative z-20">
          <div className="grid lg:grid-cols-[1.7fr_0.8fr] gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-12 pr-0 lg:pr-16 xl:pr-24">
              <div ref={textRef} className="space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-slate-900 pb-2 drop-shadow-md">
                  Transform your digital{' '}
                  <span className="font-semibold text-green-500 capitalize">
                    <span
                      ref={animatedTextRef}
                      className="inline-block font-medium transition-all duration-500 opacity-100 translate-y-0"
                    >
                      {animatedText}
                    </span>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl pl-1">
                  We craft exceptional digital experiences that drive growth, 
                  enhance user engagement, and establish market leadership.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                {/* New animated button */}
                <button
                  ref={el => buttonsRef.current[0] = el}
                  type="button"
                  className="relative overflow-hidden rounded-full bg-neutral-900 text-slate-50 font-semibold uppercase px-10 py-5 text-base shadow-lg transition-shadow duration-200 focus:outline-none"
                  tabIndex={0}
                >
                  <span className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-slate-500 text-slate-50 rounded-t-full transform translate-y-full transition-all duration-700 group-hover:translate-y-0 group-focus:translate-y-0">
                    Start Your Project
                  </span>
                  <span className="relative z-10 flex items-center justify-center transition-all duration-700">
                    <span>Start Your Project</span>
                  </span>
                </button>
                <button
                  ref={el => buttonsRef.current[1] = el}
                  className="px-10 py-5 bg-white/60 backdrop-blur border-2 border-slate-200 hover:border-slate-300 text-slate-800 font-medium rounded-2xl"
                >
                  <span className="text-lg">View Our Work</span>
                </button>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div 
              ref={rightColRef}
              className="relative flex flex-col items-center justify-center pl-2 pr-2 lg:pl-0 lg:pr-0"
            >
              <div className="relative">
                {/* Main Logo Only, no background */}
                <img
                  src="https://www.ultranous.com/static/media/logo.8b6920a2.png"
                  alt="Ultranous"
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
              {/* Added text below logo */}
              <div className="mt-8 text-center max-w-xs mx-auto">
                <p className="text-base sm:text-lg text-slate-700 font-normal">
                  We deliver globally UI, UX & web design smoothly, without delay, saving your time and money with an efficient process.
                </p>
                {/* Founder profile images */}
                <div className="flex justify-center gap-3 mt-6 mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Founder 2"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Founder 1"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/65.jpg"
                    alt="Founder 3"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  Loved by 500+<br />Founders
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </section>
    </>
  )
}