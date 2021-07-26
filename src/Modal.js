import {Modal,Container,Row} from 'react-bootstrap';

function ModalInfo({ toggle , modal,nombre,edad,lugar,fecha}) {
    

  return (
    <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Informacion de Vacunacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
            <Row>
                <span><strong>Nombre: </strong> {nombre}</span>
                
            </Row>
            <Row>
                <span><strong>Edad: </strong> {edad}</span>
                <span><strong>Lugar: </strong> {lugar}</span>
                <span><strong>Fecha: </strong> {fecha}</span>
            </Row>
        </Container>
            
            </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
  );
}

export default ModalInfo;
