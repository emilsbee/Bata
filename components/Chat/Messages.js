import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { SystemMessage, Bubble } from 'react-native-gifted-chat'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export const renderSystemMessage = (props) => (
    <SystemMessage
      {...props}
      containerStyle={{ paddingLeft: 20, paddingRight: 20 }}
      wrapperStyle={{marginBottom: 10}}
      textStyle={{ fontSize:16, color: '#a9a9a9', lineHeight: 22 }}
    />
);

export const renderBubble = (props) => {
    // console.log(props.currentMessage)
    return (
    <Bubble
      {...props}
      containerStyle={{
        left: { 
            left: -40
        },
        right: {},
      }}
      wrapperStyle={{
        left: { 
            backgroundColor: 'white', 
        },
        right: {
            backgroundColor: 'hsl(199, 65%, 50%)'
        },
      }}
      bottomContainerStyle={{
        left: { 
            backgroundColor: 'white' ,
            borderRadius: 20
        },
        right: {},
      }}
      tickStyle={{}}
      usernameStyle={{}}
      containerToNextStyle={{
        left: {},
        right: {},
      }}
      containerToPreviousStyle={{
        left: {  },
        right: {},
      }}
    />
    )
};

export const renderCustomView = (props) => {
    if (!props.currentMessage.location) return null

    return (
        <View style={{height: 100}}>
            <MapView 
                showsMyLocationButton={false}
                provider={PROVIDER_GOOGLE} 
                style={{...StyleSheet.absoluteFillObject}}
                showsCompass={false}
                initialRegion={{
                    latitude: props.currentMessage.location.latitude,
                    longitude: props.currentMessage.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker 
                    coordinate={{latitude: props.currentMessage.location.latitude,
                        longitude: props.currentMessage.location.longitude,}}
                />
            </MapView>
        </View>
    )
};