import React from 'react'

import './styles/App.css'

import Header from './components/Header'
import HotelCarta from './components/HotelCarta'

export default function  App () {

  return (
    <>
        <div className="up-container">
          <Header />
        </div>

        <div className="down-container">
          <HotelCarta/>
        </div>
    </>    
  )
} 
