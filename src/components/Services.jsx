import React from 'react';

const Services = ({ services }) => {
  return (
    <section id="services" className="my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.map((service) => (
          <div key={service._id} className="text-center border p-4 rounded-md shadow-lg">
            <img src={service.image.url} alt={service.name} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
