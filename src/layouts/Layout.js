import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

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