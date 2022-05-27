import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Habilidades</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Manejo de los programas de Adobe</p>
                        <p><span></span></p>
                        <p>Lugar de desarollo de la habilidad: Proyecto personal</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Analisis y desarollo de Arduino C++</p>
                        <p><span></span></p>
                        <p>Lugar de desarollo de la habilidad: Universidad De Manizales</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Organizador de eventos universitarios</p>
                        <p><span></span></p>
                        <p>Lugar de desarollo de la habilidad: Cadena de discotecas de Manizales</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
