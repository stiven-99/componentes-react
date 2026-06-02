/*
1. crear el componente
2. el estado incial
3. crear la funcion
4. usar los elementos en html
*/

import { useState } from "react"

export const Saludo = ()=>{

    const [mensajeSaludo , setSaludo] = useState("...")

    let hacerSaludo = ()=>{
        let mensajeSaludo = "hola cliente";
        setSaludo (mensajeSaludo);
        
    }
    return(
        <div>
        <button onClick={hacerSaludo}> hacer mensaje </button>
        <label>{mensajeSaludo}</label>

        </div>
    )
}