import React from 'react'
import Form from '../../components/Form/Form'

import { Row, Col } from 'react-bootstrap';

const Index = () => {
  return (
    <>
    <div style={{
      backgroundColor: "white",
      height: "650px",
    }}
    >
      <Row>
        <Col md={7}>
          <div className='titleSecondary'
            style={{
              height: "650px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
          <div style={{ alignSelf: "center"}}>
            <strong>
              <p style={{color: "#6500FE",lineHeight: "1"}}>
                Agenda una<br/> consulta gratuita
              </p>
              <p style={{lineHeight: "1", marginTop: "-15px"}}>
                con uno de nuestros <br/>colaboradores
              </p>
            </strong>
          </div>

          <Row>
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
          </div>
        </Col>

        <Col>
          <div style={{
            // backgroundColor: "coral",
            height: "650px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}>
            <Form/>
          </div>
        </Col>
      </Row>

    </div>
    </>
  )
}
export default Index