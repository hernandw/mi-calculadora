import '../css/Boton.css'
import React  from 'react';

function Boton(props) {
const isOperator = (valor => {
    return isNaN(valor) && (valor !==".") && (valor !=="=");
});

  return <div className={`container-boton ${isOperator(props.children) ? 'operator' : null}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)} >{props.children}</div>
    
}


export default Boton;