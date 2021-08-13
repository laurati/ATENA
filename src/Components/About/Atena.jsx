import React, { useState } from 'react';

import MapComponent from '../MapComponent';
import NavBarra from '../NavBar/navbar'
import SideNav from '../SideNav/sidenav';

const Atena = () => {

function inserirMarcadores(){
  setTeste(true);  
}

const [teste, setTeste] = useState(false)

function inserirCirculos(){
  setTesteCirc(true);  
}

const [testeCirc, setTesteCirc] = useState(false)


  return (
        <>
        
        <NavBarra/>
        <SideNav laura={inserirMarcadores} luiz={inserirCirculos}/>
        <MapComponent modificador={teste} circ={testeCirc}/>
        
        
        

        </>
  
  )
}



export default Atena