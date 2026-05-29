import '../EstilosCss/Componente4.css';

const TarjetaTailwind = () => {
    let titulo = "Tailwind Card"
    let descripcion = "Lotem ipsum dolor sit amet, consectetur adispisicing elit. Nunc felis ligula"
  return (
    <div className="tailwind-card">
      <div className="tailwind-caja-azul"></div>
      <h3 className="tailwind-titulo">{titulo}</h3>
      <p className="tailwind-cuerpo">{descripcion}</p>
      <button className="tailwind-boton">READ MORE</button>
    </div>
  );
};

export default TarjetaTailwind