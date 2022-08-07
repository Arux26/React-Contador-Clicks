import React from "react";
import "../stylesheets/Boton.css"

//COMPONENTE DE CLASE
class Boton extends React.Component {
  render() {
    return(
      <button 
        className={this.props.esBotonDeClick ? "boton-click" : "boton-reiniciar" } /* si es ?(true) se va asignar boton-click si es : (false) boton-reiniciar */
        onClick={this.props.manejarClick}>
        {this.props.texto}
      </button>
    );
  }
}
export default Boton;

//COMPONENTE FUNCIONAL
/* function Boton({ texto, esBotonDeClick, manejarClick }){
  return(
    <button 
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar" }  //si es ?(true) se va asignar boton-click si es : (false) boton-reiniciar 
      onClick={manejarClick}>
      {texto}
    </button>
  );
} */

