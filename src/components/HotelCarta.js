import React from 'react'

import './styles/HotelCarta.css'

import icono_ubicacion from "../iconos-imagenes/marcador-de-posicion(rellenoBlanco).svg"
import icono_cama from "../iconos-imagenes/cama.svg"

function HotelCarta(props) {
    return (
        <div className="carta-container">
            <div className="carta-imagen">
                <img src={props.imagen} alt="Imagen Del Hotel" />
            </div>
            <h2 className="nombre-hotel">{props.nombre}</h2>
            <p className="texto-fechaInicio">Desde el {props.fechaInicio}</p>
            <p className="texto-fechaSalida">Hasta el {props.fechaSalida}</p>
            <p className="texto-descripcion">{props.descripcion}</p>
            <div className="ubicacion">
                <span><img src={icono_ubicacion} alt="icono"></img></span>
                <p>{props.ciudad}, {props.pais}</p>
            </div>
            
            <div className="contenedor-habitaciones-precios">
                <div className="habitaciones">
                    <span><img src={icono_cama} alt="icono"></img></span>
                    <p>{props.habitaciones} Habitaciones</p>
                </div>
                <div className="precios">{props.precio}</div>
            </div>

            <div className="boton-reservar">
                <a href="/">Reservar</a>
            </div>

        </div>
    )
}

export default HotelCarta
