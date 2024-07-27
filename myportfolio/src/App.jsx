import React from 'react'
import Header from './components/header'
import Home from './components/home'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;