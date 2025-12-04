import React from 'react';
import { Link } from 'react-router-dom';

const Closets = () => {
  const closetTypes = [
    {
      id: 'walk-in',
      title: 'Walk-In Closets',
      description: 'Luxurious and spacious walk-in closets designed to showcase your wardrobe while providing optimal organization.',
      features: [
        'Custom shelving and compartments',
        'Premium materials and finishes',
        'Integrated lighting solutions',
        'Island and seating options'
      ],
      image: '/Walk-In Closets.jpg',
      cta: 'Design Your Walk-In Closet',
      price: 'Starting at $3,500'
    },
    {
      id: 'custom',
      title: 'Custom Closets',
      description: 'Tailored solutions that perfectly fit your space, style, and storage requirements. Our custom closets maximize every inch of available space while reflecting your personal aesthetic.',
      features: [
        'Personalized design consultation',
        'Space optimization techniques',
        'Quality craftsmanship',
        'Flexible storage options'
      ],
      image: '/Custom Closets.jpg',
      cta: 'Explore Custom Options',
      price: 'Starting at $2,500'
    },
    {
      id: 'reach-in',
      title: 'Reach-In Closets',
      description: 'Space-efficient reach-in closets that maximize storage in smaller areas without compromising on style or accessibility. Perfect for bedrooms, hallways, and entryways.',
      features: [
        'Space-efficient designs',
        'Adjustable components',
        'Easy access organization',
        'Budget-friendly options'
      ],
      image: '/Reach-In Closets.jpg',
      cta: 'View Reach-In Designs',
      price: 'Starting at $1,200'
    }
  ];

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Closet Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a variety of custom closet designs to fit your needs and style
          </p>
        </div>

        <div className="space-y-24">
          {closetTypes.map((closet, index) => (
            <div
              key={closet.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden">
                <img
                  src={closet.image}
                  alt={closet.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback image if the original fails to load
                    e.target.src = '/hero3.jpg';
                  }}
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {closet.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {closet.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {closet.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-blue-600">
                    {closet.price}
                  </span>
                  <Link
                    to={`/contact?interest=${closet.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 text-center"
                  >
                    {closet.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Closet is Right For You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our design experts can help you choose the perfect solution for your space and needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-300"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Closets;
