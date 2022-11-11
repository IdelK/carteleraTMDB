
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' ;
import {App} from "./App";

const compUno = ReactDOM.createRoot(document.getElementById('divUno'));
compUno.render(<App />);


/*
function Componente({titulo, contenido} )
{
  
  return(
   <div>
      <h1>{titulo}</h1>
      <h1>{contenido}</h1>
   </div>
  );
}
const compUno = ReactDOM.createRoot(document.getElementById('divUno'));
compUno.render(<Componente titulo ="hola" contenido="hola desde react" />);
*/