import React from 'react';
import './styles/contact.css';

const Contact = () => {
  return (
    <div className="main-content">
      <section className="contact">
        <h2>Contato</h2>
        <div className="contact-container">
          <form className="contact-form">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" className="send-button">Enviar</button>
          </form>
          <div className="contact-info">
            <h3>Vamos nos conectar!</h3>
            <div className="social-icons">
              <ul className="social-media-c">
                <li><a href="#"><i className="fa-brands fa-instagram"></i>@cunhaaw</a></li>
                <li><a href="https://github.com/mcunhaaw"><i className="fa-brands fa-github"></i>@cunhaaw</a></li>
                <li><a href="#"><i className="fa-brands fa-whatsapp"></i>1193936-0433</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
