import React, { useEffect, useRef } from "react";
import { FiArrowRight, FiZap } from "react-icons/fi";
import {
  FaSolarPanel,
  FaWater,
  FaWind,
  FaServer,
  FaArchway,
  FaPlane,
  FaBolt,
  FaIndustry,
  FaTrain,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateAppear from "../animations/AnimateAppear";
import IndustriesData from "../data/IndustriesData";

gsap.registerPlugin(ScrollTrigger);

const getSegmentIcon = (title) => {
  if (title.includes("Solar")) return <FaSolarPanel />;
  if (title.includes("Hydro")) return <FaWater />;
  if (title.includes("Wind")) return <FaWind />;
  if (title.includes("Data")) return <FaServer />;
  if (title.includes("Tunnel")) return <FaArchway />;
  if (title.includes("Airport")) return <FaPlane />;
  if (title.includes("Transmission")) return <FaBolt />;
  if (title.includes("Steel")) return <FaIndustry />;
  if (title.includes("Metro")) return <FaTrain />;
  return <FiZap />;
};

const AllSegments = () => {
  const navigate = useNavigate();

  const leftScrollerRef = useRef(null);
  const rightScrollerRef = useRef(null);
  const leftCardsRef = useRef([]);
  const rightCardsRef = useRef([]);

  const reversedIndustriesData = [...IndustriesData].reverse();

  useEffect(() => {
    const animateColumn = (cards, scrollerRef) => {
      cards.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              scroller: scrollerRef.current,
              start: "top 95%",
            },
          }
        );
      });
    };

    animateColumn(leftCardsRef.current, leftScrollerRef);
    animateColumn(rightCardsRef.current, rightScrollerRef);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const renderCard = (item, index, refArray, prefix) => (
    <div
      key={`${prefix}-${index}`}
      ref={(el) => (refArray[index] = el)}
      className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col border border-slate-100 mb-8 last:mb-0 mx-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
          Segment
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-[#eaf7ff] rounded-xl flex items-center justify-center text-[#19587e] text-xl shrink-0 group-hover:bg-[#19587e] group-hover:text-white transition-colors duration-300">
            {getSegmentIcon(item.title)}
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 group-hover:text-[#19587e] transition-colors">
            {item.title}
          </h2>
        </div>

        <p className="text-[#0e466a99] text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.clients.map((client, i) => (
            <span
              key={i}
              className="px-3 py-1 text-[11px] md:text-xs font-semibold bg-blue-50 text-[#19587e] rounded-md hover:bg-[#19587e] hover:text-white transition-all duration-300 cursor-default"
            >
              {client.client}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#19587e] text-white rounded-xl font-bold text-sm hover:bg-[#113d58] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110 active:scale-95"
          >
            View Details
            <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf7ff] via-white to-[#e0f3ff]">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col">
        {/* Header */}
        <div className="text-center mb-12 shrink-0">
          <AnimateAppear>
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] text-[#19587e] mb-4">
              INDUSTRIAL SOLUTIONS
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
              Powering the{" "}
              <span className="text-[#19587e]">Connected Journey</span>
            </h1>

            <p className="text-base md:text-lg text-[#0e466a99] max-w-3xl mx-auto">
              Discover how our advanced electrical distribution solutions
              integrate seamlessly across vital industrial segments.
            </p>
          </AnimateAppear>
        </div>

        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-6 w-full h-[80vh] min-h-[900px] pb-10">
          <div
            ref={leftScrollerRef}
            className="w-full md:w-1/2 h-full overflow-y-auto px-2 py-4 scroll-smooth"
          >
            {IndustriesData.map((item, index) =>
              renderCard(item, index, leftCardsRef.current, "left")
            )}
          </div>

          <div
            ref={rightScrollerRef}
            className="w-full md:w-1/2 h-full overflow-y-auto px-2 py-4 scroll-smooth"
          >
            {reversedIndustriesData.map((item, index) =>
              renderCard(item, index, rightCardsRef.current, "right")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSegments;