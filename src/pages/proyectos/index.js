import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import GridPicture from '../../components/GridPicture/GridPicture.js';
import Logos from '../../components/Logos/logos.js'
import arrowW from '../../assets/arrow/arrowW.svg'

import './proyectos.scss'

const Index = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  return (
    <>

      <div className='caja'>
        <Row>
          <Col md={6} sm={12}>
            <div
              className="maki-box-proyectos"
              style={{ height: "100vh", backgroundColor: "black"}}
            >
              <div className='projects-container-text'>

              <h1 className="big-title-maki">
                <strong>
                  <p style={{ lineHeight: "0.75" }}>PRO</p>
                  <p style={{ lineHeight: "0.75" }}>YEC</p>
                  <p style={{ lineHeight: "0.75" }}>TOS<span style={{ color: "#6500FE" }} >.</span></p>
                </strong>
              </h1>

              <div className='line-title'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
              </div>

              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="maki-box-proyectos">
              <div>
                <h4 className="titleSecondary">
                  <p style={{ lineHeight: "0.75" }}>Una selección de</p>
                  <p style={{ lineHeight: "0.75" }}><strong>nuestros mejores</strong></p>
                  <p style={{ lineHeight: "0.75" }}><strong>proyectos.</strong></p>
                </h4>
                <h4>
                  Con más de 50 clientes confiando en<br />
                  nuestro trabajo, no podemos<br />
                  mostrarlo todo. Hicimos una pequeña<br />
                  selección.
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className='caja' style={{ marginTop: "50px" }}>
        <Row>
          <Col md={12}>
            <div
              //className="maki-box-container" style={{ height: "auto" }}
            >
              <GridPicture />
            </div>
          </Col>
        </Row>
      </div>


      <div className='caja'>
        <Row>
          <Col md={6} sm={12}>
            <div className="maki-box-proyectos2">
              <div>
                <h1 className="titleSecondary" 
                  style={{lineHeight: "1" }}
                >
                  <strong>
                    Nuestros<br />
                    <span style={{ color: "#6500FE" }} >clientes.</span>
                  </strong>
                </h1>
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
    </>
  )
}
export default Index