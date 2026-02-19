import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaArrowUp } from "react-icons/fa";
import HoverFeatures from "./HoverFeatures"; 

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
    text: "Enterprise-grade security for your  jre er er re er re re re er er re re re re re re re rer e erre  re re re er peace of mind.", 
    percent: 99, 
    points: ["End-to-end encryption", "End-to-end encryption" , "End-to-end encryption", "End-to-end encryption", "End-to-end encryption", "End-to-end encryption", "24/7 Monitoring"] 
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0); 
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (tabData[activeTab].percent / 100) * circumference;
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="py-20 px-4 flex justify-center">
        <div className="relative max-w-7xl w-full h-[450px] flex">
          <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl w-full z-0"></div>
          <div className="w-[30%] lg:w-[35%] py-12 pl-8 pr-4 relative z-20 flex flex-col justify-center">
            <div className="relative">
              <div className="absolute left-0 w-[97%] h-20 bg-teal-500 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-end pr-2 shadow-2xl" style={{ transform: `translateY(${activeTab * 80}px)` }} >
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <FaArrowRight className="text-white text-xl" />
                </div>
              </div>
              {tabData.map((tab, index) => (
                <button key={index} onClick={() => setActiveTab(index)} className={`relative w-full h-20 pl-8 text-left text-xl transition-colors duration-300 flex items-center z-30 ${ activeTab === index ? "text-white font-bold" : "text-gray-400 hover:text-gray-200" }`}>
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-[65%] lg:w-[70%] bg-white rounded-[3rem] shadow-xl flex items-center p-12 gap-8 z-10">
            <div key={activeTab} className="flex-1 animate-[fadeInUp_0.4s_ease-out_forwards]">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tabData[activeTab].title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{tabData[activeTab].text}</p>
              <div className="mt-6 space-y-3">
                {tabData[activeTab].points.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                    <FaCheckCircle className="text-teal-500 text-lg flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center w-56 h-64 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] p-4 shadow-sm flex-shrink-0">
              <div className="relative w-36 h-36">
                <svg className="w-full h-full -rotate-90">
                   <circle cx="72" cy="72" r={radius} stroke="#e5e7eb" strokeWidth="6" fill="transparent" />
                  <circle cx="72" cy="72" r={radius} stroke="#14b8a6" strokeWidth="6" fill="transparent" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} className="transition-all duration-1000 ease-out"/>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800 relative">
                    {tabData[activeTab].percent}%
                    <FaArrowUp className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-teal-500 animate-pulse text-sm" />
                  </span>
                </div>
              </div>
              <div className="text-center mt-4 text-xs text-gray-500">
                Customer-Centric<br /><span className="font-semibold text-gray-700">Commitment</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <HoverFeatures />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default About;