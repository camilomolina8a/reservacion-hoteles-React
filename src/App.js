import React from 'react'
import { useState } from 'react'

import './styles/App.css'

import HotelCarta from './components/HotelCarta'
import NoDisponible from './components/NoDisponible'

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

  const handlerFechaSalida = (e) => {
    setFechaSalida(e.target.value)
  }

  const handlerSeleccionarPais = (e) => {
    setPaises(e.target.value); 
  }

  const handlerSeleccionarPrecio = (e) => {
    setPrecios(e.target.value); 
  }

  const handlerSeleccionarTamanio = (e) => {
    setTamanios(e.target.value); 
  }

  const limpiarDatos = () => {
    setListaHoteles(hotelsData)
    setFechaIngreso("")
    setFechaSalida("")
    setPaises("todos-paises")
    setPrecios("todos-precios")
    setTamanios("todos-tamaños")
  }
  // ========================= FUNCIONES VARIAS ================================

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

  const fechaLenguajeNatural= (fecha) => {

    if (typeof(fecha) === 'string') {
      let hoy = new Date(fecha);
      let diaDeLaSeamana = hoy.getDay();
      let nombreDiaDeLaSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
      let dia = hoy.getDate() ;
      let mes = hoy.getMonth();
      let nombreMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
      let anio = hoy.getFullYear();

      return `${nombreDiaDeLaSemana[diaDeLaSeamana]}, ${dia + 1} de ${nombreMes[mes]} de ${anio}`
    }
    else {
      let hoy = new Date(fecha);
      let diaDeLaSeamana = hoy.getDay();
      let nombreDiaDeLaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
      let dia = hoy.getDate() ;
      let mes = hoy.getMonth();
      let nombreMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
      let anio = hoy.getFullYear();
      return `${nombreDiaDeLaSemana[diaDeLaSeamana]}, ${dia} de ${nombreMes[mes]} de ${anio}`
    }
  }

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
// ============================================================================ 

  
  
  const Header =  () => {
            
        // Funcion para poner la fecha en el DOM en forma de lenguaje natural
      
          const fechaEnLenguajeNaturalEnHeader = () => {
              if (fechaIngreso === "" || fechaSalida === ""){
                  return <h3>En cualquier fecha</h3>
              }
              else{
                  return <h3>{`Desde el ${fechaLenguajeNatural(fechaIngreso)} hasta el ${fechaLenguajeNatural(fechaSalida)}.`}</h3>
              }
          }
        // ################################################
      
      
          return (
              
              <div className='header-container'>
      
                  <div className='header-container__up'>
                      <h1>Hoteles</h1>
      
                      {fechaEnLenguajeNaturalEnHeader()}
      
                      { paises==="todos-paises" ? <h3>En cualquier país</h3> : <h3>{`En ${paises}`}</h3>}
      
                      { precios==="todos-precios" 
                          ? <h3>De cualquier precio</h3> 
                          : [ precios==="1" 
                              ? <h3>Económico</h3> 
                              : [ precios==="2" 
                                  ? <h3>Confort</h3> 
                                  : [ precios==="3"
                                      ? <h3>Lujoso</h3>
                                      : [ precios==="4" && <h3>Magnífico</h3>
                                          ]]]] 
                      } 
                          
                      
                      {tamanios==="todos-tamaños" ? <h3>De cualquier tamaño</h3> : <h3>{`De tamaño ${tamanios}`}</h3>}
                  </div>

              </div>  
          )
  } // cierre componente Header

  const Filtros = () => {

    return (

        <div className='header-container__down'>
      
            <div className="fecha-ingreso-container">
                <label for="fecha-ingreso" class="etiqueta-fecha-ingreso">Desde:</label>
                <input value={fechaIngreso} min={fechaDeHoyFormateadaAnioMesDia()} type="date" id="fecha-ingreso" class="fecha-ingreso" onChange={handlerFechaIngreso}/>
            </div>
                                
            <div className="fecha-salida-container">
                <label for="fecha-salida" class="etiqueta-fecha-salida">Hasta:</label>
                <input value={fechaSalida} min={fechaIngreso === "" ? fechaDeHoyFormateadaAnioMesDia() : fechaIngreso} type="date" id="fecha-salida" class="fecha-salida" onChange={handlerFechaSalida}/>
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
    )
  } // cierre componente Filtros
  

  const ListaHoteles =  () => {


    if ( (fechaIngreso === "" || fechaSalida === "")  && paises === "todos-paises" && precios === "todos-precios" && tamanios === "todos-tamaños" && listaHoteles === hotelsData) {
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

      let listaModificada = listaHoteles.filter( (hotel) => {

        let fechaIngresoMilisegundos = new Date(fechaIngreso).valueOf() + 86400000 - 68400000 // 12 am ( comienzo del dia)
        let fechaSalidaMilisegundos = new Date(fechaSalida).valueOf() + 86400000 + 86399000 // 23:59:59 final del dia

        if ( ( hotel.availabilityFrom >= fechaIngresoMilisegundos || fechaIngreso === "")  && (hotel.availabilityTo <= fechaSalidaMilisegundos || fechaSalida === "") ) {

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
        
      }
    }) // cierre listaModificada

      //Si la lista Modificada presenta o no hoteles :

      if (listaModificada.length > 0 ) {
        return ( 

          listaModificada.map( (hotel) => {
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
      // Si no hay hoteles con los filtros seleccionados retorna la pagina de No Disponible
      else {
        return <NoDisponible/>
      }      

    }
  } // cierre componente ListaHoteles




  // ################### Return App ###################

  return (
    <>
        <div className="up-container">
          <Header />
          <Filtros/>
        </div>

        <div className="down-container">
          <ListaHoteles />
        </div>
    </>    
  )
    } 
