import React, { useState } from 'react';
import './styles/header.css';
import logo from '../assets/logo.png'; // Ajuste o caminho da logo conforme necessário

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <img src={logo} alt="Logo" className="logo" />
        <div className={`nav-toggle ${navOpen ? 'open' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li className="git-hub">
            <a href="https://github.com/mcunhaaw">
              <i className="fa-brands fa-github"></i><div className="text-git">cunhaaw</div>
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-overlay"></div>
    </header>
  );
};

export default Header;
