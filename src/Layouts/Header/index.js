import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import './header.scss'
import Logo from '../../assets/images/logo.png'


const Header = () => {

  return (
    <>
    <Navbar>
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
            <NavDropdown.Item className='maki-navbar-' href="/Contactanos">
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

  </>

  )
}

export default Header