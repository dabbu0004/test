import React from 'react';
import { Link } from 'react-router-dom';
import ChatWidget from '../components/ChatWidget'; 

const Home = () => {
  return (
    // ✅ UPDATED: Added dark background + dark text + smooth transition
    <div className="font-sans text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 min-h-screen relative overflow-x-hidden transition-colors duration-300">
  
      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-10 mt-16 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          
          {/* ✅ UPDATED: Badge dark colors */}
          <span className="inline-block bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
             🔵 NEW VERSION 2.0 OUT NOW
          </span>

          {/* ✅ UPDATED: Heading dark text */}
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Scale your <br />
            <span className="text-blue-500 dark:text-blue-400">business</span> <br />
            faster
          </h1>

          {/* ✅ UPDATED: Paragraph dark text */}
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md">
            Unlock your team's potential with our all-in-one platform designed for rapid growth and seamless collaboration.
          </p>
          
          <div className="flex gap-4 pt-4">
            
            {/* (No change needed – already good in dark) */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 transition">
              Get Started
            </button>

            {/* ✅ UPDATED: Secondary button dark styling */}
            <button className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold border border-gray-200 dark:border-gray-700 transition">
              View Demo
            </button>
          </div>

          {/* ✅ UPDATED: Trusted text dark color */}
          <div className="flex items-center gap-3 pt-6">
             <div className="flex -space-x-3">
               <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/100?img=1" alt="User" />
               <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/100?img=5" alt="User" />
               <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/100?img=8" alt="User" />
             </div>
             <span className="text-sm text-gray-500 dark:text-gray-400">
               Trusted by <strong>500+</strong> growing teams
             </span>
          </div>
        </div>

        {/* Right Image (Mockup) */}
        <div className="lg:w-1/2 relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-3xl opacity-20 -z-10"></div>
           
           {/* ✅ UPDATED: Border + background for dark */}
           <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
             
             {/* ✅ UPDATED: Mockup background dark */}
             <div className="bg-gray-100 dark:bg-gray-800 h-80 w-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                [ Dashboard Image Placeholder ]
             </div>
           </div>
        </div>
        
      </main>

      {/* --- TEAM SECTION --- */}
      {/* ✅ UPDATED: Section background dark */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center mb-16">
            {/* ✅ UPDATED: Heading dark */}
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Meet the Minds
            </h2>

            {/* ✅ UPDATED: Paragraph dark */}
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              The talented people behind the revolution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">

            {/* Team Member Card */}
            {/* ✅ UPDATED: Card dark styles */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl text-center group hover:bg-black dark:hover:bg-gray-700 hover:text-white transition-all duration-300">
              <img src="https://i.pravatar.cc/150?img=68" alt="CEO" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700 shadow-lg" />
              <h3 className="text-xl font-bold dark:text-white">Alex Johnson</h3>
              <p className="text-teal-500 dark:text-teal-400 font-medium mb-4">Founder & CEO</p>
              <div className="flex justify-center gap-4 text-gray-400 dark:text-gray-500"></div>
            </div>

            {/* Team Member Card */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl text-center group hover:bg-black dark:hover:bg-gray-700 hover:text-white transition-all duration-300">
              <img src="https://i.pravatar.cc/150?img=44" alt="CTO" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700 shadow-lg" />
              <h3 className="text-xl font-bold dark:text-white">Sarah Williams</h3>
              <p className="text-teal-500 dark:text-teal-400 font-medium mb-4">Head of Product</p>
              <div className="flex justify-center gap-4 text-gray-400 dark:text-gray-500"></div>
            </div>

            {/* Team Member Card */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl text-center group hover:bg-black dark:hover:bg-gray-700 hover:text-white transition-all duration-300">
              <img src="https://i.pravatar.cc/150?img=12" alt="Dev" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700 shadow-lg" />
              <h3 className="text-xl font-bold dark:text-white">Michael Chen</h3>
              <p className="text-teal-500 dark:text-teal-400 font-medium mb-4">Lead Developer</p>
              <div className="flex justify-center gap-4 text-gray-400 dark:text-gray-500"></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
