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
          <div className='card'>Web</div>
          <div className='card'>Social Media</div>
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
              IMAGENES
          </div>
        </div>
      </section>

    </body>

    </>
  )
}
 export default Index