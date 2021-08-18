import React, { useState } from 'react';

import MapComponent from '../MapComponent';
import NavBarra from '../NavBar/navbar'
import SideNav from '../SideNav/sidenav';


const Atena = () => {

  const [display, setDisplay] = useState([]);

  const changeDisplay = (value) => {
    //console.log(value);
    let displayUpdated;
    if(display.indexOf(value) > -1){
      displayUpdated = display.filter(e => e !== value);
    } else {
      displayUpdated = [...display, value];
    }
    //console.log(displayUpdated);
    setDisplay(displayUpdated);
  }




  return (
        <>
        
        <NavBarra/>
        
        <SideNav changeDisplay={changeDisplay}/>
        <MapComponent display={display}/>
        
        
        

        </>
  
  )
}



export default Atena