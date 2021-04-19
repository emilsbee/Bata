import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
    outerContainer: {
        flex: 1
    }, 
    bottleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleRunButton: {
        alignSelf: 'center',
        marginTop: 15,
        height: 38,
        width: 150,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }
})