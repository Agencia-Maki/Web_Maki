import React from 'react'
import './scss/footer.scss'

const Footer = () => {
  return (
    <div 
      className='footer'
      style={{ 
      color: "#eeeeee",
      backgroundColor: "#6500FE" }}
      // class="d-grid gap-3"
    >
      <div>
        <text>@2022 MAKI</text><br/>
        <text>Todos los derechos</text>
      </div>
      <div>
        <text style={{fontSize: "12px"}}>Urb. Felipe Mz. A lte. 1 Cerro Colorado</text><br/>
        <text>+51 987 652 464</text><br/>
        <text>ventas@agenciamaki.com</text>
      </div>

      <div>
        <text>Horarios de atencion</text><br/>
        <text>Lunes a Viernes:  8:00 am - 6:00 pm</text><br/>
        <text>Sabados:  8:00 am - 2:00 pm</text>
      </div>

      <div>
        <text>¿Quieres trabajar con nosotros?</text><br/>
        <text>DÉJANOS UN MENSAJE</text>
      </div>

    </div>
  )
}

export default Footer