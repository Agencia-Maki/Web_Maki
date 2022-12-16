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
                <h5> Profesionalismo </h5>
              </div>
            </li>
            <li>
              <div className="status">
                <h5> Innovación </h5>
              </div>
            </li>
            <li>
              <div className="status">
                <h5> Responsabilidad </h5>
              </div>
            </li>
            <li>
              <div className="status">
                <h5> Puntualidad </h5>
              </div>
            </li>
            <li>
              <div className="status">
                <h5> Trabajo en equipo </h5>
              </div>
            </li>
          </ul>    
        </div>
      </div>
    </>
  )
}

export default timeline