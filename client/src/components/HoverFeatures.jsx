import React, { useState, useEffect, useRef } from 'react';
import { FaChartLine, FaCloud, FaShieldAlt } from 'react-icons/fa';
import gsap from 'gsap';

const featureData = [
  {
    id: 0,
    title: "Advanced Data Analytics",
    description: "Transform raw data into actionable insights. Our predictive models help you foresee market trends and optimize decision-making in real-time.",
    icon: <FaChartLine />,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    if (activeItem && lineRef.current) {
      setTimeout(() => {
        gsap.to(lineRef.current, {
          y: activeItem.offsetTop,
          height: activeItem.offsetHeight,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true
        });
      }, 10);
    }
  }, [activeIndex]);

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      if (index === activeIndex) {
        gsap.fromTo(img, 
          { opacity: 0, scale: 1.05, zIndex: 10 }, 
          { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", zIndex: 10, overwrite: true }
        );
      } else {
        gsap.to(img, { 
          opacity: 0, 
          duration: 0.4, 
          ease: "power2.inOut", 
          zIndex: 0,
          overwrite: true 
        });
      }
    });
  }, [activeIndex]);
  return (
    <section className="py-16 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Explore ad solutions used <br />
            by <span className="text-teal-500">100 000+ customers</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 relative flex flex-col space-y-8">
            <div ref={lineRef} className="absolute left-0 top-0 w-[3px] bg-teal-500 rounded-full"/>
            {featureData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div  key={item.id} ref={el => itemRefs.current[index] = el}  onMouseEnter={() => setActiveIndex(index)}onClick={() => setActiveIndex(index)}  className="relative pl-6 cursor-pointer group" >
                  <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm md:text-base leading-relaxed transition-all duration-300 ${isActive ? "text-gray-600 opacity-100" : "text-gray-400 opacity-70"}`}>
                    {item.description}
                  </p>
                  <div className={`mt-2 text-sm font-medium text-teal-500 overflow-hidden transition-all duration-300 transform ${isActive ? "opacity-100 translate-x-0 h-6" : "opacity-0 -translate-x-2 h-0"}`} >
                    Learn more
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full lg:w-1/2 relative h-[320px] md:h-[400px] lg:h-[450px] rounded-2xl bg-gray-100 overflow-hidden shadow-lg mt-8 lg:mt-0">
            {featureData.map((item, index) => (
              <div key={item.id} ref={el => imageRefs.current[index] = el} className="absolute inset-0 opacity-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/10"></div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HoverFeatures;