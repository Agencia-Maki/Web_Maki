import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGaugeHigh,
  faUserAstronaut,
  faClipboardUser,
  faMeteor,
  faUsersViewfinder
} from '@fortawesome/free-solid-svg-icons'

import './header.scss'
import './menu.scss'
import Logo from '../../assets/images/logo.png'

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const sendCurriculum = () => {
    alert("No hay Pan SECO :V")
  }

  return (
    <div className={showMenu ? "loaded menuOpen" : "loaded"}>
      <header className="header">

        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" />
          <div className="sub-page"></div>
        </a>

        <a className="navbar-toggle" href="#" onClick={() => toggleMenu()}>
          <i className="icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </i>
          <span className="txt">
            <span>M</span>
            <span>A</span>
            <span>K</span>
            <span>I</span>
          </span>
        </a>

        <ul class="contact-button-top hidden-sm-down">
          <a href="#">
            Contáctanos
          </a>
          {/* <li class="active"><a href="https://www.wokine.com/en/" rel="external">en.</a></li>
          <li><a href="https://www.wokine.com/" rel="external">fr.</a></li> */}
        </ul>

        <ul className="list-socials hidden-sm-down">
          <li>
            <a href="https://www.facebook.com/agenciadigitalmaki/" rel="external" target="_blank">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/makiagenciadigital.peru/" rel="external" target="_blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=51932678688&text=Hola%20amigos%20de%20Maki%E2%9C%8B%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios/" rel="external" target="_blank">
              <FontAwesomeIcon icon={['fab', 'whatsapp']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@maki.agencia.digital/" rel="external" target="_blank">
              <FontAwesomeIcon icon={['fab', 'tiktok']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/maki-agencia-digital/" rel="external" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="xl" />
            </a>
          </li>
        </ul>

      </header>


      <div id="menu">
        <div className="menu-container">
          <ul className="menu-nav">
            <li className="nav-item">
              <a className="page-home-link active" href="#">
                <span className="msk">
                  <span>Inicio</span>
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a className="page-philo-link" href="#">
                <span className="msk">
                  <span>Proyectos</span>
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a className="page-ideas-link" href="#">
                <span className="msk">
                  <span>Servicios</span>
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a className="page-projects-link" href="#">
                <span className="msk">
                  <span>Nosotros</span>
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a className="page-careers-link" href="#">
                <span className="msk">
                  <span>Contáctanos</span>
                </span>
              </a>
            </li>
          </ul>


          <div className="contact">
            <address className="addresse">
              <a href="https://goo.gl/maps/fzzmqZ25Gmz" rel="external" target="_blank">
                Urb Real Felipe Mz. A Lte. 1 Cerro Colorado
              </a>
            </address> <br />
            <a href="tel:+51932678688" rel="external" className="phone">+51932678688</a><br />
            <a href="mailto:ventas@agenciamaki.com" rel="external" className="mail">ventas@agenciamaki.com</a>
          </div>

        </div>

        <button className="newsletterLink" onClick={() => sendCurriculum()}>
          <span className="block-title">Quieres trabajar con nostros?</span>
          <span className="next-page-title">Déjanos un mensaje.</span>
        </button>

      </div>


      <div className="borders">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="left"></div>
        <div className="right"></div>
      </div>


      <div className="menuColor" onClick={() => setShowMenu(false)}></div>
    </div>
  )
}

export default BurgerMenu