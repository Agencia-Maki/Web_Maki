import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ContactModal = (props) => {
  const { showModal } = props
  const { handleClose } = props

  return (
    <>
      <Modal 
        show={showModal} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Trabajemos Juntos 🤗</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enviando mensaje</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar Mensaje
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ContactModal