import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './right.scss'

export const Index = () => {
  return (
    <>
      <div className='list-socials-container'>
        <ul className="list-socials">
          <a href="https://www.facebook.com/agenciadigitalmaki/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} size="xl" />
          </a>
          <a href="https://www.instagram.com/makiagenciadigital.peru/" rel="noreferrer" target="_blank" >
            <FontAwesomeIcon icon={['fab', 'instagram']} size="xl" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=51932678688&text=Hola%20amigos%20de%20Maki%E2%9C%8B%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios/" rel="noreferrer" target="_blank" >
            <FontAwesomeIcon icon={['fab', 'whatsapp']} size="xl" />
          </a>
          <a href="https://www.tiktok.com/@maki.agencia.digital/" rel="noreferrer" target="_blank" >
            <FontAwesomeIcon icon={['fab', 'tiktok']} size="xl" />
          </a>
          <a href="https://www.linkedin.com/company/maki-agencia-digital/" rel="noreferrer" target="_blank" >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="xl" />
          </a>
        </ul>
      </div>
    </>
  )
}

export default Index