import React from "react";
import './Project.css';
import Private from '../../assets/private-idiomas.png'
import Money from '../../assets/convert-money.png'
import Tradutor from '../../assets/tradutor.png'
import Portifolio from '../../assets/portifolio.png'

const Project = () => {
  return (
    <section>
      <div className="project-container" id="work">
      <h2>Projetos</h2>
        <div className="project-content">
          <div className="projects">
            <img src={Private} alt="private" className="img-assets"/>
            <h3>Private Idiomas </h3>
            <p>Projeto freelancer escola de <br />idiomas local.</p>
            <div className="img-badges">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt=""/>
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt=""/>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt=""/>
                    
            </div>
            <div className="link">
                <a href="https://isaacdev10.github.io/Private-Idiomas/" target="blank">Deploy</a><a href="https://github.com/IsaacDEV10/Private-Idiomas" target="blank">Sources</a>
            </div>
          </div>
          <div className="projects">
            <img src={Money} alt="" className="img-assets" />
            <h3>Conversor de Moedas</h3>
            <p>Conversor de moedas inteligente<br />feito para conversão de dinheiro.</p>
            <div className="img-badges">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt=""/>
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt=""/>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt=""/>
            </div>
            <div className="link">
                <a href="https://isaacdev10.github.io/Convert-Money/" target="blank">Deploy</a><a href="https://github.com/IsaacDEV10/Convert-Money" target="blank">Sources</a>
            </div>
          </div>
          <div className="projects">
            <img src={Portifolio} alt="private" className="img-assets"/>
            <h3>Portifólio </h3>
            <p>Primeiro Portifólio feito com tecnológias basicas de Front-End </p>
            <div className="img-badges">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt=""/>
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt=""/>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt=""/>
                    
            </div>
            <div className="link">
                <a href="https://isaacdev10.github.io/Portifolio/" target="blank">Deploy</a><a href="https://github.com/IsaacDEV10/Portifolio" target="blank">Sources</a>
            </div>
          </div>
          <div className="projects">
            <img src={Tradutor} alt="" className="img-assets" />
            <h3>Tradutor Dev</h3>
            <p>Projeto feito com React, Tailwind e Api MyMemory
            </p>
            <div className="img-badges">
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt=""/>
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
            </div>
            <div className="link">
                <a href="https://isaacdev10.github.io/Tradutor/" target="blank">Deploy</a><a href="https://github.com/IsaacDEV10/Tradutor" target="blank">Sources</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
