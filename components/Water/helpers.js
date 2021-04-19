import { Dimensions, Animated } from 'react-native'
var PushNotification = require("react-native-push-notification");

export const getDeviceRotation = (setDeviceRotation) => {
    const currentHeight = Dimensions.get('window').height
    const currentWidth = Dimensions.get('window').width

    if (currentHeight > currentWidth) {
        setDeviceRotation('vertical')
    } else if (currentHeight < currentWidth) {
       setDeviceRotation('horizontal')
    }
}
export const animateAllOut = (glass1Anim, glass2Anim, glass3Anim, glass4Anim, glass5Anim, glass6Anim) => {
    animate1Out(glass1Anim)
    animate2Out(glass2Anim)
    animate3Out(glass3Anim)
    animate4Out(glass4Anim)
    animate5Out(glass5Anim)
    animate6Out(glass6Anim)
}
export const animateAllOutExcept = (exceptGlass, glass1Anim, glass2Anim, glass3Anim, glass4Anim, glass5Anim, glass6Anim) => {

    if (exceptGlass === 1) {
        animate2Out(glass2Anim)
        animate3Out(glass3Anim)
        animate4Out(glass4Anim)
        animate5Out(glass5Anim)
        animate6Out(glass6Anim)
    } else if (exceptGlass === 2) {
        animate1Out(glass1Anim)
        animate3Out(glass3Anim)
        animate4Out(glass4Anim)
        animate5Out(glass5Anim)
        animate6Out(glass6Anim)
    } else if (exceptGlass === 3) {
        animate1Out(glass1Anim)
        animate2Out(glass2Anim)
        animate4Out(glass4Anim)
        animate5Out(glass5Anim)
        animate6Out(glass6Anim)
    } else if (exceptGlass === 4) {
        animate1Out(glass1Anim)
        animate2Out(glass2Anim)
        animate3Out(glass3Anim)
        animate5Out(glass5Anim)
        animate6Out(glass6Anim)
    } else if (exceptGlass === 5) {
        animate1Out(glass1Anim)
        animate2Out(glass2Anim)
        animate3Out(glass3Anim)
        animate4Out(glass4Anim)
        animate6Out(glass6Anim)
    } else if (exceptGlass === 6) {
        animate1Out(glass1Anim)
        animate2Out(glass2Anim)
        animate3Out(glass3Anim)
        animate4Out(glass4Anim)
        animate5Out(glass5Anim)
    }
} 

// Glass 1 animations
export const animate1In = (glass1Anim) => {
    Animated.timing(
        glass1Anim,
        {
          toValue: 1,
          duration: 130,
          useNativeDriver: true
        }
      ).start()
}

export const animate1Out = (glass1Anim) => {
    Animated.timing(
        glass1Anim,
        {
          toValue: 0,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}


// Glass 2 animations
export const animate2In = (glass2Anim) => {
    Animated.timing(
        glass2Anim,
        {
          toValue: 1,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

export const animate2Out = (glass2Anim) => {
    Animated.timing(
        glass2Anim,
        {
          toValue: 0,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}


// Glass 3 animations
export const animate3In = (glass3Anim) => {
    Animated.timing(
        glass3Anim,
        {
          toValue: 1,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

export const animate3Out = (glass3Anim) => {
    Animated.timing(
        glass3Anim,
        {
          toValue: 0,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

// Glass 4 animations
export const animate4In = (glass4Anim) => {
    Animated.timing(
        glass4Anim,
        {
          toValue: 1,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

export const animate4Out = (glass4Anim) => {
    Animated.timing(
        glass4Anim,
        {
          toValue: 0,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

// Glass 5 animations
export const animate5In = (glass5Anim) => {
    Animated.timing(
        glass5Anim,
        {
          toValue: 1,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

export const animate5Out = (glass5Anim) => {
    Animated.timing(
        glass5Anim,
        {
          toValue: 0,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

// Glass 6 animations
export const animate6In = (glass6Anim) => {
    Animated.timing(
        glass6Anim,
        {
          toValue: 1,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

export const animate6Out = (glass6Anim) => {
    Animated.timing(
        glass6Anim,
        {
          toValue: 0,
          duration: 130,
          useNativeDriver: true
        }
    ).start()
}

export const sendNotification = (message) => {
    
    PushNotification.localNotification({
        channelId: "bata-channel", 
        showWhen: true, // (optional) default: true
        autoCancel: true, // (optional) default: true
        smallIcon: "",
        largeIcon: "",
        vibrate: true, // (optional) default: true
        vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        priority: "high", // (optional) set notification priority, default: high
        visibility: "private", // (optional) set notification visibility, default: private
        ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)
        shortcutId: "shortcut-id", // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
        onlyAlertOnce: true, // (optional) alert will open only once with sound and notify, default: false
        invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
        id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
        title: 'Bata water reminder', // (optional)
        message, // (required)
        userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
        number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
        // repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
      });
}

export const calculateWater = (bmi) => {
    if (bmi < 18.5) {
        return 150
    } else if (bmi >= 18.5 && bmi < 25) {
        return 200
    } else if (bmi >= 25 && bmi < 30) {
        return 300
    } else if (bmi >= 30) {
        return 350
    }
}