import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Home from './Home';
import Closets from '../components/Closets';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import CNCServicesPage from './CNCServicesPage';
import MDFDoorsPage from './MDFDoorsPage';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollToTop />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/closets" element={<Closets />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cnc-services" element={<CNCServicesPage />} />
            <Route path="/mdf-doors" element={<MDFDoorsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;