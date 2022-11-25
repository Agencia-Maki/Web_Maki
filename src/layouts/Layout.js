import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './scss/layout.scss'


const Layout = (props) => {
  return (
    <>
      <Header />
        <div className="web-content">
          {props.children}
        </div>   
      <Footer />
    </>
  )
}

export default Layout