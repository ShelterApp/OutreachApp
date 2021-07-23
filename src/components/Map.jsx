import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import configData from "./../appConfig.json"

export const Map = () => {
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  const mapStyles = {        
    height: "72vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 37.3382, lng: -121.8863
  }

  const locations = [
    {
      name: "Northern Encampment",
      location: { 
        lat: 37.349, lng: -121.88
      },
    },
    {
      name: "Western Encampment",
      location: { 
        lat: 37.34, lng: -121.904
      },
    },
    {
      name: "Southern Encampment",
      location: { 
        lat: 37.325, lng: -121.881
      },
    },
    {
      name: "Eastern Encampment",
      location: { 
        lat: 37.3382, lng: -121.87
      },
    },
    {
      name: "Central Encampment",
      location: { 
        lat: 37.34, lng: -121.88
      },
    }
  ];
  
  return (
     <LoadScript
       googleMapsApiKey={configData.MAP_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}>
        {locations.map(item => {
          return (
          <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
          )
        })
        }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
  )
}


export default Map;