import React from 'react'

import './styles/NotFound.css'

import caraTriste from "../iconos-imagenes/cara-triste-en-cuadrado-redondeado.png"

function NotFound() {
    return (
        <div className="NotFound-container">
            <div className='cara-triste'>
                <img src={caraTriste} alt="Cara Triste" />
            </div>
            <h2 className='no-disponible'>Lo sentimos, no hay hoteles disponibles con los filtros seleccionados.</h2>
        </div>
    )
}

export default NotFound
