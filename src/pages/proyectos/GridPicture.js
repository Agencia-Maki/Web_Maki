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

			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 700:2, 1100: 3}}
			>
				<Masonry>
				{PHOTOS.map((image, i) => (
					<div>
							<img
								key={i}
								src={image.img}
								style={{ width: "100%", display: "block" }}
								alt=""
							/>
					</div>
				))}
				</Masonry>
			</ResponsiveMasonry>

  )
}

export default GridPicture