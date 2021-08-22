import React from 'react'

import './styles/HotelCarta.css'

import imagenHotel from '../alto-atacama.jpg'

import icono_ubicacion from "../iconos-imagenes/marcador-de-posicion(rellenoBlanco).svg"
import icono_cama from "../iconos-imagenes/cama.svg"

function HotelCarta() {
    return (
        <div className="carta-container">
            <div className="carta-imagen">
                <img src={imagenHotel} alt="Imagen Del Hotel" />
            </div>
            <h2 className="nombre-hotel">Nombre del Hotel</h2>
            <p className="texto-fechaInicio">Desde el Jueves,1 de enero de 2021</p>
            <p className="texto-fechaSalida">Hasta el Viernes,10 de enero de 2021</p>
            <p className="texto-descripcion">Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de montañas, cascadas, glaciares, lagos y peñascos, declarado Reserva de la Biosfera por la UNESCO en 1978.</p>
            <div className="ubicacion">
                <span><img src={icono_ubicacion} alt="icono"></img></span>
                <p>Buenos Aires, Argentina</p>
            </div>
            
            <div className="contenedor-habitaciones-precios">
                <div className="habitaciones">
                    <span><img src={icono_cama} alt="icono"></img></span>
                    <p>11 Habitaciones</p>
                </div>
                <div className="precios">$ $ $ $</div>
            </div>

            <div className="boton-reservar">
                <a href="/">Reservar</a>
            </div>

        </div>
    )
}

export default HotelCarta
