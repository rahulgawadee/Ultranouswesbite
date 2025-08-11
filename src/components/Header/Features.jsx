import React from 'react'
import { CpuChipIcon, ServerStackIcon, ChartBarIcon } from '@heroicons/react/24/outline'

// Mock components for demonstration
import ProjectShowcase from '../ProjectShowcase'
import ContactFormSection from '../ContactFormSection'
import Marquee from '../Marquee'

const primaryFeatures = [
  {
    name: 'Advanced AI Integration',
    description: 'We embed cutting-edge AI and machine learning models to create intelligent systems that learn, adapt, and evolve with unprecedented precision.',
    icon: CpuChipIcon,
    gradient: 'from-blue-500 to-slate-600',
    stats: '99.7% Accuracy'
  },
  {
    name: 'Scalable Software Architecture',
    description: 'Our solutions are built on robust, cloud-native architectures that seamlessly scale from startup to enterprise-grade applications.',
    icon: ServerStackIcon,
    gradient: 'from-blue-500 to-slate-600',
    stats: '10M+ Users Supported'
  },
  {
    name: 'Data-Driven Strategies',
    description: 'Leveraging advanced analytics and real-time insights, we transform raw data into actionable intelligence for strategic decision-making.',
    icon: ChartBarIcon,
    gradient: 'from-blue-500 to-slate-600',
    stats: '40% Growth Average'
  },
]

const Features = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Enhanced Visual Appeal */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 sm:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/10 to-slate-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-slate-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Enhanced Image Container */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-slate-500/10  blur-2xl transform rotate-1"></div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
              alt="Team collaborating on innovative AI solutions"
              className="relative mx-auto w-full max-w-7xl rounded-2xl shadow-2xl ring-1 ring-gray-900/10 "
            />
          
          </div>

          {/* Enhanced Header Section */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
              <span className="text-sm font-medium text-blue-700">🚀 Pioneering the Future</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-slate-800 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
              <br />
              <span className="text-gray-600">for a Smarter Future</span>
            </h1>
            
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              At <span className="font-semibold text-blue-600">Ultranous AI International AB</span>, we bridge the gap between innovation and real-world impact. With deep cross-domain expertise, we design and build intelligent, scalable software solutions that not only solve today's challenges but prepare businesses for tomorrow's opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Explore Solutions</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-800 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="relative bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose <span className="text-blue-600">Ultranous AI</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple domains, delivering solutions that drive measurable results
            </p>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid max-w-xl mx-auto grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {primaryFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-7">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-12 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our intelligent solutions can accelerate your growth and innovation journey.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Component Sections */}
      <ProjectShowcase />
      <Marquee />
      <ContactFormSection />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Features