import * as React from 'react';
import {Link} from 'react-router-dom';
import NavBarra from '../NavBar/navbar'

const About = () => {


  return (
        <>
        
        <NavBarra/>
        <h2>olá</h2>
        <Link to="/navBar">Cadastrar Investimento</Link>
        
        

        </>
  
  )
}



export default About