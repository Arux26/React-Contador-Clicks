import React from 'react';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/contador.jsx';
import LogofreeCodeCamp from "./imagenes/freecodecamp-logo.png"
//import React, { useState } from "react"; // useState es un Hook que te permite agregarle un ESTADO a un COMPONENTE FUNCIONAL

//COMPONENTE DE CLASE
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this); //bind te permite asociar el significado actual de this en el constructor con el significado de this
    this.reiniciarContador = this.reiniciarContador.bind(this); // en los metodos, en este caso en manejarClick y reiniciarContador
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 })); //tomo del objeto numClicks y le sumo 1 a la propiedad por cada click q se haga
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 }); // tomo numClicks con destructuring y reinicio la propiedad a 0
  }

  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img 
            className="freecodecamp-logo" 
            src={LogofreeCodeCamp} 
            alt ="Logo-de-freecodecamp" />
        </div>
        <div className="contenedor-contador">
          <Contador
            numClicks={this.state.numClicks} />
          <Boton 
            texto="Click"
            esBotonDeClick={true}
            manejarClick={this.manejarClick} />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador} />
        </div>
      </div>
    );
  }

}
export default App;

//COMPONENTE FUNCIONAL
/* function App() {

  const [numClicks, setNumclicks] = useState(0); //es una convención usar la palabra SET q significa como asignar seguida del nombre del estado
                                    //si el estado fuera color la funcion seria setColor (A useState le pasamos 0 porque queremos que arranque en 0)
  const manejarClick = () => {
    setNumclicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumclicks(0); 
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          className="freecodecamp-logo" 
          src={LogofreeCodeCamp} 
          alt ="Logo-de-freecodecamp" />
      </div>
      <div className="contenedor-contador">
        <Contador
          numClicks={numClicks} />
        <Boton 
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}
 */

