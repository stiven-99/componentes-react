import '../EstilosCss/Componente2.css';

export const FormularioNewsletter = () => {
  
  return (
    <div className="newsletter-contenedor">
      <h2 className="newsletter-encabezado">NEWSLETTER</h2>
      <p className="newsletter-texto">
        Get existential crisis delivered straight to your inbox every week.
      </p>
      <input 
        type="email" 
        placeholder="Your life" 
        className="newsletter-insertar" 
      />
      <button className="newsletter-boton">
        CLICK ME
      </button>
    </div>
  );
};