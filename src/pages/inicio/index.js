import React from 'react'
import './style.css'

const Index = () => {
  return (
    <>

    <body>
      <div className='caja'> Estas en un video </div>
      <div className='caja'> Estas en una imagen </div>

      <section className="caja">
        <div className='card'>
          <text className='title'><strong>ESTILO MAKI<span style={{color: "purple"}} >.</span></strong></text><br/>
          <text><strong>Dualismo entre a inovación y lo tradicional</strong></text><br/>
          <text>Entendemos lo que tu empresa necesita y optimizamos la manera de obtener resultados</text><br/>
          <text style={{color: "purple"}}>Conoce nuestros servicios</text>
        </div>
        <div className="carrucel">
          <div className='card'>
            <text className='imagen'>IMAGEN</text>
            <text style={{fontSize: "25px"}}>Web</text>
          </div>
          <div className='card'>
            <text className='imagen'>IMAGEN</text>
            <text style={{fontSize: "25px"}}>Social Media</text>
          </div>
        </div>
      </section>

      <section>
        <div className="caja">
          <div className='card'>
            <text className="titleSecondary">
              <strong>Ayudamos a empresas a llegar <span style={{color: "purple"}} >al siguiente nivel.</span></strong>
            </text><br/>
            <text>
              Algunas de las empresas que confiaron en nosotros
              para empujarlos a seguir.
            </text><br/>
            <small style={{color: "purple"}}>Conoce más</small>

          </div>

          <div>
            <text>img 1</text>
            <text>img 2</text>
            <text>img 3</text>
            <text>img 4</text>
          </div>
        </div>
      </section>

    </body>

    </>
  )
}
 export default Index