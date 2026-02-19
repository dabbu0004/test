import React from 'react';
import { useEffect } from 'react';
import AboutBar from '../components/AboutBar';
import HoverFeatures from '../components/HoverFeatures';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutBar />
      <HoverFeatures />
    </div>
  );
};
export default Home;
