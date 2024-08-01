import React from 'react';
import './styles/aboutme.css';
import profilePicture from '../assets/profile-picture.jpg';

const AboutMe = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: 1430, behavior: 'smooth' });
  };

  return (
    <section className="about-me">
      <div className="about-me-container">
        <img src={profilePicture} alt="Foto de perfil de Matheus Cunha" className="profile-picture" />
        <div className="about-me-text">
          <h2>Sobre Mim</h2>
          <p>
            Muito prazer! Sou o Matheus Cunha, tenho 19 anos e sou estudante de Engenharia de Software no quarto período,
            na Universidade São Judas Tadeu.
          </p>
          <p>
            Desde o início da minha jornada acadêmica, me despertou o interesse em desenvolver projetos para ajudar pessoas e inovar o mundo, por meio da tecnologia.
            Durante minha trajetória, participo de trabalhos com meus colegas da faculdade, que me instigam a aprimorar minhas habilidades em desenvolvimento de software e análise de dados. Além disso, gosto de me envolver em projetos de back-end ou análise de dados, atualizar sobre as tendências e melhores práticas do setor.
          </p>
          <p>
            Fora do ambiente acadêmico, sou um músico tecladista cristão. Além da música ser meu hobby, é um prazer servir a Deus. Também gosto de visitar lugares novos, ler e de ficar com a minha família. Essas coisas são a razão que me faz lutar para viver o melhor a cada dia.
          </p>
          <p>
            Estou sempre aberto a novas oportunidades e projetos que me permitam crescer profissionalmente e contribuir para soluções inovadoras.
          </p>
        </div>
        <div className="scroll-down-button-a">
          <button onClick={handleScrollDown}>
            <i className="fas fa-angle-down"></i>
          </button>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;
