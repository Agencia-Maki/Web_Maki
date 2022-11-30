import React from 'react'
import TimeLine from '../../components/TimeLine/timeline.js'

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import arrowW from '../../assets/arrow/arrowW.svg'

import './style.scss'

const Index = () => {
  
  return (
    <>
    <div style={{backgroundColor: "#F8F8F8"}}>

      <Row>
        <Col>
          <div style={{ 
            width: "100%",
            height: "95vh", 
            backgroundColor: "#6500FE",
            }}
          >
            <div style={{
              height: "60vh",
              display: "flex", 
              justifyContent: "center", 
              alignItems: "flex-end"
            }}>

            <text style={{marginRight: "25px", zIndex: "2"}}>
              <p className='titleSecondary' style={{color: '#F8F8F8'}}>
                <strong>Comprometidos<br/> con hacer crecer<br/> a tu empresa</strong>
              </p>
            </text>

            <div style={{
              position: "absolute",
              top: "480px", left: "250px",
              width: "300px" , height: "30px", backgroundColor: "#1D1D1B" , zIndex: "1"
            }}></div>

            </div>

          <div className='linkTo'>
            <a href="#maki-ADN">
              <img src={arrowW} alt="My Happy SVG"/>
              Desliza
            </a>
          </div>

          </div>
        </Col>

        <Col>
          <div style={{
            height: "95vh", 
            display: "flex", 
            alignItems: "center",
            justifyContent: "center"
            }}
          >
            <text className='content'>
              <p>
                <strong>
                Nuestro propósito es poder<br/>
                ayudar a nuestros clientes<br/>
                a llegar al siguiente nivel y<br/>
                <text style={{color: '#6500FE'}}>seguir creciendo juntos.</text>
                </strong>
              </p>
            </text>
          </div>
        </Col>
      </Row>

      <Row id="maki-ADN">
        <Col>
          <div style={{
            height: "400px", 
            display: "flex", 
            justifyContent: "flex-end", 
            alignItems: "center"
          }}>
            <text className='titleSecondary'>
              <strong>
                Llevamos la<br/>
                Innovación en<br/>
                nuestro <text style={{color: '#6500FE'}}>ADN.</text>
              </strong>
            </text>
          </div>
        </Col>
      
        <Col> 
          <div className='content' style={{
            height: "400px", 
            display: "flex", 
            alignItems: "center"
            }}>
            <text>
              <p>
                Maki nace por la necesidad de brindar una<br/>
                mano a aquellas empresas que buscan<br/>
                adaptarse a los cambios constantes en el<br/>
                mundo digital.<br/>
              </p>
              <p>
                Al igual que ellos buscamos reinventarnos<br/>
                constantemente para ofrecer la mejor<br/>
                calidad en nuestros servicios.
              </p>
            </text>
          </div>
        </Col>
      </Row>

      <Row>
        <TimeLine/>
      </Row>

      <Row style={{ height: "250px"}}>
        <Col>
          <text>
            <p className='titleSecondary' 
              style={{ 
              display: "flex", justifyContent: "center"
              }}
            >
              <strong>El Dream Team</strong>
            </p>
          </text>

          <text className='content'
            style={{ 
              display: "flex",justifyContent: "center"
            }}
          >
            <p>
              Somos un equipo que trabaja mediante procesos y se capacita constantemente para obtimizar la relación<br/>
              de cada proyecto y lograr mejores trabajos en el menos tiempo posible, dejándonos tiempo para hacer lo<br/>
              que más nos gusta: Ser Creativos.<br/>           
              En Maki tenemos la política de nunca caer en lo convencional y siempre buscamos proponer cosas nuevas.<br/>
            </p>
        </text>
        </Col>
      </Row>

      <Row>
        
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

      </Row>

      <Row>
        <Col sm={4}>
          <div className='titleSecondary' 
            style={{
              height: "250px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <text>
              <p>
                <strong>
                  Únete al<br/><text style={{color: '#6500FE'}}>equipo</text>
                </strong>
              </p>
            </text>
          </div>
        </Col>

        <Col sm={8}>
          <div style={{
            height: "250px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <text className='content'>
              <p>
              Siempre estamos en busqueda de nuevos latentos que <br/>
              quieran sumarse a nuestro equipo de especilistas.
              </p>
            </text>


            <Link to="/contactanos" >
                <button style={{ 
                  width: "180px", height: "45px", padding: "0 10px 0 10px", margin: "10px",
                  backgroundColor: "#6500FE", borderRadius: "50px", color: "white"
                }}>
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