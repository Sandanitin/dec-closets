import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero images with optimized sources and fallbacks
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fit=crop&crop=entropy',      title: 'Modern Walk-in Closets',
      subtitle: 'Elegant designs that maximize your storage space',
      alt: 'Modern walk-in closet with organized shelves and hanging space'
    },
    {
      url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fit=crop&crop=entropy',      title: 'Custom Storage Solutions',
      subtitle: 'Tailored to fit your unique space and style',
      alt: 'Custom closet organization system with drawers and shelves'
    },
    {
      url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fit=crop&crop=entropy',
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
                <div className="absolute inset-0 bg-gray-900/50">
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
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>
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
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto md:mx-0 text-white/90 drop-shadow-md"
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
          
          <motion.div 
            className="mt-16 flex flex-col items-center justify-center space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white font-bold"
                      style={{
                        transform: `translateX(${i * -8}px)`,
                        zIndex: 5 - i
                      }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="ml-8 text-blue-100">Trusted by 1000+ happy customers</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-blue-100">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>4.9/5 from 200+ reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#features" className="flex flex-col items-center group">
          <div className="animate-bounce w-12 h-20 border-4 border-white/30 rounded-full flex justify-center p-2 group-hover:border-white/50 transition-colors">
            <div className="w-1 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
          <p className="text-white/80 text-sm mt-3 text-center font-medium tracking-wider group-hover:text-white transition-colors">SCROLL TO EXPLORE</p>
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
