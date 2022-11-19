import React from 'react'

import { Button } from 'react-bootstrap'
import './scss/form.scss'

const Form = (props) => {

  return (
    <div className='form'>
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
    </div>
  )
}

export default Form


/* 
<div>
<label>
  <strong>{props.label}</strong>
</label>
<form>
  <div className='box'> 
    <input type={"text"} id={"Nombre"}/>
    </form>
    <label>Nombre</label>
  </div>
<Button as="a" style={{backgroundColor: "#6500FE"}}>
  Enviar
</Button>
</div>
*/