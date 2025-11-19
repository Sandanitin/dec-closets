import React, { useState, useEffect } from 'react';

const galleryImages = [
  {
    id: 1,
    src: '/Walk-In Closets.jpg',
    alt: 'Modern walk-in closet',
    category: 'walk-in'
  },
  {
    id: 2,
    src: '/Reach-In Closets.jpg',
    alt: 'Reach-in closet',
    category: 'reach-in'
  },
  {
    id: 3,
    src: '/Custom Closets.jpg',
    alt: 'Custom wardrobe',
    category: 'wardrobe'
  },
  {
    id: 4,
    src: '/hero3.jpg',
    alt: 'Walk-in closet with island',
    category: 'walk-in'
  },
  {
    id: 5,
    src: '/2def91d5240043cec613909b03f7811b.jpg',
    alt: 'Modern bedroom with built-in closets',
    category: 'bedroom'
  },
  {
    id: 6,
    src: '/Walk-In Closets.jpg',
    alt: 'Luxury walk-in closet',
    category: 'walk-in'
  },
  {
    id: 7,
    src: '/heo2.jpg',
    alt: 'Modern closet design',
    category: 'modern'
  },
  {
    id: 8,
    src: '/Reach-In Closets.jpg',
    alt: 'Organized reach-in closet',
    category: 'reach-in'
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['all', ...new Set(galleryImages.map(image => image.category))];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  // Handle body overflow when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Browse through our portfolio of custom closet designs and installations.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback image if the original fails to load
                  e.target.src = '/hero3.jpg';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full max-h-[80vh] object-contain"
                onError={(e) => {
                  // Fallback image if the original fails to load
                  e.target.src = '/hero3.jpg';
                }}
              />
              <div className="mt-2 text-white text-center">
                <p className="font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-gray-300 capitalize">{selectedImage.category.replace('-', ' ')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;