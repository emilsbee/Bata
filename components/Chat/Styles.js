import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'hsl(199, 65%, 50%)'
    },
    headerText: {
        color: 'white',
        fontSize: 19
    },
    connectButtonOuterView: {
        padding: 20,
    },
    connectButtonText: {
        lineHeight: 23,
        fontSize: 17
    },
    sendButtonText: {
        fontFamily: "",
        marginRight: 10,
        fontSize: 15,
        fontWeight: '700',
        color: 'hsl(199, 65%, 50%)'
    },



    modal: {
        height: '100%',
        width: '100%',
        marginLeft: 0,
        marginBottom: 0,
        justifyContent: 'flex-end'
    },
    optionButton: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0,
        height: 50,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center' 
    }, 
    optionText: {
        fontSize: 17,
        marginLeft: 10
    },  
    innerViewMainCancel: {
        backgroundColor: 'white',
        height: 50,
        margin: 10,
        marginBottom: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelButtonText: {
        fontSize: 17,
        color: 'hsl(199, 65%, 50%)',
        fontWeight: '700',
        fontFamily: ""
    }, 
})