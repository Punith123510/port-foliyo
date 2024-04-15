import React from 'react';

const Modal = ({ project, onClose }) => {
  console.log('Modal project:', project);

  const modalStyles = {
    display: 'block',
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  };

  const modalContentStyles = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
  };

  return (
    <div className="modal" style={modalStyles}>
      <div className="modal-content" style={modalContentStyles}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={project?.image?.url} alt={project?.title} />
        <h2>{project?.title}</h2>
        <p>{project?.description}</p>
        <div>
          <h3>Technologies Used</h3>
          <ul>
            {project?.technologies?.map((tech) => (
              <li key={tech.id}>{tech.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li>
              <a href={project?.liveurl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </li>
            <li>
              <a href={project?.githuburl} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
