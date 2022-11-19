import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import cato from '../../assets/images/inicio/Grupo 513.png'
import aural from '../../assets/images/inicio/Grupo 498.png'
import magna from '../../assets/images/inicio/Grupo 506.png'
import puertoInca from '../../assets/images/inicio/Grupo 98.png'
import gpr from '../../assets/images/inicio/Grupo 499.png'
import altoImpacto from '../../assets/images/inicio/Grupo 507.png'
import anan from '../../assets/images/inicio/Grupo 483.png'
import vapreh from '../../assets/images/inicio/Grupo 502.png'
import parisinos from '../../assets/images/inicio/Grupo 95.png'

import './style.css'

const index = () => {
  return (
    <>
    <div style={{backgroundColor: "white"}}>

      <Row>
        <Col style={{ height: "650px" , backgroundColor: "#1D1D1D"}}>
          <div style={{position: "relative"}}>
            <text className='title'
              style={{
                color: '#F8F8F8',
                position: "absolute",
                top: "50%",
                right: "5%",
                marginTop: "15%"
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

		<div>

      <Row>
        <Col style={{ height: "400px", backgroundColor: "red"}}>
					<span className="mytooltip">
						<img style={{width: "500px", backgroundColor: "red"}} src={cato} alt="no carga"/>
						<span  className="tooltip-content">
							<img style={{width: "200px"}} src={aural} alt="no carga"/>
						</span>
					</span>
        </Col>
        <Col style={{ backgroundColor: "blue"}}>
          <div>2</div>
        </Col>
        <Col style={{ backgroundColor: "green"}}>
          <div>3</div>
        </Col>
      </Row>
			
			<Row>
				<Col style={{ height: "400px", backgroundColor: "black"}}>
					<div>1</div>
				</Col>
				<Col style={{ backgroundColor: "blue"}}>
					<div>2</div>
				</Col>
			</Row>

			<Row>
				<Col>
					<Row>
						<Col style={{ height: "200px", backgroundColor: "green"}}>
							<div>4</div>
						</Col>
						<Col style={{ height: "200px", backgroundColor: "red"}}>
							<div>4</div>
						</Col>
					</Row>
					<Row>
						<Col style={{ height: "200px", backgroundColor: "blue"}}>
							<div>4</div>
						</Col>
						<Col style={{ height: "200px", backgroundColor: "black"}}>
							<div>4</div>
						</Col>
					</Row>
				</Col>
				<Col style={{ height: "400px", backgroundColor: "green"}}>
					<div>4</div>
				</Col>
			</Row>

			<Row>
				<Col style={{ height: "400px", backgroundColor: "red"}}>
					<div>1</div>
				</Col>
				<Col style={{backgroundColor: "blue"}}>
				</Col>
				<Col style={{backgroundColor: "black"}}>
				</Col>
			</Row>

			<Row>
        <Col style={{ height: "400px", backgroundColor: "blue"}}>
          <div>1</div>
        </Col>
        <Col style={{ backgroundColor: "red"}}>
          <div>2</div>
        </Col>
        <Col style={{ backgroundColor: "green"}}>
          <div>3</div>
        </Col>
      </Row>
			

		</div>


		<div style={{display: "flex"}}>
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
		</div>


      <Row>
      <Col>
        <div 
          style={{
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