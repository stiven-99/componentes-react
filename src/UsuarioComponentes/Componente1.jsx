import '../EstilosCss/Componente1.css';

const TarjetaProducto = () => {
 
    let titulo = "Cool Chair";
    let precio =  "100";
    let descripcion =  "This is a chair.";
 

  return (
    <div className="tarjeta_producto">
      <div className="tarjeta_producto_hijo">
        <p>{descripcion}</p>
      </div>
      <h4 className="tarjeta_producto_titulo">{titulo}</h4>
      <strong className="tarjeta_producto_precio">${precio}</strong>
    </div>
  );
};

export default TarjetaProducto