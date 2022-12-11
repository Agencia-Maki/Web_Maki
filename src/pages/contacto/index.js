import React from 'react'
import Form from '../../components/Form/Form'

import { Row, Col } from 'react-bootstrap'

import './contacto.scss'

const Index = () => {
  return (
    <>
      <div className='caja' style={{height: "600px"}}>
        <Row className="content-contact-maki">
          <Col md={4}>
            <div
              className="maki-box-container"
            >
              <strong>
                <h3 className="title-purple-maki">
                  Agenda una<br /> consulta gratuita
                </h3>
                <h4 className="subtitle-black-maki">
                  con uno de nuestros colaboradores
                </h4>
              </strong>
              <div className='row'>
                <div className="col content" style={{padding: "0", margin: "0"}}>
                  <p>
                    Urb Real Felipe Mz. A Lte. 1 Cerro Colorado<br />
                    +51 932 678 688<br />
                    <strong>ventas@agenciamaki.com</strong>
                  </p>
                </div>
                <div className="col content" style={{}}>
                  <p>
                    <strong>Horarios de Atención</strong><br />
                    +51 932 678 688<br />
                    ventas@agenciamaki.com
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
            }}>
              <Form />
            </div>
          </Col>
        </Row>
      </div>

      {/* <div style={{
        backgroundColor: "white",
        height: "700px",
      }}
      >
        <Row>
          <Col md={7}>
            <div className='titleSecondary'
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <div style={{ alignSelf: "center" }}>
                <strong>
                  <p style={{ color: "#6500FE", lineHeight: "1" }}>
                    Agenda una<br /> consulta gratuita
                  </p>
                  <p style={{ lineHeight: "1", marginTop: "-15px" }}>
                    con uno de nuestros <br />colaboradores
                  </p>
                </strong>
              </div>

              <Row>
                <Col>
                  <div className='content'>
                    <p>
                      Urb Real Felipe Mz. A Lte. 1 Cerro Colorado<br />
                      +51 932 678 688<br />
                      <strong>ventas@agenciamaki.com</strong>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className='content'>
                    <p>
                      <strong>Horarios de Atención</strong><br />
                      +51 932 678 688<br />
                      ventas@agenciamaki.com
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col>
            <div style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Form />
            </div>
          </Col>
        </Row>

      </div> */}
    </>
  )
}
export default Index