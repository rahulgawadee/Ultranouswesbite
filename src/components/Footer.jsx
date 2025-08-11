import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4">Ultranous</h3>
            <p className="text-gray-400 leading-relaxed">
              We develop business products that are fast, secure and matters to you
            </p>
          </div>

          {/* Column 2: Our Speciality */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Speciality</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Next-gen Tech</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App & web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Robotic Process Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistic and supply chain management</a></li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h4 className="font-bold text-lg mb-4">Office Address</h4>
            <p className="text-gray-400 leading-relaxed">
              Ultranous Ai International Ab Karlfeldtsgatan 12,
              <br />
              Gothenburg,
              <br />
              Sweden
              <br />
              41268
            </p>
            <p className="text-gray-400 mt-4">
              <span className="font-semibold">Org. Number:</span> 559291-9541
            </p>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Email / Call Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="tel:0046734783859" className="hover:text-white transition-colors">0046734783859</a></li>
              <li><a href="mailto:info@ultranous.com" className="hover:text-white transition-colors">info@ultranous.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ultranous. All rights reserved.
          </div>
              <a href="#" className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition-colors">
                CONTACT US
              </a>
            </div>
          </div>
        </footer>
      )
    }