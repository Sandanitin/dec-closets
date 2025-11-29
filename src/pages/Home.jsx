import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ClosetSolutions from '../components/ClosetSolutions';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Services from '../components/Services';
import Closets from '../components/Closets';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      
  <Closets></Closets>
      <Process />
      <Testimonials />
    </div>
  );
};

export default Home;