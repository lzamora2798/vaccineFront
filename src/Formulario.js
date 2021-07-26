
import { useState } from 'react';
import ModalInfo from './Modal';
function Formulario() {

    const[cedula,setCedula] = useState('');
    const [modal, setModal] = useState(false);
    const [data, setData] = useState('');
    const toggle = () => setModal(!modal);
    const onSubmit = async e => {
        e.preventDefault();
        const respuesta = await fetch(`http://localhost:8000/person/id/${cedula}`, { 
            method: 'GET'}
        )
        .then(response => { 
            return response.json() 
        })
        .catch(error => console.log(error));
        toggle();
        setData(respuesta[0]);
        console.log(respuesta);
        
    }
    return (
    <div className="Form">
      <form onSubmit={onSubmit}>
                <input
                    placeholder="Ingrese nombre de usuario"
                    className="form-control mb-2"
                    name="usuario"
                    onChange={e => setCedula(e.target.value)}
                ></input>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
            <ModalInfo  toggle={toggle} 
                        modal={modal} 
                        nombre = {data.nombre}
                        edad = {data.edad}
                        lugar = {data.lugar}
                        fecha = {data.fecha_vac}

            ></ModalInfo>
      </div>
  );
}

export default Formulario;
