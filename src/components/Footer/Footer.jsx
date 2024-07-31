import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2024 Isaac Luiz, Dev FullStack</p>
        <img src={Logo} alt="" />
    </div>
  )
}

export default Footer