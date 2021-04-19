// External imports
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


// Internal imports
import Profile from '../Profile'
import LineUp from '../LineUp'
import RaceStatusCodes from '../RaceStatusCodes'
import StageDetails from '../StageDetails'
import PdfView from '../Profile/PdfView'

const Stack = createStackNavigator()

const ProfileNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Line-up"
                component={LineUp}
                options={{
                    title: 'Line-up',
                    headerTintColor: 'hsl(199, 65%, 50%)',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen 
                name="Race-status-codes"
                component={RaceStatusCodes}
                options={{
                    title: 'Race status codes',
                    headerTintColor: 'hsl(199, 65%, 50%)',
                    headerTitleAlign: 'center'
                }}
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
            <Stack.Screen 
                name="Booklet-screen"
                component={PdfView}
                options={{
                    title: 'Participant booklet',
                    headerTintColor: 'hsl(199, 65%, 50%)',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator