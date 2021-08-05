import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';




const MapComponent = (props) =>{

    return (

        <Map
          google={props.google}
          zoom={7}
          initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
        >
            {displayMarkers()}
        </Map>
  
      );

}

let stores= [
    { latitude: -26.9853947, longitude: -52.603549, local: "Cordilheira Alta" },
    { latitude: -26.9605363, longitude: -52.5335505, local: "Xaxim" },]


const displayMarkers = () => {
    return stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      />
    })
  }

export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyARWQl06VeasqI_idjWVydF_RgTDzTf9QI',
    }
  ))(MapComponent)