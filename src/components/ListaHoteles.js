import React from "react";

import HotelCarta from "../components/HotelCarta";
import NoDisponible from "../components/NoDisponible";

import { hotelsData } from "../data";

import { fechaLenguajeNatural, transformacionPrecio } from "../utils";

export default function ListaHoteles({
    fechaIngreso,
    fechaSalida,
    paises,
    precios,
    tamanios,
    listaHoteles,
}) {
    if (
        (fechaIngreso === "" || fechaSalida === "") &&
        paises === "todos-paises" &&
        precios === "todos-precios" &&
        tamanios === "todos-tamaños" &&
        listaHoteles === hotelsData
    ) {
        return listaHoteles.map((hotel) => {
            return (
                <HotelCarta
                    key={hotel.slug}
                    imagen={hotel.photo}
                    nombre={hotel.name}
                    fechaInicio={fechaLenguajeNatural(hotel.availabilityFrom)}
                    fechaSalida={fechaLenguajeNatural(hotel.availabilityTo)}
                    descripcion={hotel.description}
                    ciudad={hotel.city}
                    pais={hotel.country}
                    habitaciones={hotel.rooms}
                    precio={transformacionPrecio(hotel.price)}
                />
            );
        });
    } else {
        let listaModificada = listaHoteles.filter((hotel) => {
            let fechaIngresoMilisegundos =
                new Date(fechaIngreso).valueOf() + 86400000 - 68400000; // 12 am ( comienzo del dia)
            let fechaSalidaMilisegundos =
                new Date(fechaSalida).valueOf() + 86400000 + 86399000; // 23:59:59 final del dia

            if (
                (hotel.availabilityFrom >= fechaIngresoMilisegundos ||
                    fechaIngreso === "") &&
                (hotel.availabilityTo <= fechaSalidaMilisegundos ||
                    fechaSalida === "")
            ) {
                if (hotel.country === paises || paises === "todos-paises") {
                    if (
                        hotel.price.toString() === precios ||
                        precios === "todos-precios"
                    ) {
                        if (tamanios === "todos-tamaños") {
                            return hotel;
                        } else {
                            if (hotel.rooms <= 10 && tamanios === "pequeño") {
                                return hotel;
                            } else if (
                                hotel.rooms > 10 &&
                                hotel.rooms <= 20 &&
                                tamanios === "mediano"
                            ) {
                                return hotel;
                            } else if (
                                hotel.rooms > 20 &&
                                tamanios === "grande"
                            ) {
                                return hotel;
                            }
                        }
                    }
                }
            }
            return "";
        });

        //Si la lista Modificada presenta o no hoteles :

        let listaModificadaUso = listaModificada;

        if (listaModificadaUso.length > 0) {
            return listaModificadaUso.map((hotel) => {
                return (
                    <HotelCarta
                        key={hotel.slug}
                        imagen={hotel.photo}
                        nombre={hotel.name}
                        fechaInicio={fechaLenguajeNatural(
                            hotel.availabilityFrom
                        )}
                        fechaSalida={fechaLenguajeNatural(hotel.availabilityTo)}
                        descripcion={hotel.description}
                        ciudad={hotel.city}
                        pais={hotel.country}
                        habitaciones={hotel.rooms}
                        precio={transformacionPrecio(hotel.price)}
                    />
                );
            });
        }
        // Si no hay hoteles con los filtros seleccionados retorna la pagina de No Disponible
        else {
            return <NoDisponible />;
        }
    }
}
