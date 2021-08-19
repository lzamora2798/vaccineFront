
import { useState } from 'react';
import { useEffect } from 'react';
import ModalInfo from './Modal';
import ModalS from './InfoModal';
const {REACT_APP_URL_API} = process.env;

function Formulario() {

    useEffect(()=>{
        console.log(REACT_APP_URL_API)
    })

    const[cedula,setCedula] = useState('');
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [data, setData] = useState('');
    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    const onSubmit = async e => {
        e.preventDefault();
        const respuesta = await fetch(`${REACT_APP_URL_API}/person/id/${cedula}`, { 
            method: 'GET'}
        )
        .then(response => { 
            return response.json() 
        })
        .catch(error => console.log(error));
        console.log(respuesta)
        if (respuesta.length >0 ){
            toggle();
            setData(respuesta[0]);
            console.log(respuesta);
        }else{
            toggle2();
        }
        
        
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
            <ModalS  toggle={toggle2} 
                        modal={modal2} 
                       
            ></ModalS>
      </div>
  );
}

export default Formulario;
