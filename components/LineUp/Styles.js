import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headerContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 25,
        marginBottom: 20
    },
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 5
    },
    lineUpStage: {
        fontSize: 17,
        fontWeight: '300',
        marginLeft: 40,
        fontFamily: ""
    },
    lineUpName: {
        fontSize: 17,
        fontWeight: '300',
        marginRight: 20,
        fontFamily: ""
    },
    columnTitles: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: ""
    },
    lineUpButton: {
        marginBottom: 22,
        backgroundColor: 'white',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2
    },
    lineUpButtonTextContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40
    },
    lineUpYouTextContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40
    },
    lineUpYouText: {
        color: 'rgb(129, 196, 228)',
        fontWeight: '500',
        fontSize: 18
    }
})