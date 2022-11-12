import React from 'react'
import Card from '../../components/Card/Card'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../../styles/style.scss'

const Index = () => {
  return (
    <>
       <Col>
        <Row>

            <Card>
              <text className='titleSecondary'>
                <strong>
                  <text style={{color: "#6500FE"}}>Agenda una <br/>consulta gratuita<br/></text>
                  con uno de nuestros <br/>colaboradores
                </strong>
              </text>
            </Card>
        
        <Row>
            <Card>
              <text className='content'>
                Urb Real Felipe Mz. A Lte. 1 Cerro Colorado<br/>
                +51 932 678 688<br/>
                <strong>ventas@agenciamaki.com</strong>
              </text>
            </Card>


            <Card>
              <text>
                <strong>Horarios de Atención</strong><br/>
                +51 932 678 688<br/>
                ventas@agenciamaki.com
              </text>
            </Card>
        </Row>

        </Row>

        <Row>
          <Card>
            <text>
              <strong>Déjanos un mensaje</strong>
            </text>
            <input type={"text"} id={"Nombre"}/>
            <input type={"text"} id={"Teléfono"}/>
            <input type={"text"} id={"Correo"}/>
            <input type={"text"} id={"Servicio que te interesa"}/>
            <input type="submit" value="Enviar" />
          </Card>
        </Row>

      </Col>
    </>
  )
}
 export default Index
