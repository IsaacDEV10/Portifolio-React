import React from 'react';
import './Sobre.css';
import ImgSobre from '../../assets/isaac2.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Email from '../../assets/email.png';
import Curriculo from '../../assets/curriculo.png';

const Sobre = () => {
  return (
    <section id='contact'>
      <div className='sobre-container'>
      <h2>Sobre</h2>
        <div className='sobre-content'>
          <div className='img-sobre'>
            <img src={ImgSobre} alt="Isaac Luiz" />
          </div>
          <div className='text-sobre'>
            <h1>Prazer, sou<span> Isaac Luiz</span>.</h1>
            <p>Sou um apaixonado por tecnologia, atualmente focado no desenvolvimento web. Com experiência sólida em programação Fullstack, estou sempre em busca de aprender e aplicar novas habilidades para criar experiências web incríveis. Sou motivado pela resolução de problemas e pela colaboração em equipe, buscando constantemente melhorar minhas habilidades e conhecimentos. Estou em busca de oportunidades desafiadoras no campo do desenvolvimento web, onde eu possa contribuir e crescer profissionalmente.</p>
            <div className='sobre-icon'>
              <a href="https://www.instagram.com/isaax_10/" target='_blank' rel='noopener noreferrer'><img src={Instagram} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/in/isaac-luiz-2932182b2/" target='_blank' rel='noopener noreferrer'><img src={Linkedin} alt="LinkedIn" /></a>
              <a href="https://github.com/IsaacDEV10" target='_blank' rel='noopener noreferrer'><img src={Github} alt="GitHub" /></a>
              <a href="mailto:isaacluiz27@hotmail.com" target='_blank' rel='noopener noreferrer'><img src={Email} alt="Email" /></a>
              <a href="/Cv-Isaac Luiz.pdf" download="Cv-Isaac Luiz.pdf"><img src={Curriculo} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
