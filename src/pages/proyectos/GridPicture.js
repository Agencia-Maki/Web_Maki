import React from 'react'
import { Row, Col } from 'react-bootstrap';

import hefziba from '../../assets/images/proyectos/hefziba.png'
import aural from '../../assets/images/proyectos/aural.png'
import iyali from '../../assets/images/proyectos/iyali.png'
import grp from '../../assets/images/proyectos/grp.png'
import cato from '../../assets/images/proyectos/cato.png'
import capital from '../../assets/images/proyectos/capital.png'
import venturaTravel from '../../assets/images/proyectos/venturaTravel.png'
import anan from '../../assets/images/proyectos/anan.png'
import nuevoHorizonte from '../../assets/images/proyectos/nuevoHorizonte.png'
import vapreh from '../../assets/images/proyectos/vapreh.png'
import puertoInka from '../../assets/images/proyectos/puertoInka.png'
import parisinos from '../../assets/images/proyectos/parisinos.png'
import carpediem from '../../assets/images/proyectos/carpediem.png'
import altoImpacto from '../../assets/images/proyectos/altoImpacto.png'
import magna from '../../assets/images/proyectos/magna.png'


import './gridPicture.css'

const GridPicture = () => {
  return (
    <div>

      <Row>
        <Col className='noPadding' lg={5} style={{ backgroundColor: "red", display: "inline-block"}}>
          <img img src={hefziba} alt="No Carga"/>
        </Col>
        <Col className='noPadding' lg={2} style={{ backgroundColor: "blue"}}>
          <img img src={aural} alt="No Carga"/>
        </Col>
        <Col className='noPadding' lg={5} style={{ backgroundColor: "green"}}>
					<img img src={iyali} alt="No Carga"/>
        </Col>
      </Row>
			
			<Row>
				<Col className='noPadding' lg={7} style={{ backgroundColor: "black"}}>
          <img img src={grp} alt="No Carga"/>
				</Col>
				<Col className='noPadding' lg={5} style={{ backgroundColor: "blue"}}>
          <img img src={cato} alt="No Carga"/>
				</Col>
			</Row>

			<Row>
				<Col lg={7}>
					<Row>
						<Col className='noPadding' lg={8} style={{ backgroundColor: "green"}}>
              <img img src={capital} alt="No Carga"/>
						</Col>
						<Col className='noPadding' lg={4} style={{ backgroundColor: "red"}}>
              <img img src={venturaTravel} alt="No Carga"/>
						</Col>
					</Row>
					<Row>
						<Col className='noPadding' lg={4} style={{ backgroundColor: "blue"}}>
              <img img src={anan} alt="No Carga"/>
						</Col>
						<Col className='noPadding' log={8} style={{ width: "100px" , backgroundColor: "black"}}>
              <img img src={nuevoHorizonte} alt="No Carga"/>
						</Col>
					</Row>
				</Col>
				<Col className='noPadding' lg={5} style={{ backgroundColor: "green"}}>
					<img img src={vapreh} alt="No Carga"/>
				</Col>
			</Row>

			<Row>
				<Col className='noPadding' lg={7} style={{backgroundColor: "coral"}}>
					<Row>
						<Col className='noPadding' lg={8} style={{ backgroundColor: "red"}}>
							<img img src={puertoInka} alt="No Carga"/>
						</Col>
						<Col className='noPadding' lg={4} style={{backgroundColor: "blue"}}>
							<img img src={parisinos} alt="No Carga"/>
						</Col>
					</Row>
				</Col>
				<Col className='noPadding' lg={5} style={{backgroundColor: "black"}}>
					<img img src={carpediem} alt="No Carga"/>
				</Col>
			</Row>

			<Row>
        <Col className='noPadding' lg={7} style={{ backgroundColor: "blue"}}>
					<img img src={altoImpacto} alt="No Carga"/>
        </Col>
        <Col className='noPadding' lg={5} style={{ backgroundColor: "red"}}>
					<img img src={magna} alt="No Carga"/>
        </Col>
      </Row>

		</div>
  )
}

export default GridPicture