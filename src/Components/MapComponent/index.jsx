import React, { useEffect, useState } from "react";
import {  Map, GoogleApiWrapper, Marker, Polyline, InfoWindow, Circle,} from "google-maps-react";
import ListarDados from "../../Service/ListarDados";
import Popup from "../Popup/Popup";


const MapComponent = (props) => {
  //let lat_array = [];
  //let lon_array = [];
  let lat_lon = [];
  //let tempMax = [];

  const [coord, setCoord] = useState([]);

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    retrieveData();
    decideMarks(props.display);
  }, [props.display]);

  /*async function retrieveData() {
    //console.log('retrieve')
    await ListarDados.retrieveData().then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        if (i % 2 === 0) {
          lat_array.push(parseFloat(response.data[i]));
        } else {
          lon_array.push(parseFloat(response.data[i]));
        }
      }
      for (let i = 0; i < lat_array.length; i++) {
        lat_lon.push({ latitude: lat_array[i], longitude: lon_array[i] });
      }
    });

    setCoord(lat_lon);
  }*/
  let tempArray = [];

  async function retrieveData() {
    await ListarDados.retrieveData().then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        lat_lon.push({
          latitude: parseFloat(response.data[i].lat),
          longitude: parseFloat(response.data[i].lon),
          tempMax: parseFloat(response.data[i].tempMax).toFixed(2),
          umid: parseFloat(response.data[i].umid).toFixed(2),
          precip: parseFloat(response.data[i].precip).toFixed(2),
        });
      }
      for (let i = 0; i < response.data.length; i++) {
        tempArray.push(parseFloat(response.data[i].precip));
      }
    });

    setCoord(lat_lon);
    setTemp([Math.min(...tempArray),Math.max(...tempArray)]);
  }

  /*let maior = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > maior) {
      maior = temp[i];
    }
  }
  console.log(maior);*/

  /*temp.sort();
  let menor = temp[0];
  console.log(menor);*/


  const alterarCor = (temperatura) => {
    let color1 = "0000FF";
    let color2 = "FF0000";
    let ratio = ((temperatura - temp[0])/(temp[1]-temp[0]));
    let hex = function (x) {
      x = x.toString(16);
      return x.length == 1 ? "0" + x : x;
    };

    let r = Math.ceil(
      parseInt(color1.substring(0, 2), 16) * ratio +
        parseInt(color2.substring(0, 2), 16) * (1 - ratio)
    );
    let g = Math.ceil(
      parseInt(color1.substring(2, 4), 16) * ratio +
        parseInt(color2.substring(2, 4), 16) * (1 - ratio)
    );
    let b = Math.ceil(
      parseInt(color1.substring(4, 6), 16) * ratio +
        parseInt(color2.substring(4, 6), 16) * (1 - ratio)
    );

    let middle = hex(r) + hex(g) + hex(b);
    return ('#'+ middle.toString());
  };

  const [mapState, setMapState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  /*const onMarkerClick = (props, marker, e) => {
    setMapState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    });
  };*/

  /*let stores= [
      { latitude: 25.774, longitude: -80.190, name: 'laura'},
      { latitude: 32.321, longitude: -64.757, name: 'ana'},]*/

  let stores2 = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  /*onClick={onMarkerClick} name={item.name}*/

  const displayMarkers = () => {
    
    return coord.map((item, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: item.latitude,
            lng: item.longitude,
            temp: item.tempMax,
            umid: item.umid,
            precip: item.precip,
          }}
          onClick={() => {
            setButtonPopup(true);
            setInfoItem(item);
          }}
        />
      );
    });
  };

  const displayCircles = () => {
    return coord.map((item, index) => {
      return (
        <Circle
          key={index}
          id={index}
          center={{
            lat: item.latitude,
            lng: item.longitude,
          }}
          radius={60000}
          onClick={(event) => {
            console.log("click");
          }}
          strokeColor={alterarCor(item.precip)}
          strokeOpacity={0.8}
          strokeWeight={20}
          fillColor={alterarCor(item.precip)}
          fillOpacity={0.2} 
        />
      );
    });
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  const [infoItem, setInfoItem] = useState([]);

  const [markerList, setMarkerList] = useState([]);
  
  let pic = false;
  let circle = false;
  function decideMarks(props){
    if (props.indexOf("pic") > -1) {
      pic = !pic;
     }
    if (props.indexOf("circle") > -1) {
      circle = !circle;
    }
    setMarkerList([pic ? displayMarkers() : null, circle ? displayCircles() : null])
    return markerList;
  }

  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Informações</h3>
        <br></br>
        <p>Latitude: {infoItem.latitude}</p>
        <p>Longitude: {infoItem.longitude}</p>
        <p>Temperatura Máxima: {infoItem.tempMax}</p>
        <p>Precipitação: {infoItem.precip}</p>
        <p>Umidade: {infoItem.umid}</p>
      </Popup>


      <Map
        google={props.google}
        zoom={4}
        initialCenter={{ lat: -2.0, lng: -54.1 }}
      >
        <Polyline
          path={stores2}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />

        <InfoWindow
          marker={mapState.activeMarker}
          visible={mapState.showingInfoWindow}
        >
          <div>
            <h3>{mapState.selectedPlace.name}</h3>
          </div>
        </InfoWindow>

        {markerList}
      </Map>
    </>
  );
};

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyARWQl06VeasqI_idjWVydF_RgTDzTf9QI",
}))(MapComponent);
