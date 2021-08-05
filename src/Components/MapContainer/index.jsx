import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) =>{

    return (

        <Map
          google={props.google}
          zoom={7}
          initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
        >
        </Map>
  
      );

}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyARWQl06VeasqI_idjWVydF_RgTDzTf9QI',
    }
  ))(MapContainer)