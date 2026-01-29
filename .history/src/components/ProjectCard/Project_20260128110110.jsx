import React from "react";
import './Project.css';

// Importando ícones para os botões (instale: npm install react-icons)
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Importe suas imagens aqui
import Private from '../../assets/private-idiomas.png'
import Money from '../../assets/convert-money.png'
import Tradutor from '../../assets/tradutor.png'
import Portifolio from '../../assets/portifolio.png'
import DevBurger from '../../assets/devburger.png'
import Pharm from '../../assets/pharm.png'
import PetDev from '../../assets/petdev.png'
import EvoTech from '../../assets/evotech.png'

const Project = () => {

  // Dados dos projetos (Simula uma API ou JSON)
  // Isso facilita adicionar ou remover projetos no futuro
  const projectsData = [
    {
      id: 1,
      image: Private,
      title: "Private Idiomas",
      desc: "Plataforma freelancer para escola de idiomas local, focada em conversão de leads.",
      techs: ["HTML5", "CSS3", "JavaScript"],
      links: {
        deploy: "https://isaacdev10.github.io/Private-Idiomas/",
        repo: "https://github.com/IsaacDEV10/Private-Idiomas"
      }
    },
    {
      id: 2,
      image: DevBurger,
      title: "DevBurger",
      desc: "Sistema de delivery completo com cardápio dinâmico e carrinho de compras.",
      techs: ["React", "PostgreSQL", "API"],
      links: {
        deploy: "https://isaacdev10.github.io/Devburger-Interface/",
        repo: "https://github.com/IsaacDEV10/Devburger-Interface"
      }
    },
    {
      id: 3,
      image: PetDev,
      title: "PetDev",
      desc: "Landing page moderna para Petshop com agendamento e galeria.",
      techs: ["Next.js", "Tailwind", "TypeScript"],
      links: {
        deploy: "https://petdev-pp5dzhjfs-isaacdev10s-projects.vercel.app",
        repo: "https://github.com/IsaacDEV10/Petdev"
      }
    },
    {
      id: 4,
      image: Money,
      title: "Conversor de Moedas",
      desc: "Aplicação de finanças consumindo API de cotação em tempo real.",
      techs: ["HTML", "CSS", "JS API"],
      links: {
        deploy: "https://isaacdev10.github.io/Convert-Money/",
        repo: "https://github.com/IsaacDEV10/Convert-Money"
      }
    },
    {
      id: 5,
      image: Tradutor,
      title: "Tradutor Dev",
      desc: "Tradutor universal consumindo a API MyMemory com interface clean.",
      techs: ["React", "Tailwind", "API"],
      links: {
        deploy: "https://isaacdev10.github.io/Tradutor/",
        repo: "https://github.com/IsaacDEV10/Tradutor"
      }
    },
    {
      id: 6,
      image: Pharm,
      title: "Pharm Info",
      desc: "Busca inteligente de medicamentos por classe e princípio ativo.",
      techs: ["React", "CSS3", "JS"],
      links: {
        deploy: "https://isaacdev10.github.io/pharm-info/",
        repo: "https://github.com/IsaacDEV10/pharm-info"
      }
    },
    {
      id: 7,
      image: EvoTech,
      title: "EvoTech",
      desc: "Solução corporativa para empresa de tecnologia com foco em UI/UX.",
      techs: ["React", "CSS3", "Responsividade"],
      links: {
        deploy: "https://isaacdev10.github.io/EvoTech/",
        repo: "https://github.com/IsaacDEV10/EvoTech"
      }
    },
    {
      id: 8,
      image: Portifolio,
      title: "Portfolio V1",
      desc: "Primeira versão do portfólio pessoal desenvolvida no início da carreira.",
      techs: ["HTML5", "CSS3", "JavaScript"],
      links: {
        deploy: "https://isaacdev10.github.io/Portifolio/",
        repo: "https://github.com/IsaacDEV10/Portifolio"
      }
    }
  ];

  return (
    <section className="project-section" id="work">
      <h2 className="section-title">Projetos em Destaque</h2>
      
      <div className="project-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="card-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="tech-tags">
                {project.techs.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <div className="card-actions">
                <a href={project.links.deploy} target="_blank" rel="noopener noreferrer" className="btn-deploy">
                  <FaExternalLinkAlt /> Deploy
                </a>
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="btn-repo">
                  <FaGithub /> Código
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;