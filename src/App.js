
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Formulario from './Formulario'
function App() {
  return (
    <div className="App" >
      <img src="main.png" width='500px' height='100px' alt='logo' ></img>
      <h2>CONSULTA TU CENTRO DE VACUNACION</h2>
      <Formulario></Formulario>
      <span>Esto no es informacion oficial, es solo un proyecto</span>
    </div>
  );
}

export default App;
