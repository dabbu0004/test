import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import ChatWidget from "../components/ChatWidget";
import HoverFeatures from "./HoverFeatures";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: "Our Mission",
      percent: 100,
      text: "Our mission is to empower businesses with innovative digital solutions that drive growth, enhance visibility, and deliver measurable results.",
      points: [
        "Empower businesses with digital solutions",
        "Drive growth and boost visibility",
        "Deliver innovative strategies",
      ],
    },
    {
      title: "Our Vision",
      percent: 60,
      text: "To be the leading catalyst for digital transformation, setting the standard for excellence and innovation.",
      points: [
        "Global leader in digital transformation",
        "Setting standards for excellence",
        "Enabling business success everywhere",
      ],
    },
    {
      title: "Our Value",
      percent: 50,
      text: "Integrity, innovation, and customer-centricity are at the core of everything we do.",
      points: [
        "Integrity in all actions",
        "Customer-first approach",
        "Continuous innovation",
      ],
    },
    {
      title: "Our Value",
      percent: 50,
      text: "Integrity, innovation, and customer-centricity are at the core of everything we do.",
      points: [
        "Integrity in all actions",
        "Customer-first approach",
        "Continuous innovation",
      ],
    },
  ];

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (tabData[activeTab].percent / 100) * circumference;

  return (
    // 1️⃣ CHANGED: Removed 'flex justify-center items-center h-screen' to allow scrolling
    <div className="bg-gray-50 min-h-screen font-sans">

      {/* --- SECTION 1: INTERACTIVE CARD --- */}
      <div className="py-20 px-4 flex justify-center">
        <div className="relative max-w-6xl w-full min-h-[500px]">
          {/* BLACK BACKGROUND BOX */}
          <div className="bg-black rounded-[3rem] h-[450px] w-full absolute top-0 left-0 shadow-2xl"></div>

          {/* CONTENT WRAPPER */}
          <div className="relative flex h-[450px]">
            {/* LEFT SIDE (Black Navigation Content) */}
            <div className="w-[45%] p-12 flex flex-col justify-center relative z-20 text-white">
              <div className="relative">
                {/* ACTIVE TAB SLIDER */}
                <div
                  className="absolute left-0 w-[81%] h-20 bg-teal-500 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]  flex items-center justify-end pr-2 shadow-2xl"
                  style={{ transform: `translateY(${activeTab * 80}px)` }}
                >
                  <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <FaArrowRight className="text-white text-xl" />
                  </div>
                </div>

                {/* TAB BUTTONS */}
                {tabData.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative w-full h-20 pl-8 text-left text-xl transition-all duration-300 flex items-center z-10
              ${activeTab === index
                        ? "text-white font-bold"
                        : "text-gray-400 hover:text-gray-200"
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE (White Overlapping Card) */}
            <div className="absolute right-0 top-0 h-[450px] w-[70%] bg-white rounded-[3rem] shadow-xl flex flex-col md:flex-row gap-12 items-center p-16 z-10">
              {/* TEXT CONTENT */}
              <div className="flex-1 space-y-6">
                <div key={activeTab} className="animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {tabData[activeTab].title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {tabData[activeTab].text}
                  </p>

                  <div className="space-y-3 pt-6">
                    {tabData[activeTab].points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 text-gray-700 font-medium"
                      >
                        <FaCheckCircle className="text-teal-500 text-lg flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PERCENTAGE RING */}
              <div className="flex-shrink-0">
                <div className="w-60 h-72 border border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center p-4 shadow-sm bg-gray-50/50">
                  <div className="relative w-36 h-36">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        stroke="#e5e7ebc3"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        stroke="#14b8a6"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="relative">
                        <span className="text-3xl font-bold text-gray-800">
                          {tabData[activeTab].percent}%{/* Blinking Arrow */}
                          <FaArrowUp className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-teal-500 animate-blink text-sm" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-gray-500 text-xs leading-tight">
                      Customer-Centric
                      <br />
                      <span className="font-semibold text-gray-700">
                        Commitment
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HoverFeatures />

      {/* 2️⃣ NEW SECTION: MEET THE TEAM (Makes page scrollable) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Meet the Minds</h2>
            <p className="text-gray-500 mt-4">
              The talented people behind the revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 p-6 rounded-3xl text-center group hover:bg-black hover:text-white transition-all duration-300">
              <img
                src="https://i.pravatar.cc/150?img=68"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-bold">Alex Johnson</h3>
              <p className="text-teal-500 font-medium mb-4">Founder & CEO</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <FaLinkedin className="hover:text-teal-500 cursor-pointer" />
                <FaTwitter className="hover:text-teal-500 cursor-pointer" />
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 p-6 rounded-3xl text-center group hover:bg-black hover:text-white transition-all duration-300">
              <img
                src="https://i.pravatar.cc/150?img=44"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-bold">Sarah Williams</h3>
              <p className="text-teal-500 font-medium mb-4">Head of Product</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <FaLinkedin className="hover:text-teal-500 cursor-pointer" />
                <FaTwitter className="hover:text-teal-500 cursor-pointer" />
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 p-6 rounded-3xl text-center group hover:bg-black hover:text-white transition-all duration-300">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Dev"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-teal-500 font-medium mb-4">Lead Developer</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <FaLinkedin className="hover:text-teal-500 cursor-pointer" />
                <FaTwitter className="hover:text-teal-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
          @keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s infinite;
}

      `}</style>


    </div>
  );
};

export default About;
