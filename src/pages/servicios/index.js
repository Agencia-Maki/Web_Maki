import React from 'react'
import Card from '../../components/Card/Card'

import '../../styles/style.scss'
import { Container, Row, Col } from 'react-bootstrap';


const Index = () => {
  return (
    <body>
      <div className='caja gris' style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <div className='title'>
          <p style={{lineHeight: "1"}}>
            <strong>Lo que<br/>sabemos<br/> hacer <text style={{color: "#6500FE",lineHeight: "1"}}>bien</text></strong>
          </p>
          <p className='titleSecondary'>
            Calidad Optimizada<br/>
          </p>
        </div>
        <div>
          <p>
            Somos una agencia que trabaja con procesos optimizados,<br/>
            garantizando un trabajo con calidad y en los tiempos previstos.
          </p>
        </div>
      </div>

      <Container className='caja gris'>
        <Row>
          <Col>
            <div className='imagenCard'style={{backgroundColor: "#6500FE",color: "white"}}>Social Media</div>
            <div className='imagenCard'style={{backgroundColor: "#6500FE", color: "white"}}>Diseño Gráfico</div>
          </Col>
          <Col>
            <div className='imagenCard' style={{backgroundColor: "#6500FE", color: "white"}}>Web</div>
            <div className='imagenCard'style={{backgroundColor: "#6500FE", color: "white"}}>Foto y Video</div>
          </Col>
        </Row>
      </Container>

    </body>
  )
}
 export default Index