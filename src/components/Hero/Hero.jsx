import React from "react";
import "./Hero.css";
import heroImage from "../../assets/isaac.png";
import react from '../../assets/react.png'
import js from '../../assets/js.png';
import css from '../../assets/css-3.png';
import html from '../../assets/html-5.png'
import tailwind from '../../assets/tailwind.png'
import node from '../../assets/node.png'

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>Construindo Experiências Digitais que Inspiram!</h2>
        <p>
        Desenvolvedor FullStack | Transformando Ideias em Soluções Web Perfeitas e Visualmente Impressionantes
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={react} alt="react" />
          </div>
          <img  src={heroImage} alt="Isaac" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={js} alt="JavaScript" />
          </div>
          <div className="tech-icon">
            <img src={css} alt="" />
          </div>
          <div className="tech-icon">
            <img src={html} alt="" />
          </div>
          <div className="tech-icon">
            <img src={tailwind} alt="" />
          </div>
          <div className="tech-icon">
            <img src={node} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
