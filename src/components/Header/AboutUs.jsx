import React from 'react'
import { Users, Award, Brain, Stethoscope, Cloud, User } from 'lucide-react'
import Marquee from '../Marquee'

const AboutUs = () => {
  return (
    <>
      <main className="py-24 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Who are we?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Excellence</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are based in Business Region Gothenburg, serving multi-domain technologies and innovation. Our cutting-edge knowledge, expertise, and experience always make us stand out when it comes to future technologies and niche intelligent solutions.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We handle every project with fresh energy and enthusiasm. We have specialist technical advisors for your every business need, with 100% commitment to making all projects the best they can possibly be.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Advisors Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Technology Advisors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our expert advisors who bring decades of experience across multiple industries and cutting-edge technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advisor 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                      Sawant P S
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Knowledgeable Entrepreneur who has worked on several multi-disciplinary projects and served a variety of industries. Always keen on sharing knowledge with peers and young entrepreneurs who encourage themselves to learn new technologies.
                </p>
              </div>
            </div>
            
            {/* Advisor 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      Dr Ajith Abraham Kurien
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  MBBS MD Medicine FISN Fellow - Renal Medicine Doctor at Petersburg City Hospital UK. He has vast experience in Healthcare IT and has helped many clients build innovative solutions and platforms.
                </p>
              </div>
            </div>

            {/* Advisor 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 md:col-span-2 lg:col-span-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      Satish Balakrishnan
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Author, cloud and DevOps technologist. Works as a solutions architect for a leading cloud provider with numerous certifications in cloud and DevOps. Has worked with various consulting organizations and start-ups.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Work With Us?</h3>
              <p className="text-xl opacity-90 mb-6">Let's build something amazing together with our expert team.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </main>
      <Marquee/>
    </>
  )
}

export default AboutUs