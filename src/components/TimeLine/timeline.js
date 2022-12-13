import React from 'react'
import './style.scss'

const timeline = () => {

  return (
    <>
      <div className='caja timeLine-content'>
        <div style={{
          //backgroundColor: "red",
          width: "100%",
          height: "50vh",
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <p className='titleSecondary'
            style={{          
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            }}
          >
            <strong>Nuestros Valores</strong>
          </p>

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
      </div>
    </>
  )
}

export default timeline