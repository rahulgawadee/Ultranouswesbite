import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardColors = [
  "bg-blue-600",
  "bg-yellow-500",
  "bg-black",
  "bg-orange-500",
  "bg-black"
];

const services = [
  {
    title: "Web Development",
    description: "Build lightning-fast, scalable web platforms with cutting-edge technologies and seamless user experiences.",
    button: "Learn More",
    bg: cardColors[0],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Mobile App Development",
    description: "Deliver elegant, high-performance mobile solutions for iOS and Android, tailored to your brand and audience.",
    button: "Discover",
    bg: cardColors[1],
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "AI & ML Solutions",
    description: "Empower your business with intelligent automation, predictive analytics, and custom AI-driven strategies.",
    button: "Explore",
    bg: cardColors[2],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "UI/UX Design",
    description: "Craft visually stunning, intuitive interfaces that maximize engagement and drive conversions.",
    button: "Get Started",
    bg: cardColors[3],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Cloud Solutions",
    description: "Scale effortlessly with secure, robust cloud infrastructure and seamless integrations.",
    button: "Learn More",
    bg: cardColors[4],
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "DevOps & CI/CD",
    description: "Accelerate delivery with automated pipelines, continuous integration, and reliable deployments.",
    button: "Discover",
    bg: cardColors[0],
    image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Quality Assurance",
    description: "Guarantee flawless performance and reliability with rigorous testing and QA best practices.",
    button: "Explore",
    bg: cardColors[1],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

const ServiceOfferings = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const titleRef = useRef(null);
  const cursorRef = useRef(null);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation for the title
    const titleAnim = gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Horizontal scroll animation for cards
    const section = sectionRef.current;
    const scrollContent = scrollRef.current;
    const padding = parseInt(window.getComputedStyle(scrollContent).paddingLeft);

    const scrollAnim = gsap.to(scrollContent, {
      x: () => -(scrollContent.scrollWidth - window.innerWidth + padding),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollContent.scrollWidth - window.innerWidth + padding + 200}`, // Added extra spacing
        pin: true,
        scrub: 2,
        anticipatePin: 1,
      },
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      titleAnim.kill();
      scrollAnim.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen text-white">
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          transform: "translate(-50%, -50%) scale(0) opacity(0)",
          zIndex: 9999,
          background: "rgba(34, 197, 94, 0.8)",
          color: "white",
          borderRadius: "50%",
          width: 80,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: 0.5,
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
          backdropFilter: "blur(2px)",
        }}
      >
        Explore
      </div>
      <div className="container mx-auto px-4 py-16 text-center" ref={titleRef}>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black mb-4 drop-shadow-lg">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl text-black mt-4 max-w-3xl mx-auto leading-relaxed font-medium">
          From concept to launch, we deliver world-class solutions to elevate your digital presence and accelerate growth.
        </p>
      </div>
      <section ref={sectionRef} className="w-full h-screen overflow-hidden flex items-center">
        <div ref={scrollRef} className="flex space-x-12 px-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`min-w-[65vw] md:min-w-[65vw] h-[80vh] ${service.bg} relative rounded-xl shadow-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl flex`}
              style={{
                cursor: showCursor ? 'none' : 'pointer',
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-white/5 pointer-events-none" />
              <div className="flex h-full w-full">
                <div className="w-3/5 flex flex-col justify-center p-10 z-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-white">
                    {service.title}
                  </h2>
                  <p className="text-barafcese md:text-lg opacity-95 mb-8 leading-relaxed font-medium text-white">
                    {service.description}
                  </p>
                  <button
                    className="self-start bg-white text-black px-7 py-3 text-base font-semibold shadow-lg rounded-full flex items-center gap-3 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                  >
                    {service.button}
                    <span className="inline-block">
                      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="w-2/5 h-full relative flex items-center justify-end">
                  <div className="absolute left-[-40px] top-0 h-full z-20 pointer-events-none">
                    <svg width="40" height="100%" viewBox="0 0 40 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                      <path d="M40,0 Q0,200 40,400" fill="white" fillOpacity="0.15"/>
                    </svg>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-r-xl z-10 transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{
                      boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceOfferings;
