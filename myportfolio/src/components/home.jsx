import React from 'react';
import './styles/home.css';
import profilePicture from '../assets/profile-picture.jpg'; // Ajuste o caminho da imagem conforme necessário

const cv = '../assets/cv.pdf';

const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: 660, behavior: 'smooth' });
  };

  return (
    <section className="presentation">
      <div className="left"></div>
      <div className="center">
        <div className="presentation-text">
          <h3 className="first-text">Muito prazer, sou o</h3>
          <h1 className="presentation-title">Matheus Cunha</h1>
          <h4 className="subtitle"> ⮕ Engenheiro de Software</h4>
          <p className="impact-phrase">Transformando tecnologia em solução e inovação.</p>
          <div className="button-components">
            <a href={cv} download={cv} className="curriculum-button">Download CV</a>
            <a href="#contact" className="contact-button">Contate-me</a>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="profile-picture" src={profilePicture} alt="Foto de Perfil" />
      </div>
      <div className="scroll-down-button">
        <button onClick={handleScrollDown}>
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
    </section>
  );
};

export default Home;
