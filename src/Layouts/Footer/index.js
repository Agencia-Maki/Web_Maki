import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './scss/footer.scss'


import logo from '../../assets/images/logoWhite.png'

const Footer = () => {
  return (
    <>
      <Row className="footer-container">
        <Col xs={12} sm={3}>
          <div className="maki-box-footer">
            <div className="footer-brand-container">
              <img className='logo-footer' src={logo} alt="No Cargo Imagen" />
              <p>
                @2022 Agencia MAKI
                todos los derechos reservados
              </p>
            </div>
          </div>

        </Col>
        <Col xs={12} sm={3} className="footer-column-container">
          <div className="footer-apart-container">
            <p>Urb. Felipe Mz. A lte. 1 Cerro Colorado<br />
              <strong>+51 987 652 464</strong><br />
              <strong>ventas@agenciamaki.com</strong>
            </p>
          </div>
        </Col>
        <Col xs={12} sm={3} className="footer-column-container">
          <div className="footer-apart-container">
            <p>
              <strong>Horarios de atención</strong> <br />
              Lunes a Viernes:  8:00 am - 6:00 pm<br />
              Sabados:  8:00 am - 2:00 pm
            </p>
          </div>
        </Col>
        <Col xs={12} sm={3} className="footer-column-container">
          <div className="footer-apart-container">
            <p className="cursor-pointer">¿Quieres trabajar con nosotros? <br />
              <strong>DÉJANOS UN MENSAJE</strong> <br />
              <small className="secondary-small-text"> no te preocupes es gratis! </small>🤗
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Footer