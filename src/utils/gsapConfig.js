// gsapConfig utility placeholder
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { TextPlugin } from 'gsap/TextPlugin'

export const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin)
  
  // Default settings
  gsap.defaults({
    ease: 'power2.out'
  })
}