import React from 'react';
import "./MobileNav.css";
import logo from '../../assets/logo.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <img className='logo' src={logo} alt="Logo" />
        <ul>
          <li>
            <a className='menu-item' href="#home">Home</a>
          </li>
          <li>
            <a className='menu-item' href="#skills">Habilidades</a>
          </li>
          <li>
            <a className='menu-item' href="#work">Projetos</a>
          </li>
          <li>
            <a className='menu-item' href="#contact">Sobre</a>
          </li>
          <button className='contact-btn' onClick={() => {}}>
          <a href="https://wa.me/5585994506690" target='blank'>Contato</a>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
