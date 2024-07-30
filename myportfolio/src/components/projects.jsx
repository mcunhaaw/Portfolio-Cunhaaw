import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './projectcard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/projects.css';
import img1 from '../assets/img1.jpg';

const Projects = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: 2495, behavior: 'smooth' });
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="projects">
      <h2>Projetos Desenvolvidos</h2>
      <Slider {...settings}>
        <ProjectCard title="PORTFOLIO" image={img1} description="Portfolio." link="https://github.com/mcunhaaw/Portfolio-Cunhaaw" />
        <ProjectCard title="Diabetes predictor" image={img1} description="Projeto de análise de dados com Python." link="https://github.com/mcunhaaw/Diabetes-Prediction"/>
        <ProjectCard title="Projeto 4" image={img1} description="Sea World" link="https://github.com/mcunhaaw/Landing-Page---Seal-World"/>
        <ProjectCard title="Projeto 5" image={img1} description="Jogo da velha" link="https://github.com/mcunhaaw/tik-tac-toe" />
        <ProjectCard title="Projeto 6" image={img1} description="DB-movies: treino SQLite" link="https://github.com/mcunhaaw/DB-movies" />
        <ProjectCard title="Gerador de Pdf" image={img1} description="Projeto para geração de recibos em PDF." link="https://github.com/mcunhaaw/Gerador-PDF" />
      </Slider>
      <div className="scroll-down-button-p">
        <button onClick={handleScrollDown}><i className="fas fa-angle-down"></i></button>
      </div>
    </section>
    
  );
};

export default Projects;
