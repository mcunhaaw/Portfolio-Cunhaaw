import React from 'react';

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="project-image" />
      <p>{description}</p>
      <a href={link || "#"} target={link ? "_blank" : "_self"} rel={link ? "noopener noreferrer" : ""}>Ver projeto</a>
    </div>
  );
};

export default ProjectCard;
