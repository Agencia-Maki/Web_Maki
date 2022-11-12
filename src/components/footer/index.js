import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './scss/footer.scss'

const Footer = () => {
  return (
    <>
    <Container
      // className='footer'
      // className="web-content"
      style={{ 
      color: "#eeeeee",
      backgroundColor: "#6500FE",
      display: "absolute",
      zIndex: "1000"
    }}
    >
      <Row className="justify-content-md-center">
        <Col xs={2} className="center" style={{height: "200px"}}>
          <text>
            <p style={{lineHeight: "1.5"}}>@2022 MAKI<br/>
            Todos los derechos</p>
          </text>
        </Col>
        <Col xs={4} className="center">
          <text>
            <p style={{lineHeight: "2"}}>Urb. Felipe Mz. A lte. 1 Cerro Colorado<br/>
            <strong>+51 987 652 464</strong><br/>
            <strong>ventas@agenciamaki.com</strong></p>
          </text>
        </Col>
        <Col xs={3} className="center">
          <text>
            <p style={{lineHeight: "2"}}><strong>Horarios de atencion</strong><br/>
            Lunes a Viernes:  8:00 am - 6:00 pm<br/>
            Sabados:  8:00 am - 2:00 pm</p>
          </text>
        </Col>
        <Col xs={3} className="center">
          <text>
            <p style={{lineHeight: "1.5"}}>¿Quieres trabajar con nosotros?<br/>
            <strong>DÉJANOS UN MENSAJE</strong></p>
          </text>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Footer