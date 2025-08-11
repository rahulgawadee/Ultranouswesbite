import React from 'react'
import ServiceOfferings from '../ServiceOfferings'
import { 
  FaBrain, 
  FaRobot, 
  FaMicrochip, 
  FaCloudversify, 
  FaCogs, 
  FaVrCardboard, 
  FaMobile, 
  FaDatabase, 
  FaChartLine,
  FaHospital,
  FaLink
} from 'react-icons/fa'
import Marquee from '../Marquee'

const Services = () => {
  return (
    <>
      <ServiceOfferings />
      <main className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-gray-900 tracking-tight">Our Services</h1>

          <div className="space-y-20">

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaBrain className="text-4xl text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">ARTIFICIAL INTELLIGENCE</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-600">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                  <FaBrain className="text-blue-500" /> Augmented Intelligence
                </h3>
                <p className="mb-4 leading-7">Augmented intelligence is a human-centered partnership model of people and AI working together to enhance cognitive performance. It focuses on AI's assistive role in advancing human capabilities.</p>
                <p className="leading-7">AI interacting with people and improving what they already know reduces mistakes and routine work, and can improve customer interactions, citizen services and patient care.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                  <FaRobot className="text-blue-500" /> Chatbots
                </h3>
                <p className="mb-4 leading-7">Chatbots are the face of AI and impact all areas where there is communication between humans such as car maker KIA, which talks to 115,000 users per week, or Lidl's Winebot Margot.</p>
                <p className="leading-7">Common applications exist in HR, IT help desk and self-service, but customer service is where chatbots are already having the most impact, notably changing the way customer service is conducted.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                  <FaMicrochip className="text-blue-500" /> Machine Learning
                </h3>
                <p className="mb-4 leading-7">Machine learning can solve business problems, such as personalized customer treatment, supply chain recommendations, dynamic pricing, medical diagnostics or anti-money laundering.</p>
                <p className="leading-7">Currently, ML is being used in multiple fields and industries to drive improvements and find new solutions for business problems, improving safety and efficiency.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                  <FaChartLine className="text-blue-500" /> AI Governance
                </h3>
                <p className="mb-4 leading-7">Organizations should not neglect AI governance. They need to be aware of the potential regulatory and reputational risks and create policies to fight AI-related biases.</p>
                <p className="leading-7">To develop AI governance, data and analytics leaders and CIOs should focus on three areas: trust, transparency and diversity to ensure successful AI adoption.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                  <FaMobile className="text-blue-500" /> Intelligent Applications
                </h3>
                <p className="mb-4 leading-7">Intelligent applications are enterprise applications with embedded or integrated AI technologies to support or replace human-based activities via intelligent automation.</p>
                <p className="leading-7">Today, enterprise application providers are embedding AI technologies within their offerings as well as introducing AI platform capabilities across all business processes.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaHospital className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">HEALTHCARE AND AI</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p className="text-gray-600 leading-7">Artificial intelligence (AI) has transformed industries around the world, and has the potential to radically alter the field of healthcare. Imagine being able to analyze data on patient visits to the clinic, medications prescribed, lab tests, and procedures performed, as well as data outside the health system -- such as social media, purchases made using credit cards, census records, Internet search activity logs that contain valuable health information. We are building systems and multiple innovative products in Healthcare domain.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaLink className="text-4xl text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">BLOCKCHAIN</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p className="mb-6 text-gray-600 leading-7">Enterprise blockchains today take a practical approach and implement only some of the elements of a complete blockchain by making the ledger independent of individual applications and participants and replicating the ledger across a distributed network to create an authoritative record of significant events. Everyone with permissioned access sees the same information, and integration is simplified by having a single shared blockchain.</p>
              <p className="text-gray-600 leading-7">In the future, true blockchain or "blockchain complete" will have the potential to transform industries, and eventually the economy, as complementary technologies such as AI and the IoT begin to integrate alongside blockchain. This expands the type of participants to include machines, which will be able to exchange a variety of assets — from money to real estate.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaCloudversify className="text-4xl text-cyan-600" />
              <h2 className="text-3xl font-bold text-gray-900">CLOUD SERVICES</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p className="text-gray-600 leading-7">Cloud services models represent a specific, pre-packaged combination of IT resources offered by a cloud provider. Six common cloud services models have become widely established and formalized: Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), Software-as-a-Service (SaaS), Storage as a Service (STaaS), Data as a Service (DaaS), Function as a Service (FaaS).</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaCogs className="text-4xl text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">HYPERAUTOMATION</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p className="mb-6 text-gray-600 leading-7">Hyperautomation is the expansion of automation from Robotic Process Automation (RPA) to a combination of technologies that enable the end-to-end automation lifecycle.</p>
              <p className="mb-6 text-gray-600 leading-7">As organizations mature their automation capabilities and move away from automating simple, well-defined tasks to more complex, exception heavy processes. The need for multidisciplinary governance, audit, security, and process optimization surges.</p>
              <h3 className="text-xl font-bold mb-6 text-gray-800">The 4 Key Components of Hyperautomation</h3>
              <ul className="grid md:grid-cols-2 gap-6 text-gray-600">
                <li className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaBrain className="text-yellow-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block mb-2 text-gray-700">Artificial Intelligence Capabilities:</strong>
                    Machine Learning (ML), Natural Language Processing (NLP), Intelligent OCR, and AI computer vision, so robots can read, see, and process more work.
                  </div>
                </li>
                <li className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaRobot className="text-yellow-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block mb-2 text-gray-700">Workforce Engagement:</strong>
                    Capability to engage grassroots and executives, including both functional and technical workers across the organization to recognize the value of automation.
                  </div>
                </li>
                <li className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaMicrochip className="text-yellow-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block mb-2 text-gray-700">Advanced Process Mining Tools:</strong>
                    Platforms that can look deeply into how your teams work to show you what you can and should automate.
                  </div>
                </li>
                <li className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaChartLine className="text-yellow-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block mb-2 text-gray-700">Advanced Analytics:</strong>
                    Track, measure and prove the business outcomes delivered by automation to enable continuous growth.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaVrCardboard className="text-4xl text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900">MULTIEXPERIENCE (AR/VR)</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p className="mb-6 text-gray-600 leading-7">Multiexperience replaces technology-literate people with people-literate technology. In this trend, the traditional idea of a computer evolves from a single point of interaction to include multisensory and multitouchpoint interfaces like wearables and advanced computer sensors.</p>
              <p className="mb-6 text-gray-600 leading-7">For example, Domino's Pizza created an experience beyond app-based ordering that includes autonomous vehicles, a pizza tracker and smart speaker communications.</p>
              <p className="text-gray-600 leading-7">In the future, this trend will become what's called an ambient experience, but currently multiexperience focuses on immersive experiences that use augmented reality (AR), virtual (VR), mixed reality, multichannel human-machine interfaces and sensing technologies.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaMobile className="text-4xl text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">EDGE COMPUTING</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p className="mb-6 text-gray-600 leading-7">Edge computing is a topology where information processing and content collection and delivery are placed closer to the sources of the information, with the idea that keeping traffic local and distributed will reduce latency. This includes all the technology on the Internet of Things (IoT).</p>
              <p className="text-gray-600 leading-7">By 2023, there could be more than 20 times as many smart devices at the edge of the network as in conventional IT roles.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaDatabase className="text-4xl text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">BIG DATA</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">List of Big Data Platforms</h3>
              <p className="mb-6 text-gray-600 leading-7">This aims around four letters which are S, A, P, S; which means Scalability, Availability, Performance, and Security. There are various tools responsible to manage hybrid data of IT systems. Some of them are listed below:</p>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <li className="bg-gray-100 p-4 rounded-lg text-center text-gray-700 font-medium border border-gray-200">Hadoop Delta Lake Migration</li>
                <li className="bg-gray-100 p-4 rounded-lg text-center text-gray-700 font-medium border border-gray-200">Data Catalog Platform</li>
                <li className="bg-gray-100 p-4 rounded-lg text-center text-gray-700 font-medium border border-gray-200">Data Ingestion Platform</li>
                <li className="bg-gray-100 p-4 rounded-lg text-center text-gray-700 font-medium border border-gray-200">IoT Analytics Platform</li>
                <li className="bg-gray-100 p-4 rounded-lg text-center text-gray-700 font-medium border border-gray-200">Data Integration Platform</li>
                <li className="bg-gray-100 p-4 rounded-lg text-center text-gray-700 font-medium border border-gray-200">ETL Transformation Platform</li>
              </ul>
              <p className="mb-6 text-gray-600 leading-7">There are many essential components which are given as follows:</p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                <div className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaDatabase className="text-teal-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-700">Data Ingestion, Management, ETL, and Warehouse</strong> – It provides these resources for effective data management and effective data warehousing, and this manages data as a valuable resource.
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaDatabase className="text-teal-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-700">Stream Computing</strong> – Helps compute the streaming data that is used for real- time analytics.
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaDatabase className="text-teal-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-700">Analytics/ Machine Learning</strong> – Features for advanced analytics and machine learning.
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl flex items-start gap-4 border border-gray-200">
                  <FaDatabase className="text-teal-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-700">Integration</strong> – It provides its user with features like integrating big data from any source with ease.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <FaChartLine className="text-4xl text-sky-600" />
              <h2 className="text-3xl font-bold text-gray-900">ERP</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p className="mb-6 text-gray-600 leading-7">ERP software is used frequently by businesses and some of the largest (well-known) businesses use ERP systems. However, at Bespoke, we create custom ERPs which give you the control over each feature and function you would like to include.</p>
              <p className="text-gray-600 leading-7">At Ultranous, we build this to your specification, the software is completely tailored to your needs. It will grow with your business and you will own it!</p>
            </div>
          </section>

          </div>
        </div>
      </main>
    <Marquee />
  </>
  )
}

export default Services