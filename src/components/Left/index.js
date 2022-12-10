import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ContactModal from '../Modal/modalContact'


export const Index = () => {
  
  const [showMenu, setShowMenu] = useState(false)

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

  return (
    <>
    
      <div style={{ backgroundColor: "red", height: "100%" , width: "50px"}}> 
    
        <Link className="navbar-toggle" onClick={() => toggleMenu()} style={{zIndex: 1000}}>
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

      </div>

      <div>
        {/* <div className="menu-container">
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

        </div> */}

        {/* <button className="newsletterLink" onClick={() => handleShow()}>
          <span className="block-title">Quieres trabajar con nostros?</span>
          <span className="next-page-title">Déjanos un mensaje.</span>
        </button> */}
      </div>

      {/* <div className="borders">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="left"></div>
        <div className="right"></div>
      </div> */}

      {/* <div className="menuColor" onClick={() => setShowMenu(false)}></div>
      <ContactModal 
        showModal={showModal}
        handleClose={handleClose}
        handleShow={handleShow}
      /> */}


    </>
    
  )
}

export default Index



      