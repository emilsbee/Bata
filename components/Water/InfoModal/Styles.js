import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    infoModal: {
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
    }
})