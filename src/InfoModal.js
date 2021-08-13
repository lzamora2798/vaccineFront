import {Modal} from 'react-bootstrap';

function ModalS({ toggle , modal}) {
    

  return (
    <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Informacion de Vacunacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
                <span><strong>No existe informacion para esa cedula </strong></span>
                
            </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
  );
}

export default ModalS;
