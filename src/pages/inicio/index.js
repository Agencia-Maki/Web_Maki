import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import Carrucel from './carousel.js'
import Logos from '../../components/Logos/logos.js'

import font from '../../assets/images/inicio/font.png'
import arrowP from '../../assets/arrow/arrowP.svg'

import './style.scss'


const Index = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>

        <div className='caja'>
          <img className='imagen' src={font} alt="No Cargo Imagen" />
        </div>

        <div className='gris caja'
          style={{
            height: "800px",
            width: "100%",
          }}>
          <Row>
            <Col md={6}>
              <div className="maki-box-container"
              style={{ height: "800px" }}>
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

                <div>
                  <strong>
                    Dualismo entre la inovación y lo<br />
                    tradicional</strong>
                </div>
                <p>
                  Entendemos lo que tu empresa necesita y<br /> optimizamos la manera de obtener<br />
                  resultados
                </p>

                <div className="more-arrow" style={{ width: "500px", display: "flex", flexDirection:"row"}}>
                  <Link to="/servicios">Conoce nuestros servicios
                    <img src={arrowP} alt="My Happy SVG" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div 
                style={{ height: "800px", display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <Carrucel /> 
              </div>
            </Col>
          </Row>
        </div>


        <div className='caja'>
          <Row>
            <Col md={6}>
              <div
                className="maki-box-container"
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
                  <Link to="/proyectos">Conoce más
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