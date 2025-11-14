import React from 'react';

const processSteps = [
  {
    number: '1',
    title: 'Consultation',
    description: 'We start with a detailed consultation to understand your needs, space, and style preferences.'
  },
  {
    number: '2',
    title: 'Design',
    description: 'Our designers create a custom layout that maximizes your space and meets your storage requirements.'
  },
  {
    number: '3',
    title: 'Fabrication',
    description: 'Using CNC technology and premium materials, we craft your custom closet components with precision.'
  },
  {
    number: '4',
    title: 'Installation',
    description: 'Our professional team installs your new closet system efficiently and with minimal disruption.'
  }
];

const Process = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we create your perfect closet solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 mt-6">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ready to transform your space?
          </h3>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
