// External imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// Internal imports
import Map from '../Map'
import StageDetails from '../StageDetails'

const Stack = createStackNavigator()


const MapNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Map"
            component={Map}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name="Stage-details"
            component={StageDetails}
            options={({ route }) => { 
                return {
                    title: `${route.params.details.name}`,
                    headerTintColor: 'hsl(199, 65%, 50%)',
                    headerTitleAlign: 'center',
                    headerTitleContainerStyle: {
                        width: 100
                    }
                } 
                }
            }
        />
    </Stack.Navigator>
  );
};




export default MapNavigator;