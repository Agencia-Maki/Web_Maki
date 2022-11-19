import React from 'react'
import Timeline from './timeline.js'
import { Container, Row, Col } from 'react-bootstrap';

const Index = () => {
  
  return (
    <>
    <div style={{backgroundColor: "#F8F8F8"}}>

      <Row>
        <Col style={{ height: "650px" , backgroundColor: "#6500FE"}}>
          <div style={{position: "relative"}}>
            <text style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              marginTop: "15%"
            }}>
              <p className='titleSecondary' style={{color: '#F8F8F8'}}>
                <strong>Comprometidos<br/> con hacer crecer<br/> a tu empresa</strong>
              </p>
            </text>
          </div>
        </Col>

        <Col>
          <div style={{position: "relative"}}>
            <text className='content' style={{
              position: "absolute",
              top: "50%",
              left: "5%",
              marginTop: "25%"
            }}>
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
        <Col style={{ height: "400px"}}>
          <div style={{position: "relative"}}>
            <text className='titleSecondary' 
              style={{
                position: "absolute",
                top: "50%",
                right: "5%",
                marginTop: "15%"
              }}>
              <strong>
                Llevamos la<br/>
                Innovación en<br/>
                nuestro <text style={{color: '#6500FE'}}>ADN.</text>
              </strong>
            </text>
          </div>
        </Col>
      
        <Col> 
          <div style={{position: "relative"}}>
            <text className='content' style={{
              position: "absolute",
              top: "50%",
              left: "5%",
              marginTop: "15%"
            }}
            >
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
        <Timeline/>
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
              <input type="submit" value="Déjanos tu CV" />
            </text>
          </div>
        </Col>
      </Row>

    </div>

    </>
  )
}
export default Index