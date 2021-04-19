import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    centeredView: {
        flex: 1,
      }, 
      modal: {
        flex: 1,
      },
      modalView: {
        flex: 1,
        backgroundColor: 'hsl(199, 65%, 50%)',
        padding: 35
      },
      titleText: {
        fontSize: 18, 
        color: 'white', 
        fontWeight: '700', 
        marginBottom: 25
      },
      descriptionText: {
          fontSize: 16, 
          color: 'white', 
          fontWeight: '500', 
          lineHeight: 25
      },
      inputViewContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 25
      },  
      inputViewText: {
        fontSize: 16, 
        color: 'white', 
        fontWeight: '500', 
        lineHeight: 25,
        fontFamily: "",
        marginRight: 7
      },
      propertyInput: {
        width: 50,
        fontSize: 16,
        paddingBottom: 0,
        paddingTop: 0,
        marginRight: 7,
        borderWidth: 1,
        borderRadius: 11,
        borderColor: 'white',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    selectedInput: {  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      
      elevation: 11,
    },
    proceedButton: {
      width: 200,
      backgroundColor: 'white',
      height: 35,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 30,
    }, 
    buttonShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
    proceedButtonText: {
      color: 'hsl(199, 65%, 50%)',
      fontSize: 15,
      fontWeight: '700',
      fontFamily: ""    
    },
    skipView: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 50,
      height: 35
    },
    skipButton: {
      width: 80,
      backgroundColor: 'white',
      height: 35,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10
    },  
    skipText: {
      fontSize: 16, 
      color: 'white', 
      fontWeight: '500', 
      lineHeight: 25,
      fontFamily: ""
    }
})