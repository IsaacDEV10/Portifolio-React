import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className='skill-container'>
        <h2 id='skills'>Proficiência Técnica</h2>
        <div className='skill-content'>
            <div className='skill'>
                <h1>Front-End</h1>
                <li><h3>Html</h3>
                <span className='bar'><span className='html'></span></span>
                </li>
                <li><h3>Css</h3>
                <span className='bar'><span className='css'></span></span>
                </li>
                <li><h3>JavaScript</h3>
                <span className='bar'><span className='js'></span></span>
                </li>
                <li><h3>React</h3>
                <span className='bar'><span className='react'></span></span>
                </li>
            </div>
            <div className='skill'>
                <h1>Back-End</h1>
                <li><h3>Node</h3>
                <span className='bar'><span className='node'></span></span>
                </li>
                <li><h3>Express</h3>
                <span className='bar'><span className='express'></span></span>
                </li>
                <li><h3>MongoDB</h3>
                <span className='bar'><span className='mongo'></span></span>
                </li>
                <li><h3>Prisma</h3>
                <span className='bar'><span className='prisma'></span></span>
                </li>
            </div>
            <div className='skill'>
                <h1>Soft Skills</h1>
                <li><h3>Liderança</h3>
                <span className='bar'><span className='liderança'></span></span>
                </li>
                <li><h3>Proatividade</h3>
                <span className='bar'><span className='proatividade'></span></span>
                </li>
                <li><h3>Criatividade</h3>
                <span className='bar'><span className='criatividade'></span></span>
                </li>
                <li><h3>Aprendizado</h3>
                <span className='bar'><span className='aprendizado'></span></span>
                </li>
            </div>
            
        </div>
    </section>
  )
}

export default Skills