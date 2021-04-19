// External imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Internal imports
import appConfigBuffer from '../appConfigBuffer'

const Stack = createStackNavigator()

const StackScreen = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
          
      >
        <>
          <Stack.Screen 
            name="App-config-buffer"
            component={appConfigBuffer}
            options={{headerShown: false}}
          />
        </>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default StackScreen;