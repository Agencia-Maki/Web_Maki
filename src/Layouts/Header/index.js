import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.scss'
import Logo from '../../assets/images/logo.png'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  // console.log(showMenu)

  return (
    <>
    <Navbar className='maki-show-menu'>
      <Container>   
        <Navbar fixed="top" style={{height: "50px", width: "100%", backgroundColor: "white"}}>
          <Navbar.Brand href="#home">
            <a style={{width: "100%", display: "flex", justifyContent: "flex-start", marginLeft: "10px"}}
              // className="navbar-brand"
              href="/">
              <img src={Logo} alt="Logo" style={{height: "45px"}}/>
              <div className="sub-page"></div>
            </a>
          </Navbar.Brand>
          <NavDropdown className='maki-navbar' title="" id="navbarScrollingDropdown" style={{color: "#6500FE", fontSize: "25px"}}>
            <NavDropdown.Item className='maki-navbar-' href="/">Inicio</NavDropdown.Item>
            <NavDropdown.Item className='maki-navbar-' href="/proyectos">Proyectos</NavDropdown.Item>
            <NavDropdown.Item className='maki-navbar-' href="/servicios">Servicios</NavDropdown.Item>
            <NavDropdown.Item className='maki-navbar-' href="/nosotros">Nosotros</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='maki-navbar-' href="/contactanos">
              Contactanos
            </NavDropdown.Item>
          </NavDropdown>

          <ul style={{width: "100%", display:"flex", justifyContent: "flex-end", marginRight: "10px"}} 
            className="contact-button-top">
            <a href="/contactanos">
              Contáctanos
            </a>
          </ul>
        </Navbar>
      </Container>
    </Navbar>

    <div className='maki-menu-cel'>
      <Row>
        <div style={{height: "60px", width: "100%"}}>
        <div style={{width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
          <a href="/" style={{margin: "5px"}}>
            <img src={Logo} alt="Logo" style={{height: "45px"}}/>
            <div className="sub-page"></div>
          </a>   
        </div>
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "-55px"}}>
          <FontAwesomeIcon icon={faBars} style={{fontSize: '25px'}} onClick={() => setShowMenu(!showMenu)}/>
        </div>
        </div>

      </Row>
      <Row>
        { showMenu && <div className='menu'>
          <div className='item-menu'>
            <a href='/'>
              Inicio
            </a>
          </div>
          <div className='item-menu'>
            <a href='/proyectos' >
              Proyectos
            </a>
          </div>
          <div className='item-menu'>
            <a href='/servicios' >
              Servicios
            </a>
          </div>
          <div className='item-menu' >
            <a href='/nosotros' >
              Nosotros
            </a>
          </div>
          <div className='item-menu'>
            <a href='/contactanos' >
              Contactanos
            </a>
          </div>
        </div>}
      </Row>
    </div>
  </>

  )
}

export default Header

/*



          <li className="nav-item">
            <Link className="page-philo-link" to="/proyectos" onClick={() => setShowMenu(false)}>
              <span className="msk">
                <span>Proyectos</span>
              </span>
            </Link>
          </li>
 */