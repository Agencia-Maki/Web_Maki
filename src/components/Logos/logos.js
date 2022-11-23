import React from 'react'
import Masonry from "react-masonry-component";

import cato from '../../assets/images/inicio/Grupo 513.png'
import aural from '../../assets/images/inicio/Grupo 498.png'
import magna from '../../assets/images/inicio/Grupo 506.png'
import puertoInca from '../../assets/images/inicio/Grupo 98.png'
import gpr from '../../assets/images/inicio/Grupo 499.png'
import altoImpacto from '../../assets/images/inicio/Grupo 507.png'
import anan from '../../assets/images/inicio/Grupo 483.png'
import vapreh from '../../assets/images/inicio/Grupo 502.png'
import parisinos from '../../assets/images/inicio/Grupo 95.png'

const Logos = () => {
  return (
    <>
    
    <Masonry>

      <img className='logos' src={cato} alt="No Cargo Imagen" />
      <img className='logos' src={aural} alt="No Cargo Imagen" />
      <img className='logos' src={magna} alt="No Cargo Imagen" />
      <img className='logos' src={puertoInca} alt="No Cargo Imagen" />
      <img className='logos' src={gpr} alt="No Cargo Imagen" />
      <img className='logos' src={altoImpacto} alt="No Cargo Imagen" />
      <img className='logos' src={anan} alt="No Cargo Imagen" />
      <img className='logos' src={vapreh} alt="No Cargo Imagen" />
      <img className='logos' src={parisinos} alt="No Cargo Imagen" />

    </Masonry>
    </>

  )
}

export default Logos