import React from 'react'
import Card from '../../components/Card/Card'

import '../../styles/style.scss'
import { Container, Row, Col } from 'react-bootstrap';

import './style.css'


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
    
            <div className='flip-card'>
              <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <div>Social Media</div>
              </div>
              <div className='flip-card-back'>
                <div>
                  <text>
                    <p>Social Media</p>
                    <p>Nos encargamos de gestionar tu marca en<br/>
                      redes sociales ayudandote a llegar a tú<br/>
                      público objetivo.</p>
                    <li>Creación de contenido</li>
                    <li>Diseño gráfico y audiovisual</li>
                    <li>Facebook Ads</li>
                    <li>Community management</li>
                  </text>
                </div>
              </div>

              </div>
            </div>


            <div className='flip-card'>
              <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <div>Diseño Gráfico</div>
              </div>
              <div className='flip-card-back'>
                <div>
                  <text>
                    <p>Social Media</p>
                    <p>
                      Elaboramos piezas graficas que plasmen la<br/>
                      personalidad de tu marca
                    </p>
                    <li>Identidad de marca</li>
                    <li>Diseño de volantes</li>
                    <li>
                      Diseno de piezas graticas para<br/>
                      platatormas virtuales e impresas
                    </li>
                  </text>
                </div>
              </div>

              </div>
            </div>

          </Col>
          <Col>

          <div className='flip-card'>
            <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <div>Web</div>
            </div>
            <div className='flip-card-back'>
              <div>
                <text>
                  <p>Web</p>
                  <p>
                    Desarrollamos tu página web o<br/>
                    E-Commerce bajo los estandares de web<br/>
                    responsive.
                  </p>
                  <li>Diseño Web</li>
                  <li>SEO y SEM</li>
                </text>
              </div>
            </div>

            </div>
          </div>            
            
          <div className='flip-card'>
            <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <div>Foto y Video</div>
            </div>
            <div className='flip-card-back'>
              <div>
                <text>
                  <p>Foto y Video</p>
                  <p>
                    Desarrollamos y producimos fotogratia y<br/>
                    video publicitario.<br/>
                  </p>
                  <li>Fotogratia de producto</li>
                  <li>Reels y Tiktok</li>
                  <li>Spots publicitarios</li>
                  <li>Ideos institucionales</li>
                </text>
              </div>
            </div>

            </div>
            </div>

          </Col>
        </Row>
      </Container>

    </body>
  )
}
 export default Index