import React from 'react'
import Header from '../components/Header'
import Left from '../components/Left'
import Right from '../components/Right'
import Footer from '../components/Footer'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './scss/layout.scss'


const Layout = (props) => {
  return (
    <>
      <Container fluid>
        <Header />
        <Row>
          <Col md={1} style={{padding: "0"}}> 
            <Left/>
          </Col>
          <Col md={10}>
            <div >
              {props.children}
            </div>
          </Col>
          <Col md={1} style={{padding: "0"}}>
            <Right/>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  )
}

export default Layout