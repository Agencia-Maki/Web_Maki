import React from 'react'
import TimeLine from '../../components/TimeLine/timeline.js'

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import arrowW from '../../assets/arrow/arrowW.svg'

import './nosotros.scss'

const Index = () => {

  return (
    <>
      <div className='caja gris'>
        <Row>
          <Col md={6} sm={12}>
            <div
              className="maki-box-nosotros"
              style={{ backgroundColor: "#6500FE" }}
            >
              <div className="text-wrapper">
                <h1 style={{ zIndex: "2" }}>
                  <p className='titleSecondary' style={{ color: '#F8F8F8'}}>
                    <strong>Comprometidos<br /> con hacer crecer<br /> a tu empresa</strong>
                  </p>
                </h1>
              </div>

              <div className='line-text'></div>

              {/* <div className='linkTo'>
                <a href="#maki-ADN">
                  <img src={arrowW} alt="My Happy SVG" />
                 Desliza
                </a>
              </div> */}
            
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className='maki-box-nosotros' 

            >
              <text className='content'>
                <p>
                  <strong>
                    Nuestro propósito es poder<br />
                    ayudar a nuestros clientes<br />
                    a llegar al siguiente nivel y<br />
                    <text style={{ color: '#6500FE' }}>seguir creciendo juntos.</text>
                  </strong>
                </p>
              </text>
            </div>
          </Col>
        </Row>
      </div>

      <div className='caja' style={{ backgroundColor: "#F8F8F8" }}>
        <Row id="maki-ADN">
          <Col md={6} sm={12}>
            <div className='adn-container'>
              <text className='titleSecondary'>
                <strong>
                  Llevamos la<br />
                  Innovación en<br />
                  nuestro <text style={{ color: '#6500FE' }}>ADN.</text>
                </strong>
              </text>
            </div>
          </Col>

          <Col md={6} sm={12}>
            <div className='adn-container'>
              <div className='content'>
                <text>
                  <p>
                    Maki nace por la necesidad de brindar una
                    mano a aquellas empresas que buscan
                    adaptarse a los cambios constantes en el
                    mundo digital.<br />
                  </p>
                  <p>
                    Al igual que ellos buscamos reinventarnos
                    constantemente para ofrecer la mejor
                    calidad en nuestros servicios.
                  </p>
                </text>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className='caja' style={{ backgroundColor: "#F8F8F8" }}>
        <Row>
          <TimeLine />
        </Row>
      </div>

      <div className='caja' style={{ backgroundColor: "#F8F8F8" }}>
        <Row>
          <Col>
            <div className='dream-container'>
              <text>
                <p className='titleSecondary'
                  style={{ display: "flex", justifyContent: "center"}}
                >
                  <strong>El Dream Team</strong>
                </p>
              </text>

              <text className='content'
                style={{
                  width: "90%",
                  display: "flex", justifyContent: "center"
                }}
              >
                <p>
                  Somos un equipo que trabaja mediante procesos y se capacita constantemente para obtimizar la relación
                  de cada proyecto y lograr mejores trabajos en el menos tiempo posible, dejándonos tiempo para hacer lo
                  que más nos gusta: Ser Creativos.<br />
                  En Maki tenemos la política de nunca caer en lo convencional y siempre buscamos proponer cosas nuevas.
                </p>
              </text>
            </div>
          </Col>
        </Row>

        {/* <Row>
        
        <div className='caja'>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
        </div>
        <div className='caja'>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
          <text className='imagenCard' style={{backgroundColor: "lightblue"}}>imagen</text>
        </div>

      </Row> */}
      </div>

      <div className='caja' style={{ backgroundColor: "#F8F8F8" }}>
        <Row>
          <Col sm={4}>
            <div className='titleSecondary container-unete' >
              <text>
                <p>
                  <strong>
                    Únete al<br /><text style={{ color: '#6500FE' }}>equipo</text>
                  </strong>
                </p>
              </text>
            </div>
          </Col>
          <Col sm={8}>
            <div className='container-unete-text'>
              <text className='content'>
                <p>
                  Siempre estamos en busqueda de nuevos latentos que <br />
                  quieran sumarse a nuestro equipo de especilistas.
                </p>
              </text>

              <Link to="/contactanos" >
                <button className='dejanos-cv'>
                  Déjanos tu CV
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

    </>
  )
}
export default Index