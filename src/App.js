
import './App.css';
import { GlobalStyle } from "./Components/GlobalStyle";
import MapComponent  from "./Components/MapComponent";
import NavBarra from "./Components/NavBar/navbar"
import Botao from "./Components/Botao/botao"

function App() {
  return (
    <>
      <NavBarra/>
      <GlobalStyle/>
      <Botao/>
      <MapComponent/>
      
      
    </>
  );
}

export default App;
