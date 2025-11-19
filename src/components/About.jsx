import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="/hero3.jpg" 
              alt="About Dec Closets" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Dec Closets</h2>
            <p className="text-gray-600 mb-4">
              At Dec Closets, we believe that a well-organized space can transform your daily life. 
              With over 10 years of experience in custom closet design and installation, we've helped 
              thousands of homeowners create their dream storage solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert designers works closely with you to understand your needs and create 
              personalized closet solutions that combine functionality with beautiful design. We use 
              only the highest quality materials and innovative storage solutions to ensure your 
              closet stands the test of time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-purple-600">3+ Years</h3>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-purple-600">100+</h3>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-purple-600">5 Years</h3>
                <p className="text-sm text-gray-600">Warranty</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-purple-600">98%</h3>
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
