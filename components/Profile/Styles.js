import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    view: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    outerView: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    sectionView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },   
    sectionTitleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    sectionTitle: {
        fontSize: 20,
        marginBottom: 30,
        color: 'hsl(199, 65%, 50%)'
    },
    sectionPropertyContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        alignItems: 'center'
    },
    propertyTitle: {
        color: '#696969',
        fontSize: 16,
        marginLeft: 20
    },
    propertyInput: {
        fontSize: 16,
        paddingBottom: 0,
        paddingTop: 0,
        marginRight: 4,
        borderWidth: 1,
        borderColor: 'white'
    },
    selectedInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(129, 196, 228)',
    },  
    propertyText: {
        fontSize: 16,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionActionContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 25,
        marginBottom: 25
    },
    actionTitle: {
        fontSize: 16,
        marginLeft: 20
    },
    changePassword: {
        marginTop: 10,
        marginBottom: 20,
        
        backgroundColor: 'red',
        width: '80%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 38,
        color: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    changePasswordText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 14
        
    },
})