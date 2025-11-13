import React from 'react';

const services = [
  {
    title: 'Custom Closets',
    description: 'Tailored closet solutions designed to fit your space and needs perfectly.',
    icon: '🧥'
  },
  {
    title: 'Walk-in Closets',
    description: 'Luxurious walk-in closets that maximize storage and style.',
    icon: '👔'
  },
  {
    title: 'Closet Organization',
    description: 'Professional organization services to keep your space tidy and functional.',
    icon: '🧺'
  },
  {
    title: 'Custom Shelving',
    description: 'Custom shelving solutions for any room in your home.',
    icon: '📚'
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
