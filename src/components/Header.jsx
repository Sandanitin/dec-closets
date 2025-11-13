import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            Dec Closets
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/closets" className="text-gray-700 hover:text-purple-600">Closets</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
