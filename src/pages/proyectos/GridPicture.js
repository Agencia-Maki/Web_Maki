import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


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