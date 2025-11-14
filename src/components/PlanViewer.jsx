import React from 'react';
import { motion } from 'framer-motion';

const PlanViewer = () => {
  // Sample plan image URL - replace with your actual plan image
  const planImage = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Closet Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our expertly designed closet plans to find the perfect storage solution for your space.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700">
            <div className="bg-white p-1">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={planImage}
                  alt="Closet Plan"
                  className="w-full h-full object-contain"
                />
                {/* Interactive elements can be added here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">Walk-in Closet Plan</h3>
                    <p className="text-sm opacity-90">Click to view in full screen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Walk-in Closet Design</h3>
                <p className="text-sm text-gray-500">Dimensions: 8' x 10' | Style: Modern</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Download Plan
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Customize This Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            'L-Shaped Walk-in',
            'Reach-in Closet',
            'Corner Wardrobe'
          ].map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1 * index,
                    duration: 0.5
                  }
                }
              }}
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Plan Preview</span>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-900">{plan}</h4>
                <p className="text-sm text-gray-500 mt-1">View details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanViewer;
