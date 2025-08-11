import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'

const testimonials = [
  {
    type: 'rating',
    rating: 4.9,
    reviews: 200,
 
  },
  {
    company: 'Kodezi',
    quote: "Ultranous is extremely reliable and delivers on time. The process was smooth and transparent.",
    highlight: 'reliable',
    user: {
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Alex Johnson',
      role: 'CEO, Kodezi',
    },
  },
  {
    company: 'tournated',
    quote: "Highly happy with the design quality and communication. Will work again!",
    highlight: 'Highly happy',
    user: {
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Sara Lee',
      role: 'Founder, tournated',
    },
  },
  {
    company: 'ActiveSync',
    quote: "They created the best user experience for our SaaS. Highly recommended!",
    highlight: 'best user experience',
    user: {
      img: 'https://randomuser.me/api/portraits/men/65.jpg',
      name: 'Michael Chen',
      role: 'Product Lead, ActiveSync',
    },
  },
  {
    company: 'NextGen',
    quote: "The team was super responsive and creative. Loved the results!",
    highlight: 'super responsive',
    user: {
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Priya Singh',
      role: 'CTO, NextGen',
    },
  },
  {
    company: 'Finwise',
    quote: "Exceptional design and fast delivery. Will recommend to others.",
    highlight: 'Exceptional',
    user: {
      img: 'https://randomuser.me/api/portraits/men/77.jpg',
      name: 'David Kim',
      role: 'COO, Finwise',
    },
  },
  {
    company: 'EduSpark',
    quote: "Amazing collaboration and attention to detail. Great experience!",
    highlight: 'Amazing',
    user: {
      img: 'https://randomuser.me/api/portraits/women/21.jpg',
      name: 'Emily Carter',
      role: 'CEO, EduSpark',
    },
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const cardRefs = useRef([])
  const [cardsPerView, setCardsPerView] = useState(4)
  const totalCards = testimonials.length
  const totalPages = Math.ceil(totalCards / cardsPerView)

  // Handle responsive card count
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width < 640) setCardsPerView(1)
      else if (width < 1024) setCardsPerView(2)
      else setCardsPerView(4)
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // GSAP animations for sliding
  useEffect(() => {
    if (!carouselRef.current) return

    const cardWidth = cardRefs.current[0]?.offsetWidth || 300
    const gap = 32
    const offset = currentIndex * (cardWidth + gap) * cardsPerView

    gsap.to(carouselRef.current, {
      x: -offset,
      duration: 0.6,
      ease: "power2.out"
    })
  }, [currentIndex, cardsPerView])

  // Fade-in animation for cards
  useEffect(() => {
    if (!carouselRef.current) return
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" }
    )
  }, [currentIndex, cardsPerView])

  const nextSlide = () => {
    setCurrentIndex(prev => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <div className="mx-auto w-24 h-1 bg-indigo-500 rounded-full mb-4" />
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our clients' success stories are the best testament to our commitment to quality and innovation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Cards */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300"
            style={{ gap: '32px', willChange: 'transform' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                style={{
                  width: `calc((100% - ${(cardsPerView - 1) * 32}px) / ${cardsPerView})`,
                  minHeight: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {testimonial.type === 'rating' ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="text-6xl font-extrabold text-indigo-600 mb-2">{testimonial.rating}</div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-6 h-6 ${i < Math.round(testimonial.rating) ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                   
                
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <span className="text-gray-500 text-sm font-semibold tracking-wide uppercase mb-3 block">
                        {testimonial.company}
                      </span>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="text-3xl font-bold text-indigo-200 mr-1">"</span>
                        {testimonial.quote.split(testimonial.highlight).map((part, i) => (
                          <React.Fragment key={i}>
                            {part}
                            {i === 0 && (
                              <span className="font-bold text-indigo-600">
                                {testimonial.highlight}
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <img
                        src={testimonial.user.img}
                        alt={testimonial.user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 mr-4"
                      />
                      <div>
                        <div className="font-bold text-gray-800">{testimonial.user.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.user.role}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12">
          {/* Pagination Dots */}
          <div className="flex gap-2.5 mr-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-indigo-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 640px) {
          .rounded-2xl { border-radius: 1rem !important; }
          .p-8 { padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}