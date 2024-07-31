import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import MobileNav from '../MobileNav/MobileNav';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper'>
                <div className='nav-content'>
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
                        <button className='contact-btn' onClick={toggleMenu}><a href="https://wa.me/5585994506690" target='blank'>Contato</a></button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span 
                            className="material-symbols-outlined" 
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "=" : "="}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
