import React, { useState, useEffect } from 'react';

const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials?.length > 0) { // Check if testimonials array is not empty
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials?.length]); // Include testimonials.length in the dependency array

  return (
    <div className="flex justify-center items-center h-screen">
      <section id="testimonial" className="my-8">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${index === currentIndex ? 'block' : 'hidden'} text-center border p-4 rounded-md shadow-lg`}
            >
              <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <p className="text-lg mb-4">{testimonial.text}</p>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-md">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
