import React from 'react'

import './styles/Header.css'

export default function Header() {
    return (
        
        <div className='header-container'>

            <div className='header-container__up'>
                <h1>Hoteles</h1>
                <h3>En cualquier fecha</h3>
                <h3>En cualquier país</h3>
                <h3>En cualquier precio</h3>
                <h3>De cualquier tamaño</h3>
            </div>

            <div className='header-container__down'>

                <div className="fecha-ingreso-container">
                    <label for="fecha-ingreso" class="etiqueta-fecha-ingreso">Desde:</label>
                    <input type="date" id="fecha-ingreso" class="fecha-ingreso" />
                </div>
                                    
                <div className="fecha-salida-container">
                    <label for="fecha-salida" class="etiqueta-fecha-salida">Hasta:</label>
                    <input type="date" id="fecha-salida" class="fecha-salida" />
                </div>

                <select name="paises" id="">
                    <option value="todos-paises">Todos los países</option>
                    <option value="argentina">Argentina</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="brasil">Brasil</option>
                    <option value="chile">Chile</option>
                </select>

                <select name="precios" id="">
                    <option value="todos-precios">Todos los precios</option>
                    <option value="1">$</option>
                    <option value="2">$  $</option>
                    <option value="3">$  $  $</option>
                    <option value="4">$  $  $  $</option>
                </select>

                <select name="tamaños" id="">
                    <option value="todos-tamaños">Cualquier tamaño</option>
                    <option value="pequenio">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>

                <button type='button' className="button">LIMPIAR</button>

            </div>
            
        </div>
        
    )
} 