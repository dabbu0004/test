import React, { useState } from 'react';
import { FaChartLine, FaCloud, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // For "Learn More" links

// 1. Define your data here.
// In the future, you can fetch this from an API or pass it as props.
// REPLACE THESE IMAGE URLS with your local imports later.
const featureData = [
  {
    id: 0,
    title: "Advanced Data Analytics",
    description: "Transform raw data into actionable insights. Our predictive models help you foresee market trends and optimize decision-making in real-time.",
    icon: <FaChartLine />,
    // Replace with: import img1 from '../assets/images/data.jpg'; image: img1,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 1,
    title: "Scalable Cloud Infrastructure",
    description: "Future-proof your business with robust cloud solutions. We ensure seamless migration, high availability, and auto-scaling capabilities.",
    icon: <FaCloud />,
    image: "https://images.unsplash.com/photo-1483736762128-d6507565d4fe?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI-Driven Security",
    description: "Protect your assets with next-gen security. Our AI systems detect anomalies and neutralize threats before they impact your operations.",
    icon: <FaShieldAlt />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
  }
];

const HoverFeatures = () => {
  // State to track which item is currently active (hovered)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
   <section className="py-16 bg-white font-sans">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 leading-snug">
        Explore ad solutions used <br />
        by <span className="text-teal-500">100 000+ customers</span>
      </h2>
    </div>

    {/* Layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="space-y-8 relative">

        {featureData.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            className="relative pl-6 cursor-pointer"
          >
            {/* Active vertical line */}
            {activeIndex === index && (
              <div className="absolute left-0 top-1 h-24 w-[3px] bg-teal-500 rounded-full"></div>
            )}

            <h3 className={`text-lg font-semibold transition-colors duration-300 
              ${activeIndex === index ? "text-gray-900" : "text-gray-400"}`}>
              {item.title}
            </h3>

            <p className={`mt-2 text-sm leading-relaxed transition-opacity duration-300
              ${activeIndex === index ? "text-gray-600 opacity-100" : "text-gray-400 opacity-70"}`}>
              {item.description}
            </p>

            <div className={`mt-2 text-sm font-medium text-teal-500 transition-all duration-300
              ${activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
              Learn more
            </div>
          </div>
        ))}

      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full h-[320px] rounded-2xl bg-gray-100 overflow-hidden">

        {featureData.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 
              ${activeIndex === index ? "opacity-100 z-10" : "opacity-0"}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  </div>
</section>

  );
};

export default HoverFeatures;