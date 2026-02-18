import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-bl-xl rounded-tr-xl"></div>
        <span className="font-bold text-xl tracking-tight">coc</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-blue-600">Features</Link>
        <Link to="/" className="hover:text-blue-600">Pricing</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link to="/features" className="hover:text-blue-600 transition-colors">Features</Link>
      </div>

      <div className="flex gap-4 items-center">
        <ThemeToggle/>
        <button className="text-sm font-medium hover:text-blue-600">
          Log in
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition">
          Sign Up
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
