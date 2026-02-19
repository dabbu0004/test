// client/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <div className=" flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <ChatBot/>
      </div>
    </BrowserRouter>
  );
}


export default App;
