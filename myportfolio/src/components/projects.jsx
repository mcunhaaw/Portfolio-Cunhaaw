import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './projectcard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/projects.css';
import img1 from '../assets/img1.jpg';

const Projects = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: 2975, behavior: 'smooth' });
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
        <ProjectCard title="Previsor de diabetes" image={img1} description="Projeto de análise de dados com Python." link="https://github.com/mcunhaaw/Diabetes-Prediction"/>
        <ProjectCard title="Dashboard de vendas - POWER BI" image={img1} description="Projeto de dashboard de vendas em Power BI." link="https://app.powerbi.com/groups/me/reports/5b0b4e7e-412c-4aa7-b39a-8fe808cf4aa3/a4d5d299fb58eaaeaa03?experience=power-bi" />
        <ProjectCard title="Landing page - Sea World" image={img1} description="Primeiro projeto desenvolvido com HTML e CSS" link="https://github.com/mcunhaaw/Landing-Page---Seal-World"/>
        <ProjectCard title="Jogo da velha" image={img1} description="Jogo da velha" link="https://github.com/mcunhaaw/tik-tac-toe" />
        <ProjectCard title="Estudo Banco de dados" image={img1} description="DB-movies: treino SQLite" link="https://github.com/mcunhaaw/DB-movies" />
      </Slider>
      <div className="scroll-down-button-p">
        <button onClick={handleScrollDown}><i className="fas fa-angle-down"></i></button>
      </div>
    </section>
    
  );
};

export default Projects;
