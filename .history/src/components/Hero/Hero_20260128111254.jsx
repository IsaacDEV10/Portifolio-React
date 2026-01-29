import React from "react";
import "./Hero.css";

// IMPORTANTE: Verifique se este caminho está certo para sua foto
import heroImage from "../../assets/isaac.png";

// Importando ícones
import { FaReact, FaNodeJs, FaGithub, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      
      {/* Lado Esquerdo: Textos */}
      <div className="hero-content">
        <span className="greeting">Olá, eu sou Isaac Luiz 👋</span>
        <h1>
          Construindo <br />
          <span className="gradient-text">Experiências Digitais</span>
        </h1>
        <p>
          Desenvolvedor Full Stack transformando ideias em soluções web 
          performáticas e visualmente impressionantes.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="btn-primary">Ver Projetos</a>
          <a href="https://github.com/IsaacDEV10" target="_blank" rel="noreferrer" className="btn-secondary">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      {/* Lado Direito: Imagem e Animações */}
      <div className="hero-img-wrapper">
        <div className="img-box">
           <img src={heroImage} alt="Isaac Luiz" className="main-photo" />
        </div>

        {/* Ícones Flutuantes (Agora são 6 para fechar o círculo) */}
        
        {/* Topo Esquerda */}
        <div className="floating-icon icon-react">
          <FaReact size={30} color="#61DAFB"/>
        </div>
        
        {/* Topo Direita */}
        <div className="floating-icon icon-node">
          <FaNodeJs size={30} color="#339933"/>
        </div>
        
        {/* Meio Esquerda */}
        <div className="floating-icon icon-js">
          <SiJavascript size={25} color="#F7DF1E"/>
        </div>
        
        {/* Meio Direita */}
        <div className="floating-icon icon-next">
          <SiNextdotjs size={25} color="#fff"/>
        </div>

        {/* Baixo Esquerda (Novo) */}
        <div className="floating-icon icon-docker">
          <FaDocker size={30} color="#2496ED"/>
        </div>

        {/* Baixo Direita (Novo) */}
        <div className="floating-icon icon-tailwind">
          <SiTailwindcss size={30} color="#06B6D4"/>
        </div>

      </div>

    </section>
  );
};

export default Hero;