import React from 'react'
import { useState } from 'react'

import './styles/App.css'

import HotelCarta from './components/HotelCarta'
import NotFound from './components/NotFound'

import  {hotelsData}  from './data'

export default function  App () {

  const [listaHoteles,setListaHoteles] = useState(hotelsData);

  const [fechaIngreso, setFechaIngreso] = useState("");

  const [fechaSalida, setFechaSalida] = useState("");

  const [paises,setPaises] = useState("todos-paises");

  const [precios,setPrecios] = useState("todos-precios");

  const [tamanios,setTamanios] = useState("todos-tamaños");

  const handlerFechaIngreso = (e) => {
    setFechaIngreso(e.target.value)
  }
    //console.log(fechaIngreso)

  const handlerFechaSalida = (e) => {
    setFechaSalida(e.target.value)
  }
    //console.log(fechaSalida)

  const handlerSeleccionarPais = (e) => {
    setPaises(e.target.value); 
  }
    //console.log(paises)

  const handlerSeleccionarPrecio = (e) => {
    setPrecios(e.target.value); 
  }
    //console.log(precios)

  const handlerSeleccionarTamanio = (e) => {
    setTamanios(e.target.value); 
  }
    //console.log(tamanios)

  const limpiarDatos = () => {
    setListaHoteles(hotelsData)
    setFechaIngreso("")
    setFechaSalida("")
    setPaises("todos-paises")
    setPrecios("todos-precios")
    setTamanios("todos-tamaños")
  }

  // ##########################################################################

  const transformacionPrecio = (numero)  => {
    if (numero === 1) {
      return "$"
    }
    else if (numero === 2) {
      return "$ $"
    }
    else if (numero === 3) {
      return "$ $ $"
    }
    else if (numero === 4) {
      return "$ $ $ $"
    }
  }

// Funcion para poner una fecha y formatearla a lenguaje natural
  const fechaLenguajeNatural= (fecha) => {
    let today_ms = new Date(fecha)
    let hoy = new Date(today_ms);
    let diaDeLaSeamana = hoy.getDay();
    let nombreDiaDeLaSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
    let dia = hoy.getDate() + 1;
    let mes = hoy.getMonth();
    let nombreMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    let anio = hoy.getFullYear();

    return `${nombreDiaDeLaSemana[diaDeLaSeamana]}, ${dia} de ${nombreMes[mes]} de ${anio}`
  }
    
// ##########################################################################

  function Header() {


  // Funcion para poder formatear la fecha de Hoy a año-mes-dia y setear la fecha minima de ingreso en el input de tipo date
    const fechaDeHoyFormateadaAnioMesDia = () => {
        let hoy = new Date();
        let dia = hoy.getDate();
        dia = ('0' + dia).slice(-2);
        let mes = hoy.getMonth() + 1;
        mes = ('0' + mes).slice(-2);
        let anio = hoy.getFullYear();
        let fechaHoyFormateadaAnioMesDia = `${anio}-${mes}-${dia}`
        return fechaHoyFormateadaAnioMesDia
    }


  // Funcion para poner la fecha en el DOM en forma de lenguaje natural

    const fechaEnLenguajeNaturalEnHeader = () => {
        if (fechaIngreso === "" || fechaSalida === ""){
            return <h3>En cualquier fecha</h3>
        }
        else{
            return <h3>{`Desde el ${fechaLenguajeNatural(fechaIngreso)} hasta el ${fechaLenguajeNatural(fechaSalida)}.`}</h3>
        }
    }
  // ##########################################################################


    return (
        
        <div className='header-container'>

            <div className='header-container__up'>
                <h1>Hoteles</h1>

                {fechaEnLenguajeNaturalEnHeader()}

                { paises==="todos-paises" ? <h3>En cualquier país</h3> : <h3>{`En ${paises}`}</h3>}

                { precios==="todos-precios" 
                    ? <h3>De cualquier precio</h3> 
                    : [ precios==="1" 
                        ? <h3>De precio muy barato</h3> 
                        : [ precios==="2" 
                            ? <h3>De precio barato</h3> 
                            : [ precios==="3"
                                ? <h3>De precio costoso</h3>
                                : [ precios==="4" && <h3>De precio muy costoso</h3>
                                    ]]]] 
                } 
                    
                
                {tamanios==="todos-tamaños" ? <h3>De cualquier tamaño</h3> : <h3>{`De tamaño ${tamanios}`}</h3>}
            </div>

            <div className='header-container__down'>

                <div className="fecha-ingreso-container">
                    <label for="fecha-ingreso" class="etiqueta-fecha-ingreso">Desde:</label>
                    <input value={fechaIngreso} min={fechaDeHoyFormateadaAnioMesDia()} type="date" id="fecha-ingreso" class="fecha-ingreso" onChange={handlerFechaIngreso}/>
                </div>
                                    
                <div className="fecha-salida-container">
                    <label for="fecha-salida" class="etiqueta-fecha-salida">Hasta:</label>
                    <input value={fechaSalida} min={fechaDeHoyFormateadaAnioMesDia()} type="date" id="fecha-salida" class="fecha-salida" onChange={handlerFechaSalida}/>
                </div>

                <select value={paises} name="paises" id="" onChange={handlerSeleccionarPais}>
                    <option value="todos-paises">Todos los países</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                </select>

                <select value={precios} name="precios" id="" onChange={handlerSeleccionarPrecio}>
                    <option value="todos-precios">Todos los precios</option>
                    <option value="1">$</option>
                    <option value="2">$  $</option>
                    <option value="3">$  $  $</option>
                    <option value="4">$  $  $  $</option>
                </select>

                <select value={tamanios} name="tamanios" id="" onChange={handlerSeleccionarTamanio}>
                    <option value="todos-tamaños">Cualquier tamaño</option>
                    <option value="pequeño">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>

                <button type='button' className="button" onClick={limpiarDatos}>LIMPIAR</button>

            </div>
            
        </div>
        
    )
  }


  const hoteles =  () => {

    if (fechaIngreso === "" && fechaSalida === "" && paises === "todos-paises" && precios === "todos-precios" && tamanios === "todos-tamaños" && listaHoteles === hotelsData) {
      return ( 

        listaHoteles.map( (hotel) => {
          return (
            <HotelCarta   key = {hotel.slug} 
            imagen = {hotel.photo}
            nombre = {hotel.name}
            fechaInicio = {fechaLenguajeNatural(hotel.availabilityFrom)}
            fechaSalida = {fechaLenguajeNatural(hotel.availabilityTo)}
            descripcion = {hotel.description}
            ciudad = {hotel.city}
            pais = {hotel.country}
            habitaciones = {hotel.rooms}
            precio = {transformacionPrecio(hotel.price)}          
            />
          )
        })
      )
    }

    else {
      
      console.log("Antes")
      console.log("")

      let listaModificada = listaHoteles.filter( (hotel) => {


        if ( hotel.country === paises || paises === "todos-paises" ) {
          if (hotel.price.toString() === precios || precios === "todos-precios"){
            if ( tamanios === "todos-tamaños"){
              return hotel
            }
            else{
              if (hotel.rooms <= 10 && tamanios === "pequeño"){
                return hotel
              }
              else if (hotel.rooms > 10 && hotel.rooms <= 20 && tamanios === "mediano"){
                return hotel
              }
              else if (hotel.rooms > 20 && tamanios === "grande") {
                return hotel
              }
            }
          }
        }
      }) // este cierra la variable listaModificada


      if (listaModificada.length > 0 ) {
        //return <h1>SI HAY HOTELES</h1>
        console.log("Hay", listaModificada.length, "hoteles disponibles")
        // console.log(listaModificada)
      }
      else {
        return <NotFound></NotFound>
        //console.log("No Hay Hoteles Disponibles!!!")
      }      

      

      console.log("")  
      console.log("Despues")
    
    }//llave cierre del else

    
  }


  // ##########################################################################

  return (
    <>
        <div className="up-container">
          <Header />
        </div>

        <div className="down-container">
          {hoteles()}
        </div>
    </>    
  )
} 
