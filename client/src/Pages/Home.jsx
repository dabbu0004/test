import React from 'react';
import { useEffect } from 'react';
import AboutBar from '../components/AboutBar';
import HoverFeatures from '../components/HoverFeatures';
import AllSegments from '../components/AllSegments';
import ComponentCircle from '../components/ProcessFlow';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutBar />
      <HoverFeatures />
      <AllSegments />
      <ComponentCircle />

    </div>
  );
};
export default Home;
