import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, FormControl, ControlLabel ,Form} from "react-bootstrap";

function App() {
  return (
    <div className="App" >
      <img src="main.png" width='500px' height='100px' ></img>
      <h2>CONSULTA TU CENTRO DE VACUNACION</h2>
      <div className="Form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>

        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  </div>
    </div>
  );
}

export default App;
