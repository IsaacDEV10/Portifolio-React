import React from "react";
import './Project.css';
import Private from '../../assets/private-idiomas.png'
import Money from '../../assets/convert-money.png'
import Cadastro from '../../assets/cadastro.png'
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
            <p>Converso de moedas inteligente<br />feito para conversão de dinheiro.</p>
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
            <img src={Cadastro} alt="" className="img-assets" />
            <h3>Cadastro de Usuários</h3>
            <p>Projeto tela inicial de cadastro feito com NodeJS e React</p>
            <div className="img-badges">
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt=""/>
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
            </div>
            <div className="link">
                <a href="https://isaacdev10.github.io/Private-Idiomas/" target="blank">Deploy</a><a href="https://github.com/IsaacDEV10/Cadastro-Usuarios" target="blank">Sources</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
