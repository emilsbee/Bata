import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service';

export const requestLocationPermission = async (setLocationPermission) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location permission",
        message: "You need to enable location to see yourself on the map!", 
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Deny",
        buttonPositive: "Allow"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setLocationPermission(true)
    } else {
      setLocationPermission(false)
    }
  } catch (err) {
    console.warn(err);
  }
};

export const positionToMyLocation = (mapViewRef, locationPermission) => {
  console.log('position')
    if (locationPermission) {
      Geolocation.getCurrentPosition(pos => {
        mapViewRef.animateCamera({
          center: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }, 
          zoom: 16
        })
      },
      (error) => {
        console.log(error) 
      })
    }
}

export const positionToUserStage = (mapViewRef, stages, stage) => {
  stages.forEach((stg, index) => {
    if (stg.description.stage === stage && stg.type === "Point") {
      mapViewRef.animateCamera({
        center: {
          latitude: stg.coordinates.latitude,
          longitude: stg.coordinates.longitude
        }, 
        zoom: 16
      })
    }
  })
}

export const getUserStage = (stages, stage) => {
  var markerObj = {
    action: 'marker-press',
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    details: {
      description: {
        distance: 0,
        gender: "",
        info: "",
        stage: 0
      },
      name: ""
    },
    id: 0,
    position: {
      x: 0,
      y: 0
    }
  }
  
  stages.forEach((stg, index) => {
    if (stg.description.stage === stage && stg.type === "Point") {
      markerObj.coordinate.latitude = stg.coordinates.latitude
      markerObj.coordinate.longitude = stg.coordinates.longitude
      markerObj.details.description.distance = stg.description.distance
      markerObj.details.description.gender = stg.description.gender
      markerObj.details.description.info = stg.description.info
      markerObj.details.description.stage = stg.description.stage
      markerObj.details.name = stg.name
      markerObj.id = stg.description.stage
    }
  })

  return markerObj
}
