// External imports
import React, { useState, useRef, useEffect } from 'react';
import { Animated, View, Text, Image, Pressable, Dimensions } from 'react-native';
import { useStoreState } from 'easy-peasy'
import BackgroundTimer from 'react-native-background-timer';
var PushNotification = require("react-native-push-notification");

// Internal imports
import LandscapeError from '../LandscapeError'
import styles from './Styles'
import { 
    getDeviceRotation, 
    animate1In, 
    animate2In, 
    animate3In, 
    animate4In, 
    animate5In,  
    animateAllOutExcept, 
    sendNotification, 
    animate6In,
    calculateWater ,
    animateAllOut
  } from './helpers'

import Header from './Header'  
import InfoModal from './InfoModal'
import StartRunFailModal from './StartRunFailModal'
import StartRunSuccessModal from './StartRunSuccessModal'

const Water = ({navigation}) => {

  // Local state
  const [deviceRotation, setDeviceRotation] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [runFailModalOpen, setRunFailModalOpen] = useState(false)
  const [runSuccessModalOpen, setRunSuccessModalOpen] = useState(false)
  const [running, setRunning] = useState(false)
  const [waterAmount, setWaterAmount] = useState(0)
  const [localIntervalId, setLocalIntervalId] = useState("")
  const [animIntervalId, setAnimIntervalId] = useState("")
  const [bottleCount, setBottleCount] = useState(0)

  // Easy-peasy state
  const bmi = useStoreState(state => state.auth.bmi)
  const notificationPermission = useStoreState(state => state.permission.notificationPermission)
  const locationPermission = useStoreState(state => state.permission.locationPermission)

  const glass1Anim = useRef(new Animated.Value(0)).current
  const glass2Anim = useRef(new Animated.Value(0)).current
  const glass3Anim = useRef(new Animated.Value(0)).current
  const glass4Anim = useRef(new Animated.Value(0)).current
  const glass5Anim = useRef(new Animated.Value(0)).current
  const glass6Anim = useRef(new Animated.Value(0)).current

  const animate = (glassIn) => {
    if (glassIn === 1) {
      animate1In(glass1Anim)
    } else if (glassIn === 2) {
      animate2In(glass2Anim)
    } else if (glassIn === 3) {
      animate3In(glass3Anim)
    } else if (glassIn === 4) {
      animate4In(glass4Anim)
    } else if (glassIn === 5) {
      animate5In(glass5Anim)
    } else if (glassIn === 6) {
      animate6In(glass6Anim)
    }
    animateAllOutExcept(glassIn, glass1Anim, glass2Anim, glass3Anim, glass4Anim, glass5Anim, glass6Anim)
  }  

  // Intermediate function to set as an argument for listener
  // Otherwise can't call getDeviceRotation with an argument  
  const callGetDeviceRotation = () => {
    getDeviceRotation(setDeviceRotation)
  }

  useEffect(() => {
    
    // Establishes initial device rotation
    getDeviceRotation(setDeviceRotation)
   
    
    // Listener for device rotation change
    Dimensions.addEventListener("change", callGetDeviceRotation)

    return () => {
      Dimensions.removeEventListener("change", callGetDeviceRotation)
      // stopRun()
    }
  }, [])

  

  
  const startRun = () => {
    setRunning(true)
    
    sendNotification('Have a sip before you start your run, champ!')
    
    const notifIntervalId = BackgroundTimer.setInterval(() => {
      PushNotification.removeAllDeliveredNotifications();        
      sendNotification(`Remember to take your ${Math.round(waterAmount/60)} sips of water!`)
      setTimeout(() => {
        PushNotification.removeAllDeliveredNotifications()
      }, 3000)
      setBottleCount(7)
    }, 30000);
    
    
    setBottleCount(6)
    const animationIntervalId = BackgroundTimer.setInterval(() => {
      setBottleCount(oldCount => oldCount-1)
    }, 5000)
    
    setAnimIntervalId(animationIntervalId)
    setLocalIntervalId(notifIntervalId)
     
  }

  useEffect(() => {
    if (bottleCount < 1 || bottleCount >  6) {
      null
    } else {
      animate(bottleCount)
    }
  }, [bottleCount])

  const stopRun = () => {
    setBottleCount(0)
    setRunning(false)
    animateAllOut(glass1Anim, glass2Anim, glass3Anim, glass4Anim, glass5Anim, glass6Anim)
    BackgroundTimer.clearInterval(localIntervalId)
    BackgroundTimer.clearInterval(animIntervalId)
    PushNotification.cancelAllLocalNotifications()
  } 
  
  const successModalStartRun = (payload) => {
    setRunSuccessModalOpen(payload)
    startRun()
  }

  const openSuccessModal = () => {
    if (bmi !== 0 && notificationPermission) {
      setWaterAmount(calculateWater(bmi))
      setRunSuccessModalOpen(true)
    } else {
      setRunFailModalOpen(true)
    }
  }

  if (deviceRotation === 'horizontal') {
    return (
      <LandscapeError />
    )
  }

  return (
    <View style={styles.outerContainer}> 
      <InfoModal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
      <StartRunFailModal navigation={navigation} setRunFailModalOpen={setRunFailModalOpen} runFailModalOpen={runFailModalOpen}/>  
      <StartRunSuccessModal 
        setRunSuccessModalOpen={successModalStartRun} 
        runSuccessModalOpen={runSuccessModalOpen}
        waterAmount={waterAmount}
      />
      <Header animate={animate} setModalOpen={setModalOpen}/>

        
        {running && <Pressable 
          onPress={stopRun}
          style={({pressed}) => 
            [
              styles.toggleRunButton, 
              {
                backgroundColor: 'red',
                opacity: pressed ? 0.6 : 1
              }
            ]
          }
        >
          <Text style={{color: 'white', fontSize: 16}}>
            Stop
          </Text>
        </Pressable>}

        {!running && <Pressable 
          onPress={openSuccessModal}
          style={({pressed}) => 
            [
              styles.toggleRunButton, 
              {
                backgroundColor: 'green',
                opacity: pressed ? 0.6 : 1
              }
            ]
          }
        >
          <Text style={{color: 'white', fontSize: 16}}>
            Start run
          </Text>
        </Pressable>}

      <View style={styles.bottleContainer}>
        {!running && <Image 
          source={require('../../assets/6.png')}
          style={{position: 'absolute', opacity: 1, height: 420, width: 380}}
        />}

          {running && <Image 
            source={require('../../assets/1.png')}
            style={{position: 'absolute', opacity: 1, height: 420, width: 380}}
          />}
         <Animated.Image 
          source={require(`../../assets/6.png`)} 
          style={[
            styles.image,
            {
              opacity: glass6Anim,
              position: 'absolute',
              height: 420,
              width: 380
            }
          ]} 
        />
        <Animated.Image 
          source={require(`../../assets/5.png`)} 
          style={[
            styles.image,
            {
              opacity: glass5Anim,
              position: 'absolute'
            }
          ]} 
        />
        <Animated.Image 
          source={require(`../../assets/4.png`)} 
          style={[
            styles.image, 
            {
              opacity: glass4Anim,
              position: 'absolute',
            }
          ]} 
        />
        <Animated.Image 
          source={require(`../../assets/3.png`)} 
          style={[
            styles.image, 
            {
              opacity: glass3Anim,
              position: 'absolute',
            }
          ]} 
        />
        <Animated.Image 
          source={require(`../../assets/2.png`)} 
          style={[
            styles.image, 
            {
              opacity: glass2Anim,
              position: 'absolute',
            }
          ]} 
        />
        <Animated.Image 
          source={require(`../../assets/1.png`)} 
          style={[
            styles.image, 
            {
              opacity: glass1Anim,
              position: 'absolute',
            }
          ]} 
        />
       
      </View>
    </View>
  );
};




export default Water;

















