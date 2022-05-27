import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='Camilo' />
                <div className='col-2'>
                    <h2>CONOCEME</h2>
                    <span className='line'></span>
                    <p>-Soy un tipo de trabajador que está acostumbrado al trabajo bajo presión, tengo varios años de experiencia en atención al cliente y en búsqueda de oportunidades comerciales. También me considero una persona resolutiva, con buen ánimo y capaz de resolver problemas fácilmente.</p>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default About
