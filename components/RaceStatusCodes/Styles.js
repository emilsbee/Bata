import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        backgroundColor: 'white'
    },
    sectionContainer: {
        alignItems: 'center',
        padding: 15
    },
    sectionTitle: {
        fontSize: 21,
        padding: 7,
        width: '30%',
        textAlign: 'center',
        borderRadius: 12
    },
    descriptionContainer: {
        marginTop: 15
    },
    descriptionText: {
        fontSize: 16.5
    },
    descriptionTextBold: {
        fontSize: 16.5,
        fontWeight: 'bold'
    }
})

export default styles