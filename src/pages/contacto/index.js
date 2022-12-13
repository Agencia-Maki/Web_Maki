import React from 'react'
import Form from '../../components/Form/Form'

import { Row, Col } from 'react-bootstrap'

import './contacto.scss'

const Index = () => {
  return (
    <>
      <div className='caja'>
        <Row>
          <Col md={7} sm={12}>
            <div className="maki-box-container"
              style={{height: "100vh"}}
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
          <Col md={5} sm={12}>
            <div className="maki-box-contacto"
             style={{height: "100vh"}}>
              <Form />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Index