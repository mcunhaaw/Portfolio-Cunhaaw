import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sentStatus, setSentStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_t4jpvc5', e.target, 'tt21T4HxQBSybDqpb')
      .then((result) => {
        setSentStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSentStatus('Erro ao enviar mensagem. Tente novamente.');
      });
  };

  return (
    <div className="main-content">
      <section className="contact">
        <h2>Contato</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-button">Enviar</button>
          </form>
          {sentStatus && <p>{sentStatus}</p>}
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
