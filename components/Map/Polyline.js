// External imports
import React from 'react';
import MapView from 'react-native-maps'; 


// Internal imports
import styles from './Styles'



const Polyline = ({ coordinates, description, name, setSelectedMarker }) => {
  return (
    <MapView.Polyline
          strokeWidth={5}
          strokeColor='hsl(199, 65%, 50%)'
          coordinates={coordinates}
          lineCap='round'
          lineJoin='miter'
        />
  );
};




export default Polyline;