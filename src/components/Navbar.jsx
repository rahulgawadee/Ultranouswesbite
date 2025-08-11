import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-3 h-[80px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="https://www.ultranous.com/static/media/logo.8b6920a2.png" alt="Ultranous Logo" className="h-12 w-auto" />
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <Link
            to="/"
            className="text-[16px] font-normal text-[#1a1a1a] px-2 py-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4F3DFF] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-[16px] font-normal text-[#1a1a1a] px-2 py-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4F3DFF] after:transition-all after:duration-300 hover:after:w-full"
          >
            About Us
          </Link>
          <Link
            to="/features"
            className="flex items-center text-[16px] font-normal text-[#1a1a1a] px-2 py-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4F3DFF] after:transition-all after:duration-300 hover:after:w-full"
          >
            Features
            <span className="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-black">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H3M9 3V9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
          <Link
            to="/services"
            className="text-[16px] font-normal text-[#1a1a1a] px-2 py-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4F3DFF] after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className="text-[16px] font-normal text-[#1a1a1a] px-2 py-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#4F3DFF] after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimonials
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:info@ultranous.com"
            className="flex items-center bg-[#4F3DFF] text-white font-semibold text-[16px] rounded-full px-8 h-12 transition-all duration-150 hover:opacity-90 shadow-sm"
          >
            Contact us
            <span className="ml-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5 9H13M13 9L9.5 5.5M13 9L9.5 12.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>
      </nav>
    </header>
  )
}