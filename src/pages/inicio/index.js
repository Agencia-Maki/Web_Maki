import React from 'react'
// import './style.css'
import './style.scss'

const Index = () => {
  return (
    <>

    <body>
      {/* <div className='colors: primary'> prueba</div> */}
      {/* <div className='caja'> Estas en un video </div> */}
      {/* <div className='caja'> Estas en una imagen </div> */}

      <section className="caja">
        <div className='card'>
          <text className='title'><strong>ESTILO MAKI<span style={{color: "purple"}} >.</span></strong></text><br/>
          <text><strong>Dualismo entre la inovación y lo tradicional</strong></text><br/>
          <text className='parrafo'>Entendemos lo que tu empresa necesita y optimizamos la manera de obtener resultados</text><br/>
          <text style={{color: "purple"}}>Conoce nuestros servicios</text>
        </div>
        <div className="carrucel">
          <div className='card' style={{backgroundColor: "#eeeeee"}}>
            <text className='imagen'>IMAGEN</text>
            <text style={{fontSize: "25px"}}>Web</text>
          </div>
          <div className='card' style={{backgroundColor: "#eeeeee"}}>
            <text className='imagen'>IMAGEN</text>
            <text style={{fontSize: "25px"}}>Social Media</text>
          </div>
          {/* <div className='card'>
            <text className='imagen'>IMAGEN</text>
            <text style={{fontSize: "25px"}}>Diseño Gráfico</text>
          </div>
          <div className='card'>
            <text className='imagen'>IMAGEN</text>
            <text style={{fontSize: "25px"}}>Foto y Video</text>
          </div> */}
        </div>
      </section>

      <section>
        <div className="caja">
          <div className='card'>
            <text className="titleSecondary">
              <strong>Ayudamos a empresas a llegar <span style={{color: "purple"}} >al siguiente nivel.</span></strong>
            </text><br/>
            <text className='parrafo'>
              Algunas de las empresas que confiaron en nosotros
              para empujarlos a seguir.
            </text><br/>
            <text className='color'>Conoce más</text>

          </div>

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
        </div>
      </section>

    </body>

    </>
  )
}
 export default Index