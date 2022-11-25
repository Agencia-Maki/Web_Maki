import React from 'react'
import { Row, Col } from 'react-bootstrap';

import Carrucel from './carrucel.js'
import Logos from '../../components/Logos/logos.js'

import font from '../../assets/images/inicio/font.png'
import arrowP from '../../assets/arrow/arrowP.svg'


const Index = () => {
  return (
    <>
      <div style={{backgroundColor: "white"}}>

      <div className='caja'>
        <img className='imagen' src={font} alt="No Cargo Imagen" />
      </div>

      <div className='gris caja'
        style={{
          height: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Row>
          <Col md={5}>
            <div style={{ margin: "100px"}}>
              <text style={{color: '#1D1D1B'}}>
                <p className='title' style={{lineHeight: "1"}}>
                  <strong>ESTILO<br/>MAKI<text style={{color: "#6500FE"}} >.</text></strong>
                </p>
                <p>
                  <strong>Dualismo entre la inovación y lo<br/>tradicional</strong>
                </p>
                <p>
                  Entendemos lo que tu empresa necesita y<br/> optimizamos la manera de obtener<br/>
                  resultados
                </p>
              </text>
              <div style={{ width: "350px" , display: "flex" , flexDirection: "row"}}>
                <p style={{color: "#6500FE"}}>Conoce nuestros servicios</p>
                <img src={arrowP} alt="My Happy SVG" style={{margin: "5px 0px 0px 50px", height:"15px"}} />
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <Carrucel/>
            </div>
          </Col>
        </Row>
      </div>

      <div className='caja'>
        <Row>
          <Col>
            <div style={{ 
              height: "500px", 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // marginLeft: "200px"
            }}
            >
              <text>
                <p className="titleSecondary">
                  <strong>
                    <p style={{lineHeight: "0.75"}}>Ayudamos a </p>
                    <p style={{lineHeight: "0.75"}}>empresas a llegar </p>
                    <p style={{lineHeight: "0.75", color: "#6500FE"}} >al siguiente nivel.</p>
                  </strong>
                </p>
                <p>
                  Algunas de las empresas que confiaron<br/> 
                  en nosotros para empujarlos a seguir.
                </p>
              </text>
              <div style={{ width: "425px" , display: "flex", alignSelf: "center" , flexDirection: "row"}}>
                <p style={{color: "#6500FE"}}>Conoce más</p>
                <img src={arrowP} alt="My Happy SVG" style={{margin: "5px 0px 0px 50px", height:"15px"}} />
              </div>
            </div>
          </Col>
          <Col>

          <div>
            <Logos/>
          </div>

          </Col>
        </Row>
          
      </div>
    </div>

    </>
  )
}
export default Index