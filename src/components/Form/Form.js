import React from 'react'

import './scss/form.scss'

const Form = () => {

  return (
    <>
    <div style={{
      height: "500px",
      width: "400px",
      // backgroundColor: "coral",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      borderRadius: "25px",
      border: "5px solid #F8F8F8"
    }}>
      <form className='form'>
        <label style={{
          marginTop: "50px",
          marginBottom: "25px",
          fontSize: "25px",
          width: "250px"
        }}>
          <p>
            <strong>Déjanos un mensaje</strong>
          </p>
        </label>
        <div className='box'> 
          <input type={"text"} id={"Nombre"}/>
          <label>Nombre</label>
        </div>
        <div className='box'>
          <input type={"text"} id={"Teléfono"}/>
          <label>Teléfono</label>
        </div>
        <div className='box'>
          <input type={"text"} id={"Correo"}/>
          <label>Correo</label>
        </div>
        <div className='box'>
          <input type={"text"} id={"Servicio que te interesa"}/>
          <label>Servicio</label>
        </div>
        <button className='button'>
          Enviar
        </button>
      </form>
    </div>
    </>
  )
}

export default Form