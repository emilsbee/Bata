import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    propertyContainer: {
        paddingTop: 20
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})