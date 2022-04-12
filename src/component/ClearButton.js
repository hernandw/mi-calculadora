import '../css/clearButton.css'
import React from 'react';
const clearButton = (props) => {

  return (
    <div className="clear-button" onClick={props.manejarClear}>{props.children}</div>
      ) 
      
};
export default clearButton;
