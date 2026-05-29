import '../EstilosCss/Componente3.css';

const ListaBotones = () => {

    const listaBotones = [
  { id: 1, texto: "Hover Me", subtexto: "Lorem Ipsum", color: "#f43f5e" },
  { id: 2, texto: "Hover Me", subtexto: "Lorem Ipsum", color: "#3b82f6" },
  { id: 3, texto: "Hover Me", subtexto: "Lorem Ipsum", color: "#22c55e" }
];

  return (
    <div className='marco-gris'> 
    <div className="botones">
      {listaBotones.map((boton) => (
        <button 
          key={boton.id} 
          className="btn-sp"
          style={{ backgroundColor: boton.color }}
        >
          <div className="btn-titulo">{boton.texto}</div>
          <div className="btn-subtitulo">{boton.subtexto}</div>
        </button>
      ))}
    </div>
    </div>
  );
};

export default ListaBotones