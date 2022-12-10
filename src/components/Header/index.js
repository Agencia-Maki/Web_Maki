import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import './header.scss'
import './menu.scss'
import Logo from '../../assets/images/logo.png'


const Header = () => {

  return (
    <>
    <Navbar>
      <Container>
        <Navbar fixed="top" style={{height: "50px", width: "100%", backgroundColor: "white"}}>
          <a style={{width: "100%", display: "flex", justifyContent: "flex-start", marginLeft: "10px"}}
            // className="navbar-brand"
            href="/">
            <img src={Logo} alt="Logo" style={{height: "45px"}}/>
            <div className="sub-page"></div>
          </a>

          <ul style={{width: "100%", display:"flex", justifyContent: "flex-end", marginRight: "10px"}} 
            className="contact-button-top hidden-sm-down">
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