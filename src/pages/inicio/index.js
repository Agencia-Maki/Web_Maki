import React from 'react'
import Card from '../../components/Card/Card'

import font from '../../assets/images/font.png'
import web from '../../assets/images/web.png'
import socialMedia from '../../assets/images/socialMedia.png'

import '../../styles/inicio/style.scss'

const Index = () => {
  return (
    <>

    <div className='caja'>
      <img className='imagen' src={font} alt="No Cargo Imagen" />
    </div>

    <div className='caja gris'>
      <Card>
        <text className='title' style={{color: '#1D1D1B'}}><strong>ESTILO MAKI<text style={{color: "#6500FE"}} >.</text></strong></text><br/>
        <text><strong>Dualismo entre la inovación y lo <br/>tradicional</strong></text><br/>
        <text className='parrafo'>Entendemos lo que tu empresa necesita y optimizamos la manera de obtener<br/> resultados</text><br/>
        <text style={{color: "#6500FE"}}>Conoce nuestros servicios</text>
      </Card>
      <Card color="white">
        <img className='imagenCard' src={web} alt="No Cargo Imagen" />
        <text><strong>Web</strong></text>
      </Card>
      <Card color="white">
        <img className='imagenCard' src={socialMedia} alt="No Cargo Imagen" />
        <text><strong>Social Media</strong></text>
      </Card>
    </div>

    <div className='caja'>
      <Card>
        <text className="titleSecondary">
          <strong>Ayudamos a empresas a llegar <br/><text style={{color: "#6500FE"}} >al siguiente nivel.</text></strong>
        </text><br/>
        <text className='parrafo'>
          Algunas de las empresas que confiaron en nosotros
          para empujarlos a seguir.
        </text><br/>
        <text style={{color: "#6500FE"}}>Conoce más</text>
      </Card>
      <Card>
        <div className='grilla'>
            <text className='logos'>img 1</text>
            <text className='logos'>img 2</text>
            <text className='logos'>img 3</text>
            <text className='logos'>img 4</text>
            <text className='logos'>img 5</text>
            <text className='logos'>img 6</text>
            <text className='logos'>img 7</text>
            <text className='logos'>img 8</text>
            <text className='logos'>img 9</text>
          </div>
      </Card>



    </div>

    </>
  )
}
 export default Index