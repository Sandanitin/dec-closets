import React from 'react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Walk-In Closets',
    description: 'Luxurious and spacious walk-in closets designed to showcase your wardrobe while providing optimal organization.',
    features: [
      'Custom shelving and compartments',
      'Premium materials and finishes',
      'Integrated lighting solutions',
      'Island and seating options'
    ],
    image: '/images/walk-in-closet.jpg',
    link: '/closets/walk-in'
  },
  {
    title: 'Custom Closets',
    description: 'Tailored solutions that perfectly fit your space, style, and storage requirements.',
    features: [
      'Personalized design consultation',
      'Space optimization techniques',
      'Quality craftsmanship',
      'Flexible storage options'
    ],
    image: '/images/custom-closet.jpg',
    link: '/closets/custom'
  },
  {
    title: 'Reach-In Closets',
    description: 'Space-efficient reach-in closets that maximize storage in smaller areas without compromising on style.',
    features: [
      'Space-efficient designs',
      'Adjustable components',
      'Easy access organization',
      'Budget-friendly options'
    ],
    image: '/images/reach-in-closet.jpg',
    link: '/closets/reach-in'
  }
];

const ClosetSolutions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Closet Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a variety of custom closet designs to fit your needs and style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={solution.link}
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClosetSolutions;