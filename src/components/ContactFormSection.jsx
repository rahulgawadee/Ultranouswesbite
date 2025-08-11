import React, { useState, useEffect, useRef } from 'react'
import { FiCheck, FiPlus, FiMail } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const helpTags = [
  'UI/UX Design',
  'SaaS Design',
  'Branding',
  'CRO',
  'Mobile App',
  'Development',
  'MVP Development',
  'Web Design',
]

// Add Ultranous logo URL
const LOGO_URL = 'https://www.ultranous.com/static/media/logo.8b6920a2.png'

export default function ContactFormSection() {
  const [selectedTags, setSelectedTags] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    source: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const sectionRef = useRef(null)
  const leftContentRef = useRef(null)
  const formRef = useRef(null)
  const tagsRef = useRef([])

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  useEffect(() => {
    // Animation for section entrance
   

    // Stagger animation for left content items
    gsap.from(leftContentRef.current.querySelectorAll('li'), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out",
      scrollTrigger: {
        trigger: leftContentRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    })



    

  }, [])

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
      style={{ minHeight: '80vh' }} // Ensure section is visible
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-5/12 flex flex-col" ref={leftContentRef}>
            <div className="mb-10">
              {/* Added logo */}
              <img
                src={LOGO_URL}
                alt="Ultranous logo"
                loading="lazy"
                className="w-32 h-auto mb-6"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Have a Project?<br />
                {/* Keep accent text green-500 */}
                <span className="text-green-500">
                  Let's talk!
                </span>
              </h2>
              
              <ul className="space-y-4">
                {[
                  "NDA? Absolutely just ask.",
                  "We'll respond in 24 hours — fast & focused.",
                  "Work with senior UX experts, not juniors."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      {/* Green accent for icon chip */}
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <FiCheck className="text-green-600" />
                      </div>
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Make card squarish + green accents */}
            <div className="mt-auto p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-50 mr-4">
                  <FiMail className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email us directly</h3>
                  <a 
                    href="mailto:hello@ultranous.com" 
                    className="text-green-600 hover:underline"
                  >
                    hello@ultranous.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:w-7/12">
            <div 
              // Make main card squarish
              className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-10 relative overflow-hidden"
              ref={formRef}
            >
              {/* Decorative elements: switch to greenish tones */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-green-50 opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-green-50 opacity-50"></div>
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 transition-all hover:border-gray-300"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 transition-all hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Budget & Source */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 appearance-none hover:border-gray-300"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 appearance-none hover:border-gray-300"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your product, goals, and timeline..."
                    className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 transition-all hover:border-gray-300"
                    required
                  />
                </div>

                {/* Services Needed */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How can we help you?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {helpTags.map((tag, index) => (
                      <button
                        type="button"
                        key={tag}
                        ref={el => tagsRef.current[index] = el}
                        onClick={() => toggleTag(tag)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedTags.includes(tag)
                            ? 'bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button - greenish dark to light multicolour gradient */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 font-bold rounded-lg shadow-sm transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 hover:from-green-800 hover:via-emerald-700 hover:to-lime-600 hover:shadow-md'
                  } relative overflow-hidden`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {/* Success message - keep text green-500 */}
                {submitSuccess && (
                  <div
                    className="mt-4 p-4 bg-green-50 text-green-500 rounded-lg text-center"
                    style={{
                      animation: 'fadeIn 0.7s ease',
                      opacity: 1,
                      transform: 'translateY(0)'
                    }}
                  >
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Add fadeIn keyframes globally in your CSS */}
    </section>
  )
}

// Add this to your global CSS (e.g., index.css or App.css):
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
*/