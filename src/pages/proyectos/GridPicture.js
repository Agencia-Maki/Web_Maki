import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


import hefziba from '../../assets/images/proyectos/hefziba.jpg'
import aural from '../../assets/images/proyectos/aural.jpg'
import iyali from '../../assets/images/proyectos/iyali.jpg'
import grp from '../../assets/images/proyectos/grp.jpg'
import cato from '../../assets/images/proyectos/catolica.jpg'
import capital from '../../assets/images/proyectos/capital.jpg'
import venturaTravel from '../../assets/images/proyectos/venturaTravel.jpg'
import anan from '../../assets/images/proyectos/hanan.jpg'
import nuevoHorizonte from '../../assets/images/proyectos/nuevoHorizonte.jpg'
import vapreh from '../../assets/images/proyectos/vapreh.jpg'
import puertoInka from '../../assets/images/proyectos/puertoInka.jpg'
import parisinos from '../../assets/images/proyectos/parisinos.jpg'
import carpediem from '../../assets/images/proyectos/carpediem.jpg'
import altoImpacto from '../../assets/images/proyectos/altoImpacto.jpg'
import magna from '../../assets/images/proyectos/magna.jpg'


import logoCato from '../../assets/images/logos/Grupo 513.png'
import logoAural from '../../assets/images/logos/Grupo 498.png'
import logoMagna from '../../assets/images/logos/Grupo 506.png'
import logoPuertoInka from '../../assets/images/logos/Grupo 98.png'
import logogpr from '../../assets/images/logos/Grupo 499.png'
import logoAltoImpacto from '../../assets/images/logos/Grupo 507.png'
import logoHanan from '../../assets/images/logos/Grupo 483.png'
import logoVapreh from '../../assets/images/logos/Grupo 502.png'
import logoParisinos from '../../assets/images/logos/Grupo 95.png'

import './gridPicture.scss'

const PHOTOS = [
	{img: hefziba, logo: ""},
	{img: aural, logo: logoAural},
	{img: iyali, logo: ""},
	{img: grp, logo: logogpr},
	{img: cato, logo: logoCato},
	{img: capital, logo: ""},
	{img: venturaTravel, logo: ""},
	{img: anan, logo: logoHanan},
	{img: nuevoHorizonte, logo: ""},
	{img: vapreh, logo: logoVapreh},
	{img: puertoInka, logo: logoPuertoInka},
	{img: parisinos, logo: logoParisinos},
	{img: carpediem, logo: ""},
	{img: altoImpacto, logo: logoAltoImpacto},
	{img: magna, logo: logoMagna}
]

const GridPicture = () => {
  return (

	<ResponsiveMasonry
		columnsCountBreakPoints={{ 350: 1, 700:2, 1100: 3}}
	>
		<Masonry>
		{PHOTOS.map((image, i) => (
			<div key={i} className='imgBoxP'>
				<div className="fondoP">
					<img					
					src={image.img}
					alt=""
					/>

				<div className="logoP">
					<img
						src={image.logo}
						alt=""
					/>

				</div>
				</div>
			
			</div>
		))}
		</Masonry>
	</ResponsiveMasonry>

  )
}

export default GridPicture

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