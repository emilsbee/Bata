// External imports
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, PermissionsAndroid, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import Icon from 'react-native-vector-icons/MaterialIcons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { useStoreActions, useStoreState } from 'easy-peasy'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

// Internal imports
import styles from './Styles'
import { requestLocationPermission, positionToMyLocation, positionToUserStage, isInitLaunch, getUserStage } from './helpers'
import stagesJSON from '../../assets/stages.json'
import Marker from './Marker'
import Polyline from './Polyline'


const Map = ({ navigation }) => {
  // Local state
  const [mapViewRef, setMapViewRef] = useState(null)
  const [selectedMarker, setSelectedMarker] = useState(false)
  // const [initializing, setInitializing] = useState(true);

  // Easy-peasy state
  const stages = useStoreState(state => state.route.stages)
  const setStages = useStoreActions(action => action.route.setStages)
  const user = useStoreState(state => state.auth.user)
  const locationPermission = useStoreState(state => state.permission.locationPermission)
  const setLocationPermission = useStoreActions(action => action.permission.setLocationPermission)
  
  /* Effects */
  //Populate the stages array before everything loads
  useEffect(() => {
    setStages({stages: stagesJSON})
  }, [])

  useEffect(() => {
    if(stages) {
      setSelectedMarker(getUserStage(stages,user.stage))
    }
  },[stages])
  
  const selectedMarkerLog = (data) => {
    console.log(data.nativeEvent)
    setSelectedMarker(data.nativeEvent)
  }

  const viewStageDetails = (data) => {
    navigation.navigate("Stage-details", selectedMarker)
  }
  
  // if (initializing) {
  //   return (
  //     <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
  //       <ActivityIndicator size="large" color='hsl(199, 65%, 50%)'/>
  //     </View>
  //   )
  // }




  return (
    <View style={styles.outerContainer}>
      <MapView
        showsMyLocationButton={false}
        onMapReady={() => positionToUserStage(mapViewRef, stages, user.stage)}
        ref={map => setMapViewRef(map)}        
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE} 
        style={styles.map}
        showsCompass={false}
      >
        {/* Draws polylines and markers from the stages array */}
        {stages && stages.map(stage => {
          if (stage.type === "Point") {
            return (
              <Marker 
                  stage={stage.description.stage}
                  key={`${stage.description.stage}-${stage.type}`} 
                  coordinates={stage.coordinates} 
                  name={stage.name} 
                  description={stage.description}
                  setSelectedMarker={selectedMarkerLog}
              />
            )
          } else if (stage.type === "LineString") {
            return (
              <Polyline 
                key={`${stage.description.stage}-${stage.type}`} 
                coordinates={stage.coordinates} 
                name={stage.name} 
                description={stage.description}
                setSelectedMarker={selectedMarkerLog}
              />
            )
          }
        })}    
      </MapView>
      
      <View style={styles.menuContainer}>
        
        {/* Shows view stage details button when marker is pressed */}
        {selectedMarker && 
          <Pressable 
          style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.5
                : 1
            },
            styles.stageDetails
          ]}
          onPress={viewStageDetails}
          > 
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600', fontFamily: "", marginLeft: 10}}>
              {`View stage ${selectedMarker.id} details`} 
            </Text>
            <FoundationIcon name="info" size={24} color="white" style={{marginRight: 10}}/>
          </Pressable>
        }

        {/* If location permission is given this shows button that sends camera to user location */}
        {locationPermission && 
          <Pressable 
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#d3d3d3'
                  : 'white'
              },
              styles.toMyLocationButton
            ]}
            onPress={() => positionToMyLocation(mapViewRef, locationPermission)}
          >
            <Icon name="my-location" size={23}/>
          </Pressable>
        }
        
        {/* If location permission is not given this shows button that asks user for permission */}
        {!locationPermission && 
          <Pressable 
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#d3d3d3'
                  : 'hsl(199, 65%, 50%)'
              },
              styles.enableLocationButton
            ]}
            onPress={() => requestLocationPermission(setLocationPermission)}
          >
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600', fontFamily: ""}}>
              Enable my location
            </Text>
          </Pressable>
        }

      </View>
   </View>
  );
};






export default Map;