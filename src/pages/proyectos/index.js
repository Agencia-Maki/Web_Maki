import React from 'react'
import { Row, Col } from 'react-bootstrap';

import GridPicture from './GridPicture.js';
import Logos from '../../components/Logos/logos.js'


import './style.css'

const index = () => {
  return (
    <>
    <div style={{backgroundColor: "white"}}>

      <Row>
        <Col >
          <div style={{ 
              height: "650px", 
              width: "100%", 
              backgroundColor: "#1D1D1D", 
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }} 
          >

            <text className='title'
              style={{
                color: '#F8F8F8',
              }}
              >
              <strong>
                <p style={{lineHeight: "0.75"}}>PRO</p>
                <p style={{lineHeight: "0.75"}}>YEC</p>               
                <p style={{lineHeight: "0.75"}}>TOS<text style={{color: "#6500FE"}} >.</text></p>
              </strong>
            </text>
          </div>
        </Col>

        <Col>
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <text className="titleSecondary" style={{marginTop: "150px"}}>
              <p style={{lineHeight: "0.75"}}>Una selección de</p>
              <p style={{lineHeight: "0.75"}}><strong>nuestros mejores</strong></p>
              <p style={{lineHeight: "0.75"}}><strong>proyectos.</strong></p>
            </text>
            <text>
              <h4>
                Con más de 50 clientes confiando en<br/>
                nuestro trabajo, no podemos<br/>
                mostrando todo. Hicimos una pequeña<br/>
                selección.
              </h4>
            </text>
          </div>
        </Col>
      </Row>
      <Row>
        <GridPicture/>
      </Row>



		{/* <div style={{display: "flex"}}>
			<span className="mytooltip">
					<img style={{width: "500px", backgroundColor: "red"}} src={cato} alt="no carga"/>
				<span  className="tooltip-content">
					<img style={{width: "200px"}} src={aural} alt="no carga"/>
				</span>
			</span>
			<span className="mytooltip">
					<img style={{width: "500px", backgroundColor: "red"}} src={cato} alt="no carga"/>
				<span  className="tooltip-content">
					<img style={{width: "200px"}} src={aural} alt="no carga"/>
				</span>
			</span>
			<span className="mytooltip">
					<img style={{width: "500px", backgroundColor: "red"}} src={cato} alt="no carga"/>
				<span  className="tooltip-content">
					<img style={{width: "200px"}} src={aural} alt="no carga"/>
				</span>
			</span>
		</div> */}


      <Row>
      <Col md={5}>
        <div 
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center"
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
export default index

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
*/