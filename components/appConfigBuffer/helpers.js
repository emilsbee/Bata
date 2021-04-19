import AsyncStorage from '@react-native-community/async-storage';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';



export const checkPermissions = async (setLocationPermission) => {
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        setLocationPermission(false)
        break;
      case RESULTS.DENIED:
        setLocationPermission(false)
        break;
      case RESULTS.GRANTED:
        setLocationPermission(true)
        break;
      case RESULTS.BLOCKED:
        setLocationPermission(false)
        break;
    }
  })
  .catch((error) => {
    setLocationPermission(false)
  });
}
  
export const isInitLaunch = async (setInitLaunch) => {
    try {
      const value = await AsyncStorage.getItem('@init')
  
      if(value === null) {
        setInitLaunch(true)
      }  else {
        setInitLaunch(false)
      }
    } catch(e) {
      setInitLaunch(false)
    }
}

export const setInitInStorage = (setInitLaunch) => {
  AsyncStorage.setItem("@init", "false").then(() => {
    setInitLaunch(false)
  })
}
  
