// External imports
import 'react-native-gesture-handler'; // Must be first thing imported for production reasons
import React, { useState, useEffect } from 'react';
import { createStore, StoreProvider } from 'easy-peasy'
import { ActivityIndicator, View, LogBox } from 'react-native';
import auth from '@react-native-firebase/auth';

// Internal imports
import permissionModel from './models/permissions'
import authModel from './models/auth'
import routeModel from './models/routes'
import StackScreen from './components/StackScreen'
import Login from './components/Login'
import InitModalBuffer from './components/appConfigBuffer'
import GLOBALS from './helpers/Globals'

// LogBox.ignoreAllLogs();//Ignore all log notifications


const store = createStore({
  auth: authModel,
  route: routeModel,
  permission: permissionModel
})

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);

  // Runs when user login state changes (either when logs in or logs out)
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color='hsl(199, 65%, 50%)'/>
        </View>
        <View style={{height: GLOBALS.TAB_BAR_HEIGHT}}/>
      </View>
    )
  }
  
  return (
    <StoreProvider store={store}>
      {user 
        ? <StackScreen />
        : <Login/>
      }
    </StoreProvider>
  );
};



export default App;