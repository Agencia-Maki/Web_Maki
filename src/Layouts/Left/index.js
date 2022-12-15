import { faShield } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

import './left.scss'

export const Index = () => {
  
  const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
    console.log("Mostrar menu !")
		setShowMenu(!showMenu)
    console.log(showMenu)
	}

  return (
    <>
    
      <div className='maki-menu-container'> 
      
        <Link className="maki-menu" onClick={() => toggleMenu()} >
          {/* <i className="icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </i> */}
          <span className="txt">
            {/* <span>M</span>
            <span>A</span>
            <span>K</span>
            <span>I</span> */}
            <span>MAKI</span>
          </span>
        </Link>

        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      </div>

    </>
    
  )
}

export default Index
