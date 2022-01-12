import React from "react";
import { useState } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import Filtros from "./components/Filtros";
import ListaHoteles from "./components/ListaHoteles";

import { hotelsData } from "./data";

export default function App() {
    const [listaHoteles, setListaHoteles] = useState(hotelsData);

    const [fechaIngreso, setFechaIngreso] = useState("");

    const [fechaSalida, setFechaSalida] = useState("");

    const [paises, setPaises] = useState("todos-paises");

    const [precios, setPrecios] = useState("todos-precios");

    const [tamanios, setTamanios] = useState("todos-tamaños");

    const handlerFechaIngreso = (e) => {
        setFechaIngreso(e.target.value);
    };

    const handlerFechaSalida = (e) => {
        setFechaSalida(e.target.value);
    };

    const handlerSeleccionarPais = (e) => {
        setPaises(e.target.value);
    };

    const handlerSeleccionarPrecio = (e) => {
        setPrecios(e.target.value);
    };

    const handlerSeleccionarTamanio = (e) => {
        setTamanios(e.target.value);
    };

    const limpiarDatos = () => {
        setListaHoteles(hotelsData);
        setFechaIngreso("");
        setFechaSalida("");
        setPaises("todos-paises");
        setPrecios("todos-precios");
        setTamanios("todos-tamaños");
    };

    // ################### Return App ###################

    return (
        <>
            <div className="up-container">
                <Header
                    fechaIngreso={fechaIngreso}
                    fechaSalida={fechaSalida}
                    paises={paises}
                    precios={precios}
                    tamanios={tamanios}
                />
                <Filtros
                    fechaIngreso={fechaIngreso}
                    handlerFechaIngreso={handlerFechaIngreso}
                    fechaSalida={fechaSalida}
                    handlerFechaSalida={handlerFechaSalida}
                    paises={paises}
                    handlerSeleccionarPais={handlerSeleccionarPais}
                    precios={precios}
                    handlerSeleccionarPrecio={handlerSeleccionarPrecio}
                    handlerSeleccionarTamanio={handlerSeleccionarTamanio}
                    tamanios={tamanios}
                    limpiarDatos={limpiarDatos}
                />
            </div>

            <div className="down-container">
                <ListaHoteles
                    fechaIngreso={fechaIngreso}
                    fechaSalida={fechaSalida}
                    paises={paises}
                    precios={precios}
                    tamanios={tamanios}
                    listaHoteles={listaHoteles}
                />
            </div>
        </>
    );
}
