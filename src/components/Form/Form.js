import React from 'react'

import './scss/form.scss'

const Form = () => {

  return (
    <>
    <div className='form-container' style={{
    }}>
      <form className='form'>
        <label>
          <p>
            <strong>Déjanos un mensaje</strong>
          </p>
        </label>
        <div className='box'> 
          <label>Nombre</label>
          <input type={"text"} id={"Nombre"}/>
        </div>
        <div className='box'>
          <label>Teléfono</label>
          <input  type={"text"} id={"Teléfono"}/>
        </div>
        <div className='box'>
          <label>Correo</label>
          <input type={"text"} id={"Correo"}/>
        </div>
        <div className='box'>
          <label>Servicio</label>
          <input type={"text"} id={"Servicio que te interesa"}/>
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