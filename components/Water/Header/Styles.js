import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
    headerView: {
        width: '100%',
        height:  110,
        backgroundColor: 'hsl(199, 65%, 50%)'
    },
    headerTitleRow: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 22,
        color: 'white',
    },
    headerDescriptionRow: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },  
    headerDescriptionText: {
        color: 'white',
        fontSize: 16
    }
})