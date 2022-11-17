import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import font from '../../assets/images/inicio/font.png'

import cato from '../../assets/images/inicio/Grupo 513.png'
import aural from '../../assets/images/inicio/Grupo 498.png'
import magna from '../../assets/images/inicio/Grupo 506.png'
import puertoInca from '../../assets/images/inicio/Grupo 98.png'
import gpr from '../../assets/images/inicio/Grupo 499.png'
import altoImpacto from '../../assets/images/inicio/Grupo 507.png'
import anan from '../../assets/images/inicio/Grupo 483.png'
import vapreh from '../../assets/images/inicio/Grupo 502.png'
import parisinos from '../../assets/images/inicio/Grupo 95.png'

import '../../styles/style.scss'
import Carrucel from './carrucel.js'


const Index = () => {
  return (
    <>
    <div style={{backgroundColor: "white"}}>

    <div className='caja'>
      <img className='imagen' src={font} alt="No Cargo Imagen" />
    </div>

    <div className='gris caja' 
      style={{
        height: "800px", display: "flex",alignItems: "center"
      }}>
      <Row>
        <Col>
          <div>
            <text style={{color: '#1D1D1B'}}>
              <p className='title' style={{lineHeight: "1"}}>
                <strong>ESTILO<br/>MAKI<text style={{color: "#6500FE"}} >.</text></strong>
              </p>
              <p>
                <strong>Dualismo entre la inovación y lo<br/>tradicional</strong>
              </p>
              <p className='parrafo'>
                Entendemos lo que tu empresa necesita y<br/> optimizamos la manera de obtener<br/>
                resultados
              </p>
              <p style={{color: "#6500FE"}}>Conoce nuestros servicios</p>
            </text>
          </div>
        </Col>
        <Col>
          <div>
            <Carrucel/>
          </div>
        </Col>
      </Row>
    </div>

    <div className='caja' 
      style={{
        height: "600px", display: "flex",alignItems: "center"
      }}>
      <Row>
        <Col>
          <div>
            <text className="titleSecondary">
              <strong>
                <p style={{lineHeight: "0.75"}}>Ayudamos a </p>
                <p style={{lineHeight: "0.75"}}>empresas a llegar </p>
                <p style={{lineHeight: "0.75", color: "#6500FE"}} >al siguiente nivel.</p>
              </strong>
            </text>
            <text>
              <p>
                Algunas de las empresas que confiaron<br/> 
                en nosotros para empujarlos a seguir.
              </p>
              <p style={{color: "#6500FE"}}>Conoce más</p>
            </text>
          </div>
        </Col>
        <Col>

        <Container>
          <Row>
            <Col>
              <img className='logos' src={cato} alt="No Cargo Imagen" />
              <img className='logos' src={aural} alt="No Cargo Imagen" />
              <img className='logos' src={magna} alt="No Cargo Imagen" />
            </Col>
            <Col>
              <img className='logos' src={puertoInca} alt="No Cargo Imagen" />
              <img className='logos' src={gpr} alt="No Cargo Imagen" />
              <img className='logos' src={altoImpacto} alt="No Cargo Imagen" />
            </Col>
            <Col>
              <img className='logos' src={anan} alt="No Cargo Imagen" />
              <img className='logos' src={vapreh} alt="No Cargo Imagen" />
              <img className='logos' src={parisinos} alt="No Cargo Imagen" />
            </Col>
          </Row>
        </Container>

        </Col>
      </Row>

        
    </div>
    </div>

    </>
  )
}
export default Index

//import Card from '../../components/Card/Card'
// <Card color="white">
//   <img className='imagenCard' src={web} alt="No Cargo Imagen" />
//   <text><strong>Web</strong></text>
// </Card>
// <Card color="white">
//   <img className='imagenCard' src={socialMedia} alt="No Cargo Imagen" />
//   <text><strong>Social Media</strong></text>
// </Card> 