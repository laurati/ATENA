import './App.css';
import { GlobalStyle } from "./Components/GlobalStyle";
import MapContainer from './Components/MapContainer';
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <MapContainer />
    </>
  );
}

export default App;
