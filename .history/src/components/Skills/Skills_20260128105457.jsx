import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className='skill-container'>
        <h2 id='skills'>Minhas Habilidades</h2>
        
        <div className='skill-content'>
            
            {/* Frontend */}
            <div className='skill-category'>
                <h3>Front-End</h3>
                <div className='skill-list'>
                    <span className='skill-badge'>HTML5</span>
                    <span className='skill-badge'>CSS3</span>
                    <span className='skill-badge'>JavaScript (ES6+)</span>
                    <span className='skill-badge'>React.js</span>
                    <span className='skill-badge'>Styled Components</span>
                    <span className='skill-badge'>Tailwind</span>
                </div>
            </div>

            {/* Backend */}
            <div className='skill-category'>
                <h3>Back-End</h3>
                <div className='skill-list'>
                    <span className='skill-badge'>Node.js</span>
                    <span className='skill-badge'>Express</span>
                    <span className='skill-badge'>MongoDB</span>
                    <span className='skill-badge'>PostgreSQL</span>
                    <span className='skill-badge'>Prisma ORM</span>
                    <span className='skill-badge'>REST APIs</span>
                </div>
            </div>

            {/* Ferramentas e Outros */}
            <div className='skill-category'>
                <h3>Ferramentas & Soft Skills</h3>
                <div className='skill-list'>
                    <span className='skill-badge'>Git & GitHub</span>
                    <span className='skill-badge'>Docker</span>
                    <span className='skill-badge'>Scrum / Agile</span>
                    <span className='skill-badge'>Liderança Técnica</span>
                    <span className='skill-badge'>Resolução de Problemas</span>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Skills