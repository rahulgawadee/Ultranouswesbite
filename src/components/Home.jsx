import { useRef } from 'react'
import { usePageLoadAnimation } from './animations/usePageLoadAnimation'
import { useAnimationSetup } from '../hooks/useAnimationSetup'
import HeroSection from './HeroSection'
import Marquee from './Marquee'
import ProjectShowcase from './ProjectShowcase'
import HowWeWork from './HowWeWork'
import ServiceOfferings from './ServiceOfferings'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import TestimonialSection from './TestimonialSection'
import ContactFormSection from './ContactFormSection'

export default function Home() {
  const mainWrapRef = useRef(null)

  useAnimationSetup()
  usePageLoadAnimation(mainWrapRef)
  useSmoothScroll()

  return (
    <main ref={mainWrapRef}>
      <HeroSection />
      <Marquee />
      <ProjectShowcase />
      <HowWeWork />
      <ServiceOfferings />
      <TestimonialSection />
      <ContactFormSection />
      {/* Other sections would go here */}
    </main>
  )
}
