import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Conoceme</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Mis Habilidades</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Mis Estudios</a>
                    </li>
                </ul>
               
            </div>
        </div>
    )
}

export default Footer
