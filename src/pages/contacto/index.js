import React from 'react'
import Form from '../../components/Form/Form'

import { Row, Col } from 'react-bootstrap'

import './contacto.scss'

const Index = () => {
  return (
    <>
      <div className='caja' 
      // style={{ height: "80vh", display: "flex", }}
      >
        <Row>
          <Col md={7} sm={12}>
            <div className="maki-box-contactoL">
              <div>

              <strong>
                <h3 className="title-purple-maki">
                  Agenda una<br /> consulta gratuita
                </h3>
                <h4 className="subtitle-black-maki">
                  con uno de nuestros colaboradores
                </h4>
              </strong>
              <div className='row'>
                <div className="content" style={{padding: "0", margin: "0"}}>
                  <p>
                    Urb Real Felipe Mz. A Lte. 1 <br />
                    Cerro Colorado<br />
                    <strong>ventas@agenciamaki.com</strong>
                  </p>
                </div>
                <div className="content"  style={{padding: "0", margin: "0"}}>
                  <p>
                    <strong>Horarios de Atención</strong><br />
                    Lunes a Viernes: 8:00 am - 6:00 pm<br />
                    Sabados: 8:00 am - 2:00 pm<br />
                    +51 932 678 688<br />
                  </p>
                </div>
              </div>
              </div>

            </div>
          </Col>
          <Col md={5} sm={12}>
            <div className="maki-box-contactoR" >
              <Form />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Index