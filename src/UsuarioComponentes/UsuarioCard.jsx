import React from 'react';
import UsuarioTabla from './UsuarioTabla';
import '../EstilosCss/UsuarioEstilos.css';

const CardUsuario = () => {
    let nombreUsuario = "Stiven";
    let apellidoUsuario = "Benitez";
    let celularUsuario = "3214279727";

    return (
        <div className='contenedor-principal'>

            <div className='Contenedor-usuario'>
                <p className='info-tex'>Nombre usuario: <span className='info-des'>{nombreUsuario}</span></p>
                <p className='info-tex'>Apellido usuario: <span className='info-des'>{apellidoUsuario}</span></p>
                <p className='info-tex'>Celular usuario: <span className='info-des'>{celularUsuario}</span></p>
                <button className='Ver-mas'>Ver mas</button>
            </div>

         
            <UsuarioTabla />
        </div>
    );
}
export default CardUsuario;