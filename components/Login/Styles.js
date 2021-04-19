import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    view: {
        backgroundColor: 'white',
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logoView: {
        marginTop: 30,
        alignItems: 'center'
    },
    logo: {
        width: 90, 
        height: 110
    },
    logoText: {
        color: 'rgb(129, 196, 228)',
        fontSize: 30,
        fontWeight: '300',
        fontFamily: 'Iowan Old Style'
    },
    loginView: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeTextView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        color: 'grey',
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 20,
        fontFamily: ""
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
        fontSize: 15
    },  
    uidInput: {
        width: 285,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 10,
        backgroundColor: 'white',
        fontFamily: ""
    },
    passwordInput: {
        width: 285,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 15,
        backgroundColor: 'white'
    },
    selectedInput: {
        borderColor: 'rgb(129, 196, 228)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        fontFamily: ""
    },
    loginButton: {
        alignSelf: 'center',
        marginBottom: 20,
        width: 200,
        alignItems: 'center',
        backgroundColor: 'rgb(129, 196, 228)',
        padding: 8,
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
    loginText: {
        color: 'white',
        fontWeight: '300',
        fontSize: 16,
        fontFamily: ""
    },
    loginProblem: {
        alignSelf:'center',
        height: 40,
        width: 200,
        alignItems: 'center'
    },
    loginProblemText: {
        color: '#5a5a5a',
        fontWeight: '300',
        fontSize: 15,
        fontFamily: ""
    },
    problemModal: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    modalInsideView: {
        width: 285,
        height: 200,
        borderRadius: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'hsl(199, 65%, 50%)',
        padding: 15
    },
    modalText: {
        color: 'white',
        fontSize: 17,
        marginBottom: 10
    },
    emailView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10
    },  
    emailPressable: {
        shadowColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },  
    modalLink: {
        fontSize: 17,
        color: 'white',
        marginTop: 10,
        marginLeft: 5,
    },
    buttonView: {
        // backgroundColor: 'red',
        marginTop: 10,
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    modalButton: {
        width: 100,
        height: 30,
        shadowColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 17
    }
})