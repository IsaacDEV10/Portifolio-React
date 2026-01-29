import React from 'react';
import './Sobre.css';
import ImgSobre from '../../assets/isaac2.png'; // Verifique se o caminho está certo

// Importando ícones leves (instale: npm install react-icons)
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Sobre = () => {
  return (
    <section id='contact' className='sobre-section'>
      <div className='sobre-container'>
        
        {/* Coluna da Imagem */}
        <div className='sobre-img-wrapper'>
          <div className='img-border'>
             <img src={ImgSobre} alt="Foto de Isaac Luiz" />
          </div>
        </div>

        {/* Coluna do Texto */}
        <div className='sobre-content'>
          <span className='subtitle'>Quem sou eu</span>
          <h2>Prazer, sou <span className='highlight'>Isaac Luiz</span></h2>
          
          <p>
            Sou um apaixonado por tecnologia e inovação, focado em transformar problemas complexos em interfaces simples e intuitivas. 
            Com experiência em desenvolvimento <strong>Full Stack</strong>, busco constantemente evoluir minhas habilidades técnicas e criar soluções que impactem positivamente o usuário final.
          </p>
          
          <p>
            Atualmente, estou me aprofundando em arquitetura de software e novas tecnologias do ecossistema JavaScript.
            Valorizo o trabalho em equipe e estou pronto para encarar novos desafios que impulsionem meu crescimento profissional.
          </p>

          {/* Área de Ações: Redes Sociais e Botão CV */}
          <div className='sobre-actions'>
            
            <div className='social-links'>
              <a href="https://www.linkedin.com/in/isaac-luiz-2932182b2/" target='_blank' rel='noopener noreferrer' aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/IsaacDEV10" target='_blank' rel='noopener noreferrer' aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/isaax_10/" target='_blank' rel='noopener noreferrer' aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:isaacluiz27@hotmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>

            <a href="/Cv-Isaac Luiz.pdf" download="Cv-Isaac Luiz.pdf" className='btn-download'>
              <FaFileDownload /> Baixar CV
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;