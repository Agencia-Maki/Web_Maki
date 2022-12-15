import React, {useState} from 'react'
import ContactModal from '../../components/Modal/modalContact'
import { Link } from 'react-router-dom';

import './menu.scss'

const Menu = (props) => {

  console.log("MENU")
  console.log(props)
  const { showMenu, setShowMenu } = props;

  // console.log(ShowMenu)
  // console.log(setShowMenu)

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
  <>
  
    <div className={showMenu ? "menu-container" : ""}>
      <ul className=''>
        <li>
          <Link to="/" onClick={() => setShowMenu(false)}>
            <span>
              <span>Inicio</span>
            </span>
          </Link>
        </li>
      </ul>
      </div>

    </>

  )
}

export default Menu


/*


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


*/