import "./App.css";
import Boton from "./component/Boton";
import Screen from "./component/Screen";
import ClearButton from "./component/ClearButton";
import { useState } from 'react';
import { evaluate } from 'mathjs'
import React  from 'react';


function App() {
  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val)
  }

  const calcResult = () =>{
    if(input) {
      setInput(evaluate(input))
    }else{
      alert('Por favor ingresar valores para realizar calculos')
    }
  }

  
  return (
    <div className="App">
      <div className="container">
        
        <div className="container-calc">
          <Screen 
          input={input}/>
          <div className="file">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className="file">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className="file">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className="file">
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={calcResult}>=</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className="file">
            <ClearButton manejarClear={()=> setInput('')}>Clear</ClearButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
