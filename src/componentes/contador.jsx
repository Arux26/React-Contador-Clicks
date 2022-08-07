import React from "react";
import "../stylesheets/Contador.css"

    //COMPONENTE DE CLASE
class Contador extends React.Component {
  render() {
    return(
      <div className="contador">
        {this.props.numClicks}
      </div>
    )
  }
}
    //COMPONENTE FUNCIONAL
/* function Contador({ numClicks }) {
  return(
    <div className="contador">
      {numClicks}
    </div>
  )
} */
export default Contador;