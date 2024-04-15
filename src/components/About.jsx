import React from 'react';

const About = ({ aboutData }) => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
          <img src={aboutData?.avatar.url} alt={aboutData?.name} className="rounded-full w-48 h-48 mx-auto mb-4 md:mx-0" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">{aboutData?.description}</p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <strong className="font-semibold">Name:</strong> {aboutData?.name}
              </li>
              <li className="mb-2">
                <strong className="font-semibold">Email:</strong> {aboutData?.contactEmail}
              </li>
              <li className="mb-2">
                <strong className="font-semibold">Phone:</strong> {aboutData?.phoneNumber}
              </li>
              {/* Add more personal information fields */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
