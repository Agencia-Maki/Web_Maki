import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import GridPicture from './GridPicture.js';
import Logos from '../../components/Logos/logos.js'
import arrowW from '../../assets/arrow/arrowW.svg'

import './style.scss'

const Index = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  return (
    <>

      <div className='caja'>
        <Row>
          <Col md="6">
            <div
              className="maki-box-container projects-container-text"
              style={{ height: "100vh" }}
            >
              <h1 className="big-title-maki">
                <strong>
                  <p style={{ lineHeight: "0.75" }}>PRO</p>
                  <p style={{ lineHeight: "0.75" }}>YEC</p>
                  <p style={{ lineHeight: "0.75" }}>TOS<span style={{ color: "#6500FE" }} >.</span></p>
                </strong>
              </h1>
              <div style={{
                position: "absolute",
                top: "40%", left: "22%",
                width: "200px", height: "30px", backgroundColor: "#6500FE", zIndex: "1"
              }}></div>

              <div style={{
                position: "absolute",
                top: "50%", left: "25%",
                width: "200px", height: "30px", backgroundColor: "#6500FE", zIndex: "1"
              }}></div>

              <div style={{
                position: "absolute",
                top: "60%", left: "22%",
                width: "200px", height: "30px", backgroundColor: "#6500FE", zIndex: "1"
              }}></div>
            </div>
          </Col>
          <Col md="5">
            <div
              className="maki-box-container projects-container-text-rigth"
              style={{ height: "100vh" }}
            >
              <div className="text-box-container-projects">
                <h4 className="semi-big-title-maki">
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
          <Col md="11">
            <div
              className="maki-box-container" style={{ height: "auto" }}
            >
              <GridPicture />
            </div>
          </Col>
        </Row>
      </div>


      <div className='caja'>
        <Row>
          <Col className="offset-md-1" md={3}>
            <div
              className="maki-box-container" style={{ height: "auto" }}
            >
              <div style={{ width: "100%", marginTop: "5%" }}>
                <h1 className="titleSecondary" style={{ marginTop: "100px" }}>
                  <strong>
                    <p style={{ lineHeight: "0.75" }}>Nuestros</p>
                    <p style={{ lineHeight: "0.75", color: "#6500FE" }} >clientes.</p>
                  </strong>
                </h1>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <Logos />
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Index