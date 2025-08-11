import React from 'react'

export default function HowWeWork() {
  return (
    <section className="py-24 px-4 md:px-0 bg-[#0a0a0a] min-h-[1000px] flex items-center">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-14 leading-tight tracking-tight w-full text-center">
          We deliver on time, in{' '}
          <span className="text-white font-extrabold">days and weeks</span>{' '}
          <span className="text-[#888] font-semibold">— not months.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-16 md:gap-0 md:justify-between md:items-stretch">
          <div className="flex-1 flex flex-col justify-center md:pr-12">
            <div className="bg-[#111] rounded-2xl shadow-lg border border-[#232323] divide-y divide-[#222] overflow-hidden">
              {[
                { num: '01', text: 'Onboard in <1 day' },
                { num: '02', text: 'Understand Scope & Strategy' },
                { num: '03', text: 'First designs in 4-5 days' },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center px-12 py-8"
                >
                  <div
                    className="text-[#4F3DFF] font-bold text-2xl md:text-3xl mr-12 flex-shrink-0"
                    style={{ minWidth: 60 }}
                  >
                    {step.num}
                  </div>
                  <div className="text-white text-xl md:text-2xl font-medium" style={{ minWidth: 220 }}>{step.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start mt-12 md:mt-0 md:pl-12">
            <blockquote className="italic text-[#ccc] text-xl md:text-2xl mb-8 leading-relaxed">
              "Ultranous delivered our MVP in record time. The process was smooth, transparent, and the results exceeded expectations."
            </blockquote>
            <div className="text-white font-bold mb-6 text-lg md:text-xl">
              Ahmet Kubus – CEO at Founder @Listic
            </div>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 rounded-full bg-lime-400 text-black font-bold text-base md:text-lg shadow-lg transition hover:scale-105"
            >
              Book a call <span className="ml-3 text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
  

