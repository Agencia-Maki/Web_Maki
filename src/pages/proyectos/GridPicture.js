import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-masonry-component";


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

const PHOTOS = [
	{img: hefziba},
	{img: aural},
	{img: iyali},
	{img: grp},
	{img: cato},
	{img: capital},
	{img: venturaTravel},
	{img: anan},
	{img: nuevoHorizonte},
	{img: vapreh},
	{img: puertoInka},
	{img: parisinos},
	{img: carpediem},
	{img: altoImpacto},
	{img: magna}
]

const GridPicture = () => {
  return (
    <div>

			{/* <div style={{ 
				// backgroundColor: "red",
				height: "500px", 
				width: "100%",
				display: "flex" , 
				justifyContent: "center", 
				alignItems: "center"}}>
      
        <Masonry> 

        {PHOTOS.map((photo) => (
            <img style={{margin: "0px"}} className="log"  src={photo.img} alt="" />
        ))}

				</Masonry>
      
			</div> */}


			<div>
				<Masonry>
          <img style={{margin: "0px"}} src={hefziba} alt="No Carga"/>
					<img style={{margin: "0px"}} src={iyali} alt="No Carga"/>
          <img style={{margin: "0px"}} src={aural} alt="No Carga"/>
				</Masonry>
      </div>
			<div>
				<Masonry>
					<img style={{margin: "0px"}} src={grp} alt="No Carga"/>
          <img style={{margin: "0px"}} src={cato} alt="No Carga"/>
				</Masonry>
			</div>
			
			<div>
				<Masonry>

					<img style={{margin: "0px"}} src={capital} alt="No Carga"/>
					<img style={{margin: "0px"}} src={venturaTravel} alt="No Carga"/>
					<img style={{margin: "0px"}} src={anan} alt="No Carga"/>
					<img style={{margin: "0px"}} src={nuevoHorizonte} alt="No Carga"/>
					<img style={{margin: "0px"}} src={vapreh} alt="No Carga"/>
			
				</Masonry>
			</div>

			<div>
				<Masonry>
					<img style={{margin: "0px"}} src={puertoInka} alt="No Carga"/>
					<img style={{margin: "0px"}} src={parisinos} alt="No Carga"/>
					<img style={{margin: "0px"}} src={carpediem} alt="No Carga"/>
				</Masonry>
			</div>

			<div>
				<Masonry>
					<img style={{margin: "0px"}} src={altoImpacto} alt="No Carga"/>
					<img style={{margin: "0px"}} src={magna} alt="No Carga"/>
				</Masonry>
			</div>

		</div>
  )
}

export default GridPicture


		/* <div style={{display: "flex"}}>
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
		</div> */