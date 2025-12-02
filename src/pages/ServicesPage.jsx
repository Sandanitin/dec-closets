import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Components
const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    <span className="inline-block text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-0 opacity-70"></span>
    </h2>
  </div>
);

const ServiceCard = ({ service, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="relative overflow-hidden h-48 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        {service.icon}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl text-blue-600 mr-4">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
      >
        Learn more
        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </motion.div>
);

const FAQ = ({ question, answer, isOpen, onClick }) => (
  <motion.div 
    className="border-b border-gray-200 py-5"
    initial={false}
    animate={{ backgroundColor: isOpen ? '#f8fafc' : 'transparent' }}
  >
    <motion.button
      className="flex justify-between items-center w-full text-left focus:outline-none"
      onClick={onClick}
    >
      <span className="text-lg font-semibold text-gray-900">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-blue-600"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-3 text-gray-600 pr-8">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const ServicesPage = () => {
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'closets', name: 'Closets' },
    { id: 'storage', name: 'Storage Solutions' },
    { id: 'office', name: 'Home Office' },
    { id: 'garage', name: 'Garage' }
  ];

  const benefits = [
    {
      title: 'Custom Design',
      description: 'Every solution is tailored to your specific needs and space requirements.'
    },
    {
      title: 'Quality Materials',
      description: 'We use only premium materials that are built to last.'
    },
    {
      title: 'Expert Installation',
      description: 'Our professional installers ensure perfect fit and finish.'
    },
    {
      title: 'Lifetime Warranty',
      description: 'We stand behind our work with a comprehensive warranty.'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical installation take?',
      answer: 'Most standard installations are completed within 1-3 days, depending on the scope of the project. Larger or more complex installations may take longer.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we provide free in-home consultations where we assess your space and discuss your needs before providing a detailed quote.'
    },
    {
      question: 'What materials do you use for your closets?',
      answer: 'We use high-quality materials including solid wood, plywood, and MDF with melamine or laminate finishes that are durable and easy to maintain.'
    },
    {
      question: 'Can you work with existing closets?',
      answer: 'Absolutely! We can modify existing closets or design new ones from scratch based on your preferences and space constraints.'
    },
    {
      question: 'Do you provide design services?',
      answer: 'Yes, our expert designers will work with you to create a custom solution that maximizes your space and meets your storage needs.'
    }
  ];
  const services = [
    {
      icon: '📁',
      title: 'Home Office',
      description: 'Create a productive workspace with custom desks, shelving, and storage solutions designed for your workflow.',
      features: [
        'Custom desk configurations',
        'Filing and document storage',
        'Cable management systems',
        'Bookcase and display shelving'
      ]
    },
    {
      icon: '📚',
      title: 'Study Room',
      description: 'Organized study spaces with dedicated areas for books, supplies, and technology to enhance learning.',
      features: [
        'Study desk and workspace',
        'Book and media storage',
        'Supply organization',
        'Display areas for achievements'
      ]
    },
    {
      icon: '🍽️',
      title: 'Pantry',
      description: 'Transform your kitchen storage with custom pantry solutions that keep everything organized and accessible.',
      features: [
        'Adjustable shelving',
        'Spice and condiment racks',
        'Pull-out drawers and baskets',
        'Specialty storage for appliances'
      ]
    },
    {
      icon: '🧺',
      title: 'Laundry Room',
      description: 'Make laundry day easier with organized spaces for sorting, folding, and storing laundry supplies.',
      features: [
        'Sorting station with baskets',
        'Folding counter space',
        'Detergent and supply storage',
        'Hanging rod for air drying'
      ]
    },
    {
      icon: '🚪',
      title: 'Mud Room',
      description: 'Create an organized entryway with storage for coats, shoes, bags, and outdoor gear.',
      features: [
        'Cubby storage systems',
        'Bench seating with storage',
        'Hook systems for coats and bags',
        'Shoe and boot storage'
      ]
    },
    {
      icon: '🚗',
      title: 'Garage Storage',
      description: 'Maximize your garage space with custom storage solutions for vehicles, tools, and equipment.',
      features: [
        'Overhead storage racks',
        'Tool and workbench organization',
        'Sports equipment storage',
        'Seasonal item organization'
      ]
    },
    {
      icon: '⚙️',
      title: 'CNC Services',
      description: 'Advanced 3D carving CNC router services with high-precision 3-axis/4-axis machining capabilities. We specialize in detailed 3D sculpting, relief carving, custom engraving, and intricate pattern cutting on wood, MDF, plastics, and metals. Perfect for custom storage solutions, decorative panels, signage, and artistic sculptures.',
      features: [
        '3D relief carving and sculpting',
        'Intricate pattern cutting on wood and MDF',
        'Custom engraving and personalization',
        'Complex geometric designs',
        'Textured surface finishes',
        'Precision cutting with 0.1mm accuracy',
        'Custom art pieces and decorative elements'
      ]
    },
    {
      icon: '🚪',
      title: 'MDF Doors',
      description: 'Our premium MDF doors offer durability and a smooth finish, providing the perfect canvas for any paint or finish.'
    },
    {
      icon: '📐',
      title: '3D Design',
      description: 'We use advanced 3D design software to create realistic visualizations of your project before we begin construction.'
    },
    {
      icon: '🔧',
      title: 'Quality Hardware',
      description: 'We source only the highest quality hardware and accessories to ensure smooth operation and long-lasting performance.'
    }
  ];

  const testimonials = [
    {
      quote: "Dec Closets transformed our master bedroom closet from a cluttered mess into an organized dream. The quality is exceptional and the team was professional from start to finish.",
      author: "Sarah Johnson",
      location: "Houston, TX"
    },
    {
      quote: "We had Dec Closets design and install a home office system and pantry organization. Both projects exceeded our expectations. The attention to detail is remarkable.",
      author: "Michael Chen",
      location: "Katy, TX"
    },
    {
      quote: "The garage organization system has completely changed how we use our space. We can finally park both cars in the garage! Highly recommend Dec Closets for any storage project.",
      author: "Robert Williams",
      location: "Spring, TX"
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-bl from-cyan-100 to-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-24 overflow-hidden">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              initial={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
              animate={{
                y: [0, 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNTQgM0g2djU0aDQ4VjN6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=')]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Custom Storage Solutions for Every Space</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your home with beautifully designed, custom-built storage solutions that combine functionality with style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg text-lg transition duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/gallery"
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold px-8 py-4 rounded-lg text-lg transition duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Expertise Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Decades of Expertise</h2>
            <p className="text-xl text-gray-600 mb-8">
              With over 10 years of experience in custom storage solutions, we've mastered the art of transforming spaces into functional works of art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue-600">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Award Winning Designs</h3>
              <p className="text-gray-600">Recognized industry-wide for innovative and functional storage solutions that enhance living spaces.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue-600">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Craftsmanship</h3>
              <p className="text-gray-600">Skilled artisans with decades of experience in woodworking and custom installations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue-600">📏</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Precision Engineering</h3>
              <p className="text-gray-600">Advanced measuring and installation techniques ensure perfect fit every time.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue-600">🌿</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustainable Materials</h3>
              <p className="text-gray-600">Eco-friendly materials and practices that protect both your family and the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <div className={`bg-white border-b sticky top-0 z-30 shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center -mb-px overflow-x-auto no-scrollbar">
            <div className="flex space-x-1">
              {serviceCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setActiveTab(category.id);
                    window.scrollTo({
                      top: 600,
                      behavior: 'smooth'
                    });
                  }}
                  className={`px-5 py-3 font-medium text-sm md:text-base rounded-full mx-1 transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="What We Offer">Our Services</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Our Advantages">Why Choose Us</SectionTitle>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-full border-r-2 border-dashed border-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl text-white">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  <div className="absolute right-8 top-8 text-blue-500 opacity-20">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Cutting Edge">Technology & Materials</SectionTitle>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {technologies.slice(0, 2).map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-8">
                {technologies.slice(2, 4).map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 2) * 0.2, duration: 0.5 }}
                  >
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="How It Works">Our Simple Process</SectionTitle>
          
          <div className="relative">
            <div className="hidden md:flex absolute left-1/2 top-20 h-3/4 w-1 bg-gradient-to-b from-blue-100 to-blue-200 transform -translate-x-1/2 -z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {[
                { 
                  number: '01', 
                  title: 'Consultation', 
                  description: 'We discuss your needs and assess your space',
                  icon: '📞'
                },
                { 
                  number: '02', 
                  title: 'Design', 
                  description: 'Our designers create a custom solution for you',
                  icon: '✏️'
                },
                { 
                  number: '03', 
                  title: 'Approval', 
                  description: 'Review and approve the final design',
                  icon: '✅'
                },
                { 
                  number: '04', 
                  title: 'Installation', 
                  description: 'Professional installation by our expert team',
                  icon: '🔨'
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl text-white font-bold mx-auto mb-4 shadow-md">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 right-4 bg-white text-blue-600 font-bold text-sm px-3 py-1 rounded-full border border-blue-100">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Need Help?">Frequently Asked Questions</SectionTitle>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FAQ
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaq === index}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-100">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-95"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNTQgM0g2djU0aDQ4VjN6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Contact us today to schedule a free consultation and discover how we can help you create the perfect storage solution for your home.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get a Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (123) 456-7890
            </Link>
          </motion.div>
        </div>
        
        {/* Animated Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-white rounded-full opacity-10"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </section>
    </div>
  );
};

// Add custom styles for animations
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  /* Hide scrollbar but keep functionality */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Add styles to the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default ServicesPage;