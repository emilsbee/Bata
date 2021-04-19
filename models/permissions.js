import { action } from 'easy-peasy'

const permissionModel =  {
    locationPermission: false,
    setLocationPermission: action((state, payload) => {
        state.locationPermission = payload
    }),

    notificationPermission: false,
    setNotificationPermission: action((state, payload) => {
        state.notificationPermission = payload
    }),

    initLaunch: false,
    setInitLaunch: action((state, payload) => {
        state.initLaunch = payload
    })
}

export default permissionModel