import * as React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';




const NavBarra = () => {
  return (

    <>

    <ul>
      <li className="active" href="#home"><Link to="/atena">Athena</Link></li>
      <li className="alt" href="#news"><Link to="/modal">News</Link></li>
      <li className="alt" href="#contact"><Link to="/about">Contact</Link></li>
      <li className="alt" href="#about"><Link to="/about">About</Link></li>
     
      
    </ul>

    </>
  )
}

export default NavBarra