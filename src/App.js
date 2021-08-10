
import './App.css';
import { GlobalStyle } from "./Components/GlobalStyle";
import MapComponent  from "./Components/MapComponent";
import NavBarra from "./Components/NavBar/navbar"
import Botao from "./Components/Botao/botao"
import SideNav from './Components/SideNav/sidenav';
import BotaoTeste from "./Components/Botao/botaoTeste";


function App() {
  return (
    <>
      <NavBarra/>
      <SideNav/>
      <GlobalStyle/>
      <Botao/>
      <BotaoTeste/>
      <MapComponent/>
      
    </>
  );
}

export default App;
