import React, { useState } from 'react';
import '../EstilosCss/Componente5.css';


const opcionesGenero = [
  { id: 'm', icono: '♂️', color: '#3b82f6' },
  { id: 'f', icono: '♀️', color: '#ec4899' },
  { id: 'x', icono: '🔀', color: '#a855f7' },
  { id: 'q', icono: '❔', color: '#9ca3af' }
];

const SelectorGenero = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div className="gender-container">
      <p className="gender-titulo">PLEASE SELECT YOUR GENDER</p>
      <div className="gender-fila">
        {opcionesGenero.map((genero) => {
          const activo = seleccionado === genero.id;
          return (
            <button
              key={genero.id}
              onClick={() => setSeleccionado(genero.id)}
              className={`gender-btn ${activo ? 'activo' : ''}`}
              style={{
                border: activo ? `3px solid ${genero.color}` : '1px solid #ccc'
              }}
            >
              {genero.icono}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectorGenero 