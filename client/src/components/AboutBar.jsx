import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaCheckCircle, FaArrowUp } from "react-icons/fa";
import gsap from "gsap";

const tabData = [
  { 
    title: "Analytics", 
    text: "Real-time data processing with actionable insights.", 
    percent: 85, 
    points: ["Real-time tracking", "Custom dashboards"] 
  },
  { 
    title: "Growth", 
    text: "Accelerate your business with our growth engines.", 
    percent: 92, 
    points: ["SEO Optimization", "Lead generation"] 
  },
  { 
    title: "Security", 
    text: "Enterprise-grade security for your peace of mind.", 
    percent: 99, 
    points: ["End-to-end encryption", "24/7 Monitoring"] 
  },
  { 
    title: "Security", 
    text: "Enterprise-grade security for your peace of mind. jre er er re er re re re er er re re re re re re re rer e erre re re re er", 
    percent: 99, 
    points: ["End-to-end encryption", "End-to-end encryption" , "End-to-end encryption", "End-to-end encryption", "End-to-end encryption", "End-to-end encryption", "24/7 Monitoring"] 
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (tabData[activeTab].percent / 100) * circumference;

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="py-10 md:py-20 px-4 flex justify-center w-full">
        <div className="relative max-w-7xl w-full flex flex-col md:flex-row md:h-[450px] bg-black rounded-[2rem] md:rounded-[3rem] shadow-2xl">
          <div className="w-full md:w-[40%] lg:w-[35%] py-8 md:py-12 px-4 md:pl-8 md:pr-4 relative z-20 flex flex-col justify-center">
            <div className="relative">
              <div className="absolute left-0 w-full md:w-[105%] lg:w-[97%] h-16 md:h-20 bg-teal-500 rounded-[1.5rem] md:rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-end pr-2 shadow-2xl" 
                style={{ transform: `translateY(${activeTab * (window.innerWidth >= 768 ? 80 : 64)}px)` }} 
              >
                <div className="bg-black w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg">
                  <FaArrowRight className="text-white text-lg md:text-xl" />
                </div>
              </div>
              {tabData.map((tab, index) => (
                <button  key={index} onClick={() => setActiveTab(index)} className={`relative w-full h-16 md:h-20 pl-6 md:pl-8 text-left text-lg md:text-xl transition-colors duration-300 flex items-center z-30 ${  activeTab === index ? "text-white font-bold" : "text-gray-400 hover:text-gray-200" }`} >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[65%] lg:w-[70%] bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl p-6 md:p-8 lg:p-12 md:absolute right-0 top-0 md:h-full z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center border border-gray-100 md:border-none mt-4 md:mt-0">
            <div ref={contentRef} className="flex-1 w-full overflow-hidden">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{tabData[activeTab].title}</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{tabData[activeTab].text}</p>
              
              <div className="mt-4 md:mt-6 flex flex-wrap gap-y-2 md:gap-y-3 gap-x-4 md:gap-x-6 max-h-[120px] md:max-h-[150px] overflow-y-auto pr-2">
                {tabData[activeTab].points.map((point, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium w-full sm:w-auto">
                    <FaCheckCircle className="text-teal-500 text-base md:text-lg flex-shrink-0" />
                    <span className="text-sm md:text-base whitespace-nowrap">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center w-48 h-56 lg:w-56 lg:h-64 bg-gray-50/50 border border-gray-100 rounded-[2rem] lg:rounded-[2.5rem] p-4 shadow-sm flex-shrink-0">
              <div className="relative w-28 h-28 lg:w-36 lg:h-36">
                <svg className="w-full h-full -rotate-90">
                   <circle cx="50%" cy="50%" r={radius} stroke="#e5e7eb" strokeWidth="6" fill="transparent" />
                  <circle cx="50%" cy="50%" r={radius} stroke="#14b8a6" strokeWidth="6" fill="transparent" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} className="transition-all duration-1000 ease-out"/>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl lg:text-3xl font-bold text-gray-800 relative">
                    {tabData[activeTab].percent}%
                    <FaArrowUp className="absolute -bottom-5 lg:-bottom-6 left-1/2 -translate-x-1/2 text-teal-500 animate-bounce text-xs lg:text-sm" />
                  </span>
                </div>
              </div>
              <div className="text-center mt-3 lg:mt-4 text-[10px] lg:text-xs text-gray-500">
                Customer-Centric<br /><span className="font-semibold text-gray-700">Commitment</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;