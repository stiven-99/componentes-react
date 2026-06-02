import { useState } from "react";
//1. crear componente
export const MensajeTexto=()=> {

    //2. crear el estado del componente
   const [mensaje , setEstado] = useState("estado inicial");
   //3. crear la funcion que modifica el estado
   const escribirLetar=(evento)=>{
    let letras = evento.target.value;
    setEstado(letras);
   }
    return(
        //4. usar los elementos de js
        <div>
            <input type="text" onInput={escribirLetar}/>
            <label>{mensaje}</label>
        </div>
    );


};