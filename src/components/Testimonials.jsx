import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Dec Closets transformed our master bedroom closet into a dream space. The design is both beautiful and functional, with smart storage solutions we never would have thought of!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Interior Designer',
    content: 'I frequently recommend Dec Closets to my clients. Their attention to detail and quality craftsmanship is unmatched in the industry.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Real Estate Agent',
    content: 'The custom walk-in closet they installed was a major selling point for our home. The new owners were absolutely thrilled with the design and quality.',
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about their experience with us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-xl mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
