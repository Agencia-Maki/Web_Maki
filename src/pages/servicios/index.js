import React from 'react'
import { Row, Col } from 'react-bootstrap';

import socialMedia from '../../assets/images/servicios/socialMedia.png'
import web from '../../assets/images/servicios/web.png'
import diseñoGrafico from '../../assets/images/servicios/diseñoGrafico.png'
import fotoMedia from '../../assets/images/servicios/fotoVideo.png'

import './style.css'


const Index = () => {
  return (
    <div className='gris'>
      <div className='caja gris' 
        style={{
          height: "1100px" ,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-50px"
        }}
      >
        <text className='title'>
          <p style={{lineHeight: "1" }}>
            <strong>Lo que<br/>sabemos<br/> hacer <text style={{color: "#6500FE",lineHeight: "1"}}>bien</text></strong>
          </p>
          <p className='titleSecondary'>
            Calidad Optimizada<br/>
          </p>
        </text>
        <text>
          <p>
            Somos una agencia que trabaja con procesos optimizados,<br/>
            garantizando un trabajo con calidad y en los tiempos previstos.
          </p>
        </text>
      </div>

      <div className='caja gris' style={{height: "800px" , display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Row>
          <Col>
    
            <div className='flip-card'>
              <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='imagen' src={socialMedia} alt="No Cargo Imagen" />
              </div>
              <div className='flip-card-back'>
                <div style={{margin: "20px"}}>
                  <text>
                    <p style={{
                        textAlign: "center"}}>
                      <strong>Social Media</strong>
                    </p>
                    <p>Nos encargamos de gestionar tu marca en<br/>
                      redes sociales ayudandote a llegar a tú<br/>
                      público objetivo.</p>
                    <li><text>Creación de contenido</text></li>
                    <li><text>Diseño gráfico y audiovisual</text></li>
                    <li><text>Facebook Ads</text></li>
                    <li><text>Community management</text></li>
                  </text>
                </div>
              </div>

              </div>
            </div>


            <div className='flip-card'>
              <div className='flip-card-inner'>
              <div className='flip-card-front'>
              <img className='imagen' src={web} alt="No Cargo Imagen" />
              </div>
              <div className='flip-card-back'>
                <div style={{margin: "20px"}}>
                  <text>
                    <p style={{
                        textAlign: "center"}}>
                      <strong>Social Media</strong>
                    </p>
                    <p>
                      Elaboramos piezas graficas que plasmen la<br/>
                      personalidad de tu marca
                    </p>
                    <li><text>Identidad de marca</text></li>
                    <li><text>Diseño de volantes</text></li>
                    <li>
                      <text>Diseno de piezas graticas para<br/>
                      platatormas virtuales e impresas</text>
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
                  <img className='imagen' src={diseñoGrafico} alt="No Cargo Imagen" />
              </div>
              <div className='flip-card-back'>
                <div style={{margin: "20px"}}>
                  <text>
                    <p style={{
                        textAlign: "center"}}>
                      <strong>Web</strong>
                    </p>
                    <p>
                      Desarrollamos tu página web o<br/>
                      E-Commerce bajo los estandares de web<br/>
                      responsive.
                    </p>
                    <li><text>Diseño Web</text></li>
                    <li><text>SEO y SEM</text></li>
                  </text>
                </div>
              </div>

              </div>
            </div>            
              
            <div className='flip-card'>
              <div className='flip-card-inner'>
              <div className='flip-card-front'>
                  <img className='imagen' src={fotoMedia} alt="No Cargo Imagen" />
              </div>
              <div className='flip-card-back'>
                <div style={{margin: "20px"}}>
                  <text>
                    <p style={{
                        textAlign: "center"}}>
                      <strong>Foto y Video</strong>
                    </p>
                    <p>
                      Desarrollamos y producimos fotogratia y<br/>
                      video publicitario.<br/>
                    </p>
                    <li><text>Fotogratia de producto</text></li>
                    <li><text>Reels y Tiktok</text></li>
                    <li><text>Spots publicitarios</text></li>
                    <li><text>Ideos institucionales</text></li>
                  </text>
                </div>
              </div>

              </div>
            </div>

          </Col>
        </Row>
      </div>

    </div>
  )
}
 export default Index