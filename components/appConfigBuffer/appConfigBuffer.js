// External imports
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy'
import {checkNotifications} from 'react-native-permissions';

// Internal imports
import HomeScreen from '../HomeScreen'
import WeightHeightModal from '../WeightHeightModal'
import { isInitLaunch, setInitInStorage, checkPermissions } from './helpers'
import GLOBALS from '../../helpers/Globals'

const appConfigBuffer = () => {
    // Local state
    const [loading, setLoading] = useState(true)

    // Easy-peasy state/actions
    const setLocationPermission = useStoreActions(action => action.permission.setLocationPermission)
    const setInitLaunch = useStoreActions(action => action.permission.setInitLaunch)
    const initLaunch = useStoreState(state => state.permission.initLaunch)
    const setNotificationPermission = useStoreActions(action => action.permission.setNotificationPermission)

    // Check whether it's the initial launch of the app
    // for the weight/height modal
    useEffect(() => {
        isInitLaunch(setInitLaunch).then(() => 
            checkPermissions(setLocationPermission).then(() => {
                    checkNotifications().then(({status}) => {
                        status = status === 'granted' ? true : false
                        setNotificationPermission(status)
                        setLoading(false)
                    });
                })
            )
        // AsyncStorage.clear() 
    }, [])


    
    if (loading) {
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
        initLaunch 
        ?   <WeightHeightModal setInitLaunch={() => setInitInStorage(setInitLaunch)}/>
        :   <HomeScreen />
  );
};




export default appConfigBuffer;