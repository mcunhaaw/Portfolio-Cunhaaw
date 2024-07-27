import React from 'react';
import './styles/projectcard.css';

const ProjectCard = ({ title, image, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Ver mais</a>
    </div>
  );
};

export default ProjectCard;
