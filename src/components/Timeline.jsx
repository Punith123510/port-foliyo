import React from 'react';

const Timeline = ({ education, experience }) => {
  return (
    <section id="timeline" className="my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          {education?.map((item) => (
            <div key={item._id} className="mb-4">
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-md">{item.summary}</p>
              <p className="text-md">{new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
        <div className="border p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          {experience?.map((item) => (
            <div key={item.id} className="mb-4">
              <h4 className="text-lg font-semibold mb-2">{item.company_name}</h4>
              <p className="text-md">{item.jobTitle}</p>
              <p className="text-md">{item.startDate} - {item.endDate}</p>
              <p className="text-md">{item.jobLocation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
