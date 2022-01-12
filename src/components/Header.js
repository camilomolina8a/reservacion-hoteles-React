import React from "react";

import "./styles/Header.css"

import {fechaLenguajeNatural} from "../utils"

export default function Header({
    fechaIngreso,
    fechaSalida,
    paises,
    precios,
    tamanios,
}) {
    // Funcion para poner la fecha en el DOM en forma de lenguaje natural

    const fechaEnLenguajeNaturalEnHeader = () => {
        if (fechaIngreso === "" || fechaSalida === "") {
            return <h3>En cualquier fecha</h3>;
        } else {
            return (
                <h3>{`Desde el ${fechaLenguajeNatural(
                    fechaIngreso
                )} hasta el ${fechaLenguajeNatural(fechaSalida)}.`}</h3>
            );
        }
    };

    // ################################################

    return (
        <div className="header-container">
            <div className="header-container__up">
                <h1>Hoteles</h1>

                {fechaEnLenguajeNaturalEnHeader()}

                {paises === "todos-paises" ? (
                    <h3>En cualquier país</h3>
                ) : (
                    <h3>{`En ${paises}`}</h3>
                )}

                {precios === "todos-precios" ? (
                    <h3>De cualquier precio</h3>
                ) : (
                    [
                        precios === "1" ? (
                            <h3>Económico</h3>
                        ) : (
                            [
                                precios === "2" ? (
                                    <h3>Confort</h3>
                                ) : (
                                    [
                                        precios === "3" ? (
                                            <h3>Lujoso</h3>
                                        ) : (
                                            [
                                                precios === "4" && (
                                                    <h3>Magnífico</h3>
                                                ),
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                    ]
                )}

                {tamanios === "todos-tamaños" ? (
                    <h3>De cualquier tamaño</h3>
                ) : (
                    <h3>{`De tamaño ${tamanios}`}</h3>
                )}
            </div>
        </div>
    );
}
