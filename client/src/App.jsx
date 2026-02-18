// client/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About_Bar';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import HoverFeatures from './Pages/HoverFeatures';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <BrowserRouter>
      <div className=" flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<HoverFeatures />} />
          </Routes>
        </div>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}


export default App;
