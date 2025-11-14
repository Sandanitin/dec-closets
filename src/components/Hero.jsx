import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero images with local sources
  const heroImages = [
    {
      url: '/hero3.jpg',
      title: 'Modern Walk-in Closets',
      subtitle: 'Elegant designs that maximize your storage space',
      alt: 'Modern walk-in closet with organized shelves and hanging space'
    },
    {
      url: '/heo2.jpg',
      title: 'Custom Storage Solutions',
      subtitle: 'Tailored to fit your unique space and style',
      alt: 'Custom closet organization system with drawers and shelves'
    },
    {
      url: '/2def91d5240043cec613909b03f7811b.jpg',
      title: 'Premium Materials',
      subtitle: 'High-quality finishes that stand the test of time',
      alt: 'Luxury closet with high-end finishes and lighting'
    }
  ];
  
  const [loadedImages, setLoadedImages] = useState({});

  // Preload images
  useEffect(() => {
    heroImages.forEach((image, index) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [index]: true
        }));
      };
    });
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center">
      {/* Hero Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {heroImages.map((image, index) => (
            currentSlide === index && (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: loadedImages[index] ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-black/80">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${
                      loadedImages[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => {
                      setLoadedImages(prev => ({
                        ...prev,
                        [index]: true
                      }));
                    }}
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Animated floating elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 min-h-[80vh] flex items-center">
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <motion.div 
          className="max-w-4xl mx-auto text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variants={itemVariants}
          >
            Custom Storage Solutions for <span className="text-blue-300">Every Space</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto md:mx-0 text-white drop-shadow-md"
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={itemVariants}
          >
            Transform your home with beautifully designed, custom-built closets and storage solutions that maximize space and organization.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            key={`buttons-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={itemVariants}
          >
            <Link 
              to="/contact" 
              className="relative group bg-white text-blue-700 hover:bg-blue-50 px-8 py-5 rounded-xl font-semibold text-lg text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center shadow-lg hover:scale-105"
            >
              Get a Free Quote
            </Link>
            
            <Link 
              to="/gallery" 
              className="group bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 px-8 py-5 rounded-xl font-semibold text-lg text-center transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:backdrop-blur-md hover:border-white/50 hover:scale-105"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    </section>
  );
};

export default Hero;