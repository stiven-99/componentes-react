import logo from './logo.svg';
import './App.css';
import CardUsuario from './UsuarioComponentes/UsuarioCard';
import TarjetaProducto from './UsuarioComponentes/Componente1';
import {FormularioNewsletter} from './UsuarioComponentes/Componente2'
import ListaBotones from './UsuarioComponentes/Componente3';
import TarjetaTailwind from './UsuarioComponentes/Componente4';
import SelectorGenero  from './UsuarioComponentes/Componente5';

function App() {
  return (
    <div>
    <CardUsuario/>
    <TarjetaProducto/>
    <FormularioNewsletter/>
    <div>
    <p><ListaBotones/></p>
    </div>
    <TarjetaTailwind/>

    <p> <SelectorGenero/> </p>
    </div>
    
  );
}

export default App;