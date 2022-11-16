import React from 'react'
import Card from '../../components/Card/Card'

import { Button, Container, Row, Col } from 'react-bootstrap';

import '../../styles/style.scss'

import './style.css'

const Index = () => {
  return (
    <>
    <Container fluid style={{backgroundColor: "white"}}>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <div className='titleSecondary' style={{padding: "0"}}>
            <strong>
              <p style={{color: "#6500FE",lineHeight: "1"}}>Agenda una<br/> consulta gratuita
              </p>
              <p style={{lineHeight: "1", marginTop: "-15px"}}>
                con uno de nuestros <br/>colaboradores
              </p>
            </strong>
          </div>

          <Row className={"mt-5"}>
            <Col>
              <div className='content'>
                <p>
                  Urb Real Felipe Mz. A Lte. 1 Cerro Colorado<br/>
                  +51 932 678 688<br/>
                  <strong>ventas@agenciamaki.com</strong>
                </p>
              </div>
            </Col>
            <Col>
              <div className='content'>
                <p>
                  <strong>Horarios de Atención</strong><br/>
                  +51 932 678 688<br/>
                  ventas@agenciamaki.com
                </p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={4}>
          {/* <Card> */}
          <div>
            <p>
              <strong>Déjanos un mensaje</strong>
            </p>
            <div className='form'>
              <div className='box'> 
                <input type={"text"} id={"Nombre"}/>
                <label>Nombre</label>
              </div>
              <div className='box'>
                <input type={"text"} id={"Teléfono"}/>
                <label>Teléfono</label>
              </div>
              <div className='box'>
                <input type={"text"} id={"Correo"}/>
                <label>Correo</label>
              </div>
              <div className='box'>
                <input type={"text"} id={"Servicio que te interesa"}/>
                <label>Servicio</label>
              </div>
            </div>

            <Button as="a" style={{backgroundColor: "#6500FE"}}>
              Enviar
            </Button>
          {/* </Card> */}
          </div>
        </Col>
      </Row>

    </Container>

    </>
  )
}
export default Index

/*











*/
