import * as React from 'react';
import './navbar.css'

const NavBarra = () => {
  return (

    <ul>
      <li><a className="active" href="#home">Atena</a></li>
      <li><a className="alt" href="#news">News</a></li>
      <li><a className="alt" href="#contact">Contact</a></li>
      <li><a className="alt" href="#about">About</a></li>
    </ul>
  
  )
}

export default NavBarra