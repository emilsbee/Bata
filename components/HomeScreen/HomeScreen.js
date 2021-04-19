// External imports
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FoundationIcons from 'react-native-vector-icons/Foundation'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Internal imports
import ProfileNavigator from '../ProfileNavigator'
import MapNavigator from '../MapNavigator'
import Water from '../Water'
import Chat from '../Chat'
import Record from '../Record'
import GLOBALS from '../../helpers/Globals'

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    const getColor = (focused) => {
        if (focused) {
            return 'hsl(199, 65%, 50%)'
        } else {
            return 'black'
        }
    }
    return (
        <Tab.Navigator 
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const iconSize = 28
                        var iconColor = getColor(focused);
                        
                        if (route.name === 'Map') {
                            return <FontAwesomeIcons name='map-marker' size={iconSize} color={iconColor}/>
                        } else if (route.name === 'Water') {
                            return <MaterialCommunityIcons name='glass-pint-outline' size={iconSize} color={iconColor}/>
                        } else if (route.name === 'Profile') {
                            return <FontAwesomeIcons name='user' size={iconSize} color={iconColor}/>
                        } else if (route.name === 'Chat') {
                            return <Ionicons name='chatbox' size={iconSize} color={iconColor}/>
                        } 
                        // else if (route.name === 'Record') {
                        //     return <FoundationIcons name='record' size={iconSize} color={iconColor}/>
                        // }
                    }
                    
                })
                
            }
            tabBarOptions={{
                showLabel: false,
                // keyboardHidesTabBar: true
                style: {
                    height: GLOBALS.TAB_BAR_HEIGHT
                }
            }}
        >   
        <Tab.Screen name="Map" component={MapNavigator}/>
        <Tab.Screen name="Chat" component={Chat} headerTitle="Chat"/> 
        <Tab.Screen name="Water" component={Water} />
        {/* <Tab.Screen name="Record" component={Record}/> */}
        <Tab.Screen name="Profile" component={ProfileNavigator}/>
    </Tab.Navigator>
    );
};



export default HomeScreen;