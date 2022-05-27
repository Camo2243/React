import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Mis Proyectos</p>
                    <p>Organizador de eventos</p>
                    <p>Combenio con lugar de eventos OPERA</p>                   
                </div>
                <div className='col-2'>
                </div>

                <div className='col-1'>
                    <p>Mis estudios</p>
                    <p>Ingeniero en sistemas y telecomunicaciones</p>
                    <p>UNIVERSIDAD DE MANIZALES</p>                   
                </div>

                <div className='col-1'>
                    <p>Software Que Manejo</p>
                    <ul>
                     <li>Adobe Lightroom</li>
                     <li>Visual Studio code</li>
                     <li>Adobe Acrobat Pro.</li>
                     <li>Adobe Photoshop.</li>
                     <li>Adobe AInDesign.</li>
                     <li>Adobe After Effects.</li>
                     <li>Adobe Animate.</li>
                     
                     

                     <div className='col-1'>
                   
                    <a href="https://github.com/Camo1997" target="_blank">Conoce mis habilidades con GitHub</a>
                    <a href="https://gitlab.com/Camo1997" target="_blank">Conoce mis habilidades con GitLab</a>
                                      
                </div>

                     
</ul>                  
                </div>
            </div>
        </div>

        
    )
}

export default Demo
