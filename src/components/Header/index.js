import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


import './header.scss'
import './menu.scss'
import Logo from '../../assets/images/logo.png'

const Header = () => {
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

        <Link className="navbar-toggle" onClick={() => toggleMenu()} >
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
        </Link>

        <ul className="contact-button-top hidden-sm-down">
          <a href="/contactanos">
            Contáctanos
          </a>
        </ul>

        <ul className="list-socials hidden-sm-down">
          <li>
            <a href="https://www.facebook.com/agenciadigitalmaki/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/makiagenciadigital.peru/" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=51932678688&text=Hola%20amigos%20de%20Maki%E2%9C%8B%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios/" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', 'whatsapp']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@maki.agencia.digital/" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', 'tiktok']} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/maki-agencia-digital/" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="xl" />
            </a>
          </li>
        </ul>

      </header>

      <div id="menu">
        <div className="menu-container">
          <ul className="menu-nav">
            <li className="nav-item">
              <Link className="page-home-link" to="/" onClick={() => setShowMenu(false)}>
                <span className="msk">
                  <span>Inicio</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="page-philo-link" to="/proyectos" onClick={() => setShowMenu(false)}>
                <span className="msk">
                  <span>Proyectos</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="page-ideas-link" to="/servicios" onClick={() => setShowMenu(false)}>
                <span className="msk">
                  <span>Servicios</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="page-projects-link" to="/nosotros" onClick={() => setShowMenu(false)}>
                <span className="msk">
                  <span>Nosotros</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="page-careers-link" to="/contactanos" onClick={() => setShowMenu(false)}>
                <span className="msk">
                  <span>Contáctanos</span>
                </span>
              </Link>
            </li>
          </ul>


          <div className="contact">
            <address className="addresse">
              <a href="https://goo.gl/maps/fzzmqZ25Gmz" rel="noreferrer" target="_blank">
                Urb Real Felipe Mz. A Lte. 1 Cerro Colorado
              </a>
            </address> <br />
            <a href="tel:+51932678688" rel="noreferrer" className="phone">+51932678688</a><br />
            <a href="mailto:ventas@agenciamaki.com" rel="noreferrer" className="mail">ventas@agenciamaki.com</a>
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

export default Header