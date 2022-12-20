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
          {/* <label>Nombre</label> */}
          <input type={"text"} 
            id={"Nombre"} 
            placeholder="Nombre"/>
        </div>
        <div className='box'>
          {/* <label>Teléfono</label> */}
          <input  type={"text"} 
            id={"Teléfono"}
            placeholder="Teléfono"/>
        </div>
        <div className='box'>
          {/* <label>Correo</label> */}
          <input type={"text"} 
            id={"Correo"}
            placeholder="Correo"/>
        </div>
        <div className='box'>
          {/* <label>Servicio</label>w */}
          <input type={"text"} 
            id={"Servicio que te interesa"}
            placeholder="Servicio"/>
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