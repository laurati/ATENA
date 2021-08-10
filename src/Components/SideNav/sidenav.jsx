import * as React from 'react';
import './sidenav.css'

const SideNav = () => {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
        <>
            <div id="mySidenav" className="sidenav" onMouseLeave={closeNav}>
                
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <span className="openbtn" onMouseEnter={openNav}>&#9776; Menu</span>


        </>
  
  )
}



export default SideNav