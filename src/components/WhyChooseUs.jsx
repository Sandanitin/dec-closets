import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Quick Installation',
    description: 'Most projects completed in 1-3 days with minimal disruption to your home.',
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500',
    highlight: 'text-blue-600',
    number: '01'
  },
  {
    title: 'Expert Craftsmanship',
    description: 'Skilled artisans with over a decade of experience in custom storage solutions.',
    color: 'bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500',
    highlight: 'text-amber-600',
    number: '02'
  },
  {
    title: 'Premium Materials',
    description: 'We use only the highest quality materials for lasting durability and beauty.',
    color: 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-l-4 border-emerald-500',
    highlight: 'text-emerald-600',
    number: '03'
  },
  {
    title: 'Custom Design',
    description: 'Every solution is tailored to your specific space, needs, and style preferences.',
    color: 'bg-gradient-to-br from-violet-50 to-violet-100 border-l-4 border-violet-500',
    highlight: 'text-violet-600',
    number: '04'
  }
];

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            Why Choose <span className="text-blue-600">Dec Closets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional quality and service that sets us apart
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <motion.div
                key={index}
                className={`p-8 rounded-xl ${feature.color} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <span className={`text-4xl font-bold mr-4 ${feature.highlight} opacity-90`}>
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Years Experience', color: 'text-blue-600' },
            { number: '500+', label: 'Projects Completed', color: 'text-amber-600' },
            { number: '98%', label: 'Satisfaction Rate', color: 'text-emerald-600' },
            { number: '24/7', label: 'Customer Support', color: 'text-violet-600' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
