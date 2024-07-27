import React from 'react';
import './styles/home.css';
import profilePicture from '../assets/profile-picture.jpg'; // Ajuste o caminho da imagem conforme necessário

const cv = '../assets/cv.pdf'

const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
  return (
    <section className="presentation">
      <div className="left">
      </div>
      <div className="center">
        <div className="presentation-text">
          <h3 className="first-text">Muito prazer, sou o</h3>
          <h1 className="presentation-title">Matheus Cunha</h1>
          <h4 className="subtitle"> ⮕ Engenheiro de Software</h4>
          <p className="impact-phrase">Transformando dados em soluções <br />inovadoras e futurísticas.</p>
          <div className="button-components">
            <a href={cv} download={cv} className="curriculum-button">Download CV</a>
            <a href="#contact" className="contact-button">Contate-me</a>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={profilePicture}alt="Foto de Perfil" style={{ width: 400, height: 400, borderRadius: '50%', marginTop: -95, marginLeft: -80 }} />
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
