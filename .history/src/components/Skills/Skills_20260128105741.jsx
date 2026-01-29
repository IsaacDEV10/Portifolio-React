import React from 'react'
import './Skills.css'

// Importando os ícones necessários
// 'si' = Simple Icons (logos oficiais de tecnologia)
// 'fa' = Font Awesome (ícones genéricos para soft skills)
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
    SiGit, SiGithub, SiDocker
} from 'react-icons/si';

import { FaUsersCog, FaPuzzlePiece, FaSyncAlt } from 'react-icons/fa';


const Skills = () => {
  const iconSize = 20; // Tamanho padrão para os ícones

  return (
    <section className='skill-container'>
        <h2 id='skills'>Minhas Habilidades</h2>
        
        <div className='skill-content'>
            
            {/* === Frontend === */}
            <div className='skill-category'>
                <h3>Front-End</h3>
                <div className='skill-list'>
                    <span className='skill-badge'>
                        <SiHtml5 size={iconSize} color="#E34F26"/> HTML5
                    </span>
                    <span className='skill-badge'>
                        <SiCss3 size={iconSize} color="#1572B6"/> CSS3
                    </span>
                    <span className='skill-badge'>
                        <SiJavascript size={iconSize} color="#F7DF1E"/> JavaScript
                    </span>
                    <span className='skill-badge'>
                        <SiReact size={iconSize} color="#61DAFB"/> React.js
                    </span>
                    <span className='skill-badge'>
                        <SiStyledcomponents size={iconSize} color="#DB7093"/> Styled Components
                    </span>
                    <span className='skill-badge'>
                        <SiTailwindcss size={iconSize} color="#06B6D4"/> Tailwind
                    </span>
                </div>
            </div>

            {/* === Backend === */}
            <div className='skill-category'>
                <h3>Back-End</h3>
                <div className='skill-list'>
                    <span className='skill-badge'>
                        <SiNodedotjs size={iconSize} color="#339933"/> Node.js
                    </span>
                    <span className='skill-badge'>
                        <SiExpress size={iconSize} color="#fff"/> Express
                    </span>
                    <span className='skill-badge'>
                        <SiMongodb size={iconSize} color="#47A248"/> MongoDB
                    </span>
                    <span className='skill-badge'>
                        <SiPostgresql size={iconSize} color="#4169E1"/> PostgreSQL
                    </span>
                    <span className='skill-badge'>
                        <SiPrisma size={iconSize} color="#fff"/> Prisma ORM
                    </span>
                </div>
            </div>

            {/* === Ferramentas & Soft Skills === */}
            <div className='skill-category'>
                <h3>Ferramentas & Soft Skills</h3>
                <div className='skill-list'>
                    <span className='skill-badge'>
                        <SiGit size={iconSize} color="#F05032"/> Git
                    </span>
                     <span className='skill-badge'>
                        <SiGithub size={iconSize} color="#fff"/> GitHub
                    </span>
                    <span className='skill-badge'>
                        <SiDocker size={iconSize} color="#2496ED"/> Docker
                    </span>
                    {/* Ícones genéricos para Soft Skills (usei cores neutras) */}
                     <span className='skill-badge'>
                        <FaSyncAlt size={iconSize} color="#6791fb"/> Scrum / Agile
                    </span>
                    <span className='skill-badge'>
                        <FaUsersCog size={iconSize} color="#6791fb"/> Liderança
                    </span>
                    <span className='skill-badge'>
                        <FaPuzzlePiece size={iconSize} color="#6791fb"/> Resolução de Problemas
                    </span>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Skills