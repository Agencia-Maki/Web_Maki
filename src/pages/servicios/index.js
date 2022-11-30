import React from 'react'
import { Row, Col } from 'react-bootstrap';

import socialMedia from '../../assets/images/servicios/socialMedia.png'
import web from '../../assets/images/servicios/web.png'
import diseñoGrafico from '../../assets/images/servicios/diseñoGrafico.png'
import fotoMedia from '../../assets/images/servicios/fotoVideo.png'

import arrowP from '../../assets/arrow/arrowP.svg'
import './style.css'
import './style.scss'

const Index = () => {
  return (
    <>
    <div style={{backgroundColor: "#F8F8F8"}}>
      <div className='caja gris' 
        style={{
          height: "95vh",
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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

        <div 
          style={{
            height:"30vh",
            display: "flex",
            // justifyContent: "flex-start",
            marginLeft: "300px",
            alignItems: "flex-end"
        }}
        >
          <div className='linkTo'>
            <a href="#maki-boxes">
              <img src={arrowP} alt="My Happy SVG"/>
              Desliza
            </a>
          </div>

        </div>
      </div>

      <div className='caja gris' 
        style={{
          height: "100vh" , 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center"
        }}>
        <Row id="maki-boxes">
          <Col>
    
            <div className='flip-box'>
              <div className='flip-box-inner'>
              <div className='flip-box-front'>
                <img className='imagen' src={socialMedia} alt="No Cargo Imagen" />
              </div>
              <div className='flip-box-back'>
                <div style={{
                  margin: "0 50px 0 50px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center"
                  }}
                >
                  <text>
                    <p style={{textAlign: "center"}}>
                      <strong>Social Media</strong>
                    </p>
                    <p>
                      Nos encargamos de gestionar tu marca en
                      redes sociales ayudandote a llegar a tú
                      público objetivo.
                    </p>
                    <li><text>Creación de contenido</text></li>
                    <li><text>Diseño gráfico y audiovisual</text></li>
                    <li><text>Facebook Ads</text></li>
                    <li><text>Community management</text></li>
                  </text>
                  <div style={{
                    position: "absolute",
                    top: "75px",left: "100px",
                    width: "150px" , height: "5px", 
                    backgroundColor: "#6500FE"
                  }}></div>
                </div>
              </div>

              </div>
            </div>


            <div className='flip-box'>
              <div className='flip-box-inner'>
              <div className='flip-box-front'>
              <img className='imagen' src={web} alt="No Cargo Imagen" />
              </div>
              <div className='flip-box-back'>
                <div style={{
                  margin: "0 50px 0 50px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center"
                  }}
                >
                  <text>
                    <p style={{textAlign: "center"}}>
                      <strong>Web</strong>
                    </p>
                    <p>
                      Desarrollamos tu página web o<br/>
                      E-Commerce bajo los estandares de web responsive.
                    </p>
                    <li><text>Diseño Web</text></li>
                    <li><text>SEO y SEM</text></li>
                  </text>
                  <div style={{
                    position: "absolute",
                    top: "110px",left: "100px",
                    width: "150px" , height: "5px", 
                    backgroundColor: "#6500FE"
                  }}></div>
                </div>
              </div>

              </div>
            </div>

          </Col>
          <Col>

            <div className='flip-box'>
              <div className='flip-box-inner'>
              <div className='flip-box-front'>
                  <img className='imagen' src={diseñoGrafico} alt="No Cargo Imagen" />
              </div>
              <div className='flip-box-back'>
                <div style={{
                  margin: "0 50px 0 50px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center"
                  }}>
                  <text>
                    <p style={{textAlign: "center"}}>
                      <strong>Diseño Gráfico</strong>
                    </p>
                    <p>
                      Elaboramos piezas graficas que plasmen la
                      personalidad de tu marca.
                    </p>
                    <li><text>Identidad de marca</text></li>
                    <li><text>Diseño de volantes</text></li>
                    <li>
                      <text>Diseño de piezas gráficas para<br/>
                      platatormas virtuales e impresas</text>
                    </li>
                  </text>
                  <div style={{
                    position: "absolute",
                    top: "85px",left: "100px",
                    width: "150px" , height: "5px", 
                    backgroundColor: "#6500FE"
                  }}></div>
                </div>
              </div>

              </div>
            </div>            
              
            <div className='flip-box'>
              <div className='flip-box-inner'>
              <div className='flip-box-front'>
                  <img className='imagen' src={fotoMedia} alt="No Cargo Imagen" />
              </div>
              <div className='flip-box-back'>
                <div style={{
                  margin: "0 50px 0 50px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center"
                }}>
                  <text>
                    <p style={{textAlign: "center"}}>
                      <strong>Foto y Video</strong>
                    </p>
                    <p>
                      Desarrollamos y producimos fotografía y
                      video publicitario.
                    </p>
                    <li><text>Fotografía de producto</text></li>
                    <li><text>Reels y Tiktok</text></li>
                    <li><text>Spots publicitarios</text></li>
                    <li><text>Videos institucionales</text></li>
                  </text>
                  <div style={{
                    position: "absolute",
                    top: "100px",left: "100px",
                    width: "150px" , height: "5px", 
                    backgroundColor: "#6500FE"
                  }}></div>
                </div>
              </div>

              </div>
            </div>

          </Col>
        </Row>
      </div>

    </div>
    </>
  )
}
export default Index
