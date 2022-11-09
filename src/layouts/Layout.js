import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import './scss/layout.scss'

const Layout = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )
}

export default Layout