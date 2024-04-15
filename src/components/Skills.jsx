import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="my-8 bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills?.map((skill) => (
          <div key={skill._id} className="border p-6 rounded-md text-center">
            <img src={skill.image.url} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-lg">Percentage: {skill.percentage}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
