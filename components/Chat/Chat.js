// External imports
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useCallback } from 'react';
import {  ActivityIndicator, Keyboard, PermissionsAndroid, Pressable, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Geolocation from 'react-native-geolocation-service'
import { TypingAnimation } from "react-native-typing-animation";
import AsyncStorage from '@react-native-community/async-storage';
import BackgroundTimer from 'react-native-background-timer';

// Internal imports
import styles from './Styles'
import Header from './Header'
import { renderInputToolbar, renderSend, renderComposer, renderActions } from './InputToolbar'
import { renderSystemMessage, renderBubble, renderCustomView } from './Messages'
import OptionsModal from './OptionsModal'
import { systemMessages, volunteerMessages } from '../../assets/static_data'
import { requestLocationPermission } from '../Map/helpers'

const Chat = () => {
  // Local state
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [initLoading, setInitLoading] = useState(false)

  const handleClickOutsideInput = () => {
    Keyboard.dismiss()
  }
  useEffect(() => {
    setMessages(systemMessages)
    getMessages()  
  
  }, [])
  
  useEffect(() => {
    sendMessage(messages)
  }, [messages])

  const sendMessage = async (msgs) => {
    try {
      const jsonMsgs = JSON.stringify(msgs)
      await AsyncStorage.setItem('@messages', jsonMsgs)
    } catch (e) {
      console.log(e)
    }
  }

  const getMessages = async () => {
    try {
      var msgs = await AsyncStorage.getItem('@messages')
      if (msgs !== null) {
        setMessages(JSON.parse(msgs))
      }
    } catch (e) {
      console.log(e)
    }
  }

  const onSend = (msgs) => {
    if (!connected) {
      setMessages(previousMessages => GiftedChat.append(previousMessages, msgs))
      setInitLoading(true)
      setTimeout(() => {
        setInitLoading(false)
        completeSend()
      }, 5000)
    } else {
      setMessages(previousMessages => GiftedChat.append(previousMessages, msgs))
      setConnectionTimer()
      setTyping(true)
      setTimeout(() => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, volunteerMessages()))
        setTyping(false)
      }, 2000)
    }
  }

  const completeSend = () => {
    setConnectionTimer()
      setMessages(previousMessages => GiftedChat.append(previousMessages, volunteerMessages(true)))
      setConnected(true)
  }

  
  const setConnectionTimer = () => {    
    BackgroundTimer.setTimeout(() => {
      setConnected(false)
    }, 120000);
  }

  const startLocationSharing = () => {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(data => {
      if (data) {
        Geolocation.getCurrentPosition(pos => {
          onSend([{ location: {latitude: pos.coords.latitude, longitude: pos.coords.longitude}, _id: uuidv4(), user: {_id: 1}, text: "Location shared for 30 minutes", createdAt: new Date().getTime(), }])
        })
      } else {
        requestLocationPermission(() => null, PermissionsAndroid)
      }
    })
  }

  return (
    <Pressable onPress={handleClickOutsideInput} style={{flex:1}}>
      <OptionsModal modalOpen={modalOpen} setModalOpen={setModalOpen} onLocationPress={startLocationSharing}/>
      <Header connected={connected} initLoading={initLoading}/>
      
      {/* {!connected && <ConnectButtonView />} */}

      {typing && <TypingAnimation 
        style={{bottom: 90,left: 15, position: 'absolute'}}
        dotColor='hsl(199, 65%, 50%)'
        dotSpeed={0.2}
        dotRadius={4}
        dotMargin={5}
      />}

      <GiftedChat
        renderLoading={loadingView}
        renderCustomView={renderCustomView}  
        renderBubble={renderBubble}
        renderSystemMessage={renderSystemMessage}
        renderActions={props => renderActions(props, setModalOpen)}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
        isKeyboardInternallyHandled={false}
        messages={messages}
        onSend={msgs => onSend(msgs)}
        user={{
          _id: 1,
        }}
        renderComposer={renderComposer}
      />
    </Pressable>
  );
};

const loadingView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size={28} color='hsl(199, 65%, 50%)'/>
    </View>
  )
}

export default Chat;