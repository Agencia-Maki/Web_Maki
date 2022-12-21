import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { faShield } from '@fortawesome/free-solid-svg-icons';

import './left.scss'

export const Index = () => {
  
  const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
    // console.log("Mostrar menu !")
		setShowMenu(!showMenu)
    // console.log(showMenu)
	}

  return (
    <>
    
      <div className='maki-menu-container'> 
        <div className='maki-center'>
        <Link className="maki-menu" onClick={() => toggleMenu()} >
          <div className={` ${showMenu ? "cerrar" : "icon"}`}>
            <div>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            { !showMenu && <p className='txt'>MENÚ</p>}
          </div>
        </Link>

        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      </div>
      </div>

    </>
    
  )
}

export default Index
