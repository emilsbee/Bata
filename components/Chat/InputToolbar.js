// External imports
import React from 'react';
import { Text, View } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Internal imports
import styles from './Styles'

export const renderActions = (props, setModalOpen) => (
    <Actions
      {...props}
      onPressActionButton={() => setModalOpen(true)}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 0,
      }}
      icon={() => (
          <Ionicons name='location-sharp' size={23} color={'hsl(199, 65%, 50%)'}/>
      )}
      options={{
        'Share my location': () => {
          console.log('Choose From Library');
        },
        Cancel: () => {
          console.log('Cancel');
        },
      }}
      optionTintColor="#222B45"
    />
);

export const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={{
        lineHeight: 21.5
      }}
    />
);

export const renderSend = (props) => {
    return (
      <Send 
        {...props}
        disabled={!props.text}
        containerStyle={{justifyContent: 'center'}}
      >
        <Text style={styles.sendButtonText}>
          Send
        </Text>
      </Send>
    )
}

export const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        borderTopColor: '#D3D3D3',
        borderBottomColor: '#D3D3D3',
        borderLeftColor: '#D3D3D3',
        borderRightColor: '#D3D3D3',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        margin: 5,
        borderRadius: 40,
      }}
      primaryStyle={{ alignItems: 'center' }}
    />
);