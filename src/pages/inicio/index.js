import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap';

import Carrucel from './carrucel.js'
import Logos from '../../components/Logos/logos.js'

import font from '../../assets/images/inicio/font.png'
import arrowP from '../../assets/arrow/arrowP.svg'


const Index = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>

        {/* <div className='caja'>
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
              <div style={{ margin: "100px" }}>
                <h1>
                  <strong>
                    <p className='title' style={{ lineHeight: "1" }}>
                      ESTILO
                    </p>
                    <p className='title' style={{ lineHeight: "1" }}>
                      MAKI<span style={{ color: "#6500FE" }}>.</span>
                    </p>
                  </strong>
                </h1>

                <p>
                  <strong>Dualismo entre la inovación y lo<br />tradicional</strong>
                </p>
                <p>
                  Entendemos lo que tu empresa necesita y<br /> optimizamos la manera de obtener<br />
                  resultados
                </p>
                <div style={{ width: "350px", display: "flex", flexDirection: "row" }}>
                  <p style={{ color: "#6500FE" }}>Conoce nuestros servicios</p>
                  <img src={arrowP} alt="My Happy SVG" style={{ margin: "5px 0px 0px 50px", height: "15px" }} />
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <Carrucel />
              </div>
            </Col>
          </Row>
        </div> */}


        <div
          className='clients-apart-container'
        >
          <Row>
            <Col md={4}>
              <div
                className="logos-text-container"
              >
                <h2 className="titleSecondary">
                  Ayudamos a <br />
                  empresas a llegar <br />
                  <span style={{ lineHeight: "0.75", color: "#6500FE" }} >al siguiente nivel.</span>
                </h2>
                <p>
                  Algunas de las empresas que confiaron <br />
                  en nosotros para empujarlos a seguir.
                </p>
                <div className="more-arrow">
                  <Link href="">Conoce más
                    <img src={arrowP} alt="My Happy SVG" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Logos />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default Index