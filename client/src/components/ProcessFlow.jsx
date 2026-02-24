import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  FaSearch, 
  FaUserCog, 
  FaPencilRuler, 
  FaCheckDouble,
  FaNetworkWired,
  FaShieldAlt,
  FaRocket,
  FaCubes
} from "react-icons/fa";
const journeySteps = [
  {
    id: 1,
    title: "DISCOVER",
    color: "#22d3ee",
    icon: FaSearch,
    bullets: ["STAKEHOLDER INTERVIEWS", "COMPETITOR ANALYSIS", "USER INTERVIEWS", "EMPATHY MAPPING", "DATA ANALYSIS"],
    boxTitle: "Distributed Network",
    boxIcon: FaNetworkWired,
    boxDesc: "Our process leverages a global network of logistics hubs to ensure requirements are met in real-time across multiple time zones."
  },
  {
    id: 2,
    title: "LEARN",
    color: "#60a5fa",
    icon: FaUserCog,
    bullets: ["USER PERSONAS", "USER JOURNEYS", "INFO ARCHITECTURE", "WIREFRAMING", "USABILITY TESTING"],
    boxTitle: "Enterprise Security",
    boxIcon: FaShieldAlt,
    boxDesc: "Data integrity is validated at every interlocking phase, maintaining ISO compliance throughout the development lifecycle."
  },
  {
    id: 3,
    title: "CREATE",
    color: "#2dd4bf", 
    icon: FaPencilRuler,
    bullets: ["HIGH-FIDELITY WIRES", "INTERACTIVE PROTOTYPES", "INDUSTRIAL DESIGN", "MICRO INTERACTIONS", "TECH STYLE GUIDES"],
    boxTitle: "Rapid Deployment",
    boxIcon: FaRocket,
    boxDesc: "Transition from the Create phase to Delivery in record time with our automated integration and validation pipelines."
  },
  {
    id: 4,
    title: "VALIDATE",
    color: "#818cf8",
    icon: FaCheckDouble,
    bullets: ["USABILITY TESTING", "SUMMATIVE TESTING", "FORMATIVE AUDITS", "HEURISTIC EVALUATION", "A/B TESTING"],
    boxTitle: "Continuous Delivery",
    boxIcon: FaCubes,
    boxDesc: "From initial assessment to global delivery, our sequential interlocking process ensures every technical requirement is optimized."
  },
];

const ProcessFlow = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const lineRef = useRef(null);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        strokeDashoffset: -200, 
        ease: "none",
        duration: 4,
        repeat: -1 
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f8fb] py-12 px-4 flex flex-col items-center overflow-x-hidden font-sans">
      <div className="w-full max-w-7xl">
        <div className="flex flex-row justify-between items-center text-xs md:text-sm font-bold tracking-widest text-gray-400 mb-16 md:mb-24 px-4 md:px-12 relative z-20">
       <div className="group flex flex-col items-start cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </div>
              <span className="transition-colors duration-300 group-hover:text-gray-600">
                INPUT PHASE
              </span>
            </div>
            <span className="text-cyan-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-cyan-600 drop-shadow-sm">
              REQUIREMENTS
            </span>
          </div>
          <div className="group flex flex-col items-end cursor-default">
            <div className="flex items-center gap-2 mb-1">
              <span className="transition-colors duration-300 group-hover:text-gray-600">
                END POINT
              </span>
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" style={{ animationDuration: '1.5s' }}></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </div>
            </div>
            <span className="text-indigo-500 transition-all duration-300 group-hover:-translate-x-2 group-hover:text-indigo-600 drop-shadow-sm">
              DELIVERY
            </span>
          </div>
        </div>
        <div className="relative w-full py-10 md:py-20 flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-4 px-2 md:px-12">
          <svg 
            className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none hidden md:block z-0" 
            preserveAspectRatio="none" 
            viewBox="0 0 1000 100"
          >
            <path 
              ref={lineRef} 
              d="M 0 50 C 150 -20, 250 120, 500 50 C 750 -20, 850 120, 1000 50" 
              fill="none" 
              stroke="#bbcce0" 
              strokeWidth="2.5" 
              strokeDasharray="8 8" 
            />
          </svg>
          {journeySteps.map((step) => {
            const isHovered = hoveredId === step.id;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredId(step.id)}
                onMouseLeave={() => setHoveredId(null)}
                 className={`relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-out group
                  ${isHovered ? "scale-110 shadow-2xl bg-[#0f172a]" : "scale-100 shadow-md bg-white"}
                `}
              >
                <div className="absolute inset-0 rounded-full border-[4px] border-slate-100 transition-colors duration-500"></div>
                <div 
                  className="absolute inset-0 rounded-full border-[4px] border-transparent transition-transform duration-700 ease-out"
                  style={{ 
                    borderTopColor: step.color, 
                    borderBottomColor: step.color,
                    transform: isHovered ? "rotate(90deg)" : "rotate(-45deg)"
                  }}
                ></div>
                <div className={`absolute flex flex-col items-center transition-all duration-500 ease-in-out ${isHovered ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"}`}>
                  <step.icon size={28} color={step.color} className="mb-2 md:mb-3 drop-shadow-sm md:w-[36px] md:h-[36px]" />
                  <h3 style={{ color: step.color }} className="font-extrabold tracking-widest text-[10px] sm:text-xs md:text-base">
                    {step.title}
                  </h3>
                </div>
                <div className={`absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-center transition-all duration-250 ease-in-out ${isHovered ? "opacity-100 scale-100 delay-100" : "opacity-0 scale-75 pointer-events-none"}`}>
                  <ul className="text-white text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-wide space-y-1 sm:space-y-1.5 md:space-y-2">
                    {step.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-1 sm:gap-2 leading-tight">
                        <span style={{ color: step.color }}>•</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 md:mt-24 px-4">
          {journeySteps.map((box) => {
            const isBoxActive = isMobile || hoveredId === box.id;

            return (
              <div 
                key={`box-${box.id}`}
                className={`p-6 rounded-3xl bg-white border-b-4 transition-all duration-500 ease-out flex flex-col
                  ${isBoxActive 
                    ? "shadow-xl md:-translate-y-3 md:scale-105 z-20" 
                    : "shadow-sm translate-y-0 scale-100 opacity-80"}
                `}
                style={{ borderBottomColor: isBoxActive ? box.color : 'transparent' }}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors duration-500`}
                  style={{ backgroundColor: isBoxActive ? `${box.color}20` : '#f1f5f9' }}
                >
                  <box.boxIcon size={18} color={isBoxActive ? box.color : '#94a3b8'} />
                </div>
                
                <h4 className="font-bold text-gray-800 text-lg mb-2 transition-colors duration-300">
                  {box.boxTitle}
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {box.boxDesc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ProcessFlow;