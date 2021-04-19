// External imports
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import { useStoreState } from 'easy-peasy'
import Icon2 from 'react-native-vector-icons/Ionicons'


// Internal imports
import styles from './Styles'
import TextProperty from '../Profile/TextProperty'
import { findStageRoute, animateToMarker, findStageRunnerName } from './helpers'

const StageDetails = ({ route, navigation }) => {
  // Easy-peasy state
  const stages = useStoreState(state => state.route.stages)
  const userStage  = useStoreState(state => state.auth.user.stage)

  // Local state
  const [mapViewRef, setMapViewRef] = useState(null)
  const [currentRoute, setCurrentRoute] = useState(false)
  const [deviceRotation, setDeviceRotation] = useState(null)
  const [runner, setRunner] = useState("")

  // This function is not in the helpers file because I can't
  // pass arguments to the function from Dimensions.subscribe/unsubscribe
  // it has to be like it is now. Though there is a way to create 
  // a function here which calls getDeviceRotation from helpers and passes
  // arguments. So the subscribe callback wouldn't directly pass arguments.
  const getDeviceRotation = () => {
    const currentHeight = Dimensions.get('window').height
    const currentWidth = Dimensions.get('window').width

    if (currentHeight > currentWidth) {
      setDeviceRotation('vertical')
    } else if (currentHeight < currentWidth) {
      setDeviceRotation('horizontal')
    }
  }

  useEffect(() => {
    // Finds and sets the routs coordinates
    findStageRoute(route, stages, setCurrentRoute)
    
    // Get the name of the person that is supposed to run this stage
    findStageRunnerName(route.params.details.description.stage, setRunner)

    // Establishes initial device rotation
    getDeviceRotation()

    // Listener for device rotation change
    Dimensions.addEventListener("change", getDeviceRotation)

    return () => {
      Dimensions.removeEventListener("change", getDeviceRotation)
    }
  }, [])

  
  
  return (
    <View style={[styles.outerContainer, {flexDirection: deviceRotation === 'vertical' ? 'column' : 'row'}]}> 
        <View 
          style={
            [
              styles.propertyContainer, 
              {
                width: deviceRotation === 'vertical' ? '100%' : '40%',
                height: deviceRotation === 'vertical' ? '40%' : '100%'
              }
            ]
          }
        >
          <TextProperty 
            title="Runner"
            value={userStage === route.params.details.description.stage ? "You are running this stage!" : route.params.details.description.runner ? route.params.details.description.runner : runner}
          />
          <TextProperty 
            title="Gender"
            value={route.params.details.description.gender}
          />
          <TextProperty 
            title="Distance"
            value={`${route.params.details.description.distance} km`}
          />
          <TextProperty 
            title="Description"
            value={`${route.params.details.description.info}`}
          />
        </View>
        <View 
          style={
            {
              width: deviceRotation === 'vertical' ? '100%' : '60%',
              height: deviceRotation === 'vertical' ? '60%' : '100%'
            }
          }
        >
          <MapView
            onMapReady={() => animateToMarker(mapViewRef, route)}
            ref={map => setMapViewRef(map)}        
            showsMyLocationButton={false}
            showsUserLocation={false}
            provider={PROVIDER_GOOGLE} 
            style={styles.map}
            showsCompass={false}
            initialRegion={{
              latitude: route.params.coordinate.latitude,
              longitude: route.params.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        >
          {currentRoute && <MapView.Polyline
            strokeWidth={5}
            strokeColor='hsl(199, 65%, 50%)'
            coordinates={currentRoute}
            lineCap='round'
            lineJoin='miter'
          />}
          <MapView.Marker
            coordinate={route.params.coordinate}
            tracksViewChanges={false}
            anchor={{x: 0.1, y:1}}

          >
            <Text style={{color: 'hsl(199, 65%, 50%)', fontWeight: '700', fontFamily: ""}}>
                {`${route.params.details.name} start`}
            </Text>
            <Icon2 name={'pin'} size={35} color='hsl(199, 65%, 50%)'/>
          </MapView.Marker>
        </MapView>
      </View>
    </View>
  );
};




export default StageDetails;