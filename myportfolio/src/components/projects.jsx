import React from 'react';
import ProjectCard from './projectcard';
import './styles/projects.css';
import img1 from '../assets/img1.jpg'

const Projects = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
  return (
    <section className="projects">
      <h2>Projetos Desenvolvidos</h2>
      <div className="projects-categories">
        <div className="projects-category">
          <div className="projects-container">
            <ProjectCard title="Gerador de Pdf" image={img1} description="Projeto para geração de recibos em PDF." />
            <ProjectCard title="PORTFOLIO" image={img1} description="Projeto de portfólio responsivo e elegante." />
            <ProjectCard title="Análise de Dados" image={img1} description="Projeto de análise de dados com Python." />
          </div>
        </div>
        <div className="projects-category">
          <div className="projects-container">
            <ProjectCard title="Projeto 4" image={img1} description="Descrição do projeto 4." />
            <ProjectCard title="Projeto 5" image={img1} description="Descrição do projeto 5." />
            <ProjectCard title="Projeto 6" image={img1} description="Descrição do projeto 6." />
          </div>
        </div>
        <div className="scroll-down-button">
        <button onClick={handleScrollDown}>
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
      </div>
    </section>
  );
};

export default Projects;
