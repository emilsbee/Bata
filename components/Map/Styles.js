import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    outerContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      toMyLocationButton: {
        opacity: .8,
        marginTop: 15,
        marginRight: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8
      },
      menuContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute'
      },  
      stageDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        width: 187,
        backgroundColor: 'hsl(199, 65%, 50%)',
        marginTop: 15,
        marginLeft: 55,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        marginRight: 50
      },
      enableLocationButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 150,
        marginTop: 15,
        marginRight: 15,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
      }

})