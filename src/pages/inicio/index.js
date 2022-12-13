import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import Carrucel from '../../components/Carousel/carousel.js'
import Logos from '../../components/Logos/logos.js'

import font from '../../assets/images/inicio/font.png'
import arrowP from '../../assets/arrow/arrowP.svg'

import './inicio.scss'

const Index = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>

        <div className='caja'>
          <img className='imagen' src={font} alt="No Cargo Imagen" />
        </div>

        <div className='caja gris'
          style={{
            height: "100%",
            width: "100%",
          }}>
          <Row>
            <Col md={6} sm={12}>
              <div className="maki-box-container"
              style={{ height: "80vh"}}>
                <div>

                <h1 className='title' style={{ lineHeight: "1" }}>
                  <strong>
                    ESTILO<br/>
                    MAKI<span style={{ color: "#6500FE" }}>.</span>
                  </strong>
                </h1>

                <h5>
                  <strong>
                    Dualismo entre la inovación y lo<br />
                    tradicional
                  </strong>
                </h5>
                <p style={{marginTop: "15px"}}>
                  Entendemos lo que tu empresa necesita y<br />
                  optimizamos la manera de obtener<br />
                  resultados
                </p>

                <div className="more-arrow">
                  <Link to="/servicios">Conoce nuestros servicios
                    <img src={arrowP} alt="My Happy SVG" />
                  </Link>
                </div>

                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div 
                style={{ height: "100%", width: "100%", 
                display: "flex", alignItems: "center",
                // justifyContent: "center", 
                // backgroundColor: "coral"
              }}
              >
                <Carrucel /> 
              </div>
            </Col>
          </Row>
        </div>

        <div className='caja'
        style={{
          height: "100%",
          width: "100%",
        }}
        >
          <Row>
            <Col md={6} sm={12}>
              <div className="maki-box-container logos-height">
              <div>

                <h2 className="titleSecondary" style={{ lineHeight: "1" }}>
                  <strong>
                    Ayudamos a <br />
                    empresas a llegar <br />
                    <span style={{ color: "#6500FE" }} >al siguiente nivel.</span>
                  </strong>
                </h2>
                <p style={{marginTop: "15px"}}>
                  Algunas de las empresas que confiaron <br />
                  en nosotros para empujarlos a seguir.
                </p>
                <div className="more-arrow">
                  <Link to="/proyectos">Conoce más
                    <img src={arrowP} alt="My Happy SVG" />
                  </Link>
                </div>
              </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className='logos-height'>
                <Logos />
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </>
  )
}
export default Index