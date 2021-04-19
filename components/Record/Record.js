// External imports
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';

// Internal imports
import styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { sendNotification } from '../Water/helpers'
import PushNotification from 'react-native-push-notification';
import Geolocation from '@react-native-community/geolocation';


const Record = () => {
  const [loc, setLocation] = useState('')
  const [stationary, setStationary] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  
  Geolocation.watchPosition(pos => console.log("pos changed: ", pos), err => console.log('error', err), {timeout: 3000, maximumage: 3000, enableHighAccuracy: true});
  sendNotification()
  // useEffect(() => {
    
  //   BackgroundGeolocation.configure({
  //     startForeground: true,
  //     desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
  //     stationaryRadius: 1,
  //     distanceFilter: 1,
  //     notificationTitle: 'Fart tracking',
  //     notificationText: 'enabled',
  //     startOnBoot: false,
  //     stopOnTerminate: true,
  //     locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
  //     interval: 10000,
  //     fastestInterval: 10000,
  //     activitiesInterval: 10000,
  //     stopOnStillActivity: false,
  //     notificationsEnabled: false
  //   })

  //   BackgroundGeolocation.on('location', (location) => {
  //     console.log('loc', location)
  //     setLocation(`latitude: ${location.latitude} longitude: ${location.longitude}`)
  //   });

  //   BackgroundGeolocation.on('stationary', (stationaryLocation) => {
  //     console.log('stat', stationaryLocation)
  //     setStationary(`latitude: ${stationaryLocation.latitude} longitude: ${stationaryLocation.longitude}`)
  //   });

  //   BackgroundGeolocation.on('start', () => {
  //     console.log('[INFO] BackgroundGeolocation service has been started');
  //     setIsRunning(true)
  //   }); 


  //   BackgroundGeolocation.on('background', () => {
  //     sendNotification()
  //     console.log('[INFO] App is in background');
  //   });

  //   BackgroundGeolocation.on('foreground', () => {
  //     console.log('[INFO] App is in foreground');
  //   });

  //   BackgroundGeolocation.on('error', ({ message }) => {
  //     Alert.alert('BackgroundGeolocation error', message);
  //   });
  //   BackgroundGeolocation.start()
  //   return () => {
  //     BackgroundGeolocation.removeAllListeners()
  //     BackgroundGeolocation.stop()
  //   }
  // },[])
  
  return (
    <ScrollView>
    <View> 
        <Text>
          {isRunning
            ? 'Tracking!'
            : 'Not tracking.'
          } 
        </Text>
        <Text>
          Location:
        </Text>
        <Text>
          {loc}
        </Text>
        <Text>
          -----          
        </Text>
          <Text>
            Stationary:
          </Text>
          <Text>
            {stationary}
          </Text>
    </View>
    </ScrollView>
  );
};




export default Record;