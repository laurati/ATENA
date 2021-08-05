import React from 'react';
import './sidebar.css';

const Sidebar = () =>{

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

    return(
        <>
            <div id="mySidenav" class="sidenav" onMouseLeave={closeNav}>
                {/* <a href="#" class="closebtn" onClick={closeNav}>&times;</a> */}
                <a href="#">PICs</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <button className="btn" onMouseEnter={openNav}>&#9776; Menu</button>
        </>
    );
}

export default Sidebar;