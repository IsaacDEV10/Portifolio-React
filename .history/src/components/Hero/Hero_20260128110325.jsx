import React from "react";
import "./Hero.css";
import heroImage from "../../assets/isaac.png";

// Ícones modernos (substituindo as imagens PNG pesadas)
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      
      {/* Lado Esquerdo: Texto e CTA */}
      <div className="hero-content">
        <span className="greeting">Olá, eu sou Isaac Luiz 👋</span>
        <h1>
          Transformando Ideias em <br />
          <span className="gradient-text">Experiências Digitais</span>
        </h1>
        <p>
          Desenvolvedor Full Stack focado em criar soluções web performáticas, 
          escaláveis e visualmente impactantes usando React, Node.js e tecnologias modernas.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="btn-primary">Ver Projetos</a>
          <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noreferrer" className="btn-secondary">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* Lado Direito: Imagem e Ícones Flutuantes */}
      <div className="hero-img-wrapper">
        
        {/* Foto Principal */}
        <div className="img-box">
           <img src={heroImage} alt="Isaac Luiz - Desenvolvedor" className="main-photo" />
        </div>

        {/* Ícones Flutuantes (Orbitando) */}
        <div className="floating-icon react">
          <FaReact size={40} color="#61DAFB"/>
        </div>
        <div className="floating-icon node">
          <FaNodeJs size={40} color="#339933"/>
        </div>
        <div className="floating-icon js">
          <SiJavascript size={35} color="#F7DF1E"/>
        </div>
        <div className="floating-icon next">
          <SiNextdotjs size={35} color="#fff"/>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;