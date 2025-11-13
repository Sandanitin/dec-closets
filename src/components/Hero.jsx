import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Custom Closet Solutions</h1>
        <p className="text-xl mb-8">Transform your space with our premium closet designs</p>
        <Link 
          to="/contact" 
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-block"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default Hero;
