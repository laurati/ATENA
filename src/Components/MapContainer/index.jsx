import React from "react";
import { Map, GoogleApiWrapper, Marker, Circle } from "google-maps-react";
import { useState } from "react";
import MapService from "../../service/MapService";
import { useEffect } from "react";
import Sidebar from "../Sidebar";
import "../Sidebar/sidebar.css";

const MapContainer = (props) => {
  const [coord, setCoord] = useState([]);

  let lat_array = [];

  let lon_array = [];

  let lat_lon = [];

  useEffect(() => {
    retrieveData();
    decideMarks(props.display);
  }, [props.display]);

  async function retrieveData() {
    console.log("retrieve");
    await MapService.retrieveData().then((response) => {
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
  }

  const displayMarkers = () => {
    return coord.map((coord, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: coord.latitude,
            lng: coord.longitude,
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
          radius={1200.7819845667905}
          onClick={(event) => {
            console.log("click");
          }}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={20}
          fillColor="#FF0000"
          fillOpacity={0.2}
        />
      );
    });
  };

  const [markerList, setMarkerList] = useState([]);

  function decideMarks(props){
    console.log(props);
    if(props.indexOf("pic") > -1 && props.indexOf("circle") > -1){
      setMarkerList([displayMarkers(), displayCircles()]);
    } else if (props.indexOf("pic") > -1) {
      setMarkerList([displayMarkers()]);
    } else if (props.indexOf("circle") > -1) {
      setMarkerList([displayCircles()]);
    } else {
      setMarkerList([]);
    }
    return markerList;
  }

  return (
    <>
      <Map
        google={props.google}
        zoom={4}
        initialCenter={{ lat: -2.0, lng: -54.1 }}
      >
        {markerList}
      </Map>
    </>
  );
};

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyARWQl06VeasqI_idjWVydF_RgTDzTf9QI",
}))(MapContainer);
