import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Project from './components/ProjectCard/Project';
import Sobre from './components/Sobre/Sobre';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills/>
        <Project/>
        <Sobre/>
      </div>
      <Footer/>
    </>
  );
}

export default App;




