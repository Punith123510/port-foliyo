import React, { useState } from 'react';
import Modal from './Modal';

const Projects = ({ projects }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    console.log('Open modal for project:', project);
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log('Close modal');
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project) => (
          <div key={project._id} onClick={() => openModal(project)} className="cursor-pointer border rounded-md overflow-hidden shadow-lg">
            <img src={project.image.url} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
