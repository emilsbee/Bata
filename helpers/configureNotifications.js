// External imports 
import PushNotification from "react-native-push-notification";

// Internal imports
import GLOBALS from './Globals'

export const configureNotifications = () => {
    
    PushNotification.configure({
        // (required) Called when a remote is received or opened, or local notification is opened
        onNotification: (notification) => {
            console.log("Notification opened");
        },
    
        popInitialNotification: true,
        requestPermissions: true,
    });

    // Check if channel exists, if it doesn't create one. It is necessary for notifications to work.
    PushNotification.channelExists(GLOBALS.NOTIFICATION_CHANNEL_ID, (exists) => {
        if (!exists) {
            PushNotification.createChannel(
                {
                    channelId: GLOBALS.NOTIFICATION_CHANNEL_ID, // (required)
                    channelName: "Bata channel", // (required)
                    channelDescription: "A channel for bata app water reminder notifications", // (optional) default: undefined.
                    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                    importance: 4, // (optional) default: 4. Int value of the Android notification importance
                    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
                },
                (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
            );
        } else {
            console.log("Notification channel ", GLOBALS.NOTIFICATION_CHANNEL_ID, " already exists!")
        }
    });

}