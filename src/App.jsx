import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRef } from 'react'
import { usePageLoadAnimation } from './components/animations/usePageLoadAnimation'
import { useAnimationSetup } from './hooks/useAnimationSetup'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Marquee from './components/Marquee'

import ProjectShowcase from './components/ProjectShowcase'
import HowWeWork from './components/HowWeWork'
import ServiceOfferings from './components/ServiceOfferings'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import TestimonialSection from './components/TestimonialSection'
import ContactFormSection from './components/ContactFormSection'
import Footer from './components/Footer'
import AboutUs from './components/Header/AboutUs'
import Services from './components/Header/Services'
import Features from './components/Header/Features'
import Testimonial from './components/Header/testimonial'

export default function App() {
  const mainWrapRef = useRef(null)
  
  useAnimationSetup()
  usePageLoadAnimation(mainWrapRef)
  useSmoothScroll()

  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Marquee />
               <ServiceOfferings />
              <ProjectShowcase />
              <HowWeWork />
             
              <TestimonialSection />
              <ContactFormSection />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}