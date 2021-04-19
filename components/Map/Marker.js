import { useStoreState } from 'easy-peasy';
// External imports
import React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps'; 
import Icon2 from 'react-native-vector-icons/Ionicons'

// Internal imports
import styles from './Styles'



const Marker = ({ coordinates, description, name, setSelectedMarker, stage }) => {
    const user = useStoreState(state => state.auth.user)
    const formatPressEvent = (e) => {
        e.nativeEvent["id"] = description.stage
        e.nativeEvent["details"] = {
            description,
            name
        }
        setSelectedMarker(e)
    }

    return (
        <MapView.Marker
            onPress={formatPressEvent}
            coordinate={coordinates}
            tracksViewChanges={false}
        >   
                <Text style={{color: user.stage === stage ? 'red' : 'hsl(199, 65%, 50%)', fontWeight: '700', fontFamily: ""}}>
                    {name}
                </Text>
                <Icon2 name={'pin'} size={35} color={user.stage === stage ? 'red' : 'hsl(199, 65%, 50%)'}/>
        </MapView.Marker> 
    );
};



export default Marker;