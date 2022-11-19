import React from 'react'

const timeline = () => {

  return (
    <>
      <div className='caja' 
        style={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >        
        <text>
          <p className='titleSecondary'
            style={{ 
              display: "flex", 
              justifyContent: "center"
            }}
          >
            <strong>Nuestros Valores</strong>
          </p>
        </text>

        <ul className="timeline">
          <li>
            <div className="status">
              <h4> Profesionalismo </h4>
            </div>
          </li>
          <li>
            <div className="status">
              <h4> Innovación </h4>
            </div>
          </li>
          <li>
            <div className="status">
              <h4> Responsabilidad </h4>
            </div>
          </li>
          <li>
            <div className="status">
              <h4> Puntualidad </h4>
            </div>
          </li>
          <li>
            <div className="status">
              <h4> Trabajo en equipo </h4>
            </div>
          </li>
        </ul>      
      </div>
    </>
  )
}

export default timeline