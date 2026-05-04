import { useState } from 'react'
import './App.css'


function App() {
  return (
  //? Calculadora
  <div className="App">
    <div className="contenedor">
      <div className="calculadora-pantalla">

        </div>
      <div className="contenedor-botones">
        <div className="fila">
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">-</button>
        </div>
        <div className="fila">
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">*</button>
        </div>
        <div className="fila">
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">/</button>
        </div>
        <div className="fila">
          <button className="button">0</button>
          <button className="button">.</button>
          <button className="button">+</button>
        </div>
          <button className="button-limpiar">C</button>
      </div>
    </div>
  </div>

  )
}

export default App
