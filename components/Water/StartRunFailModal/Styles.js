import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalInsideView: {
        height: 550,
        width: 350,
        borderRadius: 30,
        padding: 17,
        backgroundColor: 'hsl(199, 65%, 50%)'
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 13,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 13
    },
    modalHeaderTextView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },  
    modalHeaderText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
        fontFamily: "",
        marginLeft: 10
    },  
    modalText: {
        fontSize: 17,
        color: 'white'
    },
    profileButton: {
        marginTop: 20,
        marginBottom: 10,
        height: 35,
        width: 200,
        borderRadius: 25,
        backgroundColor: 'white',
        alignSelf: 'center',
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
    },
    buttonText: {
        // color: 'hsl(199, 65%, 50%)',
        color: 'black',
        fontSize: 16
    }
})