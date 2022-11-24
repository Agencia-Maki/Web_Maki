import React from 'react'
import TimeLine from '../../components/TimeLine/timeline.js'

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import arrowW from '../../assets/arrow/arrowW.svg'

const Index = () => {
  
  return (
    <>
    <div style={{backgroundColor: "#F8F8F8"}}>

      <Row>
        <Col>
          <div style={{ 
            width: "100%",
            height: "650px", 
            backgroundColor: "#6500FE",
            }}
          >
            <div style={{
              height: "450px",
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
              top: "380px", left: "250px",
              width: "300px" , height: "30px", backgroundColor: "#1D1D1B" , zIndex: "1"
            }}></div>

            </div>

          <div style={{ height: "200px", display: "flex", alignItems: "center"}}>
            <div style={{ width: "150px", transform:"rotate(90deg)", display: "flex" , alignItems: "flex-end"}}>
              <text style={{ transform: "rotate(180deg)", color: "white" }}>Desliza</text>
              <img src={arrowW} alt="My Happy SVG" style={{ margin: "50px 0px 5px 20px", height:"15px"}} />
            </div>
          </div>

          </div>
        </Col>

        <Col>
          <div style={{
            height: "650px", 
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

      <Row>
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
              position: "relative"
            }}
          >
            <text
              style={{
                position: "absolute",
                top: "50%",
                right: "5%",
                marginTop: "10%"
              }}>
              <p>
                <strong>
                  Únete al<br/><text style={{color: '#6500FE'}}>equipo</text>
                </strong>
              </p>
            </text>
          </div>
        </Col>

        <Col sm={8} style={{ height: "250px"}}>
          <div style={{position: "relative"}}>
            <text className='content'
              style={{
                position: "absolute",
                top: "50%",
                left: "30%",
                marginTop: "8%"
              }}>
              <p>
              Siempre estamos en busqueda de nuevos latentos que <br/>
              quieran sumarse a nuestro equipo de especilistas.
              </p>

              <div className="page-careers-link" to="/contactanos" >
                <span className="msk">
                  <span>Déjanos tu CV</span>
                </span>
              </div>
            </text>
          </div>
        </Col>
      </Row>

    </div>

    </>
  )
}
export default Index