import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import GridPicture from './GridPicture.js';
import Logos from '../../components/Logos/logos.js'
import arrowW from '../../assets/arrow/arrowW.svg'

import './style.scss'
// import './style.css'

const Index = () => {

  useEffect(() =>{
    window.scrollTo({top: 0, behavior: "smooth"})
  })

  return (
    <>
    <div style={{backgroundColor: "white"}}>

      <Row>
        <Col >
          <div style={{
            height: "95vh", 
            width: "100%",
            backgroundColor: "#1D1D1D", 
          }}
          >
          <div style={{
              height: "60vh",  
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              marginLeft: "100px"
            }} 
          >
            <text className='title'
              style={{
                color: '#F8F8F8',
                zIndex: "2"
              }}
              >
              <strong>
                <p style={{lineHeight: "0.75"}}>PRO</p>
                <p style={{lineHeight: "0.75"}}>YEC</p>               
                <p style={{lineHeight: "0.75"}}>TOS<text style={{color: "#6500FE"}} >.</text></p>
              </strong>
            </text>

            <div style={{
              position: "absolute",
              top: "42%", left: "18%",
              width: "200px" , height: "30px", backgroundColor: "#6500FE" , zIndex: "1"
            }}></div>

            <div style={{
              position: "absolute",
              top: "52%", left: "22%",
              width: "200px" , height: "30px", backgroundColor: "#6500FE" , zIndex: "1"
            }}></div>

            <div style={{
              position: "absolute",
              top: "62%", left: "18%",
              width: "200px" , height: "30px", backgroundColor: "#6500FE" , zIndex: "1"
            }}></div>
          </div>

          <div className='linkTo'>
            <a href="#maki-grid">
              <img src={arrowW} alt="My Happy SVG"/>
              Desliza
            </a>
          </div>

          </div>
        </Col>

        <Col>
          <div 
              style={{
              height: "95vh", 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <text className="titleSecondary">
              <p style={{lineHeight: "0.75"}}>Una selección de</p>
              <p style={{lineHeight: "0.75"}}><strong>nuestros mejores</strong></p>
              <p style={{lineHeight: "0.75"}}><strong>proyectos.</strong></p>
            </text>
            <text>
              <h4>
                Con más de 50 clientes confiando en<br/>
                nuestro trabajo, no podemos<br/>
                mostrarlo todo. Hicimos una pequeña<br/>
                selección.
              </h4>
            </text>
          </div>
        </Col>
      </Row>

      <Row id="maki-grid">
        <Col>
          <div style={{
              height: "auto", 
              width: "100%"
            }}
            >
            <GridPicture/>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={5}>
          <div 
            style={{
              // backgroundColor: "coral",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <text className="titleSecondary" style={{marginTop: "100px" }}>
              <strong>
                <p style={{lineHeight: "0.75"}}>Nuestros</p>
                <p style={{lineHeight: "0.75", color: "#6500FE"}} >clientes.</p>
              </strong>
            </text>
          </div>
        </Col>

        <Col md={7}>
          <Logos/>
        </Col>
      </Row>
    </div>
    </>
  )
}
export default Index

/*

	<span className="mytooltip">
		<img
			style="width: 200px;"
			src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1567228891/Untitled_design_6.png"
		/>
		<span className="tooltip-content">
			<img
				src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1567228891/Untitled_design_6.png"
			/>
		</span>
	</span>

  <div style={{  transform:"rotate(90deg)" , backgroundColor: "red"}}>
              <text>Desliza</text>
              <img src={arrowW} alt="My Happy SVG" style={{ margin: "5px 0px 0px 50px", height:"15px"}} />
            </div>
*/