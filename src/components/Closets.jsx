import React from 'react';
import { Link } from 'react-router-dom';

const closets = [
  {
    id: 1,
    title: 'Modern Walk-in',
    description: 'Sleek and spacious walk-in closet with modern design elements.',
    image: 'https://images.unsplash.com/photo-1616486336120-6d5bf5d82eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: '$2,500+'
  },
  {
    id: 2,
    title: 'Reach-in Closet',
    description: 'Space-efficient reach-in closet perfect for any room.',
    image: 'https://images.unsplash.com/photo-1600210492493-094691a317a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    price: '$1,800+'
  },
  {
    id: 3,
    title: 'Custom Wardrobe',
    description: 'Fully customizable wardrobe to fit your unique style.',
    image: 'https://images.unsplash.com/photo-1600210492767-7a2a9c4e7f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    price: '$3,200+'
  }
];

const Closets = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Closet Designs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our collection of custom closet designs tailored to your needs and style.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {closets.map((closet) => (
            <div key={closet.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={closet.image} 
                alt={closet.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{closet.title}</h3>
                <p className="text-gray-600 mb-4">{closet.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">{closet.price}</span>
                  <Link 
                    to={`/closets/${closet.id}`} 
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/closets" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Closets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Closets;
