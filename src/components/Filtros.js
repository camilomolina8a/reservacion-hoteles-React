import React from "react";

import "./styles/Filtros.css"

import { fechaDeHoyFormateadaAnioMesDia } from "../utils";

export default function Filtros({
    fechaIngreso,
    handlerFechaIngreso,
    fechaSalida,
    handlerFechaSalida,
    paises,
    handlerSeleccionarPais,
    precios,
    handlerSeleccionarPrecio,
    tamanios,
    handlerSeleccionarTamanio,
    limpiarDatos
}) {
    return (
        <div className="header-container__down">
            <div className="fecha-ingreso-container">
                <label for="fecha-ingreso" class="etiqueta-fecha-ingreso">
                    Desde:
                </label>
                <input
                    value={fechaIngreso}
                    min={fechaDeHoyFormateadaAnioMesDia()}
                    type="date"
                    id="fecha-ingreso"
                    class="fecha-ingreso"
                    onChange={handlerFechaIngreso}
                />
            </div>

            <div className="fecha-salida-container">
                <label for="fecha-salida" class="etiqueta-fecha-salida">
                    Hasta:
                </label>
                {fechaIngreso !== "" ? (
                    <input
                        value={fechaSalida}
                        min={
                            fechaIngreso === ""
                                ? fechaDeHoyFormateadaAnioMesDia()
                                : fechaIngreso
                        }
                        type="date"
                        id="fecha-salida"
                        class="fecha-salida"
                        onChange={handlerFechaSalida}
                    />
                ) : (
                    <input
                        value={fechaSalida}
                        min={
                            fechaIngreso === ""
                                ? fechaDeHoyFormateadaAnioMesDia()
                                : fechaIngreso
                        }
                        type="date"
                        id="fecha-salida"
                        disabled
                        class="fecha-salida"
                        onChange={handlerFechaSalida}
                    />
                )}
            </div>

            <select
                value={paises}
                name="paises"
                id=""
                onChange={handlerSeleccionarPais}
            >
                <option value="todos-paises">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
            </select>

            <select
                value={precios}
                name="precios"
                id=""
                onChange={handlerSeleccionarPrecio}
            >
                <option value="todos-precios">Todos los precios</option>
                <option value="1">$</option>
                <option value="2">$ $</option>
                <option value="3">$ $ $</option>
                <option value="4">$ $ $ $</option>
            </select>

            <select
                value={tamanios}
                name="tamanios"
                id=""
                onChange={handlerSeleccionarTamanio}
            >
                <option value="todos-tamaños">Cualquier tamaño</option>
                <option value="pequeño">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
            </select>

            <button type="button" className="button" onClick={limpiarDatos}>
                LIMPIAR
            </button>
        </div>
    );
}
