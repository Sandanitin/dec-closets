import React from 'react';
import MDFDoorsNavbar from '../components/MDFDoorsNavbar';
import Footer from '../components/Footer';

const MDFDoorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
    

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Premium MDF Doors</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                High-quality MDF doors with smooth finishes, perfect for custom closet systems and storage solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact?service=mdf-doors"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg text-lg transition duration-300"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">MDF Doors Features</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our MDF doors offer the perfect combination of quality, durability, and aesthetic appeal for your custom storage solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl text-blue-600">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smooth Finish</h3>
                <p className="text-gray-600">
                  Our MDF doors feature a perfectly smooth surface that's ideal for painting, ensuring a flawless finish that enhances any space.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl text-blue-600">📏</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Sizing</h3>
                <p className="text-gray-600">
                  Available in custom sizes to fit your specific requirements, ensuring a perfect fit for any closet or storage application.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl text-blue-600">🌿</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Made from environmentally responsible materials, our MDF doors are a sustainable choice for conscious homeowners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our MDF Doors</h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover the advantages of choosing our premium MDF doors for your custom storage solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl text-white font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Durability</h3>
                    <p className="text-gray-600">
                      Our MDF doors are built to last with high-quality materials that resist warping, cracking, and fading over time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl text-white font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Versatility</h3>
                    <p className="text-gray-600">
                      Suitable for a wide range of applications including closet doors, cabinet doors, and room dividers with various finish options.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl text-white font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
                    <p className="text-gray-600">
                      Premium quality at a competitive price point, offering excellent value for your custom storage investment.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl text-white font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Maintenance</h3>
                    <p className="text-gray-600">
                      Simple to clean and maintain, requiring only occasional wiping with a damp cloth to keep them looking new.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-95"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Storage with MDF Doors?
            </h2>
            
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Contact us today to schedule a free consultation and discover how our premium MDF doors can transform your space.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact?service=mdf-doors"
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Get a Free Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default MDFDoorsPage;