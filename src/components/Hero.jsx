import React from 'react';

const Hero = ({ heroData }) => {
  return (
    <section id="hero" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold">{heroData?.name}</h1>
          <p className="text-xl mb-4">{heroData?.title}</p>
          <p className="text-lg">{heroData?.description}</p>
          <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Hire Me
          </button>
        </div>
        <div className="text-center md:text-right">
          <img src={heroData?.avatar} alt={heroData?.name} className="rounded-full w-32 h-32 mx-auto md:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
