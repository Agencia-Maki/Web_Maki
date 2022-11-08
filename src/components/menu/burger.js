import React, { useState } from 'react'

import './header.scss'
import './menu.scss'
import Logo from '../../assets/images/logo.png'

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={showMenu ? "loaded menuOpen" : "loaded" }>
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

        <ul className="list-socials hidden-sm-down">
          <li>
            <a href="https://www.facebook.com/agence.wokine/" rel="external" target="_blank">
              <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6.24 13">
                  <title>facebook</title>
                  <path d="M1.59,13V6.9H0V4.71H1.59V2.83A2.77,2.77,0,0,1,4.7,0,13,13,0,0,1,6.23.09L6.17,2.14H4.79c-.78,0-.91.36-.91,1v1.6H6.24l-.1,2.2H3.88V13Z"></path>
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/agencewokine" rel="external" target="_blank">
              <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13.39 13.39">
                  <title>instagram</title>
                  <path d="M13.35,9.45A4.91,4.91,0,0,1,13,11.08a3.42,3.42,0,0,1-2,2,4.91,4.91,0,0,1-1.62.31c-.71,0-.94,0-2.76,0s-2,0-2.76,0A4.91,4.91,0,0,1,2.31,13a3.28,3.28,0,0,1-1.19-.77,3.28,3.28,0,0,1-.77-1.19A4.91,4.91,0,0,1,0,9.45c0-.71,0-.94,0-2.76s0-2,0-2.76A4.91,4.91,0,0,1,.35,2.31a3.28,3.28,0,0,1,.77-1.19A3.28,3.28,0,0,1,2.31.35,4.91,4.91,0,0,1,3.93,0c.71,0,.94,0,2.76,0s2,0,2.76,0a4.91,4.91,0,0,1,1.62.31,3.28,3.28,0,0,1,1.19.77A3.28,3.28,0,0,1,13,2.31a4.91,4.91,0,0,1,.31,1.62c0,.71,0,.94,0,2.76S13.38,8.74,13.35,9.45ZM12.14,4a3.7,3.7,0,0,0-.23-1.24,2.07,2.07,0,0,0-.5-.77,2.07,2.07,0,0,0-.77-.5A3.7,3.7,0,0,0,9.4,1.24c-.71,0-.92,0-2.7,0s-2,0-2.7,0a3.7,3.7,0,0,0-1.24.23A2.07,2.07,0,0,0,2,2a2.08,2.08,0,0,0-.5.77A3.7,3.7,0,0,0,1.25,4c0,.71,0,.92,0,2.7s0,2,0,2.7a3.7,3.7,0,0,0,.23,1.24,2.08,2.08,0,0,0,.5.77,2.07,2.07,0,0,0,.77.5A3.7,3.7,0,0,0,4,12.14c.71,0,.92,0,2.7,0s2,0,2.7,0a3.7,3.7,0,0,0,1.24-.23,2.22,2.22,0,0,0,1.27-1.27,3.7,3.7,0,0,0,.23-1.24c0-.71,0-.92,0-2.7S12.17,4.69,12.14,4Zm-1.88-.06a.8.8,0,1,1,.8-.8A.8.8,0,0,1,10.27,3.92ZM6.69,10.13a3.44,3.44,0,1,1,3.44-3.44A3.44,3.44,0,0,1,6.69,10.13Zm0-5.67A2.23,2.23,0,1,0,8.92,6.69,2.23,2.23,0,0,0,6.69,4.46Z"></path>
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/wokine?lang=fr" rel="external" target="_blank">
              <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13.17 10.6">
                  <title>twitter</title>
                  <path className="cls-1" d="M13.17,1.26a5.43,5.43,0,0,1-1.55.42A2.69,2.69,0,0,0,12.81.2a5.45,5.45,0,0,1-1.72.65A2.71,2.71,0,0,0,6.42,2.68a2.66,2.66,0,0,0,.07.61A7.7,7.7,0,0,1,.92.49a2.66,2.66,0,0,0,.84,3.57A2.72,2.72,0,0,1,.53,3.73v0A2.69,2.69,0,0,0,2.7,6.39a2.73,2.73,0,0,1-1.22,0A2.7,2.7,0,0,0,4,8.29,5.45,5.45,0,0,1,.64,9.44,5.53,5.53,0,0,1,0,9.4a7.7,7.7,0,0,0,4.14,1.2A7.6,7.6,0,0,0,11.83,3q0-.17,0-.35A5.46,5.46,0,0,0,13.17,1.26Z"></path>
                </svg>
              </i>
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
            </address> <br/>
            <a href="tel:+51932678688" rel="external" className="phone">+51932678688</a><br />
            <a href="mailto:ventas@agenciamaki.com" rel="external" className="mail">ventas@agenciamaki.com</a>
          </div>

        </div>

        <button className="newsletterLink">
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