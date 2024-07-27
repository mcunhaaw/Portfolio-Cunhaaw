import React from 'react';
import { FaJs, FaReact, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiPowerbi, SiPostgresql, SiMongodb} from 'react-icons/si';
import { useSpring, animated } from 'react-spring';
import './styles/skills.css';

const skillsData = [
  {
    category: 'Desenvolvimento Web',
    skills: [
      { icon: <FaJs />, name: 'JavaScript' },
      { icon: <FaReact />, name: 'React' },
      { icon: <FaCss3Alt />, name: 'CSS' },
    ],
  },
  {
    category: 'Data Science',
    skills: [
      { icon: <FaPython />, name: 'Python' },
      { icon: <SiPowerbi />, name: 'Power BI' },
    ],
  },
  {
    category: 'Banco de Dados',
    skills: [
      { icon: <SiMongodb />, name: 'MongoDB' },
      { icon: <SiPostgresql />, name: 'PostgreSQL' },
    ],
  },
];

const Skills = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200 });
  return (
    <animated.section style={fadeIn} className="skills">
      <h2>Stacks Utilizadas</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-cards">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="scroll-down-button">
          <button onClick={handleScrollDown}>
            <i className="fas fa-angle-down"></i>
          </button>
        </div>
      </div>
    </animated.section>
  );
};

export default Skills;